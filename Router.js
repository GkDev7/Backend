const express=require("express")
const record=require("../controllers/Controller")
const auth_check=require("../controllers/authCheck/auth")

 


const router=express.Router()


router.post("/insertcourse",record.addCourse)
router.post("/deletecourse",record.deleteCourse)
router.post("/updatecourse",record.updateCourse)
router.get("/getcourses",record.getAllCourses)



router.post("/insertcat",record.addCategory)
router.post("/deletecat",record.deleteCategory)
router.get("/getallcat",record.getAllCategories)


router.post("/insertbranch",record.addBranch)
router.post("/deletebranch",record.deleteBranch)
router.get("/getbranches",record.getAllBranches)

router.post("/adminreg",record.adminReg)
router.post("/adminlogin",record.adminLogin)
router.get("/admininfo",record.adminDetails)


router.post("/stdreg",record.studentReg)
router.post("/stdlogin",record.stdLogin)
router.get("/getstudents",record.getAllStudents)
router.post("/updatestd",record.updateStd)
router.post("/deletestd",record.deleteStdRec)







module.exports=router;