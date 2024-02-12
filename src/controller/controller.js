import user from "../model/user.js";
import habit from "../model/habit.js";

export class routeController{
    constructor(){
        this.user = new user();
        this.habit = new habit();
    }

    getHomePage = (req, res)=>{
        res.render('index')
    }

    getHabitTrackerPage = (req, res)=>{
        res.render('habitTracker'); 
    }

    saveUserData = async (userId, name)=>{
        const newData = await this.user.addNewUser(name, userId);
        return newData;
    }

    saveNewHabit = async (userId, habitName)=>{
        const result = this.habit.addHabit(habitName, userId);
        return result;
    }

    saveHabitStatus = async (userId, habitName, date, status)=>{
        const result = this.habit.updateProgress(userId, habitName, date, status);
        return result;
    }
}