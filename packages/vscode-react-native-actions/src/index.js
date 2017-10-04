import {
  StatusBarAlignment,
  window,
  commands,
  workspace,
} from 'vscode';
import isPackageDep from 'is-package-dep';
import server from 'http';
import io from 'socket.io';

import config from '../config';

const COMMANDS = [{
  trigger: 'extension.RNReload',
  button: '$(repo-sync)',
  tooltip: 'Reload React-Native App',
  action: 'reload',
}, {
  trigger: 'extension.RNOpenDevMenu',
  action: 'openDevMenu',
}];

export const activate = (context) =>
  isPackageDep('react-native', {
    baseDir: workspace.rootPath,
  })
    .then((isRNProject) => {
      if (!isRNProject) {
        return;
      }

      const app = server.createServer();
      const socket = io(app);
    
      app.listen(config.port);

      COMMANDS.forEach((command) => {
        if (command.button) {
          const status = window.createStatusBarItem(StatusBarAlignment.Left, 100);
          status.command = command.trigger;
          status.text = command.button;
          status.tooltip = command.tooltip;
          context.subscriptions.push(status);

          status.show();
        }
      
        const subscription = commands.registerCommand(command.trigger, () =>
          socket.emit('action', {
            type: command.action,
          }),
        );
      
        context.subscriptions.push(subscription);
      });
    });
