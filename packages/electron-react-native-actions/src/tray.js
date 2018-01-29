import path from 'path';
import { Tray } from 'electron';
import pkg from '../package.json';

const mediaPath = path.join(__dirname, 'assets');
const iconPath = path.join(mediaPath, 'iconTemplate.png');

const tray = () => {
  const appTray = new Tray(iconPath);
  appTray.setToolTip(pkg.name);

  return appTray;
};

export default tray;
