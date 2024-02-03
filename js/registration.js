import { validateInputs, setError} from "./functions.js";

const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs({
    username,
    email,
    password,
    confirmPassword,
  });
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  }

  fetch("https://auth-rg69.onrender.com/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  
 .then((res) => res.json())
 .then((data) => {
  if(data.message == "Failed! Username is already in use!"){
     setError(username, data.message);
     username.focus();
     confirmPassword.value = "";
  }
  if(data.message == "Failed! Email is already in use!"){
       setError(email, data.message);
       email.focus();
       confirmPassword.value = "";
  }
  if(data.message == "User registered successfully!"){
    let domain = window.location.href.substring(0, window.location.href.search('registration'));
    form.reset();
    window.location.assign(`${domain}login.html`)
  }
 })
 .catch((err) => {
   console.log(err);
 })
});
