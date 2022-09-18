let billCost = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let tipAmount = 0;
let totalAmount = 0;

document.querySelector(".tip_div").addEventListener("click", function (event) {
  console.log(event.target.innerText);
  buttonClick(event.target.innerText);
});

function getCost() {
  billCost = document.querySelector(".cost_input").value;
  console.log(billCost);
}

function getPpl() {
  if (document.querySelector("#people_input").value != null) {
    console.log("is not null");
    numberOfPeople = document.querySelector("#people_input").value;
    console.log("numberOfPeople is equal to: " + numberOfPeople);
  } else {
    console.log("is null"); //test to ensure that numberOfPeople was not auto set to null, as was receiving errors. Thos logical test cleared up any confusion using the console an chrome developer tools
  }
  mainTipFunc();
  mainTotalPerPerson();
}

function buttonClick(value) {
  switch (value) {
    case "2%":
      tipPercentage = 0.02;
      console.log("tip is " + tipPercentage);
      break;
    case "5%":
      tipPercentage = 0.05;
      console.log("tip is " + tipPercentage);
      break;
    case "10%":
      tipPercentage = 0.1;
      console.log("tip is " + tipPercentage);
      break;
    case "15%":
      tipPercentage = 0.15;
      console.log("tip is " + tipPercentage);
      break;
    case "20%":
      tipPercentage = 0.2;
      console.log("tip is " + tipPercentage);
      break;
  }
}

function customTipFunc() {
  tipPercentage = document.getElementById("choice6").value;
  tipPercentage /= 100;
  console.log("Custom tip percentage value is " + tipPercentage);
}

function mainTipFunc() {
  tipAmount = parseFloat((billCost * tipPercentage) / numberOfPeople);
  console.log(
    "Bill cost is: " +
      billCost +
      ". Tip percentage is " +
      tipPercentage +
      ". Number of people is " +
      numberOfPeople
  );
  console.log("final tip amount per person is: " + tipAmount);
  tipAmount = Math.round((tipAmount + Number.EPSILON) * 100) / 100;
  document.getElementById("tippp_result").innerHTML = "$" + tipAmount;
}

function mainTotalPerPerson() {
  totalAmount = billCost / numberOfPeople + tipAmount;
  console.log("Total per person is: " + totalAmount);
  totalAmount = Math.round((totalAmount + Number.EPSILON) * 100) / 100;
  document.getElementById("totalpp_result").innerHTML = "$" + totalAmount;
}

function resetValues() {
  document.getElementById("tippp_result").innerHTML = "$" + "0.00";
  document.getElementById("totalpp_result").innerHTML = "$" + "0.00";
  billCost = 0;
  tipPercentage = 0;
  numberOfPeople = 0;
}
