import { UserModel } from '../models/user.model.js';

export const index = async (req,res)=> {
    const db = await UserModel.find({})
    res.send(db)
}

export const singleUser = async (req,res)=>{
    const userid = req.params.id
    const db = await UserModel.find({id : userid })
    res.send(db)
}

export const createUser = async (req,res)=>{
    const user = req.body
    const db = await UserModel({
        id : user.id,
        name : user.name,
        pass : user.pass
    }).save()
    res.send('done')
}

export const updateUser = async (req,res)=>{
    const user = req.body
    const userid = req.params.id

    const db = await UserModel.updateOne({id : userid },{
        id : user.id,
        name : user.name,
        pass : user.pass
    }).then(()=>res.send('done')).catch((e)=>res.send(e.message))
    
}

export const deleteUser = async(req,res)=>{
    const userid = req.params.id
    const db = await UserModel.deleteOne({id:userid}).then(()=>res.send('done')).catch((e)=>res.send(e.message))
}