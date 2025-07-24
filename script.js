/* ================================================================================== */
/* ===================== SELECT ELEMENT WARM-UP ===================================== */
/* ================================================================================== */

// 1: select the animals select element and store it in a variable

// 2: select the breeds select element and store it in a variable

// 3: select all of the option elements with a [data-theme] attribute and store them in a variable

// 4: add an event listener on the animals select element that listens for the "change" event

//   5: start a loop to iterate over each breed option

//     6: check if the animals select value is not equal to the current breed option's data-breed attribute value

//       7: if they are not equal, hide the current breed option

//       8: if they are equal, do not hide (or show) the current breed option

//   9. check if the breeds select value is NOT equal to an empty string

//     10. if it's not an empty string, set the breeds select value to the second option's value

// TESTING TIP: Select an animal, select a matching breed, then change
// the animal again, see if the breed also changes to "Please choose again"

//==============================================================================//
//====================DON'T CHANGE THE CODE BELOW===============================//
//==============================================================================//
const form = document.querySelector("#form");
const errorMessage = document.querySelector("#error-message");
const successMessage = document.querySelector("#success-message");
successMessage.style.display = "none";
errorMessage.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isMatch =
    (document.querySelector("#animals").value.includes("Dogs") &&
      document.querySelector("#breeds").value.includes("Dogs")) ||
    (document.querySelector("#animals").value.includes("Cats") &&
      document.querySelector("#breeds").value.includes("Cats"));

  if (isMatch) {
    successMessage.style.display = "inherit";
    errorMessage.style.display = "none";
  } else {
    successMessage.style.display = "none";
    errorMessage.style.display = "inherit";
  }
});
