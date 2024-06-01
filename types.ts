type SimFile = {
    name: string;
    logo: string;
    contents: string;
};

type SimDir = {
    [key: string]: (SimDir | SimFile);
};

type SimDirEnt = {
    name: string;
    logo: string;
    type: "FILE" | "DIRECTORY"
};

export {SimDir, SimFile, SimDirEnt};