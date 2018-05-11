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
    html = html.replace("<title>Confidences d'Abeilles</title>", "<title>"+meta.title+"</title>");
    return html;
}