const { getJobs, addJob, deleteJob, editJob, complete } = require("../controller/todo.controller")
const checkToken = require("../midelwhere/checkToken")


const todoRoute=(app)=>{
    app.get("/api/v1/listJobs",getJobs)
    app.post("/api/v1/listJobs",checkToken,addJob)
    app.delete("/api/v1/listJobs/:id",checkToken,deleteJob)
    app.put("/api/v1/listJobs/:id",checkToken,editJob)
    app.patch("/api/v1/listJobs/:id",checkToken,complete)
}
module.exports=todoRoute