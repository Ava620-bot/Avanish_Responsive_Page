
// --------------------- Size & Color Dropdown Menu -------------------------- //

const d1 = document.getElementById("dropdown1");
const d2 = document.getElementById("dropdown2");
const d3 = document.getElementById("dropdown3");
const d4 = document.getElementById("dropdown4");

function dropDownClick(targetDiv) {
  const selectBtn = targetDiv.querySelector(".selectBtn"),
    options = targetDiv.querySelectorAll(".option"),
    sBtn_Text = targetDiv.querySelector(".sBtn-text");

  selectBtn.addEventListener("click", () =>
    targetDiv.classList.toggle("active")
  );

  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_Text.innerText = selectedOption;
      targetDiv.classList.remove("active");
    });
  });
}

dropDownClick(d1);
dropDownClick(d2);
dropDownClick(d3);
dropDownClick(d4);

// --------------------- Total Price Calculation -------------------------- //

// Get the radio buttons and total div
const radioButtons = document.querySelectorAll('input[name="RadioB"]');
const totalDiv = document.getElementById("total");

// Calculate the total based on the selected radio button
function updateTotal() {
  let total = 0;
  radioButtons.forEach((radio) => {
    if (radio.checked) {
      total = radio.value;
    }
  });
  totalDiv.innerText = " : " + total;
  console.log(total);
}

// Add event listeners to the radio buttons
radioButtons.forEach((radio) => {
  radio.addEventListener("change", updateTotal);
});

// Initial update to set the default total value
updateTotal();


// --------------------- Height & Background Updation On Radio Checked -------------------------- //


// function to dynamically change height and background color of boxes

function updateDivColor() {
  const selectedRadioBtn = document.querySelector(
    'input[name="RadioB"]:checked'
  ).value;

  const box1 = document.getElementById("DKK 195.00");
  const box2 = document.getElementById("DKK 345.00");
  const box3 = document.getElementById("DKK 528.00");

  // const box = document.getElementById(selectedRadioBtn);

  // Reset styles of all divs
  box1.style.height = "74.11px";
  box2.style.height = "74.11px";
  box3.style.height = "74.11px";
  box1.style.background = "#FFFF";
  box2.style.background = "#FFFF";
  box3.style.background = "#FFFF";
  box1.classList.remove("selected");
  box2.classList.remove("selected");
  box3.classList.remove("selected");

  // box.style.height = '161.78px';
  // box.style.background = '#F4FBF9';

  const selectedBox = document.getElementById(selectedRadioBtn);
  selectedBox.style.height = "161.78px";
  selectedBox.style.background = "#F4FBF9";
  selectedBox.classList.add("selected");
}

radioButtons.forEach((radio) => {
  radio.addEventListener("change", updateDivColor);
});



// --------------------- Height & Background Updation On Radio Checked -------------------------- //

// Display child div if the radio button is checked

// Getting all parent divs and their corresponding child divs
const parentDivs = document.querySelectorAll(".priceArea"); //parent div
const childDivs = document.querySelectorAll(".grid-container"); //child div

// Function to handle the radio button change event
function handleRadioChange(event) {
  // Hide all child divs
  childDivs.forEach((childDiv) => {
    childDiv.style.opacity = "0";
  });

  // Get the checked parent div
  const checkedParentDiv = event.target.closest(".priceArea");

  // If a parent div is checked, display its child div
  if (checkedParentDiv) {
    const childDiv = checkedParentDiv.querySelector(".grid-container");
    if (childDiv) {
      childDiv.style.opacity = "1";
    }
  }
}

// Add event listener to each radio button
parentDivs.forEach((parentDiv) => {
  const radioButton = parentDiv.querySelector('input[type="radio"]');
  radioButton.addEventListener("change", handleRadioChange);
});
