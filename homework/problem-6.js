/* 
Ask a user 3 questions, each with 3 answer options. The user gets 2 points for each correct answer. 
Show the earned points after the test.
*/

var questions = [
    {
        prompt: "What is the capital city of Sweden?\n(a) Stockholm\n\
                (b) Göteborg\n(c) Malmö",
        answer: "a"
    },
    {
        prompt: "What sector will you learn about at Betroot Academy?\n(a) Natural Science\n\
                (b) IT\n(c) Economy",
        answer: "b"
    },
    {
        prompt: "For how many months do you study at Betroot Academy?\n(a) 2 months\n\
                (b) 6 months\n(c) 3 months",
        answer: "c"
    },
]

var score = 0;

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i.answer]){
        score++;
        alert("Correct!");
    }   else {
        alert("Incorrect!");
    }
}
alert("You got " + score + " points");



//For some strange reason you always get incorrect answers eventhough you answered correct...

//n = new line. Same as br in HTML