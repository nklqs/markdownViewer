import type {GetAGist} from "~/interfaces/GetAGist.ts";

export const mapContent = async () => {
    const settings = useAppSettings()
    const content = useContent()
    const response: GetAGist = await $fetch("/api/loadGist", {
        method: 'POST',
        body: JSON.stringify(settings.value.gitGistAddress)
    });
    if (response.files) content.files.value = response.files

    console.log(content.files.value)
}