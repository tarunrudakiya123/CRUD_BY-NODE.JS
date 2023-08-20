const userModel = require("./UserModel")
// ===[4]==Create user--------=========------=========---------=========--------\\


class UserConntroller {

    // For New User
    async CreateUser(req, res) {
        try {
            const user = await userModel.create(req.body)


            if (user) return res.status(200).send({ message: "Success", user })

            return res.status(400).send({ message: "Somthing went Wrong" })


        } catch (error) {
            if (error && error.code === 11000) {
                return res.status(400).send({ message: "User Already Exists" })
            }

            return res.status(500).send({ message: "Intrenal Server Error" })
        }


    }


    //-----Find User----------------------------\\

    async ShowUser(req, res) {
        try {

            const user = await userModel.find({})
            console.log(user);
            if (user) return res.status(200).send({ message: "Success", user })

            return res.status(400).send({ message: "Somthing Went Wrong" })

        } catch (error) {
            return res.status(500).send({ message: "Intrenal Server Error" })
        }
    }

    //-----Remove User----------------------------\\

    async removeUser(req, res) {
        
        try {
            const result = await userModel.deleteOne({ _id: req.params.id })
            if (result) return res.status(200).send({ message: "Success" })

            return res.status(400).send({ message: "Somthing Went Wrong" })
        } catch (error) {
            return res.status(500).send({ message: "Intrenal Server Error" })
        }
    }


    async getUserById (req, res){
        try {
            const {id} = req.params
            const result = await userModel.findById(id)
            console.log(result);
            if(result) return res.status(200).send({message:"Success", user: result})

            return res.status(400).send({message:"Somthing Went Wrong"})
        } catch (error) {
            return res.status(500).send({message:"Intrenal Server Error"})
        }
    }

    
    async updateUser (req, res) {
        try {
            const id = req.params.id
            const body = req.body
            const result = await userModel.updateOne({_id:id}, body)
            if(result.modifiedCount > 0 || result.matchedCount > 0){
                return res.status(200).send({message:"Success"})
            }

            return res.status(400).send({message:"Somthing Went Wrong"})
        } catch (error) {
            return res.status(500).send({message:"Intrenal Server Error"})
        }
    }




}





const userConntroller = new UserConntroller()
module.exports = userConntroller