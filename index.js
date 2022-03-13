import express from 'express';
import mongoose from 'mongoose';
import { userRoute } from './Routes/users.js'

const app = express()
app.use(express.json())
app.use('/users',userRoute)

mongoose.connect('mongodb://localhost:27017/Test')
  .then(()=>console.log('database is ready'))
  .catch((err)=>console.log(err))



app.get('/',(req,res)=>{
    res.send("index Page")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})