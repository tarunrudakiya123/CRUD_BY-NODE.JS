const { default: mongoose } = require("mongoose")

//===[2]====--------=========-----User Schema-----=========---------=========\\


class UserModel {

    constructor() {
        this.schema = new mongoose.Schema({
            fullName: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            phone: { type: String, required: true, length: 10 },
            password: { type: String, required: true },
        }, {
            timestamps: true
        })
    }
}

const user = new UserModel()
const userModel = mongoose.model("users", user.schema)
module.exports = userModel