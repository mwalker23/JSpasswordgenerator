// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = 8 <=15;
var symbols =["!","@","#","$","%"] 
//console.log(symbols);
var lowerLetters = ["a,c,d,e,f,g,h,i,j,k,l,n,m,o,p,q,r,s,t,u,v,w,x,y,z"];
//console.log(lowerLetters);
var upperLetters =["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
//console.log(upperLetters);
var numbers = ["0,1,2,3,4,5,6,7,8,9"];
//console.log(numbers);
var userChoiceOfPassword = [];
 var Newpassword= [];


// Write password to the #password input
function generatePassword(){
  var passwordLength = prompt("How many characters (8-15) would you like your password to contain?");
  //console.log(passwordLength);

  if(isNaN(passwordLength)|| passwordLength < 8 || passwordLength > 15) {
    alert ("PLEASE ENTER RIGHT INFO");
  }
  else {
    var includeNumbers= confirm ("Would you like to include numbers?");
    if(includeNumbers === true){
      userChoiceOfPassword.push(...userChoiceOfPassword, ...numbers)
    }
    console.log('user choice with numbers: ', userChoiceOfPassword);

    var includeSpecChar = confirm ("Do you want special characters?");
    if (includeSpecChar === true){
      userChoiceOfPassword.push(...symbols)
    }
    console.log('user choice with special characters:', userChoiceOfPassword);

    var includeLowerCase = confirm ("Do you want lower case letters?");
    if(includeLowerCase === true){
      userChoiceOfPassword.push(...lowerLetters)
    }
    console.log('user choice with lowercase : ', userChoiceOfPassword);

    var includeUpperCase = confirm ("Do you want upper case letters?");
    if (includeUpperCase===true) {
      userChoiceOfPassword.push(...upperLetters)
    }
    console.log('user choice with uppercase:', ...upperLetters);

    if(!includeNumbers && !includeSpecChar && !includeLowerCase && !includeLowerCase){
      alert("PLEASE SELECT ONE CHARACTER TYPE");
    }


    for (var i = 0; i < passwordLength; i++) {
      console.log("number of characters the user chose: ", passwordLength);

      password=  + userChoiceOfPassword.length;
    }
    return password;

  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


