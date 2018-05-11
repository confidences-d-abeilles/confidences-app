const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const html = fs.readFileSync('./build/index.html');

const metaLoader = require('./public/meta');

app.use('/', express.static('build'));

app.get('/*', (req, res) => {
    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end(composeHtml(html.toString(), metaLoader.load(req.url)));
})

app.listen(5000, () => {
    console.log("Server started");
})


function composeHtml(html, meta) {
    if (meta.title) {
        html = html.replace("<title>Confidences d'Abeilles</title>", "<title>"+meta.title+"</title>");
    }
    let splitted = html.split('</head>');
    let output = splitted[0];
    if (meta.ogtitle) {
        output = output + '<meta id="og-title" property="og:title" content="' + meta.ogtitle + '" />';
    }
    if (meta.ogdescription) {
        output = output + '<meta id="og-description" property="og:description" content="'+meta.ogdescription+'" />';
    }
    if (meta.ogurl) {
        output = output + '<meta id="og-url" property="og:url" content="'+meta.ogurl+'" />';
    }
    return output + '</head>' + splitted[1];
}