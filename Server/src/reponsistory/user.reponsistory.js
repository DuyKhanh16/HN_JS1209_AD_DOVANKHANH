const db = require("../config/db.config")

async function getUserByEmail(email) {
    let [user]= await db.execute("select * from users where email=?",[email])
    return user[0]
}



module.exports={
    getUserByEmail
}