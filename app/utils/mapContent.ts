import type {GetAGist} from "~/interfaces/GetAGist.ts";

export const mapContent = async () => {
    const settings = useAppSettings()
    const content = useContent()
    const response: GetAGist = await $fetch("/api/loadGist", {
        method: 'POST',
        body: JSON.stringify(settings.value.gitGistAddress)
    })
    if (response.files) content.files.value = response.files

    if (content.returnAmountOfFiles() > 1) {
        settings.value.hasMultipleFiles = true
    }
    console.log(content.files.value)

    const firstElement = Object.values(content.files.value)[0]
    console.log(firstElement?.content)

    if (firstElement?.filename) content.setCurrentFile(firstElement?.filename)
    console.log(firstElement?.filename)
}