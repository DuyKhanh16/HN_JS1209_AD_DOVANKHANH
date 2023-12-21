const db= require("../config/db.config")

async function getAllJobs() {
    const [listJobs]= await db.execute("select * from listJobs ORDER BY id DESC  ")
    return listJobs
}

async function add(nameJob) {
    const [result]= await db.execute("insert into listJobs (nameJob) value (?)",[nameJob])
    return result
}

async function deleteJobById(id){
    const [result] = await db.execute("delete from listJobs where id = ?", [id]);
    return result;
}

async function editById(id,nameJob) {
    const [result]= await db.execute("update listJobs set nameJob = ? where id = ?",
    [nameJob, id])
    return result
}

async function editStatus(id,status) {
    const [result]= await db.execute("update listJobs set status = ? where id = ?",
    [status, id])
    return result
}
module.exports={
    getAllJobs ,add,deleteJobById, editById, editStatus
}