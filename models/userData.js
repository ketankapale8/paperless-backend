import mongoose from "mongoose";

const userCartSchema = mongoose.Schema({
            userEmail : {
                type : String,
                require : true
                },
        
            category : {
                    type : String,
                    require : true
                    },
            
            price : {
                    type : String,
                },
                
            itemName : {
                    type : String,
                    require : true
                },
            qty : {
                    type : String,
                    require : true
                },
                

})

export default mongoose.model("userCartData", userCartSchema); 