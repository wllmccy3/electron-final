import './index.scss';

const updateOnlineStatus = () => {
    document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline'
}
const button1 = document.querySelector('#formWindow');
const button2 = document.querySelector('#settingsWindow');

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus();


button1.addEventListener('click', () => {
    //@ts-ignore
    window.electronAPI.toggleForm();
})

button2.addEventListener('click', () => {
    //@ts-ignore
    window.electronAPI.toggleSettings();
})

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    //@ts-ignore
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
    //@ts-ignore
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
})