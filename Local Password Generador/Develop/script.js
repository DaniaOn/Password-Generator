// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

let numb = ["0","1","2","3","4","5","6","7","8","9"]
let symb = ["!","#","$","%","&","'","()","*","+",",","-",".","/",":",";","<","=",">","?", "@", "[\]", "^","_","{","|}~"]
let upp = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let low = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"]
let promptChart = []

function randomInt(min, max){
 if (!max){
  max = min
  min =0
 }
 let random = Math.random()
 return Math.floor(min *(1 -random)+ random*max)
}

function getRandomPassword (password){
  return password [randomInt(0, password.length - 1)]
  }

function generatePassword() {

  let userImput = prompt("Hey, how long you want your password?")

  let passwordlength = parseInt(userImput);

//choose a length of at least 8 to 128 characters
  if (isNaN(passwordlength)){
    window.alert("NOT A NUMBER");
    return
  }
  if (passwordlength < 8 || passwordlength> 128){
    window.alert("choose a length of at least 8 characters and no more than 128 characters");
    return

  }
//character types to include in the password
  let useNumbers = window.confirm("Do you want to include numbers?")
  let useUppercase = window.confirm("Do you want to include uppercase?")
  let useLowercase = window.confirm("Do you want to include lowercase?")
  let useSpecialcha = window.confirm("Do you want to include special characters?")

  if (useNumbers === true){
    promptChart.push(numb)
  }
  if (useUppercase === true){
    promptChart.push(upp)
  }
  if (useLowercase === true){
    promptChart.push(low)
  }
  if (useSpecialcha === true){
    promptChart.push(symb)
  }

//generate de randown password
  let generatedPassword = ""

  for (let i = 0; i<passwordlength; i++){
    var randomPassword = getRandomPassword(promptChart)
    var randomChar = getRandomPassword (randomPassword)
    generatedPassword += randomChar
  }
// this is that make all the magic to appear in the page 
  return generatedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
