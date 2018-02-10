<p align="center">
  <img alt="React Native Actions" title="React Native Actions" src="https://cdn.rawgit.com/lucasbento/react-native-actions/master/common/media/logo.png" />
</p>

<h1 align="center">react-native-actions</h1>
<p align="center">
  Run React Native actions from within VSCode.
</p>

<p align="center">
 <a href="https://github.com/lucasbento/react-native-actions/issues"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"></a>
 <a href="https://saythanks.io/to/lucasbento"><img src="https://img.shields.io/badge/say-thanks-ff69b4.svg"></a>
</p>

## Installation

### React Native

1. Install the package
```bash
yarn add react-native-actions
```

2. Install native dependencies
```bash
react-native link react-native-actions
```

> You can check out the [manual installation here][react-native-installation].

3. Simply wrap your root component with `withActions` [Higher-Order Component][hoc]:
```jsx
// Your main component

import withActions from 'react-native-actions';

class Application extends Component {
  // ...
}

export default withActions(Application); 
```

### VScode

Add the extension on terminal:
```bash
code --install-extension lucasbento.react-native-actions
```
> Or [click here to install from the marketplace][vscode-marketplace].

## Usage

- <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>: to reload the code on device;
- <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>: to open developer menu;
- <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd>: to show network requests in console (requires remote debugging).

[latest-release]: https://github.com/lucasbento/react-native-actions/releases/latest
[react-native]: #react-native
[react-native-installation]: https://github.com/lucasbento/react-native-actions/blob/master/packages/react-native-actions/README.md#manual-installation
[hoc]: https://reactjs.org/docs/higher-order-components.html
[vscode-marketplace]: https://marketplace.visualstudio.com/items?itemName=lucasbento.react-native-actions