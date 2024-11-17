/********************************************************* 
      Task 4: Form Validation
********************************************************* */
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  const isValid = validate();
  if (isValid) {
    this.submit();
  }
});
const validate = function () {
  const name = document.querySelector('input[name="name"]').value.trim();
  const phone = document.querySelector('input[name="phone"]').value;
  const email = document.querySelector('input[name="email"]').value;

  // clearing the previous error messages
  document.getElementById("name").innerHTML = "";
  document.getElementById("phone").innerHTML = "";
  document.getElementById("email").innerHTML = "";

  // Name validation: Name must not be empty
  if (name === "") {
    document.getElementById("name").innerHTML = "Please enter your name";
    return false; // Return immediately if validation fails
  }

  // Phone Number validation: Phone number must contain only digits.
  const verifyingPhone = phone.split("-");
  if (
    verifyingPhone.length !== 3 ||
    verifyingPhone[0].length !== 3 ||
    verifyingPhone[1].length !== 3 ||
    verifyingPhone[2].length !== 4 ||
    verifyingPhone.some(
      (segment) => segment.trim() === "" || !/^\d+$/.test(segment)
    ) // Ensuring the segment contains only digits and the the segment is not just empty spaces
  ) {
    document.getElementById("phone").innerHTML =
      "Please enter a valid phone number in the format XXX-XXX-XXXX. " +
      "The first two segments should be 3 digits each, followed by a 4-digit segment (e.g., 123-456-7890), and must contain only digits.";
    return false; // Return immediately if validation fails
  }

  // Email validation: Email must be in the correct format (e.g., example@domain.com).
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // checking for valid local(before @), domain(after @), and 2-6 letter domain extension.
  if (!emailPattern.test(email)) {
    document.getElementById("email").innerHTML =
      "Please enter a valid email address. It should include '@' and a valid domain (e.g., example@domain.com).";
    return false; // Return immediately if validation fails
  }

  // If no validation errors, display success message
  alert(
    `The form has been submitted\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}`
  );
  return true; // Return true only if all validations passed
};
