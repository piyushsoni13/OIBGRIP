// Declarations
let inputGrp = document.querySelector("#input-group");
let convertGrp = document.querySelector("#convert-group");
let celcius = document.querySelector("#celcius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");
let C = document.querySelector("#C");
let F = document.querySelector("#F");
let K = document.querySelector("#K");
let degree_input = document.querySelector("#degree-input");
let convertBtn = document.querySelector("#convert-btn");
let answerValue = document.querySelector("#answerValue");
let answerUnit = document.querySelector("#answerUnit");
let date = document.querySelector("#date");
let inputValue;
let ansValue;

// Function to display time
setInterval(() => {
  date.innerHTML =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();
}, 1000);

// Function to disable conversion Units
const disableConvertUnit = () => {
  // console.log(inputGrp.value);
  ansValue = 0;
  switch (inputGrp.value) {
    case "C": {
      celcius.disabled = true;
      fahrenheit.disabled = false;
      kelvin.disabled = false;
      break;
    }
    case "F": {
      celcius.disabled = false;
      fahrenheit.disabled = true;
      kelvin.disabled = false;
      break;
    }
    case "K": {
      celcius.disabled = false;
      fahrenheit.disabled = false;
      kelvin.disabled = true;
      break;
    }
  }
};

// Function to disable Input Units
const disableInputUnit = () => {
  // console.log(convertGrp.value);
  ansValue = 0;
  switch (convertGrp.value) {
    case "celcius": {
      C.disabled = true;
      F.disabled = false;
      K.disabled = false;
      break;
    }
    case "fahrenheit": {
      C.disabled = false;
      F.disabled = true;
      K.disabled = false;
      break;
    }
    case "kelvin": {
      C.disabled = false;
      F.disabled = false;
      K.disabled = true;
      break;
    }
  }
};

// Function to handle Calculations
const handleCalculation = () => {
  switch (convertGrp.value) {
    case "celcius": {
      answerUnit.innerHTML = "&nbsp;&#176;C";
      switch (inputGrp.value) {
        case "F": {
          ansValue = ((inputValue - 32) * 5) / 9;
          break;
        }
        case "K": {
          ansValue = inputValue - 273.15;
          break;
        }
      }
      break;
    }
    case "fahrenheit": {
      answerUnit.innerHTML = "&nbsp;&#176;F";
      switch (inputGrp.value) {
        case "C": {
          ansValue = (inputValue * 9) / 5 + 32;
          break;
        }
        case "K": {
          ansValue = ((inputValue - 273.15) * 9) / 5 + 32;
          break;
        }
      }
      break;
    }
    case "kelvin": {
      answerUnit.innerHTML = "&nbsp;K";
      switch (inputGrp.value) {
        case "C": {
          ansValue = inputValue + 273.15;
          break;
        }
        case "F": {
          ansValue = ((inputValue - 32) * 5) / 9 + 273.15;
          break;
        }
      }
      break;
    }
    default: {
      alert("Please select a conversion unit !!!");
      break;
    }
  }
  answerValue.innerHTML = ansValue;
};

disableConvertUnit();
disableInputUnit();

// Event Listeners
degree_input.addEventListener("input", () => {
  inputValue = 0;
  inputValue = inputValue + degree_input.value;
});
inputGrp.addEventListener("change", disableConvertUnit);
convertGrp.addEventListener("change", disableInputUnit);
convertBtn.addEventListener("click", handleCalculation);
