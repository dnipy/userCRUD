import express from 'express';
import { createUser, deleteUser, index, singleUser, updateUser } from '../controllers/user.controller.js';
export const userRoute = express.Router()


// Routes
userRoute.get('/',index)

userRoute.get('/:id',singleUser)

userRoute.post('/create',createUser)

userRoute.put('/update/:id',updateUser)

userRoute.delete('/delete/:id',deleteUser)
