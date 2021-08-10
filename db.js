const Sequelize = require("sequelize");
const sequelize = new Sequelize("workout-logbook", "postgres", "blU1150ebadge!", {
    host: "localhost",
    dialect: "postgres"
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to workout-logbook database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;