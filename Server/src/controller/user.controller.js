const { getUserByEmail } = require("../reponsistory/user.reponsistory");
const jwt= require("jsonwebtoken")
require("dotenv").config()


async function signin (req,res) {
    const {email,password}= req.body
    const user= await getUserByEmail(email)
    if (!user) {
     return res.status(400).json(message="email chưa được đăng ký")
    }
    const token= jwt.sign(user,process.env.JWT_KEY)
      
    if (user.password==password) {
        res.status(200).json({
            message:"đăng nhập thành công",
            token:token
           
        })
    }else{
        res.status(400).json(message="email không đúng")
    }
}



module.exports={
signin 
}