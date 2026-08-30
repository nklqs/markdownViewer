export function useDialogs() {
    const activeDialog = useState<string | null>('active_dialog', () => null);
    const dialogPayload = useState<any> ('dialog_payload', () => null);

    const openDialog = (name: string, payload: any = null) => {
        activeDialog.value = name
        dialogPayload.value = payload
    }
    const closeDialog = () => {
        activeDialog.value = null
        dialogPayload.value = null
    }

    return {
        activeDialog,
        dialogPayload,
        openDialog,
        closeDialog
    }
}