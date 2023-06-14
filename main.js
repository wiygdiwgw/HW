const form = document.querySelector("#myForm");
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const passwordInput = document.querySelector("#password");
const password2Input = document.querySelector("#password2");
const userInfoDiv = document.querySelector("#userInfo");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const number = numberInput.value.trim();
  const password = passwordInput.value.trim();
  const password2 = password2Input.value;

  if (!name) {
    alert("Enter your username");
    return;
  }

  if (password.length < 8) {
    alert("Password has to be atleast 8 symbols long!");
    return;
  }

  if (!number) {
    alert("Phone number should only be out of numbers");
    return;
  }

  if (password !== password2) {
    alert("Both passwords should match");
    return;
  }

  localStorage.setItem("username", name);
  console.log("Your form was saved in localStorage");

  form.reset();
});

const loadButton = document.querySelector("#loadButton");

loadButton.addEventListener("click", function () {
  const savedName = localStorage.getItem("username");
  if (savedName) {
    userInfoDiv.innerHTML = "Saved username: " + savedName;
  } else {
    userInfoDiv.innerHTML = "No saved information";
  }
});

const clearButton = document.querySelector("#clearButton");

clearButton.addEventListener("click", function () {
  localStorage.removeItem("username");
  userInfoDiv.innerHTML = "Saved information cleared";
});
