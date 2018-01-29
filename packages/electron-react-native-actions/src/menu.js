import path from 'path';
import { Menu } from 'electron';

import buildTray from './tray';

const menu = () => {
  const tray = buildTray();

  const contextMenu = Menu.buildFromTemplate([{
    label: 'Reload',
    accelerator: 'Cmd+Shift+R',
    click: () => {
      // TODO: handle reload
    },
  }]);

  tray.setContextMenu(contextMenu);
};

export default menu;
