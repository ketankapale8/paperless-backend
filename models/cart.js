import mongoose from "mongoose";

const cartSchema = mongoose.Schema({

        name_id : {
        type : String,
        require : true
        },

        email : {
            type : String,
            require : true
            },
    
        pos : {
            type : String,
        },
        
        itemName : {
            type : String,
            require : true
        },
        category : {
            type : String,
            require : true
        },
        tax : {
            type : Number,
            require : true
        },
        price : {
            type : Number,
            require : true
        },
        qty : {
            type : Number,
            require : true
        },
        total_amt : {
            type : Number,
            require : true
        },
        discount : {
            type : Number,
            require : true
        },
        amt_due : {
            type : Number,
            require : true
        },

        invoiceData : [],
        
        
        createdAt :{
            type : Date,
            default : new Date()
        } 
//    ]
})

export default mongoose.model("Cart", cartSchema); 