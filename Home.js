const showDetailsBtns = document.querySelectorAll(".btn__show");
const hideDetailsBtns = document.querySelectorAll(".btn__hide");
const changeBackgroundBtn = document.querySelector(".btn__bg");

// implementing the show and hide buttons functionality
const changingCardTextVisibility = function (e, classToAdd, classToRemove) {
  e.preventDefault();
  const btnParent = e.target.parentElement;
  let cardText = null;

  if (btnParent) {
    cardText = Array.from(btnParent.children).find(
      (sibling) => sibling.tagName === "P"
    ); // converting childen node list to array and finding the "p" element in it
  }
  cardText.classList.remove(`${classToRemove}`);
  cardText.classList.add(`${classToAdd}`);
};
showDetailsBtns.forEach((showBtn) => {
  showBtn.addEventListener("click", (e) => {
    changingCardTextVisibility(e, "show", "hide");
  });
});
hideDetailsBtns.forEach((hideBtn) => {
  hideBtn.addEventListener("click", (e) => {
    changingCardTextVisibility(e, "hide", "show");
  });
});
// implementing changing background color functionality
changeBackgroundBtn.addEventListener("click", (e) => {
  console.log(e.target);
  const requiredSection = e.target.closest("section");
  requiredSection.style.backgroundColor = "lightgrey";
});
