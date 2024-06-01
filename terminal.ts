import { dir_default_logo } from "./constants";
import info from "./info";
import { SimDir, SimDirEnt, SimFile } from "./types";

const birth = new Date("17 September 2001");

class Terminal {
    path: string[] = [];
    user = "user@resyfer";

    new_path(tgt: string) {
        let rel_path = tgt.split("/");
        let idx = this.path.length - 1;
        let new_path: string[];

        new_path = [...this.path];

        if(tgt != "/") {
            for(let i = 0; i < rel_path.length; i++) {
                if(rel_path[i] == ".") {
                    /* Ignore */
                } else if (rel_path[i] == "..") {
                    idx--;
                } else {
                    new_path[idx++] = rel_path[i];
                }
            }
        }

        return new_path;
    }

    get_item(tgt_path: string[]) {
        let item: SimDir | SimFile = info;

        for(let idx = 0; idx < tgt_path.length; idx++) {
            for(const key in item) {
                if(key == tgt_path[idx]) {
                    item = item[key];
                }
            }
        }

        return item;
    }

    get_item_from_path(tgt: string) {
        return this.get_item(this.new_path(tgt));
    }

    fs_object_type(obj: SimDir | SimFile) {
        return (typeof obj.name == "string" && typeof obj.logo == "string" && typeof obj.contents == "string") ? "FILE": "DIRECTORY";
    }

    ls(tgt: string = ".") : SimDirEnt[] {

        let item = this.get_item_from_path(tgt);

        if(this.fs_object_type(item) == "FILE") {
            return [{
                logo: item.logo,
                name: item.name,
                type: "FILE"
            } as SimDirEnt]
        } else {
            return Object.keys(item).map(dirent => {
                let obj: (SimDir | SimFile) = item[dirent];
                if(this.fs_object_type(obj) == "FILE") {
                    return {
                        name: obj.name,
                        logo: obj.logo,
                        type: "FILE",
                    } as SimDirEnt;
                } else {
                    return {
                        name: dirent,
                        logo: dir_default_logo,
                        type: "DIRECTORY"
                    } as SimDirEnt;
                }
            })
        }
    }

    cat(tgt: string): (string | null) {

        let item = this.get_item_from_path(tgt);

        if(this.fs_object_type(item) !== "FILE") {
            return (item as SimFile).contents;
        }

        return ""
    }

    cd(tgt: string = "/") {
        let new_path = this.new_path(tgt);
        let item = this.get_item(new_path);

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
            `
                          __             
                         / _|            
 _ __   ___  ___  _   _ | |_   ___  _ __ 
| '__| / _ \\/ __|| | | ||  _| / _ \\| '__|
| |   |  __/\\__ \\| |_| || |  |  __/| |   
|_|    \\___||___/ \\__, ||_|   \\___||_|   
                   __/ |                 
                  |___/`,

`
Current Age: ${Math.floor((Date.now() - birth.getTime())/(365 * 24 * 60 * 60 * 1000))} yrs
Designation: Associate Software Engineer @ Oracle
Latest Education: B. Tech. @ N.I.T. Silchar, India
Latest Achievement: GSoC Contributor '24 @ Apache
Latest Project: mnemofs (@ Apache NuttX RTOS)
Hobbies: Digital Art, Embedded Systems, Light Novels`,
`\n\nWelcome to My Portfolio! Use it like a normal TTY!`
        ]
    }

    get_prompt() {
        return `[${this.user} ${this.pwd}]$ <span id="txt"></span><span id='prompt' contenteditable='true' autofocus></span><span id='blink'>█</span>`;
    }
}

export default Terminal;