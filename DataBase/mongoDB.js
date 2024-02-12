import mongoose from "mongoose"

console.log(process.env.dbURL);

export const connectToDataBase = async ()=>{
    try{
        await mongoose.connect(process.env.dbURL);
        console.log("Connected to mongoDB");
    }catch(err){
        console.log(err);
    }
}