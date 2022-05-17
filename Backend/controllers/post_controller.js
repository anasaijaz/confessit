const axios = require("axios");
const {User, Post, Reaction, Comment} = require("../models")
const {Sequelize} = require("sequelize");

class Post_controller {

    static async post(req,res) {
        const response = await axios.post('https://api.bannerbear.com/v2/images', {
            "template" : "gdeyVMZOWM2Z4QmW6P",
                "modifications" : [
                    {
                        "name" : "message",
                        "text" : req.body.post.confession
                    }
                ]

        }, {headers: {'Authorization': 'Bearer ' + 'bb_pr_fda31b93dc985ea123398e6859a94d', 'Content-Type' : 'application/json',}})

        setTimeout(async ()=> {
            const image = await axios.get(`https://api.bannerbear.com/v2/images/${response.data.uid}`,{headers: {'Authorization': 'Bearer ' + 'bb_pr_fda31b93dc985ea123398e6859a94d', 'Content-Type' : 'application/json',}})

            const post = await Post.create({user_id: req.user.id, image: image.data.image_url})
            res.send(post)
        }, 2000)

    }
        static async index(req,res){
    try{
        let posts = await Post.findAll({
            include: [{model: Reaction, attributes:[]}, {model: Comment, attributes:[]}, {model: User,
                attributes: ['name']}],
            attributes: {
                include: [
                    [Sequelize.fn("COUNT", Sequelize.col("Comments.id")), "commentCount"]
                ]
            },
            group: ['Post.id'],
            order: [['id', 'DESC']]
        })



        posts = await Promise.all(posts.map(async (post, index) => {
            post.dataValues.reactionCount = (await post.getReactions()).length
            post.dataValues.Comments = (await post.getComments({
                where: {parent_id: null},
                include: [{model: User, attributes:['name']}],
                limit: 2
            }))
            return post
        }))

        res.send({
            count: posts.length,
            posts: posts
        })
    }
    catch (e){
        res.status(500).send({error:e.message})
    }
    }

    static async get(req, res) {
        const post_id = req.params.id
        let post = await Post.findByPk(post_id, {
            include: [{model: Reaction},{model: User,
                attributes: ['name']}],
            attributes:{
                include: [[Sequelize.fn("COUNT", Sequelize.col("Reactions.id")), "reactionCount"]]
            }})

        post.dataValues.Comments = (await post.getComments({
          where: {parent_id: null},
          include: [{model: User, attributes:['name']}]
        }))

        await Promise.all(post.dataValues.Comments.map(async (comment)=> {
            comment.dataValues.Replies = await comment.getReplies()
            return comment
        }))

        res.send(post)
    }
}

module.exports = Post_controller
