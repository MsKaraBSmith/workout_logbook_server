require("dotenv").config();
const express = require('express');
const app = express();
const sequelize = require('./db');
const log = require('./controllers/logcontroller');
const user = require('./controllers/usercontroller');

sequelize.sync();
//sequelize.sync({ force: true });

app.use(express.json());

app.use("/user", user);

app.use("/log", log);





app.listen(3000, function(){
    console.log('App is listening on port 3000');
});