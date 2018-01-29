import { app } from 'electron';
import debug from 'electron-debug';

import menu from './menu';

debug({ showDevTools: true });

app.on('ready', () => {
  menu();
});
