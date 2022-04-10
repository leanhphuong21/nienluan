const mongoose = require('mongoose');
const url = "mongodb+srv://heroku:heroku@cluster0.x1fra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const url = "mongodb+srv://tmtuan:**************@cluster0.zfovn.mongodb.net/test"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./employee.model');
