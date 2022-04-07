import { ipcRenderer, contextBridge } from "electron";

contextBridge.exposeInMainWorld('electronAPI', {
    toggleForm: () => {
        ipcRenderer.send('open-form');
    },
    toggleSettings: () => {
        ipcRenderer.send('open-settings');
    }
});

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})