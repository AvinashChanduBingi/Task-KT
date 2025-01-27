const express = require("express");
const UserRouter = require("./user/userRoutes");
const userAccountRoutes = require("./useraccounts/userAccountRoutes");
const deptRouter = require("./dept/deptRoutes");
const accountRouter = require("./account/accountRouter");
const loginController = require("./login/LoginRoutes");
const verifyjwt = require("./login/authentication");
const loginService = require("./login/loginService");
const router = express.Router();


router.use("/login",loginController);

/*verify.jwt  is a middle ware verifies the JWT token*/
router.use("/user",verifyjwt.authenticateToken,UserRouter);
router.use("/userAccounts",verifyjwt.authenticateToken,userAccountRoutes);
router.use("/dept",verifyjwt.authenticateToken,deptRouter);
router.use("/account",verifyjwt.authenticateToken,accountRouter);


module.exports = router;