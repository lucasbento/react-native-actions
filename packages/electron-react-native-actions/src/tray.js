import path from 'path';
import { Tray } from 'electron';

import pkg from '../package.json';
import buildMenu from './menu';

const mediaPath = path.join(__dirname, 'assets');
const iconPath = path.join(mediaPath, 'iconTemplate.png');

let appTray;

export const rebuildTrayMenu = () => {
  const menu = buildMenu();
  appTray.setContextMenu(menu);

  return appTray;
};

const tray = () => {
  appTray = new Tray(iconPath);
  const menu = buildMenu();

  appTray.setToolTip(pkg.name);
  appTray.setContextMenu(menu);

  return appTray;
};

export default tray;
