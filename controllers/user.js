import bcrypt from "bcryptjs";
import jwttoken from "jsonwebtoken";
import userModal from "../models/user.js";

const secret = "test";
// controller for signup //
export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const oldUser = await userModal.findOne({email});
    if (oldUser) {
      return res.status(400).json({ message: "Existing user" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await userModal.create({
      email,
      password: hashedPassword,
      name: `${firstName}${lastName}`,
    });

    const token = jwttoken.sign(
      { email: result.email, id: result._id },
      secret,
      { expiresIn: "1h" }
    );
    res.status(201).json({ result, token });
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

// controller for signin //
export const signin = async (req , res) =>{
    const {email , password } = req.body;
    try{
        const oldUser = await userModal.findOne({email});
        const isCorrectPassword = await bcrypt.compare(password , oldUser.password);

           if(!oldUser){
                res.status(404).json({message: "User doesnt exist , please signup.."})
            }
           if(!isCorrectPassword){
                res.status(404).json({message: "Please enter correct crendentials"})
            }
           const token = jwttoken.sign({email : oldUser.email , id : oldUser._id} , secret , {expiresIn : '1h'})
           res.status(201).json({result : oldUser , token  })
    }catch(err){
        res.status(404).json({message: "Something wrong with the Signin"})
        console.log(err)
    }
}


// controller for all users 

export const allUsers = async (req , res) =>{
  
  try{ 
    const allUsers = await userModal.find();
    res.status(200).json({message : 'Allusers' , allUsers})

  }catch(err){
    console.log(err)
    res.status(200).json({message : 'Cant find any user'})
  }
}

//updating single signedin user //

export const updateUser = async (req , res) =>{
  const {id}= req.params;
  const {_id} = req.body;
  try{
      if(id === _id){
        const user = await userModal.findByIdAndUpdate(id, {$set: req.body})
        res.status(201).json({'UserUpdated' : user})
    
    }
      
      // await userModal.findByIdAndUpdate({id , updateUser });
      // userModal.findByIdAndUpdate(updateUser,id )


  }catch(err){
    res.status(404).json({message : "Something went wrong."})
    console.log(err)
  }
}



