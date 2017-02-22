var express     = require('express'),
    path        = require('path'),
    bodyParser  = require('body-parser');
var blogs       = require('./routes/blogs.js');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});

app.use(express.static(__dirname+'/public'));

// app.use(function (req, res, next){
//   if (req.headers['x-forwarded-proto'] === 'https') {
//     res.redirect('http://' + req.hostname + req.url);
//   } else {
//     next();
//   }
// });

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb'}));

app.use(function(req, res, next) {
    req.headers["Authorization"] = "Authorization";
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Request-Headers", "Authorization");
    next();
});

app.use('/blogs', blogs);

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
