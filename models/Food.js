var mongoose=require('mongoose');
var Schema=mongoose.Schema;
/* B?ng FOOD*/
var foodschema=new Schema({
    ID: {type: String, require:[true,'not null']},
    name: String,
    idCate:{type: String, require:[true,'not null']},
    soluong: Number,
    price: Number,
});

module.exports=mongoose.model('Food',foodschema);