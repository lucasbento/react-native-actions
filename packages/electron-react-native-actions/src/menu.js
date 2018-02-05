import { Menu } from 'electron';

import COMMANDS, { handleCommand } from './commands';

const menu = () =>
  Menu.buildFromTemplate(Object.keys(COMMANDS).map(key => ({
    label: COMMANDS[key].label,
    accelerator: key,
    click: handleCommand({ key }),
  })));

export default menu;
