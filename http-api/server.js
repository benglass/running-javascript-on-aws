var express = require('express');
var cors = require('cors');
var { getNameSuggestions } = require('./namerator');

var app = express();
app.use(express.json());
app.use(cors());

app.get('/suggestions', function(req, res) {
  const words = req.query.words;
  const count = Math.min(20, req.query.count);
  res.json({
    suggestions: getNameSuggestions(words, count)
  });
});

app.listen(8000);
