const express = require("express")
require('dotenv-flow').config();
const post_routes = require("./namespaces/v1/post")
const user_routes = require("./namespaces/v1/user")
const verification_routes = require("./namespaces/v1/verification")
const app = express()
const cors = require("cors")
const passport = require("passport")
const passportConfig = require("./config/passport")
const {User} = require("./models")


app.use(passport.initialize({}))
app.use(express.json())
app.use(cors())
app.use("/v1/verification", verification_routes)
app.use("/v1/users", user_routes);
app.use("/v1/post", post_routes)



app.listen(process.env.PORT, () => console.log(`[*] Started server on ${process.env.PORT}`))
