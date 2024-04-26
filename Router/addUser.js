const express = require('express')
const router = express.Router()
const userController=require("../controllers/allUsercontroller")
const {requireAuth}=require("../middleware/middleware")


router.post("/user/add.html",requireAuth, userController.user_add_post);

module.exports = router;
