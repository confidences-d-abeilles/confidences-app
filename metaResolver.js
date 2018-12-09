const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

const url = process.env.MONGO_URL || config.mongoUrl;
console.log(url);
const client = MongoClient(url, {
  useNewUrlParser: true,
});

module.exports = {
  middleware: (req, res, next) => {
    client.connect(async err => {
      if (err) {
        console.error('Meta resolver middleware encountered an error, skipping...');
        next();
      }
      const db = client.db("confidences");
      const data = await db.collection('meta').find({
        url: req.url,
      }).toArray();
      req.meta = data[0] ? data[0] : null;
      req.meta.ogimg = config.contentDomain + '/' + req.meta.ogimg;
      console.log(req.meta);
      next();
    });
  },
}
