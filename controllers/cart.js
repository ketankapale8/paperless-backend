import cartModel from "../models/cart.js";
import userModal from "../models/user.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

var admin = require("firebase-admin");
var serviceAccount = require("../controllers/paperlessapp-dbf5a-firebase-adminsdk-adyp8-6b58262710.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });


require('https').get('https://frail-outerwear-fish.cyclic.app/api/v1/gettokens', (res) => {
  res.setEncoding('utf8');
  res.on('data', function (body) {
      return JSON.parse(body).tokens;
  });
});
const message = {
  notification : {
      title : 'Paperlesss App',
      body : "Cart Updated"
  },
  token : "chNIX1kFQKuOz-VYB5qGWa:APA91bHgiVYcZaYn_vHBpAY_WMaDIcI7W6W3hO5zFaoVJOKlvVn4m_I5gm_gi_iNtj-xqfewEF01JdnGvIbr61QnRu8TpJT1w8cxTJKZ6azME3WOeYQDrIJPKwW6_gtRsP3cIPHCa8FH"
}

admin.messaging().send(message)
  .then(resp=>{
      console.log('success' , resp)
  })
  .catch(err=> console.log(err))
  

// import { updateUser } from "./controllers/user.js";



// adding cart values

export const addCart = async (req , res) => {
      const cart = req.body
    // const {name_id , itemName ,category , discount , amt_due , tax , price , total_amt, qty , email} = req.body;
    try{
        
           const cartData  =  new cartModel({
                ...cart
                // itemName  ,
                // category ,
                // discount ,
                // amt_due ,
                // tax,
                // price,
                // total_amt,
                // qty,    
                // name_id,
                // email
            })
        // }
 
   await cartData.save();
   res.status(200).json(cartData)

    }catch(err){
        console.log(err)
        res.status(500).json({message: 'couldnt able to build cart'})
    }
}

// get all carts dataaa ///

export const getAllCarts = async (req, res) => {
  try {
    const allCarts = await cartModel.find();

    if (allCarts.length > 0) {
      res.status(200).json({ allCarts });
    }
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .json({ message: "something is wrong while fetching cart data" });
  }
};

// export const addCart = async (req, res) => {
//   const {
//     name_id,
//     itemName,
//     category,
//     discount,
//     amt_due,
//     tax,
//     price,
//     total_amt,
//     qty,
//   } = req.body;
//   const newCart = new cartModel({
//     itemName,
//     category,
//     discount,
//     amt_due,
//     tax,
//     price,
//     total_amt,
//     qty,
//   });
//   try {
//     await newCart.save();
//     res.status(201).json(newCart);
//   } catch (err) {
//     res.status(404).json({ message: "Something went wrong" });
//   }
// }
