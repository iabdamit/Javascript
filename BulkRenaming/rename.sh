#!/bin/bash

script_full_path=$(dirname "$0")

echo $script_full_path
echo "node $script_full_path/app.js"
node "$script_full_path/app.js"