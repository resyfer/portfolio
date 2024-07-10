import { dir_default_logo } from "./constants";
import info from "./info";
import { SimDir, SimDirEnt, SimFile } from "./types";

const birth = new Date("17 September 2001");

class Terminal {
    path: string[] = [];
    user = "user@resyfer";

    new_path(tgt: string) {
        let rel_path = tgt.split("/");
        rel_path = rel_path.filter((txt) => txt.trim() !== "");

        let idx = this.path.length;
        let new_path: string[];

        if (tgt[0] !== '/') {
            new_path = [...this.path];

            for(let i = 0; i < rel_path.length; i++) {
                if(rel_path[i] == ".") {
                    /* Ignore */
                } else if (rel_path[i] == "..") {
                    idx--;
                    new_path.pop();
                } else {
                    new_path[idx++] = rel_path[i];
                }
            }

        } else {
            new_path = [...rel_path];
        }
        return (this.get_item(new_path)) ? new_path : undefined;
    }

    get_item(tgt_path: string[]) {
        let item: SimDir | SimFile = info;
        let found: boolean = true;

        tgt_path = tgt_path.filter((txt) => txt.trim() !== "");

        for(let idx = 0; idx < tgt_path.length; idx++) {
            found = false;

            for(const key in item) {
                if(key == tgt_path[idx]) {
                    found = true;
                    item = item[key];
                }
            }

            if (found == false) {
                return null;
            }

            if (item["items"] != undefined && item["logo"] != undefined) {
                item = item["items"]
            }
        }

        return item;
    }

    get_item_from_path(tgt: string) {
        let path = this.new_path(tgt);
        return path ? this.get_item(path) : path;
    }

    fs_object_type(obj: SimDir | SimFile) {
        return (typeof obj.name == "string" && typeof obj.logo == "string" && typeof obj.contents == "string") ? "FILE": "DIRECTORY";
    }

    ls(tgt: string = ".") : string[][] {

        let item = this.get_item_from_path(tgt);

        if (!item) {
            return [];
        }

        if(this.fs_object_type(item) == "FILE") {
            let tmp = {
                logo: item.logo,
                name: item.name,
                type: "FILE"
            } as SimDirEnt;

            return [[tmp.logo, tmp.name]];
        } else {
            return Object.keys(item).map(dirent => {
                let obj: (SimDir | SimFile) = item[dirent];
                let tmp: SimDirEnt;
                if(this.fs_object_type(obj) == "FILE") {
                    tmp = {
                        name: dirent,
                        logo: obj.logo,
                        type: "FILE",
                    } as SimDirEnt;
                } else {
                    if (obj["logo"] && obj["items"]) {
                        tmp = {
                            name: dirent,
                            logo: obj.logo,
                            type: "DIRECTORY"
                        } as SimDirEnt;
                    } else {
                        tmp = {
                            name: dirent,
                            logo: dir_default_logo,
                            type: "DIRECTORY"
                        } as SimDirEnt;
                    }
                }

                return [tmp.logo, tmp.name];
            })
        }
    }

    cat(tgt: string): (string | null) {

        let item = this.get_item_from_path(tgt);

        if (!item) {
            return "Can't read the contents of the requested file.";
        }

        if(this.fs_object_type(item) === "FILE") {
            return (item as SimFile).contents;
        }

        return "cat: Not a file."
    }

    cd(tgt: string = "/") {
        let new_path = this.new_path(tgt);

        if (!new_path) {
            return false;
        }

        let item = this.get_item(new_path);

        if (!item) {
            return false;
        }

        if(this.fs_object_type(item) == "FILE") {
            return false;
        }

        this.path = [...new_path];
        return true;
    }

    
    public get pwd() : string {
        let ans = "";

        if(this.path.length == 0) {
            return "/";
        }

        for(let i = 0; i < this.path.length; i++) {
            ans += "/";
            ans += this.path[i];
        }
        return ans;
    }
    

    neofetch() {
        return [
            "<div class='neofetch'>",
            `<pre>
                          __             
                         / _|            
 _ __   ___  ___  _   _ | |_   ___  _ __ 
| '__| / _ \\/ __|| | | ||  _| / _ \\| '__|
| |   |  __/\\__ \\| |_| || |  |  __/| |   
|_|    \\___||___/ \\__, ||_|   \\___||_|   
                   __/ |                 
                  |___/</pre>`,
`
<div>
Current Age: ${Math.floor((Date.now() - birth.getTime())/(365 * 24 * 60 * 60 * 1000))} yrs
Designation: Associate Software Engineer @ Oracle
Latest Education: B. Tech. @ N.I.T. Silchar, India
Latest Achievement: GSoC Contributor '24 @ Apache
Latest Project: mnemofs (@ Apache NuttX RTOS)
Hobbies: Digital Art, Embedded Systems, Light Novels
\nWelcome to My Portfolio! Use it like a normal TTY!
\nYou can also look at my blogs <a href="https://resyfer.github.io/blogs/" target="_blank">here</a>!
</div>`,
"</div>"
        ]
    }

    get_prompt() {
        return `[${this.user} ${this.pwd}]$ <span id="txt"></span><span id='prompt' contenteditable='true' autofocus></span><span id='blink'>█</span>`;
    }

    exit() {
        window.close();
    }
}

export default Terminal;