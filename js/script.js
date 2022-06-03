//created IIFE function to validate E-Mail and phone

(function () {
    let form = document.querySelector(".contact-form");
    let emailInput = document.querySelector("#contact-email");
    let phoneInput = document.querySelector("#telephone");
  
    function showErrorMessage(input, message) {
      let container = input.parentElement; // The .input-wrapper
  
      // Remove an existing error
      let error = container.querySelector(".error-message");
      if (error) {
        container.removeChild(error);
      }
  
      // Now add the error, if the message is not empty
      if (message) {
        let error = document.createElement("div");
        error.classList.add("error-message");
        error.innerText = message;
        container.appendChild(error);
      }
    }
  
    //function to validate if e-mail is valid
  
    function validateEmail() {
      let value = emailInput.value;
  
      if (value.indexOf("@") === -1) {
        showErrorMessage(emailInput, "You must enter a valid e-mail address.");
        return false;
      }
  
      showErrorMessage(emailInput, null);
      return true;
    }
  
    function validateForm() {
      let isValidEmail = validateEmail();
      return isValidEmail;
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert("Success!");
      }
    });
  
    emailInput.addEventListener("input", validateEmail);
  
    //function to validate if input in Telephone field are numbers
  
    function validatePhone() {
      let value = phoneInput.value;
      if (isNaN(value)) {
        showErrorMessage(phoneInput, "You must enter numbers.");
        return false;
      }
  
      showErrorMessage(phoneInput, null);
      return true;
    }
  
    function validateForm() {
      let isValidPhone = validatePhone();
      return isValidPhone;
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert("Success!");
      }
    });
  
    phoneInput.addEventListener("input", validatePhone);
  })();
  