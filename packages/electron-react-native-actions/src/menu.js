import { Menu } from 'electron';

import COMMANDS, { handleCommand } from './commands';
import connections from './connections';
import { getOpenAtLogin, setOpenAtLogin, closeApp } from './utils';

const menu = () => {
  const separator = {
    type: 'separator',
  };

  const commands = Object.keys(COMMANDS).map(key => ({
    label: COMMANDS[key].label,
    accelerator: key,
    click: handleCommand({ key }),
  }));

  const deviceCount = {
    label: `Connected devices: ${connections.getConnections().size}`,
    role: 'help',
    enabled: false,
  };

  return Menu.buildFromTemplate([
    ...commands,
    deviceCount,
    separator,
    {
      label: 'Preferences',
      submenu: [{
        label: 'Launch at Login',
        type: 'checkbox',
        checked: getOpenAtLogin(),
        click: setOpenAtLogin,
      }],
    },
    separator,
    {
      label: 'Quit',
      accelerator: 'Command+Q',
      click: closeApp,
    },
  ]);
};

export default menu;
