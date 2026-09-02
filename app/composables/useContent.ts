import type {GistFile} from "~/interfaces/GetAGist.ts";

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
    let currentFile = useState<GistFile>("file-content", () => ({
        content: "# Hello, world!",
        filename: "example",
        language: "english",
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