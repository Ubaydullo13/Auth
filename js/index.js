import { getData } from "./functions.js";

const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const year = document.getElementById("year");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("logout");

document.addEventListener("DOMContentLoaded", () => {
  let currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    let users = getData();
    let user = users.find((el) => el.username == currentUser);

    if (user.username) {
      firstName.innerHTML = user.firstName;
      lastName.innerHTML = user.lastName;
      year.innerHTML = user.year;
      email.innerHTML = user.email;
      username.innerHTML = user.username;
      password.innerHTML = user.password;
    } else {
      let domain = window.location.href.substring(
        0,
        window.location.href.search("index")
      );
      window.location.assign(`${domain}pages/login.html`);
    }
  } else {
    let domain = window.location.href.substring(
      0,
      window.location.href.search("index")
    );
    window.location.assign(`${domain}pages/login.html`);
  }
});


button && button.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    let domain = window.location.href.substring(
      0,
      window.location.href.search("index")
    );
    window.location.assign(`${domain}pages/login.html`);
});