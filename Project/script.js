const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var submitError = document.getElementById("submit-error");
function validateName() {
  var name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write Full Name";
    return false;
  }
  nameError.innerHTML = "Valid";
  return true;
}

function validatePhone() {
  var phone = document.getElementById("phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone No is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone No Should be 10 Digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only Digit Please.";
    return false;
  }
  phoneError.innerHTML = "Valid";
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email required";
    return false;
  }
  if (email.match(/^[A-Za-a\._\-[0-9]*[@][A-Za-a]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = "Valid";
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail() || !validatePhone()) {
    submitError.innerHTML = "Please fix Error to Submit";
    submitError.style.display = "block";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
