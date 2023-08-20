const { default: mongoose } = require("mongoose");
// ===[3]====--------=========------=========---------=========--------\\


const Connect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Crud")
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Lose");
    }
}

module.exports = Connect

