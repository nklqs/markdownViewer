import type {GetAGist, GistFile, SimpleUser} from "~/interfaces/GetAGist.ts";

export interface FileItem {
    filename: string;
    type: string;
    language: string;
    raw_url: string;
    size: number;
    truncated: boolean;
    content: string;
    encoding: string;
}

export interface owner {
    login: string;
    avatar_url: string;
}

export const useContent = () => {
    const files = useState<GistFile[]>("markdown-content", () => []);
    const user = useState<SimpleUser | null>("markdown-content", () => null);
    let currentFile = useState<GistFile>("file-content", () => ({
        content: "# Hello, world!",
        filename: "example",
        language: "English",
        raw_url: "",
        size: 0,
        truncated: false,
    }));

    const setCurrentFile = (filename: string) => {
        const targetFile = files.value.find((file) => file.filename === filename);
        if (targetFile) {
            currentFile.value = targetFile
        }
    }

    const setUser = (userTmp: SimpleUser | null) => {
        user.value = userTmp
    }
    const getUser = () => {
        return user.value;
    }

    //could cause problems with updating and reactivness
    const updateContent = (newContent: string) => {
        if (currentFile.value) {
            currentFile.value.content = newContent;
        }
    }

    const returnAmountOfFiles = () => {
        return Number(Object.keys(files).length.valueOf())
    }
    const returnFiles = () => {
        return files
    }

    return {
        updateContent,
        returnFiles,
        setCurrentFile,
        returnAmountOfFiles,
        currentFile,
        files
    }
}