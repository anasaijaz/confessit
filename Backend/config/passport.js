const JWTStrategy = require("passport-jwt").Strategy
const { User } = require("../models")
ExtractJwt = require('passport-jwt').ExtractJwt;


function initialize(passport){
    passport.use(new JWTStrategy({
             secretOrKey:process.env.JWT_TOKEN
            ,jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
        }
        , async function (jwt_payload, done){
        const user = await User.findOne({where:{phone:jwt_payload.user.phone}});
        if(!user)
            return done(null,false);
        else
            done(null,user)
    }))
}

module.exports = initialize