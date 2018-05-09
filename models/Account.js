var mongoose=require('mongoose');
var Schema=mongoose.Schema;
/* Bang ACCOUNT*/
var accountschema = new Schema({
    username: { type:String, require: [true,'Need an user name']},
    displayname: String,
    pass: String,
    type: { type: String, require:true}

});
module.exports=mongoose.model('Accounts',accountschema);