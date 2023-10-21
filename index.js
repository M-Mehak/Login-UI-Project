let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let nameField = document.getElementById("nameField");
let signInSubmit = document.getElementById("signInSubmit");
let signUpSubmit = document.getElementById("signUpSubmit");
let title = document.getElementById("title");

// Initially, hide the sign-in submit button
signInSubmit.style.display = "none";
signInBtn.style.backgroundColor = "#e7e7f3";
signInBtn.style.color = "black";

signInBtn.onclick = function () {
  nameField.style.maxHeight = "0px";
  title.innerHTML = "Sign In";

  signInSubmit.style.display = "block";
  signUpSubmit.style.display = "none";

  signUpBtn.style.backgroundColor = "#e7e7f3";
  signUpBtn.style.color = "black";
  signInBtn.style.backgroundColor = "";
  signInBtn.style.color = "";
};

signUpBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";

  signUpSubmit.style.display = "block";
  signInSubmit.style.display = "none";

  signUpBtn.style.backgroundColor = "";
  signUpBtn.style.color = "";
  signInBtn.style.backgroundColor = "#e7e7f3";
  signInBtn.style.color = "black";
};