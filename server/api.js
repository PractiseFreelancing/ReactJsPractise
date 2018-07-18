var express = require("express");
var router = express.Router();


router.get('/getData', (req, res, next) => {
    res.send("getData Called");
});

router.post('/postData', (req, res, next) => {
   // console.log("*****rrreeqq ***",req);
   //res.setHeader('Content-Type', 'application/json');
   console.log("*****rrreeqq ***",req);
   try{
       req.body = JSON.parse(Object.keys(req.body)[0])
       console.log("*****rrreeqq body in try***",req.body);
    }catch(err){
        req.body = req.body
        console.log("*****rrreeqq body in err***",req.body);
    } 
    
   
   /* console.log("*****rrreeqq param***",req.params);
    console.log("*****rrreeqq query***",req.query);
    */
   res.send(req.body);
    //return req.body;
});


router.delete('/:deleteData', (req, res, next) => {
    res.send("deleteData Called");
});

router.put('/:putData', (req, res, next) => {
    res.send("putData Called");
});



module.exports = router;