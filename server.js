const express = require('express');
const app = express();

const metaLoader = require('./public/meta');

app.use(express.static('./build'));

app.get('/*', (req, res) => {
    console.log(req.url);
    console.log(metaLoader.load(req.url));
    res.end(baseHtml(metaLoader.load(req.url)));
})

app.listen(3000, () => {
    console.log("Running");
})


function baseHtml(meta) {
    return `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><meta name="theme-color" content="#000000"><meta http-equiv="Cache-Control" content="no-store"/><link rel="manifest" href="/manifest.json"><link rel="shortcut icon" href="/favicons/favicon_32.png"><link rel="stylesheet" href="/css/bootstrap.css"><link rel="stylesheet" href="/css/style.css"><link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="/css/slick.min.css"/><link rel="stylesheet" href="/css/slick-theme.css"/><script src="/js/tether.min.js"></script><script src="/js/jquery-3.2.1.min.js"></script><script src="/js/bootstrap.min.js"></script><script src="https://js.stripe.com/v3/"></script><meta name="google-site-verification" content="EuIUt4GPX6lNLcXZwXn1OuBnc4e-8bMVyvuEoP9gxVk"/><meta id="og-title" property="og:title" content="Parrainez des abeilles et soutenez-nous !"/><meta id="og-description" property="og:description" content="Le parrainage est une action commune. Ensemble, nous agissons en faveur de la filière française du miel et, plus largement, nous protégeons nos chères butineuses et notre environnement."/><meta id="og-type" property="og:type" content="website"/><meta id="og-type" property="fb:app_id" content="174764873149457"/><meta id="og-url" property="og:url" content="https://parrainagederuches.fr"/><meta id="og-image" property="og:image" content="https://parrainagederuches.fr/general.jpg"/><title>${meta.title}</title><link href="/static/css/main.5ec05a70.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="bootstrapCssTest" class="d-none"></div><script>$(function(){$("#bootstrapCssTest").is(":visible")&&$("head").append('<link rel="stylesheet" href="/css/bootstrap.css">')})</script><div id="root"></div><script type="text/javascript" src="/static/js/main.121b927b.js"></script></body></html>`;
}