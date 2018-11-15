var mongojs = require('mongojs');
var config = require('./config.js');

var db = mongojs(config.mlabstring, ["thesubmissions"]);

var express = require('express');
var app = express();

app.use(express.static('public')); // middle- in 'public' directory
app.set('view engine', 'ejs'); // 


var thesubmissions = [];


app.get('/formpost', function(req, res) {
  //res.send("You submitted " + req.query.textfield);
//  thesubmissions.push(req.query.textfield);
    db.thesubmissions.save({"name":req.query.name, "X":req.query.X, "Y":req.query.Y, "Z":req.query.Z}, function(err, saved) {
  if( err || !saved ) console.log("Not saved");
  else console.log("Saved");
});	
      db.thesubmissions.find({}, function(err, saved) {
    if (err || !saved) {
    	console.log("No results");
    }
    else {
        res.send(saved);
    }
  }); 
});


app.get('/show', function(req, res) {
  db.thesubmissions.find({}, function(err, saved) {
    if (err || !saved) {
    	console.log("No results");
    }
    else {
    res.send(saved);
    }
  });  
});


//app.get('/search', function(req, res) {
//  var query = new RegExp(req.query.search, 'i');
//  db.thesubmissions.find({"name": query}, 
//    function(err, saved) {
//      if( err || !saved) console.log("No results");
//      else res.send(JSON.stringify(saved));
//  });
//});


app.get('/', function (req, res) {
  res.redirect('/form.html');});


app.listen(2222, function () {
  console.log('App listening on port 2222!')
});

    
    