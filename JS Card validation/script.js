let cardOwnerName,
  cardNumberPart1,
  cardNumberPart2,
  cardNumberPart3,
  cardNumberPart4,
  cvvNumber,
  expMonth,
  expYear;
let resetTextBoxColors = () => {
  document.querySelector("#cardOwnerName").style.border =
    "3px solid rgb(185, 185, 255)";
  document.querySelector("#cardNumberPart1").style.border =
    "3px solid rgb(185, 185, 255)";
  document.querySelector("#cardNumberPart2").style.border =
    "3px solid rgb(185, 185, 255)";
  document.querySelector("#cardNumberPart3").style.border =
    "3px solid rgb(185, 185, 255)";
  document.querySelector("#cardNumberPart4").style.border =
    "3px solid rgb(185, 185, 255)";
  document.querySelector("#cvvNumber").style.border =
    "3px solid rgb(185, 185, 255)";
  document.querySelector("#expMonth").style.border =
    "3px solid rgb(185, 185, 255)";
  document.querySelector("#expYear").style.border =
    "3px solid rgb(185, 185, 255)";
};

let sendCardInfo = () => {
  resetTextBoxColors();

  cardOwnerName = document.querySelector("#cardOwnerName").value;
  cardNumberPart1 = document.querySelector("#cardNumberPart1").value;
  cardNumberPart2 = document.querySelector("#cardNumberPart2").value;
  cardNumberPart3 = document.querySelector("#cardNumberPart3").value;
  cardNumberPart4 = document.querySelector("#cardNumberPart4").value;
  cvvNumber = document.querySelector("#cvvNumber").value;
  expMonth = document.querySelector("#expMonth").value;
  expYear = document.querySelector("#expYear").value;

  function hasNumbers(input) {
    var regex = /\d/;
    return regex.test(input);
  }

  //! GENERAL TESTING!!!
  if (
    !cardOwnerName ||
    !cardNumberPart1 ||
    !cardNumberPart2 ||
    !cardNumberPart3 ||
    !cardNumberPart4 ||
    !cvvNumber ||
    !expMonth ||
    !expYear
  ) {
    if (!cardOwnerName) {
      document.getElementById("cardOwnerName").style.border = "3px solid red";
    } else {
      document.getElementById("cardOwnerName").style.border =
        "3px solid rgb(185, 185, 255)";
    }

    if (!cardNumberPart1) {
      document.getElementById("cardNumberPart1").style.border = "3px solid red";
    } else {
      document.getElementById("cardNumberPart1").style.border =
        "3px solid rgb(185, 185, 255)";
    }

    if (!cardNumberPart2) {
      document.getElementById("cardNumberPart2").style.border = "3px solid red";
    } else {
      document.getElementById("cardNumberPart2").style.border =
        "3px solid rgb(185, 185, 255)";
    }

    if (!cardNumberPart3) {
      document.getElementById("cardNumberPart3").style.border = "3px solid red";
    } else {
      document.getElementById("cardNumberPart3").style.border =
        "3px solid rgb(185, 185, 255)";
    }

    if (!cardNumberPart3) {
      document.getElementById("cardNumberPart3").style.border = "3px solid red";
    } else {
      document.getElementById("cardNumberPart3").style.border =
        "3px solid rgb(185, 185, 255)";
    }

    if (!cardNumberPart4) {
      document.getElementById("cardNumberPart4").style.border = "3px solid red";
    } else {
      document.getElementById("cardNumberPart4").style.border =
        "3px solid rgb(185, 185, 255)";
    }

    if (!cvvNumber) {
      document.getElementById("cvvNumber").style.border = "3px solid red";
    } else {
      document.getElementById("cvvNumber").style.border =
        "3px solid rgb(185, 185, 255)";
    }

    if (!expMonth) {
      document.getElementById("expMonth").style.border = "3px solid red";
    } else {
      document.getElementById("expMonth").style.border =
        "3px solid rgb(185, 185, 255)";
    }

    if (!expYear) {
      document.getElementById("expYear").style.border = "3px solid red";
    } else {
      document.getElementById("expYear").style.border =
        "3px solid rgb(185, 185, 255)";
    }
  } else {
    document.querySelector(".input").style.border =
      "3px solid rgb(185, 185, 255)";
  }

  //! ALL INDIVIDUAL TESTING BEGINS HERE!!!

  //Counts how many valid inputs are there
  let validInput_count = 0;

  //* Card owner name validation
  if (hasNumbers(cardOwnerName) || /[!@#$%^&*]/.test(cardOwnerName)) {
    document.getElementById("cardOwnerHeaderText").innerHTML = "Invalid name";
    document.getElementById("cardOwnerHeaderText").style.color = "red";
    document.getElementById("cardOwnerName").style.border = "3px solid red";
  } else if (!cardOwnerName) {
    document.getElementById("cardOwnerHeaderText").innerHTML =
      "Enter your name";
    document.getElementById("cardOwnerName").style.border = "3px solid red";
    document.getElementById("cardOwnerHeaderText").style.color = "red";
  } else {
    //; VALID INPUT
    document.getElementById("cardOwnerHeaderText").innerHTML = "Card Owner";
    document.getElementById("cardOwnerHeaderText").style.color =
      "rgb(114, 114, 114)";

    validInput_count += 1;
  }

  //* Card number validation
  // String validation
  cardNumber =
    cardNumberPart1 + cardNumberPart2 + cardNumberPart3 + cardNumberPart4;
  if (
    cardNumber.length !== 16 ||
    !hasNumbers(cardNumber) ||
    isNaN(cardNumber)
  ) {
    document.getElementById("cardNumberHeaderText").innerHTML = "Invalid Card";
    document.getElementById("cardNumberHeaderText").style.color = "red";
    document.querySelectorAll(".numb-input").forEach(function (element) {
      element.style.border = "3px solid red";
    });
  } else {
    //; VALID INPUT
    document.getElementById("cardNumberHeaderText").innerHTML = "Card Number";
    document.getElementById("cardNumberHeaderText").style.color =
      "rgb(114, 114, 114)";
    document.querySelectorAll(".numb-input").forEach(function (element) {
      element.style.border = "3px solid rgb(185, 185, 255)";
    });

    validInput_count += 1;
  }
  // Actual card validation
  let cardNumber_sum_odd = 0;
  let cardNumber_sum_even = 0;
  let cardNumber_sum_total = 0;

  let cardNumber_validator = cardNumber;

  // Reverse string function
  function reverseString(str) {
    if (str === "") return "";
    else return reverseString(str.substr(1)) + str.charAt(0);
  }
  // Addition of odd digit function (for cardNumber_sum_odd)
  function sumOddPlace(number) {
    const numberStr = number.toString();
    let sum = 0;

    for (let i = 0; i < numberStr.length; i += 2) {
      sum += parseInt(numberStr[i]);
    }

    return sum;
  }
  // Addition and multiplication of even digit (for cardNumber_sum_even)
  function sumDoubleEvenPlace(number) {
    const numberStr = number.toString();
    let sum = 0;

    for (let i = 1; i < numberStr.length; i += 2) {
      let digit = parseInt(numberStr[i]) * 2;
      if (digit > 9) {
        digit = digit - 9;
      }
      sum += digit;
    }

    return sum;
  }

  cardNumber_validator = reverseString(cardNumber_validator);
  cardNumber_sum_odd = sumOddPlace(cardNumber_validator);
  cardNumber_sum_even = sumDoubleEvenPlace(cardNumber_validator);
  cardNumber_sum_total = cardNumber_sum_odd + cardNumber_sum_even;
  if (cardNumber_sum_total == 0) {
    document.getElementById("cardNumberHeaderText").innerHTML = "Invalid Card";
    document.getElementById("cardNumberHeaderText").style.color = "red";
    document.querySelectorAll(".numb-input").forEach(function (element) {
      element.style.border = "3px solid red";
    });
  } else if (cardNumber_sum_total % 10 == 0) {
    //; VALID INPUT
    document.getElementById("cardNumberHeaderText").innerHTML = "Card Number";
    document.getElementById("cardNumberHeaderText").style.color =
      "rgb(114, 114, 114)";
    document.querySelectorAll(".numb-input").forEach(function (element) {
      element.style.border = "3px solid rgb(185, 185, 255)";
    });

    validInput_count += 1;
  } else {
    document.getElementById("cardNumberHeaderText").innerHTML = "Invalid Card";
    document.getElementById("cardNumberHeaderText").style.color = "red";
    document.querySelectorAll(".numb-input").forEach(function (element) {
      element.style.border = "3px solid red";
    });
  }
  //* CVV validation
  let cvvNumberInput = document.querySelector("#cvvNumber");
  let cvvNumberHeaderText = document.querySelector("#cvvNumberHeaderText");
  let expDateHeaderText = document.querySelector("#expDateHeaderText");

  if (!cvvNumberInput.value || cvvNumberInput.value.length < 3) {
    cvvNumberHeaderText.innerHTML = "Invalid CVV";
    cvvNumberHeaderText.style.color = "red";
    cvvNumberInput.style.border = "3px solid red";
    expDateHeaderText.classList.add("expDateHeaderTextEdit3");
    expDateHeaderText.classList.remove("expDateHeaderTextEdit2");
    expDateHeaderText.classList.remove("expDateHeaderTextEdit");
  } else {
    //; VALID INPUT
    cvvNumberHeaderText.innerHTML = "CVV";
    cvvNumberHeaderText.style.color = "rgb(114, 114, 114)";
    expDateHeaderText.classList.remove("expDateHeaderTextEdit");
    expDateHeaderText.classList.remove("expDateHeaderTextEdit3");
    expDateHeaderText.classList.add("expDateHeaderTextEdit2");

    validInput_count += 1;
  }

  //* Expiration date validation
  let expMonthInput = document.querySelector("#expMonth");
  let expYearInput = document.querySelector("#expYear");

  if (
    !expMonth ||
    expMonth >= 13 ||
    expMonth <= 0 ||
    !expYear ||
    expYear < 24
  ) {
    expDateHeaderText.innerHTML = "Invalid date";
    expDateHeaderText.classList.remove("expDateHeaderTextEdit3");
    expDateHeaderText.classList.remove("expDateHeaderTextEdit");
    expDateHeaderText.classList.add("expDateHeaderTextEdit");
    expMonthInput.style.border = "3px solid red";
    expYearInput.style.border = "3px solid red";
    expDateHeaderText.style.color = "red";
  } else {
    //; VALID INPUT
    expDateHeaderText.innerHTML = "Expiration Date";
    expDateHeaderText.classList.remove("expDateHeaderText2");
    expMonthInput.style.border = "3px solid rgb(185, 185, 255)";
    expYearInput.style.border = "3px solid rgb(185, 185, 255)";
    expDateHeaderText.style.color = "rgb(114, 114, 114)";

    validInput_count += 1;
  }
  if (validInput_count == 5) {
    successScreen();
  }
};

let successScreen = () => {
  // Show loading screen
  document.querySelector(".loading-screen").style.display = "block";

  // Hides card details and header texts
  document.querySelector("#cardDetailsHeaderText").style.display = "none";
  document.querySelector("#cardOwnerName").style.display = "none";
  document.querySelector("#cardNumberPart1").style.display = "none";
  document.querySelector("#cardNumberPart2").style.display = "none";
  document.querySelector("#cardNumberPart3").style.display = "none";
  document.querySelector("#cardNumberPart4").style.display = "none";
  document.querySelector("#cvvNumber").style.display = "none";
  document.querySelector("#expMonth").style.display = "none";
  document.querySelector("#expYear").style.display = "none";
  document.querySelector("#cardOwnerHeaderText").style.display = "none";
  document.querySelector("#cardNumberHeaderText").style.display = "none";
  document.querySelector("#cvvNumberHeaderText").style.display = "none";
  document.querySelector("#expDateHeaderText").style.display = "none";
  document.querySelector("#sendCardInfoBtn").style.display = "none";

  setTimeout(() => {
    document.querySelector(".loading-screen").style.display = "none";
    document.querySelector(".confirmation-screen-container").style.display =
      "block";
  }, 3000);
};
