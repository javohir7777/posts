const registerBtn = document.querySelector(".register-btn");
const firstName = document.querySelector("#firstName").value;
const lastName = document.querySelector("#lastName").value;
const userName = document.querySelector("#userName").value;
const password = document.querySelector("#password").value;
const confirmPasword = document.querySelector("#confirmPasword").value;

registerBtn.addEventListener("click", function () {
  if (
    firstName === "" ||
    lastName === "" ||
    userName === "" ||
    password === "" ||
    confirmPasword === ""
  ) {
    alert("Formalarni to'liq to'ldiring");
  }
  console.log("hi");
});
