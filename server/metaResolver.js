const MongoClient = require('mongodb').MongoClient;

const url = process.env.REACT_APP_MONGO_URL;

console.log(url);

const client = MongoClient(url, {
  useNewUrlParser: true,
});

module.exports = {
  middleware: (req, res, next) => {
    client.connect(async err => {
      if (err) {
        console.error('Meta resolver middleware encountered an error, skipping... : '+err);
        next();
      }
      try {
        const db = await client.db("confidences");
        const data = await db.collection('meta').find({
          url: req.url,
        }).toArray();
        req.meta = data[0] ? data[0] : null;
        if (data[0]) {
          req.meta.ogimg = process.env.REACT_APP_CONTENT_DOMAIN + '/' + req.meta.ogimg;
          req.meta.ogurl = process.env.REACT_APP_APP_DOMAIN + req.meta.url;
        }
      } catch (e) {
        console.error(e);
      }
      next();
    });
  },
}
