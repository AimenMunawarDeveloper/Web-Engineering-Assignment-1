/********************************************************* 
      Task 2: DOM Manipulation
********************************************************* */
// Modal and Form Elements
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
const getStartedBtn = document.querySelector(".getStartedBtn");

const addPlanModal = document.getElementById("addPlanModal");
const closeModal = document.getElementById("closeModal");

const addPlanForm = document.getElementById("addPlanForm");
const pricingCardsContainer = document.getElementById("pricingCardsContainer");
const pricingSection = document.querySelector(".pricing-section");
const featureImages = document.querySelectorAll(".feature-image");

getStartedBtn.addEventListener("click", () => {
  pricingSection.scrollIntoView({ behavior: "smooth" });
});

addItemBtn.addEventListener("click", () => {
  addPlanModal.style.display = "flex";
});

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
featureImages.forEach((image) => {
  const originalSrc = image.getAttribute("data-original");
  const hoverSrc = image.getAttribute("data-hover");

  // Change the image source on hover
  image.addEventListener("mouseover", () => {
    image.src = hoverSrc;
  });

  image.addEventListener("mouseout", () => {
    image.src = originalSrc;
  });
});
