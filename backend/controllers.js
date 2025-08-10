const User = require("./userSchema")

exports.register= async(req , res)=>{

    const {name , email , phone , company , service , message} = req.body

    const users = await User.create({name , email , phone , company , service , message})
    const token =   await users.generatetoken()
    res.status(200).json({users , token})
}