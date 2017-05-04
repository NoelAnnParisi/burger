const { orm } = require('../config/orm');
// Also inside burger.js, create the code that will call the ORM functions 
// using burger specific input for the ORM.
// Export at the end of the burger.js file.
const Burger = {
    selectAllDevoured: callback => {
        orm.selectAllDevoured(res => {
            console.log("orm data:", result);
            callback(res);
        })
    },
    selectAllNotDevoured: callback => {
        orm.selectAllNotDevoured(res => {
            callback(res);
        })
    },
    //Insert a particular burger into the not-devoured section
    insertBurger: burger => {
        orm.insertOne(burger, data => {
            console.log("BURGER WAS INSERTED");
        });
    },
    //Update a particular burger such that it is devoured
    updateBurger: burger => {
        orm.updateOne(burger, data => {
            console.log("YOUR BURGER WAS UPDATED");
        });
    }
};


module.exports = { Burger: Burger };
