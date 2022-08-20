function checkPassword() {
  let psw = document.getElementById("psw_1").value;
  let confirmpsw = document.getElementById("psw_2").value;
  let fn = document.getElementById("fn").value;
  let ln = document.getElementById("ln").value;
  let usr = document.getElementById("usr").value;
  let em = document.getElementById("email").value;
  let ph = document.getElementById("ph").value;

  const fs = require("fs");
  const client = {
    username: usr,
    password: psw,
    firstname: fn,
    lastname: ln,
    email: em,
    phonenumber: ph,
  };
  
  if (psw != checkpsw) {
    console.log("error");
  } else {
    const jsonString = JSON.stringify(client, undefined, 4);
    fs.appendFile("../BACKEND/users.json", jsonString, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
  }
}
