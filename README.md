<h1 align="center">react-native-actions</h1>
<p align="center">
  Run React Native actions from VSCode.
</p>

## Quick start

### Installation

### VScode

Add the extension on terminal:
```bash
ext lucasbento.react-native-actions
```
> Or [click here to install from the marketplace](https://marketplace.visualstudio.com/items?itemName=lucasbento.react-native-actions).

### React-Native

```bash
yarn add react-native-actions --dev
```

Simply put this on your root file (e.g. `index.js`):
```js
if (__DEV__) {
  require('react-native-actions');
}
```

### Usage

<kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>: to reload the code on device.
