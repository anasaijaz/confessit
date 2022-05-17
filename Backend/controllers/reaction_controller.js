const {User, Reaction, Post} = require("../models")

class Reaction_controller {
    static async index(req,res){try{
        const users = await User.findAll()
        res.send(users)
    }
    catch (e){
        res.status(500).send({error:e.message})
    }
    }

    static async put(req, res) {
        try {
            const user = req.user
            const post = await Post.findOne({where: {id: req.params.id}})
            const reaction = req.query.reaction
            if(!['Sad', 'Angry', 'Heart', 'Celebrate'].includes(reaction))
                return res.send(400, 'Invalid reaction')

            const rxnToPost = await Reaction.findOrCreate({where: {post_id: post.id, user_id: user.id},
            defaults: {
                user_id: user.id,
                reaction: reaction
            }})

            if(!rxnToPost[1]){
                rxnToPost[0].update({reaction: reaction})
            }
            res.send(rxnToPost)
        } catch (e) {
            res.status(500).send({error:e.message})
        }
    }
}

module.exports = Reaction_controller
