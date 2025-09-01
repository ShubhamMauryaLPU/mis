const mongoose=require("mongoose");

const incomeTaxSchema=new mongoose.Schema({
    panCard:{
        type:String,
        required:true
    },
    aadhar:{
        type:String,
        required:true
    },
    salary:{
        form16:{
            type:String,
            required:true
        },
        
    },
    bankStatement:{
        type:String
    },

})