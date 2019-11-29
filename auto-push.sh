#!/bin/bash -e

git pull

arg_messge="$1"
git add . -A
append_message="$(git status --short)"

if [ -z "$commit_message" ]
then
    git commit -m "[$(date +%Y-%m-%d)] modified source." -m "$append_message"
else
    git commit -m "[$(date +%Y-%m-%d)] $commit_message" -m "$append_message"
fi

git push