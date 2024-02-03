import { validateLogin, getData, setError } from "./functions.js";

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");


let user;
form.addEventListener("submit", function(e){
e.preventDefault();

 if(validateLogin({username,password})) {
    let data = getData();
    user = data.find(el => el.username == username.value)
 }

 if(user && user.password == password.value) {
localStorage.setItem("currentUser", username.value);
form.reset();

    let domain = window.location.href.substring(0, window.location.href.search('pages/login'));
    window.location.assign(`${domain}index.html`)
 }else{
setError(username, 'Incorrect username or password');
 username.focus();
 password.value = '';
 }

  });