import mongoose from "mongoose";
import { userSchema } from "./userSchema/userSchema.js";
import habit from "./habit.js";

export default class user{
    constructor() {
        this.UserModel = mongoose.model('Users', userSchema);
        this.habitClass = new habit();
    }

    // Add new user in a dataBase
    addNewUser = async (userName, userId)=>{
        try{
            if(!userName || !userId){
                return null
            }

            // Check if a user with the same userId already exists
            const existingUser = await this.UserModel.findOne({ userid: userId });

            if (existingUser) {
                console.log("User with the same userId already exists");
                // User with the same userId already exists, return without adding a new user
                const userHabitData = await this.habitClass.habitData(userId);
                console.log("userHabitData", userHabitData);
                if(userHabitData){
                    return userHabitData;
                }
                return null;
            }

            const newUser = this.UserModel({
                userid:userId,
                name: userName
            })

            console.log(newUser);
            await newUser.save();
            
            return newUser

        }catch(err){
            console.log(err)
            return null
        }
    }
}