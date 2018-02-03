import spawn from 'child_process';

import KEYS from './keys';
import connections from './connections';

const COMMANDS = {
  [KEYS.RELOAD]: {
    label: 'Reload',
    action: 'reload',
    shell: 'adb shell input text "RR"',
  },
  [KEYS.DEV_MENU]: {
    label: 'Open developer menu',
    action: 'openDevMenu',
    shell: 'adb shell input text "RR"',
  },
  [KEYS.SHOW_REQUESTS]: {
    label: 'Show requests in console',
    action: 'showRequests',
  },
};

export const handleCommand = ({ key }) => () => {
  connections.getConnections().forEach(ws => ws.send(COMMANDS[key].action));

  if (COMMANDS[key].shell) {
    spawn.exec(COMMANDS[key].shell);
  }
};

export default COMMANDS;
