export default defineNuxtRouteMiddleware((to) => {
    const readOnlyParam = to.query.readOnlyMode as string | undefined;
    const gitHubGistParam = to.query.gist as string | undefined;
    const disableControls = to.query.disableControls as string | undefined;

    const settings = useAppSettings()

    if (readOnlyParam) {
        settings.value.readOnlyMode = readOnlyParam === 'true'
    }
    if (gitHubGistParam) {
        settings.value.gitGistAddress = gitHubGistParam
    }
    if(disableControls) {
        settings.value.disableControls = disableControls === 'true';
    }
})