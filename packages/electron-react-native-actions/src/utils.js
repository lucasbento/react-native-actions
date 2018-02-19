import settings from 'electron-settings';
import AutoLaunch from 'auto-launch';
import { app } from 'electron';
import { exec } from 'child_process';

import pkg from '../package.json';
import config from '../common/config.json';

export const autoLauncher = new AutoLaunch({
  name: pkg.productName,
});

export const getOpenAtLogin = () =>
  settings.get('openAtLogin');

export const setOpenAtLogin = ({ checked }) => {
  if (checked) {
    return autoLauncher.enable();
  }

  return autoLauncher.disable();
};

export const closeApp = () => app.quit();

export const reverseAdbPort = () =>
  exec(`adb reverse tcp:${config.port} tcp:${config.port}`);
