// Minimal preload script exposing safe APIs
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('katetaAPI', {
  saveApiKey: (key) => ipcRenderer.invoke('kateta:save-api-key', key),
  getApiKey: () => ipcRenderer.invoke('kateta:get-api-key')
});
