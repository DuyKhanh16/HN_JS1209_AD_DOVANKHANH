
function checkValue(req,res,next) {
    console.log(req.body);
    const {email,password}=req.body
    if (email==""||password=="") {
        res.status(400).json(message="thông tin chưa đầy đủ")
    } else {
        next()
    }
}
module.exports={checkValue}