require('dotenv').config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.production',
});
const express = require('express');

const app = express();
const fs = require('fs');

const compression = require('compression');

const metaResolverMiddleware = require('./server/metaResolver').middleware;


const htmlContent = fs.readFileSync('./build/index.html');

const metaLoader = require('./public/meta/meta');

app.use(compression());

app.use('/', express.static('build'));
app.use('/metastatic', express.static('public/meta'));
app.use('/static', express.static('build/static'));

app.use('/', metaResolverMiddleware);

function composeHtml(html, meta) {
  const splitted = html.split('<title>Association Confidences d\'Abeilles</title>');
  let output = '';
  if (meta.title) {
    output = `${output}<title>${meta.title}</title>`;
  }
  if (meta.ogtitle) {
    output = `${output}<meta id="og-title" property="og:title" content="${meta.ogtitle}" />`;
  }


  if (meta.ogdescription) {
    output = `${output}<meta id="og-description" property="og:description" content="${meta.ogdescription}" />`;
    output = `${output}<meta name="description" content="${meta.ogdescription}" />`;
  }
  if (meta.ogurl) {
    output = `${output}<meta id="og-url" property="og:url" content="${meta.ogurl}" />`;
  }
  if (meta.ogimg) {
    output = `${output}<meta id="og-image" property="og:image" content="${meta.ogimg}" />`;
  }
  return splitted[0] + output + splitted[2];
}

app.get('/*', (req, res) => {
  res.end(composeHtml(htmlContent.toString(), req.meta ? req.meta : metaLoader.load(req.url)));
});

app.listen(process.env.PORT || 5000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started');
});
