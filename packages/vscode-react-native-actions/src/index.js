import {
  ExtensionContext,
  StatusBarAlignment,
  window,
  StatusBarItem,
  Selection,
  workspace,
  TextEditor,
  commands,
} from 'vscode';
import server from 'http';
import io from 'socket.io';

import config from '../config';

export function activate(context) {
  const app = server.createServer();
  const socket = io(app);

  app.listen(config.port);

  const status = window.createStatusBarItem(StatusBarAlignment.Left, 100);
  status.command = 'extension.reloadReactNative';
  status.text = '$(repo-sync)';
  context.subscriptions.push(status);
  status.show();

  const subscription = commands.registerCommand('extension.reloadReactNative', () => {
    socket.emit('action', {
      type: 'reload',
    });
  });

  context.subscriptions.push(subscription);
}