/********************************************************* 
      Task 4: Form Validation
********************************************************* */
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  //getting the values
  const name = document.querySelector('input[type="text"]').value.trim();
  const phone = document.querySelector('input[type="tel"]').value;
  //seeting the ids.
  document.getElementById("name").innerHTML = "";
  document.getElementById("phone").innerHTML = "";

  const validity = false;
  // checking the name
  if (name === "") {
    document.getElementById("name").innerHTML = "Please enter your name";
    validity = true;
  }
  //checking the phone validity
  const varifyingPhone = phone.split("-");
  //checking length and pattern

  if (
    varifyingPhone.length !== 3 ||
    varifyingPhone[0].length !== 3 ||
    varifyingPhone[1].length !== 3 ||
    varifyingPhone[2].length !== 4
  ) {
    document.getElementById("phone").innerHTML =
      "Please enter number according to XXX-XXX-XXXX";
    validity = true;
  }
  //checking if its a number
  if (
    varifyingPhone.length === 3 &&
    varifyingPhone[0].length === 3 &&
    varifyingPhone[1].length === 3 &&
    varifyingPhone[2].length === 4
  ) {
    for (let i = 0; i < varifyingPhone.length; i++) {
      {
        if (isNaN(varifyingPhone[i])) {
          document.getElementById("phone").innerHTML = "Please enter digits";
          validity = true;
          break;
        }
      }
    }
  }

  //if all the checks pass, it will give an alert
  if (!validity) {
    //emptying the values after submission
    document.querySelector('input[type="text"]').value = "";
    document.querySelector('input[type="tel"]').value = "";
    document.querySelector('input[type="email"]').value = "";
    document.querySelector("textarea").value = "";
    //generating the alert.
    alert("The form has been submitted");
  }
});
