const express = require("express");
const router = express.Router();
const Details = require("./models/userData");
const mongoose = require("mongoose");

router.get('/getData', (req, res, next) => {
   console.log("get Req ", req.params.getData);
   const id =  req.params.getData;
    Details.findById(id)
    .exec()
    .then(doc => {
        console.log("getting from Database",doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log("error in gettiing",err);
        res.status(500).json({error:err});
    });
    res.send("getData Called");
});

router.post('/submitDetails', (req, res, next) => {
   
   try{
       req.body = JSON.parse(Object.keys(req.body)[0])
       console.log("*****rrreeqq body in try***",req.body);

       /*const details = {
           fname : req.body.first,
           lname : req.body.last
       }*/
       //mongo data
       const details = new Details({
        _id: new mongoose.Types.ObjectId(),
            fname : req.body.first,
           lname : req.body.last,
           email : req.body.mail
       });
       //it store is db
       details.save().then(result => {
           console.log("**result**", result);
       }).catch(err => console.log("***error***",err));

       res.status(200).json({
           message : "details are : ",
           userDetails : details
       });

    }catch(err){
        req.body = req.body
        console.log("*****rrreeqq body in err***",req.body);
    } 

    //res.send("submitDetails called");
});


router.delete('/:deleteData', (req, res, next) => {
    res.send("deleteData Called");
});

router.put('/:putData', (req, res, next) => {
    res.send("putData Called");
});



module.exports = router;
