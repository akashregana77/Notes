require('dotenv').config() 
const express=require("express")
const {connectDB}=require("./config/db.js")
const routes =require('./routes/Routes.js') ;
const app=express();
const cors=require("cors");
connectDB();

app.use(cors({
    origin:"http://localhost:5173", 
}));
app.use(express.json());
app.use("/api/notes",routes);

app.listen(3000,()=>{
    console.log("server running in port : 3000")
})

//mongodb+srv://akashreganawork_db_user:xQXtryT3rRMa3IWE@cluster0.y4fdstb.mongodb.net/?appName=Cluster0