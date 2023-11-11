const { app, BrowserWindow, Menu } = require('electron');
const path = require("path");

Menu.setApplicationMenu(null);
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        title: "fleet simulation",
        width: 1440,
        height: 1080,
    });

    mainWindow.loadURL("http://localhost:5173/");
    // mainWindow.loadURL(`file://${path.join(__dirname, "../dist/index.html")}`);
    // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();
});