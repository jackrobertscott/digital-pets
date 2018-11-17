const electron = require('electron');
const isDev = require('electron-is-dev');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;
const isMac = process.platform === 'darwin';

/**
 * Window manipulations.
 */
let window;
function clearWindow() {
  window = null;
}
function createWindow() {
  window = new BrowserWindow({
    width: 500,
    height: 500,
    backgroundColor: '#fff',
    titleBarStyle: 'hiddenInset',
    title: 'Tamtam',
  });
  const appUrl = isDev
    ? 'http://localhost:3000'
    : url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true,
      });
  window.loadURL(appUrl);
  window.on('closed', clearWindow);
}

/**
 * App events.
 */
app.on('ready', () => {
  createWindow();
});
app.on('activate', () => {
  if (!window) {
    createWindow();
  }
});
app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});
