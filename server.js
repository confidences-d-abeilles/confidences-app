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
    if (meta.ogtitle) {
        html = html.replace('<meta id="og-title" property="og:title" content="Parrainez des abeilles et soutenez-nous !" />',
        '<meta id="og-title" property="og:title" content="'+meta.ogtitle+'" />');
    }
    if (meta.ogdescription) {
        html = html.replace('<meta id="og-description" property="og:description" content="Le parrainage est une action commune. Ensemble, nous agissons en faveur de la filière française du miel et, plus largement, nous protégeons nos chères butineuses et notre environnement." />',
        '<meta id="og-description" property="og:description" content="'+meta.ogdescription+'" />');
    }
    if (meta.ogurl) {
        html = html.replace('<meta id="og-url" property="og:url" content="https://parrainagederuches.fr" />',
        '<meta id="og-url" property="og:url" content="'+meta.ogurl+'" />');
    }
    return html;
}