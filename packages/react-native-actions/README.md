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

## Features

- Reload the code in device;
- Open developer menu;
- Show network requests in console (requires remote debugging).

This package is inteded to be used with [VSCode React Native Actions](https://marketplace.visualstudio.com/items?itemName=lucasbento.react-native-actions) extension.

## Getting started

```bash
yarn add react-native-actions --dev
```

### Automatic installation (only required for iOS)

```bash
react-native link react-native-actions
```

### Manual installation (only required for iOS)

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-actions` and add `RNActions.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNActions.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project <kbd>⌘</kbd> + <kbd>R</kbd>

#### Android

Android doesn't require any dependency installed through react-native, only [Android Debug Bridge (adb)](https://developer.android.com/studio/command-line/adb.html) on the computer.

## Usage
```jsx
// Your main component

import withActions from 'react-native-actions';

class Application extends Component {
  // ...
}

export default withActions(Application); 
```
  
