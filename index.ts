import Terminal from "./terminal";

// const prompt = "<span id='blink'>█</span>";
const app = document.getElementById("app")!;

const term = new Terminal();

app.innerHTML = "";
app.innerHTML += term.get_prompt();

var user_txt = document.getElementById("txt");
var prompt_input = document.getElementById("prompt");
var blinker = document.getElementById("blink");

function listener(e: KeyboardEvent) {
    e.preventDefault();
    let charcode = e.which || e.keyCode;
    
    let valid =
        (e.keyCode != 13) && (
        (charcode >= 48 && charcode <= 57) ||
        (charcode >= 65 && charcode <= 90) ||
        (charcode >= 96 && charcode <= 105) ||
        (charcode == 18) ||
        (charcode == 190) ||
        (charcode == 191) ||
        (charcode == 220) ||
        (charcode == 173) ||
        (charcode == 32)
        );

    if (e.keyCode == 13) {
        let txt = user_txt!.innerText;
        user_txt!.innerText += "\n";
        handle_prompt(txt);
    } else if (charcode == 8) {
        user_txt!.innerText = user_txt!.innerText.slice(0, -1);
    } else if(valid) {
        if(e.key != "Alt") {
            user_txt!.innerText += e.key;
            prompt_input!.innerText = "";
        }
    } else {
        prompt_input!.innerText = "";
    }
}

function new_prompt() {
    blinker!.remove();
    user_txt!.removeAttribute("id");
    user_txt!.setAttribute("class", "old_prompt");

    prompt_input!.contentEditable = "false";
    prompt_input!.remove();

    app.innerHTML += term.get_prompt();

    user_txt = document.getElementById("txt");
    prompt_input = document.getElementById("prompt");
    blinker = document.getElementById("blink");

    prompt_input!.focus();
    prompt_input!.addEventListener('keydown', listener);
}

function handle_prompt(txt: string) {
    let out = "";
    let unknown = false;
    if (txt === "") {
    } else if(txt == "clear" || txt == "cls") {
        app.innerHTML = "";
        new_prompt();
        return;
    } else if (txt == "neofetch") {
        out = term.neofetch().join(" ");
    } else if (txt == "pwd" ||   txt == "cwd") {
        out = term.pwd;
    } else if (txt == "ls" || txt.substr(0, 3) == "ls ") {
        let tmp = term.ls(txt.substring(3));
        
        out += "<table class='ls'>"
        for(let i = 0; i < tmp.length; i++) {
            out += "<tr>"
            out += `<td><img src='${tmp[i][0]}'></img><td>`;
            out += `<td>${tmp[i][1]}<td>`;
            out += "</tr>"
            }
        out += "</table>"

    } else if (txt == "cd" || txt.substr(0, 3) == "cd ") {
        if (txt == "cd") {
            out += term.cd() ? "" : `Uknown directory ${txt.substring(3)}`;
        } else {
            out += term.cd(txt.substring(3)) ? "" : `Uknown directory ${txt.substring(3)}`;
        }
    } else if (txt == "cat" || txt.substr(0, 4) == "cat ") {
        if (txt == "cat") {
            out += `cat: File not specified.`;
        } else {
            out += term.cat(txt.substring(4));
        }
    } else {
        out = `Unknown Command: ${txt}`;
        unknown = true;
    }

    if (out != "\n" && out.trim().length != 0) {
        out += "\n";
    }

    if (unknown) {
        user_txt!.innerText += out;
    } else {
        user_txt!.innerHTML += out;
    }
    new_prompt();
}

window.addEventListener("click", () => {
    prompt_input!.focus();
});


(function() {

    user_txt!.innerText = "neofetch\n";
    blinker!.remove();

    prompt_input!.contentEditable = "false";
    prompt_input!.remove();

    user_txt!.innerHTML += term.neofetch().join(" ");
    user_txt!.innerHTML += "\n";
    user_txt!.removeAttribute("id");
    user_txt!.setAttribute("class", "old_prompt");

    app.innerHTML += term.get_prompt();

    user_txt = document.getElementById("txt");
    prompt_input = document.getElementById("prompt");
    blinker = document.getElementById("blink");

    prompt_input!.addEventListener('keydown', listener);
    prompt_input!.focus();
})();