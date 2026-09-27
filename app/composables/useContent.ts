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
        content: "# Hello, World\n" +
            "\n" +
            "## Introduction\n" +
            "\n" +
            "![Description of image](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbb%2F0c%2Fcf%2Fbb0ccf528d0d1fe8191fe28f79e917e6.gif&f=1&nofb=1&ipt=818bf943e38325d258e51cba1712815696b68baabcdc6fad3e7bacd39e3b5823){width=\"300\"}\n" +
            "\n" +
            "> This is a simple website to preview shared markdown Gists on GitHub.\n" +
            "\n" +
            "---\n" +
            "\n" +
            "All *common* and **basic** Markdown syntax is supported, including Obsidian ==specific== syntax.",
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