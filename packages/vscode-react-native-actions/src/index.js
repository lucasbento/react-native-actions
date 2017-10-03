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
    
      const status = window.createStatusBarItem(StatusBarAlignment.Left, 100);
      status.command = 'extension.reloadReactNative';
      status.text = '$(repo-sync)';
      status.tooltip = 'Reload React-Native App';
      context.subscriptions.push(status);
      status.show();
    
      const subscription = commands.registerCommand('extension.reloadReactNative', () => {
        socket.emit('action', {
          type: 'reload',
        });
      });
    
      context.subscriptions.push(subscription);
    });
