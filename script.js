let name = "";
let age =0;

console.log(name);
console.log(age);

let months = calculateAgeInMonths(age);

console.log(months);

function calculateAgeInMonths(age) {
    return age * 12;
}

if (age >=18){
    console.log("You can access all available sokoni features");
} else{
    console.log("Some Sokoni features may require adult supervision");
}

for(let i = 0; i < 5; i++){
    console.log("Keep going! You're almost there!");
}