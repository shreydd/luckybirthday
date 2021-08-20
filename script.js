const dateOfBirth = document.querySelector('#birth-date');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-number');
const outputBox = document.querySelector('#output-box');

function compareValues(sum, luckyNumber){
  // console.log(sum, luckyNumber);
  if(sum % luckyNumber === 0){
    // console.log("yo lucky");
    outputBox.innerText = "You are lucky 🤘🏽"
  }else{
    outputBox.innerText = "Sorry, you are out of luck :("
  }
}

function checkIfLucky(){
  const dob = dateOfBirth.value;
  const sum = calSum(dob);
  console.log(sum);
  if(sum && luckyNumber)
    compareValues(sum, luckyNumber.value);
  else 
    outputBox.innerText= "Please enter the values!";
}

function calSum(dob){
  dob = dob.replaceAll("-","");
  let sum = 0;
  for(let i=0; i<dob.length; i++){
    sum += Number(dob.charAt(i));
  }
  return sum;
}

checkButton.addEventListener('click', checkIfLucky);