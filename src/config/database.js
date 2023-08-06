import mongoose from "mongoose";

export const connect = async () =>{
    await mongoose.connect('mongodb+srv://kishorkm:kishor16@cluster0.ssv7rve.mongodb.net/');
    console.log("mongo DB connected")
}