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
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.lucasbento.actions.RNActionsPackage;` to the imports at the top of the file
  - Add `new RNActionsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-actions'
  	project(':react-native-actions').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-actions/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-actions')
  	```

## Usage
```js
if (__DEV__) {
  require('react-native-actions');
}
```
  