const moment = require('moment'),
    { connection } = require('./connection'),
    orm = {
        selectAllDevoured: callback => {
            const queryString = "SELECT * FROM burgers";
            connection.query(queryString, (err, result) => {
                console.log(result);
                callback(result);
            });
        },
        selectAllNotDevoured: callback => {
            const queryString = "SELECT * FROM burgers";
            connection.query(queryString, (err, result) => {
                callback(result);
            });
        },
        insertOne: burger => {
            const queryString = `INSERT INTO burgers(burger_name, eaten, time_created) 
        		values (${connection.escape(burger)}, false, ${connection.escape(moment().format('YYYY-MM-DD HH:mm:ss'))})`;
            connection.query(queryString, (err, result) => {
                if (err) { console.log(err); }
                console.log("insert one function", result);
            });
        },
        updateOne: burger => {
            const queryString = `UPDATE burgers SET eaten=true WHERE burger_name=${connection.escape(burger)}`;
            connection.query(queryString, (err, result) => {
                console.log('update one function', result);
            });
        }
    };

module.exports = { orm: orm };
