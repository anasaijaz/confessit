const express = require("express")
const router = express.Router()
const verification_controller = require("../../controllers/verification_controller")

router.post("/startOTP", verification_controller.startOTP)
router.post("/verifyOTP", verification_controller.verifyOTP)
router.post("/startEmailOTP",verification_controller.startEmailOTP)
router.post("/verifyEmailOTP", verification_controller.verifyEmailOTP)

module.exports = router
