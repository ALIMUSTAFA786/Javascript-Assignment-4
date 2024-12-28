//ch 6
//q1
// document.write("Result:"+"<br />")
// var a=10;
// document.write("The value of a is: ", a +"<br />")
// document.write("............................."+"<br />")
// document.write("The value of ++a is: ",a + 1 + "<br />")
// document.write("Now the value of a is: ",a + 1 + "<br />")
// document.write("The value of a++ is: ",a + 1 + "<br />")
// document.write("Now the value of a is: ",a + 2 + "<br />")
// document.write("The value of --a is: ",a + 1 + "<br />")
// document.write("Now the value of a is: ",a + 1 + "<br />")
// document.write("The value of a-- is: ",a + 1 + "<br />")
// document.write("Now the value of a is: ",a + 1 - 1 + "<br />")
//q2
// var a= 2;
// var b= 1;
// document.write("a is ",a +"<br />")
// document.write("b is ",b +"<br />")
// var result= --a - --b + ++b  + b--; 
// document.write("result is ", result)
//q3
// let user_input= prompt("Enter your name :");
// document.write("Assalam O Alaikum " + "\n",user_input);
//q4 is not given
//q5
// function generateTable() {
// var user_input= prompt("Enter a number: ");
// if (user_input=== "" || user_input === null) {
//     user_input = 5;
// }
// var num=Number(user_input);
// for (var i = 1; i <= 10; i++) {
//     document.write(user_input +  "x" + i + "=" + (num* i)+"<br />");
// }
// }
// generateTable();
//q6
// var subject1=prompt("Enter the name of first subject: ");
// var subject2=prompt("Enter the name of second subject: ");
// var subject3=prompt("Enter the name of third subject: ");
// var totalMarks= 100;
// var obtainedMarks1= parseInt(prompt("Enter the obtained marks for" + subject1 + ":" ));
// var obtainedMarks2= parseInt(prompt("Enter the obtained marks for" + subject2 + ":" ));
// var obtainedMarks3= parseInt(prompt("Enter the obtained marks for" + subject3 + ":" ));
// var totalObtainedmarks= obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var Percentage= (totalObtainedmarks / (3*totalMarks))*100;
// document.write(`
//     <table border="1" style="width:50%; text-align:center; border-collapse:collapse; margin:20px auto;">
//     <thead>
//         <tr>
//         <th>Subject</th>
//         <th>Total Marks</th>
//         <th>Obtained Marks</th>
//         <th>Percentage</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//         <td>${subject1}</td>
//         <td>${totalMarks}</td>
//         <td>${obtainedMarks1}</td>
//         <td>${((obtainedMarks1/totalMarks)*100).toFixed(2)}%</td>
//         </tr>
//         <tr>
//         <td>${subject2}</td>
//         <td>${totalMarks}</td>
//         <td>${obtainedMarks2}</td>
//         <td>${((obtainedMarks2/totalMarks)*100).toFixed(2)}%</td>
//         </tr>
//         <tr>
//         <td>${subject3}</td>
//         <td>${totalMarks}</td>
//         <td>${obtainedMarks3}</td>
//         <td>${((obtainedMarks3/totalMarks)*100).toFixed(2)}%</td>
//         </tr>
//         <tr>
//         <td><stong>Total</strong></td>
//         <td>${totalMarks}</td>
//         <td>${totalObtainedmarks}</td>
//         <td>${Percentage.toFixed(2)}%</td>
//         </tr>
//     </tbody>
//     </table>
//     `);
//ch 6 done
//ch 9-10
//q1
// let user_input=prompt("Enter your city name: ");
// document.write("Welcome to city of lights "+ user_input)
//q2
// let gender= prompt("Enter your Gender: ");
// if (gender=="male") {
//     document.write("Good Morning Sir")
// }
// if (gender=== "female") {
//     document.write("Good Morning Mam")
// }
//q3
// let color=prompt("Enter a color");
// if (color=="red") {
//     document.write("Must stop")
// }
// if (color=="yellow") {
//     document.write("Ready to move")
// }
// if (color=="green") {
//     document.write("Move now")
// }
//q4
// let carFuel= prompt("Enter your car's fuel");
// if(carFuel > "0.25") {
//     document.write("Your car fuel have "+ carFuel + "litres")
// }
// if(carFuel < "0.25") {
//     document.write("Please refill the fuel in your car")
// }
//q5
//a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//e
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//f
// if("car" < "cat"){
// alert("car is smaller than cat");
// }
//q6
// let subject1=parseFloat(prompt("Enter first subject: "));
// let subject2=parseFloat(prompt("Enter second subject: "));
// let subject3=parseFloat(prompt("Enter third subject: "));
// let totalMarks=parseFloat(prompt("Enter total marks: "));
// let obtainedMarks= subject1 + subject2 + subject3;
// let percentage=(obtainedMarks/totalMarks)*100;
// document.write("Total Marks: "+ totalMarks+ "<br />");
// document.write("Obtained Marks: "+ obtainedMarks+ "<br />");
// document.write("Percentage: "+ percentage.toFixed(2)+ "%<br />");
// if (percentage >="80"){
//     document.write("Grade: A-one<br />");
//     document.write("Remarks: Excellent<br />");
// }
// else if (percentage >="70"){
//     document.write("Grade: A<br />");
//     document.write("Remarks: Good<br />");
// }
// else if (percentage >="60"){
//     document.write("Grade: B<br />");
//     document.write("Remarks: You need to improve<br />");
// }
// else {
//     document.write("Grade: Fail<br />");
//     document.write("Remarks: Sorry");
// }
//q7
// let user_input= parseInt(prompt("Enter a number"));
// let secret_number= 7;
// if (user_input === secret_number) {
//     document.write("Bingo! Correct answer.");
// }
// else if (user_input === secret_number +1){
//     document.write("Close enough to the correct answer.");  
// }
//q8
// let number= parseInt(prompt("Enter a number"));
// if (number % 3 == 0) {
//     document.write(number + " is divisible by 3");
// }
//q9
// let number_check= parseInt(prompt("Enter a number"));
// if (number_check %2 == 2) {
//     document.write(number_check + " is an even number");
// }
// else {
//     document.write(number_check + " is an odd number");
// }
//q10
// let temperature= parseInt(prompt("Enter temperature"));
// if (temperature > 40) {
//     document.write("It is too hot outside.");
// }
// else if (temperature > 30) {
//     document.write("The Weather today is Normal.");
// }
// else if (temperature > 20) {
//     document.write("Today's Weather is cool.");
// }
// else {
//     document.write("OMG! Today's weather is so Cool.");
// }
//q11
// let number1= parseInt(prompt("Enter first number"));
// let number2= parseInt(prompt("Enter second number"));
// let select_operation= prompt("+,-,*,/,&,%");
// if (select_operation === "+") {
//     document.write(Number(number1) + Number(number2));
// }
// else if (select_operation === "-") {
//     document.write(Number(number1) - Number(number2));
// }
// else if (select_operation === "*") {
//     document.write(Number(number1) * Number(number2));
// }
// else if (select_operation === "/") {
//     document.write(Number(number1) / Number(number2));
// }
// else if (select_operation === "&") {
//     document.write(Number(number1) & Number(number2));
// }
// else if (select_operation === "%") {
//     document.write(Number(number1) % Number(number2));
// }
//ch 9-10 done
//ch 12-13
//q1
// let asciiCode= prompt("Enter a character");
// if (asciiCode >= 65 && asciiCode <= 90) {
//     document.write(asciiCode + " is the uppercase letter<br />");
// }
// else if(asciiCode >=97 && asciiCode <=122) {
//     document.write(asciiCode + " is the lowercase letter");
// }
//q2
// let num1= parseInt(prompt("Enter a first number"));
// let num2= parseInt(prompt("Enter a second number"));
// if (num1 === num2) {
//     document.write("Both numbers are equal: " + num1 == num2);
// }
// else if (num1 > num2) {
//     document.write("The larger number is: " + num1);
// }
// else {
//     document.write("The larger number is: " + num2);
// }
//q3
// let num= parseFloat(prompt("Enter a number: "));
// if (num < 0) {
//     document.write("The " + num + " is negative");
// }
// else if (num > 0) {
//     document.write("The " + num + " is postive");
// }
// else {
//     document.write("The " + num + " is zero");
// }
//q4
// let character= prompt("Enter a vowel character: ");
// if (character == "a" || character == "e" || character == "i"|| character == "o" || character == "u" ) {
//     document.write("True");
// }
// else {
//     document.write("False");
// }
//q5
// var password1= prompt("Enter your password");
// var password2= prompt("Re-enter your password");
// if (password1 === password2) {
//     document.write("Correct! The password you entered matches the original password.");
// }
// else if (password1 == "") {
//     alert("Please enter your password");
// }
// else {
//     document.write("Incorrect password");
// }
//q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else {
// greeting = "Good evening";
// }
//q7
// let user_input = prompt("Enter a clock number in 24 hour format: ");
// if (user_input === "1 am") {
//     alert("1 am");
// }
// else if (user_input === "2 am") {
//     alert("2 am");
// }
// else if (user_input === "3 am") {
//     alert("3 am");
// }
// else if (user_input === "4 am") {
//     alert("4 am");
// }
// else if (user_input === "5 am") {
//     alert("5 am");
// }
// else if (user_input === "6 am") {
//     alert("6 am");
// }
// else if (user_input === "7 am") {
//     alert("7 am");
// }
// else if (user_input === "8 am") {
//     alert("8 am");
// }
// else if (user_input === "9 am") {
//     alert("9 am");
// }
// else if (user_input === "10 am") {
//     alert("10 am");
// }
// else if (user_input === "11 am") {
//     alert("11 am");
// }
// else if (user_input === "12 am") {
//     alert("12 am");
// }
// else if (user_input === "13 pm") {
//     alert("1 pm");
// }
// else if (user_input === "14 pm") {
//     alert("2 pm");
// }
// else if (user_input === "15 pm") {
//     alert("3 pm");
// }
// else if (user_input === "16 pm") {
//     alert("4 pm");
// }
// else if (user_input === "17 pm") {
//     alert("5 pm");
// }
// else if (user_input === "18 pm") {
//     alert("6 pm");
// }
// else if (user_input === "19 pm") {
//     alert("7 pm");
// }
// else if (user_input === "20 pm") {
//     alert("8 pm");
// }
// else if (user_input === "21 pm") {
//     alert("9 pm");
// }
// else if (user_input === "22 pm") {
//     alert("10 pm");
// }
// else if (user_input === "23 pm") {
//     alert("11 pm");
// }
// else if (user_input === "24 pm") {
//     alert("12 am");
// }
// else {
//     alert("Choose between 1-24");
// }
//ch 12-13 done