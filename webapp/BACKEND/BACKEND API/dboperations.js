var config = require("./dbconfig")
const sql = require('mssql')

async function get_userInfo() {
    try{
        let pool = await sql.connect(config);
        let info = await pool.request().query("SELECT * from userInfo");
        return info.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

module.exports = {
    get_userInfo : get_userInfo
}
