export interface AppSettings {
    readOnlyMode: boolean;
    loadGitGist: boolean;
    largeContentDialogSet: boolean;
    onDemandRendering: boolean;
    gitGistAddress: string | undefined;
    disableControls: boolean;
}

export const useAppSettings = () => {
    return useState<AppSettings>('app-settings', () => ({
        readOnlyMode: false,
        loadGitGist: false,
        largeContentDialogSet: false,
        onDemandRendering: false,
        gitGistAddress: undefined,
        disableControls: false,
    }));
};