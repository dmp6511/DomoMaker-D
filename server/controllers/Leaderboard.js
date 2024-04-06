// leaderboard controller
const models = require('../models');

const { Account, Domo } = models;

const leaderboardPage = (req, res) => {
    return res.render('app');
};


// exports
module.exports = {
    leaderboardPage,
};

