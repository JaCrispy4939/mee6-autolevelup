//Made by Ja'Crispy
//Please dont steal code and call it yours

var ConsoleMessagesSent = 0; //sets the number for the console message counter
var DiscordMessagesSent = 0; //sets the number for the discord message counter
function loop() { //sets the function named loop, all code below within the curly brackets is apart of the function named loop and will run everytime the function named loop is ran
    setTimeout(loop, 60500) //makes it so it loops every minute
    const Request = require('request'); //uses requests
    const token = "NTQ2MTY1OTk4Mzg3MDY4OTI4.YKqwIg.0Ha10O9KjKowalD9j9rsOLQCFZ0"; //Token goes here
    DiscordMessagesSent ++; //adds one to the discord messages sent counter
    const message = "Messages Sent: " + DiscordMessagesSent; //sets variable for what the message should be that gets sent to the server
    const channel = "726494617603801098"; //current channel is for balisong server
    Request(`https://discord.com/api/v8/channels/${channel}/messages`, {method: 'POST', headers:{ "authorization": token }, formData:{ "content": message }});
    ConsoleMessagesSent ++; //adds one to the console messages sent counter
    console.log("Messages Sent: " + ConsoleMessagesSent); //logs that a message was sent
    }
loop() //Runs the function named loop
