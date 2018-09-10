var express = require('serverless-express/express');
var cors = require('cors');
var { getNameSuggestions } = require('./namerator');

var app = express();
app.use(express.json());
app.use(cors());

app.get('/suggestions', function(req, res) {
  const words = req.query.words.split(',');
  const count = req.query.count;
  res.json({
    suggestions: getNameSuggestions(words, count)
  });
});

app.listen(process.env.PORT || 8000);

module.exports = app;
