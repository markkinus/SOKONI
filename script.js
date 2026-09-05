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

// check if the user is an adult or a minor
if (age >=18){
    console.log("You can access adult content on Sokoni");
} else{
    console.log("You are too young for adult content on Sokoni");
}

//loop to display a motivational message 5 times
for(let i = 0; i < 5; i++){
    console.log("Keep going! You're almost there!");
}