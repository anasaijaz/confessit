const {User} = require("../models")

class User_controller {
    static async index(req,res){try{
        const users = await User.findAll()
        res.send(users)
    }
    catch (e){
        res.status(500).send({error:e.message})
    }
    }
}

module.exports = User_controller
