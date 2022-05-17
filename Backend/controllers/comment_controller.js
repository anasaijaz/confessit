const {User, Post, Comment} = require("../models")

class Comment_controller {
    static async index(req,res){
    try{
        const post = await Post.findByPk(req.params.id)
        const comments = await post.getComments()
        res.send(comments)
    }
    catch (e){
        res.status(500).send({error:e.message})
    }
    }

    static async create(req, res) {
        try{
            const post = await Post.findByPk(req.params.id)
            const comment = await Comment.create({
                user_id: req.user.id,
                comment: req.body.comment
            })
            await post.addComment(comment)
            res.send(post)
        }
        catch (e){
            res.status(500).send({error:e.message})
        }
    }

    static async createReply(req, res){
        try{
            const reply = await Comment.create({
                parent_id: req.params.comment_id,
                user_id: req.user.id,
                comment: req.body.comment,
                post_id: req.params.post_id
            })

            res.send(reply)
        }
        catch (e){
            res.status(500).send({error:e.message})
        }
    }
}

module.exports = Comment_controller
