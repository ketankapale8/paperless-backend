import cartModel from "../models/cart.js";

export const storeFilter = async (req ,res) =>{
    // db.filter_test.aggregate({$project: { highmarks: { $filter: { input: "$marks", as: "marks", cond: { $gt: [ "$$marks", 65 ] } } } } } )   
    try{
       const pos = req.body
      const storeData = await cartModel.find({$or : [{pos:"Reliance"}, {pos:'Spencer'} , {pos:'DMart'}, {pos:'BigBazaar'}]})
    //    const storeData = await cartModel.find({pos : {$all:["Reliance", "DMart", "Spencer"]}})

        res.status(200).json({storeData})
    }catch(err){
        console.log(err)
    }
}