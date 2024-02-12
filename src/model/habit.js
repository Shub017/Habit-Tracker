import mongoose from "mongoose";
import habitModel from "./habitSchema/habitSchema.js";
import { userSchema } from "./userSchema/userSchema.js";
export default class habit{
    constructor(){
        this.userModel = new mongoose.model('Users', userSchema);
    }
    addHabit = async (habit, userId)=>{
        try{
            const newHabit = new habitModel({
                habitName:habit,
                userId:userId,
            });

            await newHabit.save();
            return newHabit;
        }
        catch(err){
            console.log(err);
        }
    }

    habitData = async (userid)=>{
        try{
            const habitData = await habitModel.find({ userId: userid }).exec();

            if(!habitData){
                return false;
            }
            
            return habitData

        }catch(err){
            console.log(err);
        }
    }

    updateProgress = async (userid, habitName, date, status) => {
        try {
            console.log(userid, habitName, date, status);
    
            // Find the user
            const userData = await this.userModel.findOne({ userid });
    
            console.log(userData);
    
            if (!userData || !userData._id) {
                console.log("User not found");
                return "User not found";
            }
    
            // Convert ObjectId to string
            const userId = userData.userid;
            console.log("userId is", userId);
    
            // Find the habit for the user
            const habitData = await habitModel.findOne({ habitName, userId });
            console.log("Habit Data", habitData);
    
            if (!habitData) {
                console.log("Habit not found");
                return "Habit not found";
            }
    
            // Check if there's already progress for the given date
            const existingProgressIndex = habitData.progress.findIndex(entry => {
                // Extract only the date part for comparison
                const existingDate = new Date(entry.date).toISOString().split('T')[0];
                const newDate = new Date(date).toISOString().split('T')[0];
                return existingDate === newDate;
            });

            if (existingProgressIndex !== -1) {
                // Update the status for the existing entry
                habitData.progress[existingProgressIndex].status = status;
            } else {
                // Push new progress object to the array
                habitData.progress.push({ date, status });
            }
    
            // Save the updated habitData in the database
            await habitData.save();
            console.log(habitData);
    
            return habitData;
    
        } catch (err) {
            console.log(err);
            return "Some error occurred";
        }
    }
}
