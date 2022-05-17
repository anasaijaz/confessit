module.exports = function (req, res, next){
    if(req.user.phone !== process.env.ADMIN_PHONE){
        return res.status(401).send({error:"Only admin is allowed to perform this action"})
    }

    console.log("[*] ADMIN IS PERFORMING SOME ACTION AT", Date.now())
    next()
}