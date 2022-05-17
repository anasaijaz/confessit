const express = require("express")
const router = express.Router()
const user_controller = require("../../controllers/user_controller")
const passport = require("passport")

const authenticate = passport.authenticate("jwt",{session:false})

router.post("/",authenticate ,user_controller.index)

module.exports = router
