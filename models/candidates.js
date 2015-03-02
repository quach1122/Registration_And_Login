/**
 * Created by andy on 2/12/2015.
 */
var mongoose = require('mongoose');

var Candidate = mongoose.model('Candidate',{
   name: String,
   email: String,
   college: String,
    grad: String,
    image: String
});

module.exports = Candidate;