const { getAllJobs, add, deleteJobById, editById, editStatus } = require("../reponsistory/todo.reponsistory")

async function getJobs(req,res) {
const listJobs=await getAllJobs()
res.status(200).json({
    message:"Thành Công",
    data:listJobs
})
}

async function addJob(req,res) {
    const {nameJob}=req.body
    const result= add(nameJob)
    res.status(201).json(message="Thanh cong")
}

async function deleteJob(req,res) {
    const {id}=req.params
    await deleteJobById(id)
    res.status(200).json(message="Xóa Thành công")
}

async function editJob(req,res) {
   const {id}=req.params
   const {nameJob}=req.body
   console.log(req.body);
   await editById(id,nameJob)
   res.status(200).json(message="Sửa Thành công")

}
async function complete(req,res){
    const {id}=req.params
    const {status}=req.body
    await editStatus(id,status)
   res.status(200).json(message="Sửa Thành công")
    
}
module.exports={
    getJobs, addJob,deleteJob,editJob,complete
}