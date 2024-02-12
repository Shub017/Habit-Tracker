//Import all dependencies
import path from 'path';
import express from 'express';
import 'dotenv/config'
import ejsLayouts from 'express-ejs-layouts';
import { routeController } from './src/controller/controller.js';

const app = express();
const RouteController  = new routeController();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));
const temppath = path.join(path.resolve(), 'src', 'views')
console.log(temppath);
app.use(ejsLayouts);

// Use import.meta.url to get the current module's URL
const __filename = new URL(import.meta.url).pathname;

// Use path.dirname to extract the directory path
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(path.resolve(), 'public')));

// Specify the default layout file
app.set('layout', 'layout'); // Assuming your layout file is in views/layout.ejs

app.get('/',(req, res)=>{
    RouteController.getHomePage(req, res);
})

app.get('/habitTracker',(req, res)=>{
    RouteController.getHabitTrackerPage(req, res);
})

// For adding a New User
app.post('/submit-user-info', async (req, res) => {
    try {
        const { userId, userName } = req.body;

        const response = await RouteController.saveUserData(userId, userName);
        res.status(200).json({ success: true, response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// For adding a new habit for a User logged In
app.post('/AddNew-habit',async (req, res)=> {
    try{
        const {userId, habitName} = req.body;
        const response = RouteController.saveNewHabit(userId, habitName);
        res.status(200).json({status:"succuss", msg:response});
    }catch(err){
        res.status(400).send("Something went wrong");
    }
})

// Request for updating a status of habit on the specified day 
app.post('/update-habit-status', async (req, res)=>{
    try{
        console.log("Radio button clicked");
        const { userId, habitName, date, status } = req.body;
        const response = RouteController.saveHabitStatus(userId, habitName, date, status);
        res.status(200).json({status:"Success", msg:response});
    }catch(err){
        console.log(err);
        res.status(400).json({status:"Failed", msg:"Something went wrong"});
    }
})

export default app;
