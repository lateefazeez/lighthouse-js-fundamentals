const raining = false;
const cold = true;
const temperature = 18;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Don't forget to pick out a scarf!");
}

console.log("Now you're ready to go outside!");

// Try with temperature

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeve won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//More Conditionals
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.")
}

//Another tempearture one
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
}

//not raining
if (!raining) {
  console.log("Leave your umbrealla at home!");
}