const {Schema, model, Types}=require('../connection');

const myschema=new Schema({
    items:Array,
    user: {type : Types.ObjectId, ref : 'users'},
    address:String
});

module.exports=model('orders',myschema)