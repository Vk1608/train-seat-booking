const express=require('express');
const cors=require("cors");
const { connection } = require('./Configue/db');
const { getSeatsRouter } = require('./Routes/getseats.route');
const { updateSeatsRouter } = require('./Routes/updateSeats.route');
const { Validator } = require('./Middleware/Validator');
const { OverFlow } = require('./Middleware/OverFlow');
require("dotenv").config()

const app=express();
const port=process.env.PORT || 8080 ;
app.use(express.json());
app.use(cors({
    origin:"*"
}))
app.get("/",(req,res)=>{
    res.send({"message":"Hi !, Warm welcome to book Train seats"})
})

app.use("/seats",getSeatsRouter);
app.use("/update",Validator,OverFlow,updateSeatsRouter);
    
app.listen(port, async()=>{
    try {
        await connection
        console.log("Connected to DB successfully")
    } catch (error) {
        console.log(error,"err");
        console.log("Failed to Connect to DB")
    }
    console.log(`listening on PORT ${port}`)
})