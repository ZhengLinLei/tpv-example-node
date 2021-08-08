// LOAD DATABASE

let db = require('../server/database');


const model = {}


model.getFirstBarcode = (param, fnc) => {

    db.get('SELECT * FROM `Product_data` WHERE `code` = ?', [param], fnc);


}


// Add new item
model.addNew = (param, fnc) =>{

    db.run('INSERT INTO `Product_data` (`code`, `name`, `price`) VALUES (?, ?, ?)', param, fnc)
}



module.exports = model;