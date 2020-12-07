/*
Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user 
clicks OK.
*/

var weekday = ["Monday. ", "Tuesday. ", "Wednesday. ", "Thursday. ", "Friday. ", "Saturday. ", "Sunday. " ];
var text = "Day of the week is ";
var text2 = "Would you like to see the next one? "
for (let i = 0; i < 7; i++) { 
  alert(text + weekday[i] + text2);
}