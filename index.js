const path = require('path')

const { app, BrowserWindow, ipcMain } = require('electron')
const { fastLaunch, getMCLC } = require('msmc')
const isDev = require('electron-is-dev')
const { Client } = require('minecraft-launcher-core')
function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 750,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    },
  })

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, './build/index.html')}`
  );
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' })
  }
}

app.whenReady().then(createWindow)

ipcMain.handle('mslogin', async () => {
  const emptyFn = () => {}
  const result = await fastLaunch('electron', emptyFn, emptyFn)
  const serializedAuth = JSON.parse(JSON.stringify(getMCLC().getAuth(result)))

  return serializedAuth
})

ipcMain.handle('play', async (_, auth, version) => {
  console.log(version)
  const launcher = new Client()
  const opts = {
    clientPackage: null,

    authorization: auth,
    root: process.env.FABULOUS_MCROOT,
    version: {
      number: '1.17.1',
      type: 'release'
    },

    memory: {
      max: '6G',
      min: '4G'
    }
  }

  launcher.launch(opts)

  launcher.on('debug', (e) => console.log(e))
  launcher.on('data', (e) => console.log(e))
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
