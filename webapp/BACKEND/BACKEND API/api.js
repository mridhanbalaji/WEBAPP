const dboperations = require('./dboperations')
var Db = require('./dboperations')
var userInfo = require('./userInfo')

dboperations.get_userInfo().then(result =>{
    console.log(result);
})
