// LOAD DATABASE

let db = require('../server/database');


const model = {}

// Add new item
model.addNew = (param) =>{
    db.run('INSERT INTO `Product_data` (`code`, `name`, `price`) VALUES (?, ?, ?)', param, (err) =>{

            return false;

        });

    return true;
}



module.exports = model;