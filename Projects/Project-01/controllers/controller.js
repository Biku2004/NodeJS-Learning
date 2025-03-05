// services
const User = require("../models/models")

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handlegetUserById(req,res) {
    const user = await User.findById(req.params.id);
    if(!user){
       return  res.status(404).json({error: "This user is not Present"});
    }
    return res.json(user)
}

async function handleUpdateUserById(req,res){
    user = users.find((user) => user.id === id)  
    await User.findByIdAndUpdate(req.params.id, {last_name: "Changed"});
    return res.json({status : "Updated Success"});
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "Deleted Success"});
}

async function handleCreateUser(req,res){
    const body  = req.body;

    if(!body || !body.first_name || !body.email || 
        !body.gender || !body.job_title){
            return res.status(400).json({msg: 'All fields are Required..'});
    }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
        gender: body.gender
    });

    console.log("Result",result);

    return res.status(201).json({ msg: "success",id:result._id})
}

module.exports = {
    handleGetAllUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
}