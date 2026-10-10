// Select HTML elements
let email = document.querySelector("#email");
let passw = document.querySelector("#password");
let message = document.querySelector("#message");
let span_email = document.querySelector("#span_email");

span_email.classList.add("h5");
let showPassword = document.querySelector("#showPassword");
let login = document.querySelector("#login");


// Show and hide password
showPassword.addEventListener("click", function () {

    if (passw.type === "password") {
        passw.type = "text";

    }
    else {
        passw.type = "password";

    }

});

// wokinng of passw box .....

let passwordRegex = /^\d+$/;
let strength = document.querySelector("#strength");
passw.addEventListener("blur", function () {
    if (passwordRegex.test(passw.value)) {
        if (passw.value.length < 3) {
            strength.textContent = "password too weak";
            strength.classList.add("strength");
        }
        else if (passw.value.length <= 6) {
            strength.textContent = " week password";
            strength.classList.add("strength");
        }
        else {
            strength.textContent = " good password";
            strength.style.color = "green"

        }
    }
    else {
        strength.textContent = "incorect password";
    }

})

// show and hide password of confer_password
let strength_pass = document.querySelector("#strength_pass")
let confer_password = document.querySelector("#confer_password");
let show_con_Password = document.querySelector("#show_con_Password");

// show and hide the password of conf_password.....
show_con_Password.addEventListener("click", function () {

    if (confer_password.type === "password") {
        confer_password.type = "text";

    }
    else {
        confer_password.type = "password";

    }

});

// adding confirm password box..........

confer_password.addEventListener("blur", function () {
    if (confer_password.value == passw.value) {
        strength_pass.textContent = "";
    }
    else {
        strength_pass.textContent = "password not match";
        strength_pass.style.color = "red";
    }

})



// working on emmail box.......

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

email.addEventListener("blur", function () {

    if (emailRegex.test(email.value)) {
        span_email.textContent = "Valid email format";
        span_email.style.color = "green";
    }
    else if (email.value.trim() === "") {
        span_email.textContent = "Please enter your email.";
        span_email.classList.add("h5")
    }
    else if (!emailRegex.test(email.value)) {
        span_email.textContent = "invalid email format";
        span_email.style.color = "red";
    }
    else {
        span_email.textContent = "";

    }
});

// Validate login form
login.addEventListener("click", function () {



    if (email.value.trim() === "") {
        message.textContent = "Please enter your email.";
        message.style.color = "red";
    }

    else if (passw.value.trim() === "") {
        message.textContent = "Please enter your password.";
        message.style.color = "red";
    }

    else {
        message.textContent = "All details are filled in!";
        message.style.color = "green";
    }
    if (confer_password.value.trim() === "") {
        message.textContent = "Please confirm your password.";
        message.style.color = "red";
    }
    else if (confer_password.value !== passw.value) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
    }

});

confer_password.addEventListener("input", function () {
    if (confer_password.value.trim() === "") {
        message.textContent = "Please confirm your password.";
        message.style.color = "red";
    }
    else if (confer_password.value !== passw.value) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
    }
})

// now adding light and dark mode 




