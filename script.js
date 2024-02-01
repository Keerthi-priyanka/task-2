let myForm = document.getElementById("form");
let nameel = document.getElementById("name");
let emailel = document.getElementById("email");
let nameerr = document.getElementById("nameerror");
let emailerr = document.getElementById("emailerr");
let buttonel = document.getElementById("btn");
let passel = document.getElementById("password");
let perel = document.getElementById("prr");



nameel.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameerr.textContent = "Required*";
    } else {
        nameerr.textContent = "";
    }
});

emailel.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailerr.textContent = "Required*";
    } else {
        emailerr.textContent = "";
    }
});
passel.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        perel.textContent = "Required*";
    } else {
        perel.textContent = "";
    }
});

myForm.addEventListener("submit", function(event) {
    event.preventDefault();

});
