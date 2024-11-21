
const mongoose = require('mongoose');

const DBConnection = ()=>{
    try{
               mongoose.connect(process.env.MONGO_URL);
               console.log("DB IS SUCCESSULLY CONNECTED");
    }catch(error){
                    console.log("DB IS NOT CONNECTED", error);
    }
}



module.exports = DBConnection;