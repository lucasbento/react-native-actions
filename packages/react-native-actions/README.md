# react-native-actions

## Getting started

```bash
yarn add react-native-actions --dev
```

### Automatic installation

```bash
react-native link react-native-actions
```

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-actions` and add `RNActions.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNActions.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project <kbd>⌘</kbd> + <kbd>R</kbd>

#### Android

Android doesn't require any dependency installed through reat-native, only [Android Debug Bridge (adb)](https://developer.android.com/studio/command-line/adb.html) on the computer.

## Usage
```js
if (__DEV__) {
  require('react-native-actions');
}
```
  