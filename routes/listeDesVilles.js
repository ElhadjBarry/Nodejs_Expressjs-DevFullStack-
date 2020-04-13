const express = require('express');
const router = express.Router();
var MongoClient =require('mongodb')
var mongoose =require('mongoose')
var assert= require('assert')
var User=require('../models/User')

var url= 'mongodb://localhost:27017/meteo,{ useNewUrlParser: true }'



router.get('/', function (req, res){
  mongoose.connect("mongodb://localhost:27017/meteo", {useUnifiedTopology: true},{useNewUrlParser: true});

  MongoClient.connect('mongodb://localhost:27017/meteo', function (err, client) {
    var tab =[];
  if (err) throw err;

  var db = client.db('meteo');

  db.collection('villes').findOne({}, function (findErr, result) {
    if (findErr) throw findErr;
    tab.push(result.name);
    res.render('dashboard', {ville : 'tab' })
    console.log(tab);
    client.close();
  });
}); 
  
})

    

   

module.exports=router;