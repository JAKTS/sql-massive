var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Massive = require("massive");
var db = Massive.connectSync({db : "sql_massive"});

var app = express();
app.use(bodyParser.json());

var port = 3000;

app.get('/incidents', function(req, res) {
  db.get_all_incidents(function(err, incidents) {
    res.json(incidents);
  });
});

app.post('/incidents', function(req, res) {
  db.create_incident([req.body.us_state, req.body.injury_id, req.body.cause_id],function(err, resp){
    res.json(resp);
    console.log(resp);
  });
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
