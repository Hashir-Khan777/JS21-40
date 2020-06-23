// chapter 21-25
// task 1
// var firname = prompt("Enter First Name", "Enter Name");
// var lasname = prompt("Enter Last Name", "Enter Name");
// var fullname = firname + " " + lasname;
// alert("Good Morning! " + fullname + " wish you have a good day.");
// task 2
// var favmobile = prompt("Enter Your Favourite Mobile Model", "Enter Mobile Model");
// var mobilelen = favmobile.length;
// document.write("Your Favourite Mobile Model is " + favmobile + "<br>" + "The Length Of String is " + mobilelen);
// task 3
// var pak = "Pakistani";
// var pakindex = pak.indexOf("n");
// document.write("String " + pak + "<br>" + "Index of 'n' is " + pakindex);
// task 4
// var hello = "Hello,World";
// var helloindex = hello.lastIndexOf('l');
// document.write("string : " + hello + "<br>" + "Last index of l is : " + helloindex);
// task 5
// var str = "Pakistan";
// var strindex = str.charAt(3);
// document.write(
//   "String : " + str + "<br>" + "Character at index 3 : " + strindex
// );
// task 6
// var firname = prompt("Enter First Name", "Enter Name");
// var lasname = prompt("Enter Last Name", "Enter Name");
// var concat = firname.concat(" " + lasname);
// alert("Good Morning! Mr. " + concat);
// task 7
// var city = "Hyderabad";
// var replace = city.replace("Hyder", "Islam");
// document.write("City : " + city + "<br>" + "After replacement : " + replace);
// task 8
// var message = "Ali and Sami are best friends. They play cricket and Football together.";
// var replace = message.replace(/and/g, "&");
// document.write(replace);
// task 9
// var str = "472";
// var typestr = typeof str;
// var con = parseInt(str);
// var typecon = typeof con;
// document.write(
//   "Value : " +
//     str +
//     "<br>" +
//     "type : " +
//     typestr +
//     "<br>" +
//     "Value : " +
//     con +
//     "<br>" +
//     "type : " +
//     typecon
// );
// // task 10
// var input = prompt("Enter any string", "Enter String");
// var upper = input.toUpperCase();
// document.write("User Input : " + input + "<br>" + "UpperCase : " + upper);
// task 11
// var capital = prompt("Enter Any String", "Enter String");
// var capitalstr =
//   capital.charAt(0).toUpperCase() + capital.slice(1).toLowerCase();
// document.write(
//   "User Input : " + capital + "<br>" + "Capitalize : " + capitalstr
// );
// task 12
// var num = 35.36;
// var str = num.toString();
// document.write(typeof str + str);
// task 13
// task 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt(
//   "Welcome To ABC Bakery, What Do You Want To Order",
//   "Your Order Here"
// );
// search = search.toLowerCase();
// if (A.indexOf(search) !== -1) {
//   alert(search + " is available");
// } else {
//   alert(search + " is not available");
// }
// task 15
// var password = prompt("Enter Your Password", "Enter Password");
// if (
//   password.charAt(0) == 0 ||
//   password.charAt(0) == 1 ||
//   password.charAt(0) == 2 ||
//   password.charAt(0) == 3 ||
//   password.charAt(0) == 4 ||
//   password.charAt(0) == 5 ||
//   password.charAt(0) == 6 ||
//   password.charAt(0) == 7 ||
//   password.charAt(0) == 8 ||
//   password.charAt(0) == 9
// ) {
//   alert("password not begin with a number");
// } else {
//   alert("Correct Password");
// }
// task 16
// var university = "University of Karachi";
// for (var i = 0; i < university.length; i++) {
//   document.write(university[i] + "<br>");
// }
// task 17
// var input = prompt("Enter Any String", "Enter String");
// var lasin = input.charAt(input.length - 1);
// document.write("User Input : " + input + "<br>" + "Last Character : " + lasin);
// task 18
// var str = "The quick brown fox jumps over the lazy dog";
// var ser = str.toLowerCase().match(/the/g).length;
// document.write(
//   "text = " + str + "<br>" + "There are " + ser + " occuraces of word 'the'"
// );

// chapter 26-30
// task 1
// var innum = +prompt("Enter Positive Intiger", "Enter Intiger");
// var round = Math.round(innum);
// var floor = Math.floor(innum);
// var ceil = Math.ceil(innum);
// document.write(
//   "Number : " +
//     innum +
//     "<br>" +
//     "Round off value : " +
//     round +
//     "<br>" +
//     "Floor value : " +
//     floor +
//     "<br>" +
//     "Ceil value : " +
//     ceil +
//     "<br>"
// );
// task 2
// var innum = +prompt("Enter Negative Intiger", "Enter Intiger");
// var round = Math.round(innum);
// var floor = Math.floor(innum);
// var ceil = Math.ceil(innum);
// document.write(
//   "Number : " +
//     innum +
//     "<br>" +
//     "Round off value : " +
//     round +
//     "<br>" +
//     "Floor value : " +
//     floor +
//     "<br>" +
//     "Ceil value : " +
//     ceil +
//     "<br>"
// );
// task 3
// var num = +prompt("Enter Any Intiger", "Enter Intiger");
// var abs = Math.abs(num);
// document.write("The absolute value of " + num + " is" + abs);
// task 4
// var con = +confirm("Do You Want To Run The Dice");
// if (con !== 0) {
//   var random = Math.floor(Math.random() * 7);
//   alert("The Random Dice Value Is : " + random);
// } else {
//   alert("OK");
// }
// task 5
// var heads = prompt("Enter Your Name If you Want To Take Heads", "Enter name");
// var tails = prompt("Enter Your Name If you Want To Take Tails", "Enter name");
// var random = Math.floor(Math.random() * 2);
// if (random == 0) {
//   alert(heads + " Congratulation! its heads you win");
// } else {
//   alert(tails + " Congratulation! its tails you win");
// }
// task 6
// var random = Math.floor(Math.random() * 101);
// document.write("The randome number between 1 to 100 is : " + random);
// task 7
// task 8
// var secert = Math.floor(Math.random() * 11);
// var guess = prompt("Enter Your Guess 1-10", "Enter Guess");
// if (guess == secert) {
//   alert("Congrats You Win");
// } else {
//   alert("Try Again");
// }

