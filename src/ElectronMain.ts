import { BrowserWindow, app, ipcMain } from "electron";

export default class ElectronMain {
    public window: BrowserWindow | null;

    public constructor() {
        // Initialize variables
        this.window = null;

        // Construct the main window
        this.buildWindow();
    }

    public buildWindow() {
        this.window = new BrowserWindow({
            width: 1500,
            height: 600
        });
    }
}