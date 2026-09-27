import {defineStore} from 'pinia'
import type {GistFile, SimpleUser} from '~/interfaces/GetAGist'

const exampleContent = "# Hello, World\n" +
    "\n" +
    "## Introduction\n" +
    "\n" +
    "![Description of image](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbb%2F0c%2Fcf%2Fbb0ccf528d0d1fe8191fe28f79e917e6.gif&f=1&nofb=1&ipt=818bf943e38325d258e51cba1712815696b68baabcdc6fad3e7bacd39e3b5823){width=\"300\"}\n" +
    "\n" +
    "> This is a simple website to preview shared markdown Gists on GitHub.\n" +
    "\n" +
    "---\n" +
    "\n" +
    "All *common* and **basic** Markdown syntax is supported, including Obsidian ==specific== syntax."

export const useContentStore = defineStore('content', () => {
    //1. State
    const files = ref<GistFile[]>([])
    const user = ref<SimpleUser | null>(null)
    const activeFileName = ref<string | null>('example')

    const defaultFile: GistFile = {
        filename: 'example',
        language: "English",
        content: exampleContent,
        raw_url: '',
        size: 0,
        truncated: false
    }
    //2.Getters
    const currentFile = computed<GistFile>(() => {
        const found = files.value.find(file => file.filename === activeFileName.value)
        return found || defaultFile
    })

    const fileCount = computed(() => files.value.length)

    //3. Actions
    function setFiles(file: GistFile[]) {
        files.value = file
    }
    function setCurrentFile(filename: string) {
        activeFileName.value = filename
    }

    function updateContent(newContent: string) {
        const file = files.value.find((file) => file.filename === activeFileName.value)
        if(file) {
            file.content = newContent
        } else {
            defaultFile.content = newContent
        }
    }

    return {
        //State and Getters
        files,
        user,
        activeFileName,
        currentFile,
        fileCount,
        //Actions
        setFiles,
        setCurrentFile,
        updateContent
    }
})