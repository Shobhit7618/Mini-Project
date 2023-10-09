const {Schema,model}=require('../connection');

const myschema=new Schema({
    name:String,
    email: {type : String},
    password:String
});

module.exports=model('users',myschema)