#!/bin/bash
filetype=$1
if [ grep -nril --include=\*.{java,sh} -e ]; then
echo "Ada file Java pada direktori tidak ditemukan"
else
echo "File does not exist"
fi
