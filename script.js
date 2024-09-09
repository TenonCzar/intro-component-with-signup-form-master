const form = document.getElementById("form");
const formBtn = document.getElementById("form-btn");
const nmeErr = document.querySelector(".nme-err");
const lastNmeErr = document.querySelector(".lstnme-err");
const passwordErr = document.querySelector(".pwrd-err");
const mailErr = document.querySelector(".mail-err");
const errorImg = document.querySelector(".first");
const scndErrorImg = document.querySelector(".scnd");
const thrdErrorImg = document.querySelector(".thrd");
const fourthErrorImg = document.querySelector(".fourth");

formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form));

  let valid = true;
  let invalid = '!"#$%^&*([{-=+`~}])/|?';
  let mailvalid = "@";

  //   getting name errors
  for (let char of invalid) {
    if (formData.firstname.includes(char)) {
      nmeErr.innerText = `Name cannot include ${char}`;
      errorImg.classList.remove("hidden");
      valid = false;
      break;
    }
  }
  if (!formData.firstname) {
    nmeErr.innerText = "First Name cannot be empty";
    errorImg.classList.remove("hidden");
    valid = false;
  }

  for (let char of invalid) {
    if (formData.last.includes(char)) {
      lastNmeErr.innerText = `Last Name cannot be include ${char}`;
      scndErrorImg.classList.remove("hidden");
      valid = false;
      break;
    }
  }

  if (!formData.last) {
    lastNmeErr.innerText = "Last Name cannot be empty";
    scndErrorImg.classList.remove("hidden");
    valid = false;
  }
  // getting mail errors
  for (let char of mailvalid) {
    if (!formData.email.includes(char)) {
      mailErr.innerText = `Email must include ${char}`;
      thrdErrorImg.classList.remove("hidden");
      valid = false;
    }
  }

  for (let char of invalid) {
    if (formData.email.includes(char)) {
      mailErr.innerText = `Email cannot include ${char}`;
      thrdErrorImg.classList.remove("hidden");
      valid = false;
    }
  }

  if (!formData.email.includes(".com")) {
    mailErr.innerText = "Email must end with .com";
    thrdErrorImg.classList.remove("hidden");
    valid = false;
  }

  if (!formData.email) {
    mailErr.innerText = "Email cannot be empty";
    thrdErrorImg.classList.remove("hidden");
    valid = false;
  }

  // getting password errors
   
    if (formData.password.length <= 6) {
      passwordErr.innerText = "Password cannot be less than 7";
      fourthErrorImg.classList.remove("hidden");
      valid = false;
    }

  if (!formData.password) {
      passwordErr.innerText = "Password cannot be empty";
      fourthErrorImg.classList.remove("hidden");
      valid = false;
    }
   
    
  if (valid) {
    form.submit();
  }
});
