var returnval = 0

let psw = document.getElementById("psw_1").value;
let confirmpsw = document.getElementById("psw_2").value;

function send_data(){

  let fn = document.getElementById("fn").value;
  let ln = document.getElementById("ln").value;
  let usr = document.getElementById("usr").value;
  let em = document.getElementById("email").value;
  let ph = document.getElementById("ph").value;

  if(returnval==1){
    const client = {
      username: usr,
      password: psw,
      firstname: fn,
      lastname: ln,
      email: em,
      phonenumber: ph,
    };
      
    const fs = require('fs');
    
      const jsonString = JSON.stringify(client, undefined, 4);
      fs.appendFile("./users.json", jsonString, (err) => {
        if (err) {
          console.log("Error writing file", err);
        } 
        else {
          console.log("Successfully wrote file");
        }
      });
  }
}

function checkPassword() {

  if (psw != confirmpsw){
    console.log("error")
  }
  else{
    returnval = 1
  }

}

send_data()
