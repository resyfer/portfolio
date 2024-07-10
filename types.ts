type SimFile = {
    name: string;
    logo: string;
    contents: string;
};

type SimDirWithLogo = {
    logo : string,
    items: SimDir
};

type SimDir = {
    [key: string]: (SimDir | SimFile | SimDirWithLogo);
};

type SimDirEnt = {
    name: string;
    logo: string;
    type: "FILE" | "DIRECTORY"
};

export {SimDir, SimFile, SimDirEnt};