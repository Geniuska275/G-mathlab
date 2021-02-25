const express = require('express')
const router = express.Router();

router.get('/', function (req, res) {

	// return res.send(process.env)
	res.render('landing')
});

router.get('/Matrix', function(req,res){

	

	res.render("Matrices")
   
   });
 router.get('/Equations', function(req,res){
	res.render("Equations") 
   });
   router.get('/probability', function(req,res){
	res.render("Probability")
});
router.get('/trig', function(req,res){

		res.render("Trigonometry")
	     
	  
   
   })


































module.exports = router;
