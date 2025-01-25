const express = require("express");
const UserRouter = require("./user/userRoutes");
const userAccountRoutes = require("./useraccounts/userAccountRoutes");
const deptRouter = require("./dept/deptRoutes");
const accountRouter = require("./account/accountRouter");

const router = express.Router();

router.use("/user",UserRouter);
router.use("/userAccounts",userAccountRoutes);
router.use("/dept",deptRouter);
router.use("/account",accountRouter);
module.exports = router;