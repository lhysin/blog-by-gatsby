#!/bin/bash -e

git pull

commit_message="[$(date +%Y-%m-%d)] $1"
append_message="$(git status --short)"

git add . -A
git commit -m "$commit_message" -m "$append_message"
git push