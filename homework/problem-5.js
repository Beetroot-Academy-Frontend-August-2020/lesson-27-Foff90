/*
Request a user’s age and check whether it is realistic (0-120 y.o.). If it is realistic, 
display a message ‘Hi! You are # years old’, otherwise – ‘Hm… Is it even possible?’.
*/

const age = prompt(`What is your age?`);
if (age >= 0 && age <= 120) {
    alert(`Hi! You are ${age} years old`);
} else if (age > 120) {
    alert(`Hm... Is it even possible?`);
}
