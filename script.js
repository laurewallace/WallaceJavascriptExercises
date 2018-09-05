// "use strict";
// // Exercise 1
// let user = prompt("Enter a number");
//  console.log(user);
//  let total = 0;

//  for (var i = 0; i <= user; i++) {
//      total = total + i;
//  }

// console.log(total);

// Exercise 2

// let user = prompt("Do you want to play?");
// let words = "";

// do {
//    let word = prompt("Enter a word.");

//    words += word + " ";

//    user = prompt("Do you want to play again?")
    
// } while(user === "yes") {
//    console.log(words);
// }

// Exercise 3 

let name = prompt("What is your name?")
let user = prompt("Would you like to print your name?");
let repeat;
var i = "!"
if (user === "yes") {
  
  while (repeat = prompt("Would you like to print your name again?") === "yes") {
  
    console.log("Hello! My name is " + name + i);
    i += "!";
  }
} else {
  console.log("Sorry to hear that.")
}


// Exercise 4

//    prompt("What time of day is it?");
//    var answer= "";
//    var text;

//    if (answer === "morning") {
//        text = "Since it is morning, you should be eating breakfast. We suggest eggs and toast.";
        
//    } else if (answer === "noon") {
//        text = "Since it is noon, you should be eating lunch.  We suggest a salad.";
        
//    } else if (answer === "evening") {
//        text = "Since it is evening, you should be eating dinner.  We suggest chicken and rice.";
//    } else {
//        text = "Try typing 'morning' 'noon' or 'evening'"
//    }
//    console.log(text)
// }
