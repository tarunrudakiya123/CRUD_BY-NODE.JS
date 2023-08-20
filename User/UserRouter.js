const express = require("express")
const userConntroller = require("../UserController")
// =====--------=========------=========---------=========--------\\



const router = express.Router()

router.post("/newuser", userConntroller.CreateUser)

router.get("/:id", userConntroller.ShowUser)

router.delete("/user/:id", userConntroller.removeUser)

router.get("/upuser/:id", userConntroller.getUserById)

router.put("/update/user/:id", userConntroller.updateUser)



module.exports = router
