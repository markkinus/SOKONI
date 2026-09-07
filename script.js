// store the name and age of the user
let name = "";
let age =0;

//Display the name and age of the user in the console
console.log(name);
console.log(age);

// calculate the age in months
let months = calculateAgeInMonths(age);

// display the age in months
console.log(months);

// function to convert age from years to months
function calculateAgeInMonths(age) {
    return age * 12;
}
console.log(calculateAgeInMonths(25));

/* CONDITIONAL
 check if the user is an adult or a minor */
if (age >=18){
    console.log("You can access adult content on Sokoni");
} else{
    console.log("You are too young for adult content on Sokoni");
}

//create a function to display a personalized greeting using template literals

function greetings(name) {
    console.log(`Hello, ${name}! Welcome to Sokoni!`);
}
greetings("John Doe");


//loop to display a motivational message 5 times
for(let i = 0; i < 5; i++){
    console.log("Keep going! You're almost there!");
}

// event listener for the submit button
document.getElementById("btn").addEventListener("click", function() {
    console.log("Welcome to Sokoni!");
});