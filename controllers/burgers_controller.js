const { Burger } = require('../models/burger');

exports.getHome = (req, res) => {
    Burger.selectAllNotDevoured((data) => {
    	console.log(data);
        const hbsObject = {
            burger: data
        }
        res.render('index', hbsObject);
    });
};

exports.postHome = (req, res) => {
    const newBurger = req.body.newBurger;
    Burger.insertBurger(newBurger);
    res.redirect('/'); 
};