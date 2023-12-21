const { signin } = require("../controller/user.controller")
const { checkValue } = require("../midelwhere/checkUser")


const userRouter= (app)=>{
    app.post("/api/v1/users/signin",checkValue,signin)
    
}

module.exports={
    userRouter
}