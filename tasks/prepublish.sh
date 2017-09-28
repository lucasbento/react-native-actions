#!/bin/bash

# Start in tasks/ even if run from root directory
cd "$(dirname "$0")"

# Exit the script on any command with non 0 return code
# We assume that all the commands in the pipeline set their return code
# properly and that we do not need to validate that the output is correct
# set -e

# Echo every command being executed
# set -x

# Go to root
cd ..
root_path=$PWD

cd "$root_path"

array=( react-native-actions vscode-react-native-actions )
for project in "${array[@]}"
do
  configOutputFile="$root_path/packages/$project/config.json"
  rm -rf "$configOutputFile"
	cp config.json "$configOutputFile"
done