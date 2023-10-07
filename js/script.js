const password = document.getElementById("password");
const eye = document.getElementById("eye");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text"; 
    eye.src = "logo/eye.svg";
  } else {
    password.type = "password"; 
    eye.src = "logo/eye-off.svg"; 
  }
});
