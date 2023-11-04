const accountBalance = 50000;
const password = 1234;
alert("Welcome to Rex Bank")

let passwordField = prompt("Input your password")

if(passwordField == password){
  let withdrawAmount = prompt("How much do you want to withdraw")

  if( withdrawAmount > accountBalance ){
  alert("insufficient funds")
  }

 else if( withdrawAmount > 0 && accountBalance > withdrawAmount || withdrawAmount == accountBalance ){
 confirm("Do you wish to continue the withdrawal of" + " " + "₦"  + withdrawAmount + " "  + "from your account?" );
  alert("withdrawal in progress please wait...");
  alert("Please take your" + " " + "₦" + withdrawAmount + " " + "cash");
  let balance = accountBalance - withdrawAmount
  alert ( "Your balance is" + " " + "₦"  + balance  )
  }
  if (withdrawAmount <= 0 ) {
   alert("you cant withraw that"); 
    alert("That amount isn't valid for withdrawal")
    var newAmount = prompt("Enter a valid amount")
  }
}
if (newAmount > accountBalance){
    alert("Insufficient fund")
  }
  
  if( newAmount > 0 && accountBalance >  newAmount || newAmount == accountBalance){
   confirm("Do you wish to continue the withdrawal of" + " " + "₦"  + newAmount + " "  + "from your account?" );
 alert("withdrawal in progress please wait...");
  alert("Please take your" + " " + "₦" + newAmount + " " + "cash");
  var balance = accountBalance - newAmount
  alert ( "Your balance is" + " " + "₦"  + balance )
   }

 if(  newAmount <= 0 ){
    alert("You have inputted an invalid amount twice, please carefully start all over again")
  }
    
else if ( passwordField != password){
  alert("Incorrect Pin")
  alert("You have one more pin trial")
  alert("If you input the wrong pin again, your acount would be suspended")
  let newPin = prompt("Input a correct pin")
if (newPin != password) {
    alert("You account has been suspended, kindly see a customer care assistant for help")
}
  if (newPin == password){
    var withdrawAmount = prompt("How much do you want to withdraw")
  }
  if (withdrawAmount > accountBalance){
    alert("Insufficient fund")
  }
   if( withdrawAmount <= 0 ){
    alert("That amount isn't valid for withdrawal")
    var withdrawAmount = prompt("How much do you want to withdraw")
  }
  if( withdrawAmount > 0 && accountBalance > withdrawAmount || withdrawAmount == accountBalance ){
 confirm("Do you bulaba to continue the withdrawal of" + " " + "₦"  + withdrawAmount + " "  + "from your account?" );
  alert("withdrawal in progress please wait...");
  alert("Please take your" + " " + "₦" + withdrawAmount + " " + "cash");
  let balance = accountBalance - withdrawAmount
  alert ( "Your balance is" + " " + "₦"  + balance )
  }
}


