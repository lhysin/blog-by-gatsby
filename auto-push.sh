#!/bin/bash -e

git pull

arg_messge="$1"
git add . -A
append_message="$(git status --short)"

if [ -z "$arg_messge" ]
then
    git commit -m "[$(date +%Y-%m-%d)] modified source." -m "$append_message"
else
    git commit -m "[$(date +%Y-%m-%d)] $arg_messge" -m "$append_message"
fi

git push