curl -X POST -H 'Content-type: application/json' --data '{"text":":warning: Deploying new release"}' https://hooks.slack.com/services/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
rsync -r -v -u -e "ssh -p 1023" ./build/. dev@82.165.69.217:/srv/confidences-app/build/.
ssh dev@82.165.69.217 -p 1023 "/home/dev/.nvm/versions/node/v10.10.0/bin/pm2 reload app"
curl -X POST -H 'Content-type: application/json' --data '{"text":":recycle: Release complete !"}' https://hooks.slack.com/services/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
