#!/usr/bin/env bash
start=$SECONDS
curl -X POST -H 'Content-type: application/json' --data '{"text":":warning: Deploying new release"}' https://hooks.slack.com/services/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
rsync -r -z -v -u ./build/. root@212.227.198.124:/srv/confidences-app/build/.
ssh root@212.227.198.124 "/usr/local/bin/pm2 reload app"
duration=$(( SECONDS - start ))
curl -X POST -H 'Content-type: application/json' --data '{"text":":recycle: Release complete ! '$npm_package_version'"}' https://hooks.slack.com/services/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
