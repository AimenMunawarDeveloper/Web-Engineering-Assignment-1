const showDetailsBtns = document.querySelectorAll(".btn__show");
const hideDetailsBtns = document.querySelectorAll(".btn__hide");
const changeBackgroundBtn = document.querySelector(".btn__bg");
const changeTextStyleBtn = document.querySelector(".btn__txt__style");
const resetTextStyleBtn = document.querySelector(".btn__reset__txt__style");
const learnMoreBtn = document.querySelector(".btn__learn__more");
const introSection = document.querySelector(".section__intro");

const fontStyleArray = ["normal", "italic", "oblique"];
const fontWeightArray = ["normal", "lighter", "bold", "bolder"];
const previousStyle = new Map();

/*Smooth scrolling */
learnMoreBtn.addEventListener("click", () => {
  introSection.scrollIntoView({ behavior: "smooth" });
});

/********************************************************* 
      Task 1: JavaScript Functions and Event Handling
********************************************************* */
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
const generateRandomColor = () => {
  // Generating a random number between 0 and 16777215 (the range of RGB colors) and converting it to a hexadecimal string
  return Math.floor(Math.random() * 16777215).toString(16);
};
// implementing changing background color functionality
changeBackgroundBtn.addEventListener("click", (e) => {
  console.log(e.target);
  const requiredSection = e.target.closest("section");
  requiredSection.style.backgroundColor = `#${generateRandomColor()}`;
});

/********************************************************* 
                Task 3: Dynamic Styling
********************************************************* */
const changeTextStyle = (e) => {
  console.log(e.target);
  const requiredSection = e.target.closest("section");

  // saving the text style of section in the map before modifying it
  if (!previousStyle.has(requiredSection)) {
    previousStyle.set(requiredSection, {
      fontStyle: requiredSection.style.fontStyle,
      fontWeight: requiredSection.style.fontWeight,
      color: requiredSection.style.color,
    });
  }
  // generating and setting random font style,text color,font weight
  requiredSection.style.fontStyle =
    fontStyleArray[Math.floor(Math.random() * fontStyleArray.length)];
  requiredSection.style.color = `#${generateRandomColor()}`;
  requiredSection.style.fontWeight =
    fontWeightArray[Math.floor(Math.random() * fontWeightArray.length)];
};
const resetTextStyle = (e) => {
  const requiredSection = e.target.closest("section");

  if (previousStyle.has(requiredSection)) {
    // getting the values from the map
    const { fontStyle, fontWeight, color } = previousStyle.get(requiredSection);
    // resetting the values
    requiredSection.style.fontStyle = fontStyle;
    requiredSection.style.fontWeight = fontWeight;
    requiredSection.style.color = color;
  }
};
changeTextStyleBtn.addEventListener("click", changeTextStyle);
resetTextStyleBtn.addEventListener("click", resetTextStyle);
