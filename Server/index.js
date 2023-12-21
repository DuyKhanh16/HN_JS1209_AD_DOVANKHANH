const express =require("express")
const app=express()
require('dotenv').config();
const { userRouter } = require("./src/routers/user.route")
const todoRoute = require("./src/routers/todo.route");


var bodyParser = require('body-parser')
const cors = require("cors");
app.use(cors({
    origin: "*"
}));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


userRouter(app)
todoRoute(app)



app.listen(process.env.PORT,()=>{
    console.log("run PORT");
})