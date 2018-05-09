var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var categoryschema=new Schema({
    ID: {type: String, require:[true,'not null']},
    name: String

})

module.exports=mongoose.model('UserCategory',categoryschema);