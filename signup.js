const foromvalidations = () => {
  const username = document.getElementById("input-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const description = document.getElementById("description");
  const radio = document.getElementById("profile");
  const radio1 = document.getElementById("profile1");
  const radio2 = document.getElementById("profile2");
  const form = document.getElementById("signup_form");
  const usernameError = document.getElementById("username_error");
  const passwordError = document.getElementById("password_error");
  const emailError = document.getElementById("email_error");
  const descError = document.getElementById("desc_error");
  const radioError = document.getElementById("radio_error");

  const fields = ["username", "email", "password", "description"];
  const rules = {
    username: /^Spider[a-zA-Z0-9_]{3,20}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=.,?/;'-]).{8,}$/,
    description: /^[\s\S]{20,1000}$/,
  };
  const validate = (field, value) => {
    if (!value.trim()) return "Required";
    if (!rules[field].test(value) && field === "password")
      return "Type more than 8 characters. include upercase latters A-Z, numbers and speacial symbols like !@#$%";
    if (!rules[field].test(value) && field === "username")
      return "Type Spider at the start";
    if (!rules[field].test(value) && field === "description")
      return "Type more than 20 characters";
    if (!rules[field].test(value) && field === "email")
      return "You forgot @ or .";
    return null;
  };
  const showError = (field, message, errorDiv) => {
    field.classList.add("invalid");
    errorDiv.textContent = message;
    errorDiv.style.display = "flex";
  };
  const clearError = (field, errorDiv) => {
    field.classList.remove("invalid");
    field.classList.add("valid");
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
  };
  username.addEventListener("blur", () => {
    const error = validate("username", username.value);
    error
      ? showError(username, error, usernameError)
      : clearError(username, usernameError);
  });
  email.addEventListener("blur", () => {
    const error = validate("email", email.value);
    error ? showError(email, error, emailError) : clearError(email, emailError);
  });
  password.addEventListener("blur", () => {
    const error = validate("password", password.value);
    error
      ? showError(password, error, passwordError)
      : clearError(password, passwordError);
  });
  description.addEventListener("blur", () => {
    const error = validate("description", description.value);
    error
      ? showError(description, error, descError)
      : clearError(description, descError);
  });
  function updateRadioError() {
    if (radio.checked || radio1.checked || radio2.checked) {
      radioError.textContent = "";
      radioError.style.display = "none";
    } else {
      radioError.textContent = "required";
      radioError.style.display = "flex";
    }
  }
  form.addEventListener("submit", (e) => {
    console.log("hiiiiri");
    e.preventDefault();
    a = { username, password, description, email };
    updateRadioError();
    if (radioError.textContent == "required") return;
    const allValid = fields.every((f) => validate(f, a[f].value) === null);

    if (allValid) {
      signUp();
    }
  });
};
foromvalidations();

const signUp = () => {
  const username = document.getElementById("input-name");
  const radio = document.getElementById("profile");
  const radio1 = document.getElementById("profile1");
  const radio2 = document.getElementById("profile2");
  const signupform = document.getElementById("signup_form");
  const signUpbutton = document.getElementById("signup-button");
  const description = document.getElementById("description");
  const email = document.getElementById("email");

  const handlehandleSubmitTodo = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);

    if (radio.checked) localStorage.setItem("radio", 1);
    if (radio1.checked) localStorage.setItem("radio", 2);
    if (radio2.checked) localStorage.setItem("radio", 3);
    localStorage.setItem("description", data.description);
    localStorage.setItem("username", data.username);
    username.value = "";
    email.value = "";
    //used AI for this 3 lines
    radio.checked = false;
    radio1.checked = false;
    radio2.checked = false;
    description.value = "";
    signUpbutton.href = "index.html";
    signUpbutton.textContent = "Submitted";
    signUpbutton.className = "active";
  };
  signupform.addEventListener("submit", handlehandleSubmitTodo);
};
