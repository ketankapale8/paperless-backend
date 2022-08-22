import cartModel from "../models/cart.js";
import userModal from "../models/user.js";

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

// get all carts

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
