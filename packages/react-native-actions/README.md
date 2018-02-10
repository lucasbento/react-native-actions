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

This package is intended to be used with [React Native Actions][react-native-actions-github].

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
1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.lucasbento.RNActions.RNActionsPackage;` to the imports at the top of the file
  - Add `new RNActionsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-actions'
  	project(':react-native-actions').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-actions/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
  	compile project(':react-native-actions')
   ```

## Usage
```jsx
// Your main component

import withActions from 'react-native-actions';

class Application extends Component {
  // ...
}

export default withActions(Application); 
```
  
[react-native-actions-github]: https://github.com/lucasbento/react-native-actions