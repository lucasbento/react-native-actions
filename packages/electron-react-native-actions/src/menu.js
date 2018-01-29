import path from 'path';
import { Menu } from 'electron';

import buildTray from './tray';

export const RELOAD_HOTKEY = 'CommandOrControl+Shift+R';

const menu = () => {
  const tray = buildTray();

  const contextMenu = Menu.buildFromTemplate([{
    label: 'Reload',
    accelerator: RELOAD_HOTKEY,
    click: () => {
      // TODO: handle reload
    },
  }]);

  tray.setContextMenu(contextMenu);
};

export default menu;
