import settings from 'electron-settings';
import AutoLaunch from 'auto-launch';
import { app } from 'electron';

import pkg from '../package.json';

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
