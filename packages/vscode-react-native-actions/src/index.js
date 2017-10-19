import {
  commands,
  workspace,
} from 'vscode';
import isPackageDep from 'is-package-dep';
import server from 'http';
import io from 'socket.io';
import { exec } from 'child_process';

import config from '../common/config';

const COMMANDS = [{
  trigger: 'extension.RNReload',
  action: 'reload',
}, {
  trigger: 'extension.RNOpenDevMenu',
  action: 'openDevMenu',
}];

const ANDROID_COMMANDS = {
  reload: 'adb shell input text "RR"',
  openDevMenu: 'adb shell input keyevent 82',
};

export const activate = (context) => {
  const isRNProject = isPackageDep('react-native', {
    baseDir: workspace.rootPath,
  });

  let socket = null;
  if (isRNProject) {
    const app = server.createServer();
    socket = io(app);

    app.listen(config.port);
  }

  COMMANDS.forEach((command) => {
    const subscription = commands.registerCommand(command.trigger, () => {
      // Handle hotkey even if it's not an RN project so it doesn't
      // throw an error on VSCode
      if (!isRNProject) {
        return;
      }

      // Emit action for iOS
      socket.emit('action', {
        type: command.action,
      });

      // Run command for Android
      exec(ANDROID_COMMANDS[command.action]);
    });

    context.subscriptions.push(subscription);
  });
};
