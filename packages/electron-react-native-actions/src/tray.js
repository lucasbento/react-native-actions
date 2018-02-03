import path from 'path';
import { Tray } from 'electron';

import pkg from '../package.json';
import buildMenu from './menu';

const mediaPath = path.join(__dirname, 'assets');
const iconPath = path.join(mediaPath, 'iconTemplate.png');

const tray = () => {
  const appTray = new Tray(iconPath);
  const menu = buildMenu();

  appTray.setToolTip(pkg.name);
  appTray.setContextMenu(menu);

  return appTray;
};

export default tray;
