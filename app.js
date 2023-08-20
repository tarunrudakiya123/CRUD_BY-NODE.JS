const express = require("express")
const Connect = require("./Connection")
const router = require("./User/UserRouter")
//===[1]=====--------=========------=========---------=========-------\\


const app = express()

app.use(express.json())

Connect()  

app.get("/", (req, res) => {
    res.status(200).send({message: "Success"})
})

app.use("/user", router)

app.use("/view", express.static('view'))

app.listen(5010, () => {
    console.log("Server Started");
})