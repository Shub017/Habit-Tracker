import server from "./app.js";
import 'dotenv/config'
import { connectToDataBase } from "./DataBase/mongoDB.js";

server.listen(process.env.PORT, ()=>{
    console.log(`Server is listening at ${process.env.PORT}`);
    connectToDataBase();
})