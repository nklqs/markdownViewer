export const mapContent = async () => {
    const settings = useAppSettings()
    const content = useContent()
    let response: any
    try {
        response = await $fetch("/api/loadGist", {
            method: 'POST',
            body: JSON.stringify(settings.value.gitGistAddress)
        })
    } catch {
        return false
    }

    if (response.files) content.files.value = Object.values(response.files)

    if (content.returnAmountOfFiles() > 1) {
        settings.value.hasMultipleFiles = true
    }

    const firstElement = content.files.value[0]

    if (firstElement?.filename) content.setCurrentFile(firstElement?.filename)

    return true
}