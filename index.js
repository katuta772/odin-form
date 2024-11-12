function submitForm() {
  let info = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmedPassword: "",
  };

  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");

  if (
    firstName.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    phone.value == "" ||
    password.value == "" ||
    confirmPassword.value == ""
  ) {
    alert("Please complete all the fields!");
  } else if (password.value != confirmPassword.value) {
    alert("Passwords not matching!");
  } else {
    info = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      confirmedPassword: confirmPassword.value,
    };

    console.log(info);

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    password.value = "";
    confirmPassword.value = "";
  }
}
