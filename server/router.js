var express = require("express");
var router = express.Router();


router.get('/getData', (req, res, next) => {
    res.send("getData Called");
});

router.post('/postData', (req, res, next) => {
   // console.log("*****rrreeqq ***",req);
   res.setHeader('Content-Type', 'application/json');
    
    console.log("*****rrreeqq ***",req);
    console.log("*****rrreeqq body***",req.body);

    res.send("Abhi");

});

router.delete('/deleteData', (req, res, next) => {
    res.send("deleteData Called");
});

router.put('/putData', (req, res, next) => {
    res.send("putData Called");
});



module.exports = router;