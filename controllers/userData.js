import userCartSchema from "../models/userData.js";
export const addUserCart =  async (req , res) => {
    const {userEmail , qty , price , category , itemName} = req.body;
   try{
         const cartData  = new userCartSchema({
              userEmail,
              qty,
              price , 
              category,
              itemName
          })

 await cartData.save();
 res.status(200).json(cartData)

  }catch(err){
      console.log(err)
      res.status(500).json({err})
  }
}


/// get all userCarts

export const getAllUserCarts = async (req, res) => {
    try {
      const allCarts = await userCartSchema.find();
  
      if (allCarts.length > 0) {
        res.status(200).json({ allCarts });
      }
    } catch (err) {
      console.log(err);
      res
        .status(404)
        .json({ message: "something is wrong while fetching user-cart data" });
    }
  };