import { Menu } from 'electron';

import COMMANDS, { handleCommand } from './commands';
import connections from './connections';

const menu = () => {
  const separator = {
    type: 'separator'
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
    separator,
    deviceCount,
  ]);
};

export default menu;
