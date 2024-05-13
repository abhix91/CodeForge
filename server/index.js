const express= require('express');
const cors= require('cors');
const mongoose=require('mongoose');
const userRoutes=require("./routes/userRoutes.js");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());



app.use("/api/auth",userRoutes);

mongoose.connect(process.env.MONGODB_URL)
.then(()=>
{
    console.log("server is connected to database");
})
.catch((err)=>{
    console.log(err.message);
})


app.listen(process.env.PORT,()=>
{
    console.log(`server is running on port ${process.env.PORT}`);
})



