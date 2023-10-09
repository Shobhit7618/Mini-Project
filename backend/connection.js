const mongoose = require('mongoose');

const url = "mongodb+srv://shobhit:123@cluster0.ytww1xx.mongodb.net/localityshop?retryWrites=true&w=majority";

//asynchronous function - return Promise object

mongoose.connect(url)
.then((result) => {
    console.log('Database Connected');    
})
.catch((err) => {
    console.log(err);
});

// console.log('Another Statement');

module.exports=mongoose;