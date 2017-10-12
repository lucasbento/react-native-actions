#!/bin/bash

cd "$(dirname "$0")"
cd ../packages

projects=( vscode-react-native-actions )
for project in "${projects[@]}"
do
  cd $project
  yarn run build
  cd ..
done
