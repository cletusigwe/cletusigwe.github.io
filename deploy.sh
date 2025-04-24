#!/bin/sh

GOOGLE_CHECK=$(curl -Is http://www.google.com | head -n 1)

if echo "$GOOGLE_CHECK" | grep -q "200"; then # internet is up
    echo "Internet is up"
    set -xe
    if [ -n "$(git status "$(pwd)/src/content/microblog" --porcelain)" ]; then #new content has been added
        bunx astro build
        COMMIT_MSG="Update Content at $(date)"
        git add .
        git commit -m "$COMMIT_MSG"
        git push origin master
    else
        echo "No changes to commit"
    fi
else
    echo "No internet, aborting operation"
fi
