const jwt = require("jsonwebtoken");
const authUser = require("../models/authUserSchema");

const requireAuth=(req,res,next) => {
    console.log("before run the function")
    token = req.cookies.jwt
    if (token) {
        jwt.verify(token, "Super",(error) => {
            if(error){
                res.redirect("/login")
            }else{
                next()
            }
        });
    } else {
        res.redirect("login")
    }
};

const checkIfUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        //login user
        jwt.verify(token, "Super", async(error,decoded) => {
            if(error){
            res.locals.user=null
            next();
            } else {
            const loginUser=  await authUser.findById(decoded.id)
            res.locals.user= loginUser
            next();
            }
        });
    } else{
        res.locals.user =null;
        next();
    }
};

module.exports = {requireAuth,checkIfUser}
    
