// Age left to live

function lifeInWeeks(age) {
    var yearsRemaining = 75 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days + "days," + weeks + " weeks, and " + months + " months left.");
}

lifeInWeeks(30);


// Love Score Calculator

prompt("What is your name?")
prompt("Enter another name:")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "% " + "You love each other like Kanye loves Kanye!");
}
if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%");
}
if (loveScore < 30) {
    alert("Your love score is " + loveScore + "% " + "You go together like oil and water.");
}


// Leap Year

function isLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year."
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        } 
    } else {
        return "Not a leap year."
    }
}


// Guest List

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry, maybe next time.");
}

// Fizz Buzz game

var output = [];
var count = 1;

function fizzBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }

    else if (count % 3 === 0) {
        output.push("Fizz");
    }
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
     else {
        output.push(count);
    }

    count++;

    console.log(output);
}


// Who buys lunch

var names = ["Ben", "Joy", "Al", "Cho"]

function whosPaying(names) {


    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}

// Bottles of Beer

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}


// Fibonacci Generator


function fibonacciGenerator (n) {

    var output = [];
    if (n === 1) {
      output = [0];
    }
    else if (n === 2) {
      output = [0, 1];
    }
    else {
      output = [0, 1];
  
      for (var i = 2; i < n; i++) {
        output.push(output[output.length - 2] + 
        output[output.length - 1]);
      }
    }
  
    return output;
}
  
  output = fibonacciGenerator(10);
  console.log(output);