# Confession project
The confession project is an open source project just to maintain the transparency 


- [ ] Add validators to the backend
- [ ] Correctly implement JWT authentication
- [ ] Separate the comment from post in react query and backend
- [ ] Remove redundant code (use hooks)
- [x] Fix the login crash bug


---

# Setup
to setup this project in your local enviroment
1. Clone the repo
2. create an .env.development file in Backend and Fronted and populate it with these key value pairs 

Frontend
```
REACT_APP_BACKEND_URL = "http://localhost:8080"
REACT_APP_JWT_HASH = "6f0bb1e57b8223a94ededf83ad6e1e40"
REACT_APP_API_VERSION = "1"
```
Backend

``` 
PORT=8000
FAST2SMS_API_KEY="***"
JWT_TOKEN="***"
ADMIN_PHONE="***"
```
You need to create an account on Fast2SMS and use the API_KEY

After setting up the enviroment you can start setting up the database
1. Install sequelize cli ```npm i sequelize-cli```
2. ```npx sequelize db:create``` to create the database
3. ```npx sequelize db:migrate``` to migrate the database

Congratulations 🎊 
You have success fully setuped the project 

# start contributing today
