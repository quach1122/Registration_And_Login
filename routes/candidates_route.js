/**
 * Created by andy on 2/12/2015.
 * @desc This object handles the routes for candidates; path
 */

var CandidateModel = require('../models/candidates');
var router = require('express').Router();

//var andy = new CandidateModel({
//   name: 'andy',
//    email: 'andy@email.com',
//    college: 'sjsu',
//    grad: 'SE'
//});
//
//andy.save(function(err,result){
//   if(err) console.log('error: not saved '+andy);
//    else console.log(result);
//});
router.post('/',function(req,res){
    (new CandidateModel(req.body).save(function(err,result){
        // todo: Do not send err information back to the user;
        if(err) res.status(500).json(err);
        else res.status(201).json(result);
    }));
});

router.get('/:id',function(req,res){
      CandidateModel.findById(req.params.id,function(err,result){
        if(err) res.status(500).json(err);
        else res.status(200).json(result);
    });

});

router.get('/',function(req,res){
    if (req.headers.accept.indexOf('application/json') !== -1) {
        CandidateModel.find(function (err, result) {
            if (err) res.status(500).json(err);
            else res.status(200).json(result);
        });
    } else {
        res.render('candidates');
    }
});

router.delete('/:id',function(req,res){
    CandidateModel.findByIdAndRemove(req.params.id, function(err,result){
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    });
});

router.put('/',function(req,res){
    console.log('update '+JSON.stringify(req.body));
    CandidateModel.findByIdAndUpdate(req.body.id,req.body,function(err,result){
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
});

//router.post('/files',function(req,res){
//  console.log(req.files);
//  var file = req.files.file1.name.split(".")[0];
//  //.name.split('.')[0];
//  console.log('files '+file);
//  res.status(201).json({message: file});
//});
module.exports = router;