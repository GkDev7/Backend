

const jwt = require("jsonwebtoken")

adminAuthCheck = (req, res, next) => {

    try {
        var adminReqToken=req.headers["x-axis-token"]
       console.log("tokennnnnn:-", adminReqToken)
        var tokenRef=jwt.verify(adminReqToken, "this_is_student_token")
          req.useremail=tokenRef.email;
        next();

    } catch{
        res.json({ success: false, msg: "authenctication failed" })
    }
}
module.exports = {
   adminAuthCheck
}

