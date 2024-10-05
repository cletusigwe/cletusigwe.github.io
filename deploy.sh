#!/bin/sh

GOOGLE_CHECK=$(curl -Is http://www.google.com | head -n 1)

if echo "$GOOGLE_CHECK" | grep -q "200"; then # internet is up
    echo "Internet is up"
    set -xe
    if [ -n "$(git status src/content --porcelain)" ]; then #new content has been added
        bun run build
        COMMIT_MSG="Update Content at $(date)"
        git add src/content/*
        git commit -m "$COMMIT_MSG"
        git push origin master
    else
        echo "No changes to commit"
    fi
else
    echo "No internet, aborting operation"
fi
