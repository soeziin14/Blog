var express     = require('express'),
    path        = require('path'),
    bodyParser  = require('body-parser');
var blogs       = require('./routes/blogs.js');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb'}));

app.use('/blogs', blogs);

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
