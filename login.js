// Variable to count number of attempts
var attempt = 3; 
//Function Executes on click of login button
function validate(){
// Variable username
var username = document.getElementById("username").value;
// Variable password
var password = document.getElementById("password").value;
//conditions to be executed
if ( username == "Admin" && password == "secret")

{
 // Redirecting and login to other page.
window.location = "index.html " ; 
alert 
return false;
}
else{
attempt --;
// Decrementing by one attempt
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username")= true;
document.getElementById("password") = true;
document.getElementById("submit") = true;


return false;
}
}
}