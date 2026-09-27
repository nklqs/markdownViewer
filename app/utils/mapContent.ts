import {useContentStore} from "~/store/content.ts";
import type {GistFile} from "~/interfaces/GetAGist.ts";

export const mapContent = async () => {
    const settings = useAppSettings()
    const content = useContentStore()
    let response: any
    try {
        response = await $fetch("/api/loadGist", {
            method: 'POST',
            body: JSON.stringify(settings.value.gitGistAddress)
        })
    } catch {
        return false
    }
    console.log(Object.values(response.files))

    const unwrapped: GistFile[] = Object.values(response.files)
    if (response.files) content.files.push(...unwrapped)
    console.log(content.files)
    //if(response.owner) content.user.value = (toRaw(response.owner))
    //console.log(content.user.value)


    if (content.fileCount > 1) {
        settings.value.hasMultipleFiles = true
    }

    const firstElement = content.files[0]

    if (firstElement?.filename) content.setCurrentFile(firstElement?.filename)

    return true
}