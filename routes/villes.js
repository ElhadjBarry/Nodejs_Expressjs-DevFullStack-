const express = require('express');
const router = express.Router();
var assert =require('assert');
var mongo =require ('mongoose')
var User=require('../models/User')


const Ville = require('../models/Ville');







router.get('/ajout',(req , res) => {
    res.render('ajoutVille');
  })

router.post('/ajout',(req , res) => {
  
    const newVille= Ville()
    newVille.name=req.body.name
    //recuperation de lemail de la personne connceté
    newVille.email = req.user.email
    console.log(req.user.email);
    newVille.save();

    
   

  
    res.redirect('/dashboard');
});





module.exports = router;