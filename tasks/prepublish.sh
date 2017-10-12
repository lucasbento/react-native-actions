#!/bin/bash

cd "$(dirname "$0")"
cd ..
root_path=$PWD

cd "$root_path"

commonFolderName="common"
projects=( react-native-actions vscode-react-native-actions )
for project in "${projects[@]}"
do
  commonOutputFolder="$root_path/packages/$project/$commonFolderName"
  rm -rf "$commonOutputFolder"
  cp -r "$commonFolderName" "$commonOutputFolder"
done
