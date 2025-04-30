console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//----------------------------------------------------------------------
//Exercise 1: Favorite number game
//----------------------------------------------------------------------
let favNum = Math.floor(Math.random() * 11);
let guessNum = window.prompt("Guess my favorite number (0-10)!");

if(guessNum < favNum){
  console.log("too low");
}
else if(guessNum > favNum){
  console.log("too high");
}
else{
  console.log("Congratulations!");
}

//-----------------------------------------------------------------------
//Exercise 2: Birth month season
//-----------------------------------------------------------------------
let birthMonth = window.prompt("What is your birth month?");
birthMonth = birthMonth.toLowerCase();

switch(birthMonth) {
  //spring
  case "3":
  case "march":
  case "mar":
  case "4":
  case "april":
  case "apr":
  case "5":
  case "may":
    console.log("You have a spring birthday!");
    break;
  //summer
  case "6":
  case "june":
  case "jun":
  case "7":
  case "july":
  case "jul":
  case "8":
  case "august":
  case "aug":
    console.log("You have a summer birthday!");
    break;
  //autumn
  case "9":
  case "september":
  case "sept":
  case "10":
  case "october":
  case "oct":
  case "11":
  case "november":
  case "nov":
    console.log("You have an autumn birthday!");
    break;
  //winter
  case "12":
  case "december":
  case "dec":
  case "1":
  case "january":
  case "jan":
  case "2":
  case "february":
  case "febuary":
  case "feb":
    console.log("You have a winter birthday!");
    break;
  default:
    console.log("Invalid entry");
}

//-----------------------------------------------------------------------
//Exercise 3: Business logic product codes
//-----------------------------------------------------------------------
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId){
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch(colorId){
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch(sizeId){
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);