<h1 align="center">react-native-actions</h1>
<p align="center">
  Run React Native actions from VSCode.
</p>

## Quick start

### Installation

### VScode

Add the extension on terminal:
```bash
code --install-extension lucasbento.react-native-actions
```
> Or [click here to install from the marketplace](https://marketplace.visualstudio.com/items?itemName=lucasbento.react-native-actions).

### React-Native

1. Install the dependency
```bash
yarn add react-native-actions --dev
```

2. Link iOS/Android stuff
```bash
react-native link react-native-actions
```

> You can check out the [manual installation here](https://github.com/lucasbento/react-native-actions/blob/master/packages/react-native-actions/README.md).

3. Simply put this on your root file (e.g. `index.js`):
```js
if (__DEV__) {
  require('react-native-actions');
}
```

### Usage

- <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>: to reload the code on device.
- <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>: to reload the code on device.
