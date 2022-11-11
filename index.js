import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/user.js';
import cartRouter from './routes/cart.js';
import usercartRouter from './routes/userData.js';
import storeFilter from './routes/storeValues.js'
import dotenv from "dotenv";
// import { updateUser } from "./controllers/user.js";

const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json({limit:'30mb', extended: true}));
app.use(express.urlencoded({limit:'30mb', extended: true}));
app.use(cors());

app.use("/users", userRouter);
app.use("/users", cartRouter);
app.use("/users" , usercartRouter);
app.use("/users/allcarts" , storeFilter);

app.get("/" , (req, res) =>{
    res.send("Welcome to Paperless Backend API")
})



// let mongoURI = "mongodb+srv://ketan:ketan123@cluster0.rxchycq.mongodb.net/paperlessData?retryWrites=true&w=majority"

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_DB_URL)
    .then(()=>{
        app.listen(port , ()=>console.log(`Server running on ${port}`))
    })
    .catch((err)=>console.log(err))


    // '172.20.10.4'



 