import settings from 'electron-settings';
import AutoLaunch from 'auto-launch';

import pkg from '../package.json';

const autoLauncher = new AutoLaunch({
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
