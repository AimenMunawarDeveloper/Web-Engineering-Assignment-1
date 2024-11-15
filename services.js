// Modal and Form Elements
const addItemBtn = document.getElementById("addItemBtn");
const addPlanModal = document.getElementById("addPlanModal");
const closeModal = document.getElementById("closeModal");
const addPlanForm = document.getElementById("addPlanForm");
const pricingCardsContainer = document.getElementById("pricingCardsContainer");

// Open Modal
addItemBtn.addEventListener("click", () => {
  addPlanModal.style.display = "flex";
});

// Close Modal
closeModal.addEventListener("click", () => {
  addPlanModal.style.display = "none";
});

// Add New Plan
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

  // Append the new card
  pricingCardsContainer.appendChild(newCard);

  // Clear the form and close the modal
  addPlanForm.reset();
  addPlanModal.style.display = "none";
});
