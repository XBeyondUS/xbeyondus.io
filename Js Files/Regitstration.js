alert(' ERROR:REGISTRATION REQUIRED. Please input the required information below to access the game. ') //Alert message that displays at page login.//


function checkCreds() /*code for the checkCreds function of page 1 */
{
   alert("Credentials entered. Please Wait...")

var eventName = document.getElementById("FirstNameInput").value;
var theme = document.getElementById("SurNameInput").value;
var peopleCount = document.getElementById("PasswordInput").value;
var eventInfo = eventName + " " + theme;
alert(eventName + " " + theme + " " + peopleCount);

if(eventInfo.length > 10 || eventInfo.length <4)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid characters in registration form. Please try again."; //message that displays if incorrect characters was typed.
    }
if (peopleCount >10 || peopleCount<2)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid number of participants. Please try again.";  //message that displays if incorrect number was inputted.
    }

else if(eventInfo.length <= 20 || eventInfo.length <=4)
    {
    document.getElementById("loginStatus").innerHTML = "event info " + eventInfo + " " + peopleCount;
    alert("Registration accepted!!! Proceeding to Game...");               // Alert message that displays if all registration forms was accepted.
    location.replace("game.html");
    }
}