// chapter 31 - 34
// task 1
// var rightNow = new Date();
// document.write(rightNow);
// task 2
// var month;
// switch (new Date().getMonth()) {
//   case 0:
//     month = "January";
//     break;
//   case 1:
//     month = "Febuary";
//     break;
//   case 2:
//     month = "March";
//     break;
//   case 3:
//     month = "Aril";
//     break;
//   case 4:
//     month = "May";
//     break;
//   case 5:
//     month = "June";
//     break;
//   case 6:
//     month = "July";
//     break;
//   case 7:
//     month = "August";
//     break;
//   case 8:
//     month = "September";
//     break;
//   case 9:
//     month = "October";
//     break;
//   case 10:
//     month = "November";
//     break;
//   case 11:
//     month = "December";
// }
// document.write("Current Month : " + month);
// task 3
// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "SUN";
//     break;
//   case 1:
//     day = "MON";
//     break;
//   case 2:
//     day = "TUE";
//     break;
//   case 3:
//     day = "WED";
//     break;
//   case 4:
//     day = "THU";
//     break;
//   case 5:
//     day = "FRI";
//     break;
//   case 6:
//     day = "SAT";
//     break;
// }
// document.write("Today is " + day);
// task 4
// var sat = new Date().getDay();
// if (sat == 0 || sat == 6) {
//   alert("It's Fun Day");
// } else {
//   alert("It's Not A Fun Day");
// }
// task 5
// var date = prompt("Enter Date Of Month", "Enter Date");
// if (date <= 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }
// task 6
// document.write(
//   "Current Date : " +
//     new Date() +
//     "<br>" +
//     "Elapsed miliseconds since January 1, 1970 : " +
//     new Date().getTime() +
//     "<br>" +
//     "Elapsed minutes since January 1, 1970 : " +
//     new Date().getTime() / 60000
// );
// task 7
// var time = new Date().getHours();
// console.log(time);
// if (time > 12 && time < 0) {
//   alert("it's A.M");
// } else {
//   alert("It's P.M");
// }
// task 8
// var d = new Date(2020, 11, 31);
// document.write("Later Date : " + d);
// task 9
// var d = new Date(2015, 7, 18).getTime();
// var e = new Date().getTime();
// var f = e - d;
// var g = Math.round(f / (1000 * 60 * 60 * 24));
// document.write(g + " days have passed since 1<sup>st</sup> Ramadan, 2015");
// task 10
// var d = new Date();
// var e = d.getTime();
// var f = new Date(2015, 0, 1).getTime();
// var g = e - f;
// var h = g / 1000;
// document.write(
//   "On refrence Date " +
//     d +
//     ", " +
//     h +
//     "seconds had passed since beginning of 2015"
// );
// task 11
// task 12
// task 13
// var age = +prompt("Enter Your Age", "Enter Age");
// var d = new Date().getFullYear();
// var e = d - age;
// document.write("Your age is : " + age + "<br>" + "Your birh Year is : " + e);

// chapter 35-38
// task 1
// var d = new Date();
// document.write(d);
// task 2
// var firname = prompt("Enter Your First Name", "Enter Name");
// var lasname = prompt("Enter Your Last Name", "Enter Name");
// function add() {
//   var i = firname + " " + lasname;
//   alert("Good Morning " + i);
// }
// add();
// task 3
// var num1 = +prompt("Enter First Number", "Enter Number");
// var num2 = +prompt("Enter Second Number", "Enter Number");
// function foo() {
//   var foo = num1 + num2;
//   alert(foo);
// }
// foo();
// task 4
// var num1 = +prompt("Enter First Number", "Enter Number");
// var opr = prompt("Enter Operator", "Enter Operator");
// var num2 = +prompt("Enter Second Number", "Enter Number");
// if (opr === "+") {
//   alert(num1 + num2);
// } else if (opr === "-") {
//   alert(num1 - num2);
// } else if (opr === "*") {
//   alert(num1 * num2);
// } else if (opr === "/") {
//   alert(num1 / num2);
// } else if (opr === "%") {
//   alert((num2 / num1) * 100 + "%");
// } else {
//   alert("Wrong Operator");
// }
// task 5
// var arg = +prompt("Enter Any Number", "Enter Number");
// var squ = arg ** 2;
// alert(squ);
// task 6
// var fact = +prompt("Enter Any Number", "Enter Number");
// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   }
//   return x * factorial(x - 1);
// }
// alert(factorial(fact));
// task 7
// task 8
// task 9
// var width = +prompt("Enter Width");
// var height = +prompt("Enter height");
// var A = width * height;
// alert(A);
// task 10
// var word = prompt("Enter Any Word", "Enter Word");
// var check = "";
// for (var i = word.length - 1; i >= 0; i--) {
//   check += word[i];
// }
// if (check === word) {
//   alert(word + " is palindrome word");
// } else {
//   alert(word + " is not a palindrome word");
// }
// task 11
// task 12
