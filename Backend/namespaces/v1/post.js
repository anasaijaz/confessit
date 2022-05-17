const express = require("express")
const router = express.Router()
const post_controller = require("../../controllers/post_controller")
const reaction_controller = require("../../controllers/reaction_controller")
const comment_controller = require("../../controllers/comment_controller")

const passport = require("passport")
require("../../config/passport")(passport)

const authenticate =  passport.authenticate('jwt', {session:false})

router.post("/",authenticate,post_controller.post)

router.get("/",authenticate,post_controller.index)
router.get('/:id', authenticate, post_controller.get)

router.post('/:id/react', authenticate, reaction_controller.put)
router.get('/:id/comment', authenticate, comment_controller.index)
router.post('/:id/comment', authenticate, comment_controller.create)
router.post('/:post_id/comment/:comment_id', authenticate, comment_controller.createReply)

module.exports = router
