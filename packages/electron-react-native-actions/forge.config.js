const { productName } = require('./package.json');
const path = require('path');

const appPath = path.resolve(process.cwd(), `out/${productName}-darwin-x64/${productName}.app`);

module.exports = {
  make_targets: {
    darwin: [
      'dmg',
    ],
  },
  electronPackagerConfig: {
    icon: './src/assets/icon.icns',
    extendInfo: {
      LSUIElement: 1,
    },
    packageManager: 'yarn',
  },
  github_repository: {
    owner: 'lucasbento',
    name: 'react-native-actions',
  },
  electronInstallerDMG: {
    icon: './src/assets/icon.icns',
    'icon-size': 150,
    background: './src/assets/background.png',
    contents: [
      {
        x: 121,
        y: 200,
        type: 'file',
        path: appPath,
      },
      {
        x: 538,
        y: 200,
        type: 'link',
        path: '/Applications',
      },
    ],
  },
};
