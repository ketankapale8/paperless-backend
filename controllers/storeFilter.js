import cartModel from "../models/cart.js";

export const storeFilter = async (req ,res) =>{
    try{
      const storeData = await cartModel.find({$or : [{pos:"Reliance"}, {pos:'Spencer'} , {pos:'DMart'}, {pos:'BigBazaar'}]})
    //   const storeData = await cartModel.find({$or : [ {pos:'Reliance'}]})
        res.status(200).json({storeData})
    }catch(err){
        console.log(err)
    }
}

