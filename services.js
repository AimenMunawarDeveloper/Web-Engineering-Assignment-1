/********************************************************* 
      Task 2: DOM Manipulation
********************************************************* */
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
const getStartedBtn = document.querySelector(".getStartedBtn");

const addPlanModal = document.getElementById("addPlanModal");
const closeModal = document.getElementById("closeModal");

const addPlanForm = document.getElementById("addPlanForm");
const pricingCardsContainer = document.getElementById("pricingCardsContainer");
const pricingSection = document.querySelector(".pricing-section");
const featureImages = document.querySelectorAll(".feature-image");

// smooth scrolling
getStartedBtn.addEventListener("click", () => {
  pricingSection.scrollIntoView({ behavior: "smooth" });
});
// clicking on addItem button displays the modal window
addItemBtn.addEventListener("click", () => {
  addPlanModal.style.display = "flex";
});
// clicking on closeModal button hides the modal window
closeModal.addEventListener("click", () => {
  addPlanModal.style.display = "none";
});
addPlanForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get Form Values
  const planName = document.getElementById("planName").value;
  const planPrice = document.getElementById("planPrice").value;
  const planDescription = document.getElementById("planDescription").value;
  const planRate = document.getElementById("planRate").value;

  // Create New Pricing Card
  const newCard = document.createElement("div");
  newCard.classList.add("pricing-card");
  newCard.innerHTML = `
  <h3>${planName}</h3>
  <p class="price">$${planPrice} <span>${planRate}</span></p>
  <p class="plan-description">${planDescription}</p>
  <button class="pricing-button">Get Started</button>
`;

  pricingCardsContainer.appendChild(newCard);

  // resetting the values and hiding the form modal
  addPlanForm.reset();
  addPlanModal.style.display = "none";
});
removeItemBtn.addEventListener("click", () => {
  const pricingCardsContainer = document.getElementById(
    "pricingCardsContainer"
  );
  let lastCard = pricingCardsContainer.lastElementChild;
  if (lastCard) {
    pricingCardsContainer.removeChild(lastCard);
  }
});
/********************************************************* 
      Task 5:  Image Rollover Animation
********************************************************* */
featureImages.forEach((image) => {
  const originalSrc = image.getAttribute("data-original");
  const hoverSrc = image.getAttribute("data-hover");

  // Change the image source on hover
  image.addEventListener("mouseover", () => {
    image.src = hoverSrc;
  });
  // Reverting image back to original state when mouse moves away
  image.addEventListener("mouseout", () => {
    image.src = originalSrc;
  });
});
