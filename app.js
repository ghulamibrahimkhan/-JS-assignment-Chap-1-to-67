// *** Chapter # 1 ***//

// (Task 1)
// alert();

// (Task 2)
// alert("Error! Please enter a valid password");

// (Task 3)
// alert("Welcome to JS Land \nHappy Coding!");

// (Task 4) 
// alert("Welcome to JS Land");
// alert("Happy Coding");

// (Task 4) 
// alert("Hello..I can run JS through my web browser's console");


// *** Chapter # 2 ***//

// (Task 1)
// var userName;

// (Task 2)
// var myName = "Ghulam Ibrahim Khan";

// (Task 3)
// var message;
// message = "Hello World"
// alert(message);

//     // (Task 4)
// var yourName = prompt("Enter Your Name","Ghulam Ibrahim Khan");
// var yourAge = +prompt("Enter Your Age","20");
// var courseInroll = prompt("Course you're inroll in","Certified Mobile Application Development");
// alert(yourName);
// alert(yourAge);
// alert(courseInroll);

// (Task 5)
// var pza = "pizza\npizz\npiz\npi\np";
// var pza = pza.toUpperCase();
// alert(pza)

// (Task 6)
// var email = "gulamibrahimkhan@gmail.com";
// alert("My email adress is " + email)

// (Task 7)
// var book = "A smarter way to learn JavaScript ";
// alert("I'm trying to learn from a book " + book);

// (Task 8)
// document.write("Yah ! I can write HTML content through JavaScript")

// (Task 9)
// var ajeeb = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(ajeeb);


//  *************************************************************** //

// *** Chapter # 3 ***//

// (Task 1)
// var age = 20;
// alert("I'm " + age + " years old");

// (Task 2)
// var visits = 7;
// alert("You have visited this site " + visits + " times" );
// ;
// (Task 3)
// var birthYear = 2000;
// document.write("My birth year is " + birthYear + "<br>" + "Data type of my decleared variable is number");

//      // (Task 4)
// var visitorName= "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;
// document.write(visitorName + "ordered " + quantity + " " +productTitle + " on XYZ clothing store");

//  *************************************************************** //

// *** Chapter # 4 ***//

// (Task 1)
// var one; var two; var three;

// (Task 2)
//legal\\
// var one;
// var two2;
// var three3;
// var _four4;
// var $five5;

//illegal\\
// var 1;
// var !two;
// var &three;
// var var;
// var =;

// (Task 3)
// document.write("<h1>" +"Rules for naming JS variables" + "<h1>" + "<br>");
// document.write("<h4>" + "Variable names can only contain , numbers,$ or _. For example : $my_1stVariable" +
//  "<br>" + "Variables must begin with a letter, $ or _.For example: $name, _name or name" + "<br>" + 
//  "Variable names are case sensentive" + "<br>" + 
// "Variable names should not be JS keywords" + "<h4>");

//  *************************************************************** //

// *** Chapter # 5 ***//

//     // (Task 1)
// var newVar = 3 + 5;
// document.write(newVar + "<br>");

//     // (Task 2.1)
// var newVarsSub = +prompt("Enter 1st number","3");
// var newVarsSub2 = +prompt("Enter 2nd number","4");
// document.write(newVarsSub + newVarsSub2 + "<br>");

//     // (Task 2.2)
// var newVarDiv = 3 / 5;
// document.write(newVarDiv + "<br>");

//     // (Task 2.3)
// var newVarMul = 3 * 5;
// document.write(newVarMul + "<br>");

//     // (Task 2.4)
// var newVarMod = 3 % 5;
// document.write(newVarMod + "<br>");

// (Task 3)
// var varDec;
// document.write("value of the decleared variable is undefined");
// varDec = 5;
// document.write("<br>" +"Initial value: " + varDec);
// varDec++;
// document.write("<br>" +"Value after increment is: " + varDec);
// varDec = varDec + 7;
// document.write("<br>" +"Value after addition is: " + varDec);
// varDec--;
// document.write("<br>" +"Value after decrement is: " + varDec);
// varDec = varDec % 3;
// document.write("<br>" +"The reminder is: " + varDec);

// (Task 4)
// var ticketCost = 600;
// document.write("The total cost of buying 5 tickets is " + (ticketCost * 5) + "PKR")

// (Task 5)
// for(var i = 1; i <= 10; i++){
//     document.write("2 x " + i + " = " + 2*i + "<br>");
// }

// (Task 6)
// var celsius = 40;
// var fahrenheit;
// fahrenheit = (celsius * 9 / 5) +32;
// document.write(celsius + "°C is " + fahrenheit + "°F" + "<br>"); // Alt + 0176 for celsius sign

// fahrenheit = 99;
// celsius = (fahrenheit - 32) * 5 / 9;
// document.write(fahrenheit + "°F is " + celsius + "°C" + "<br>"); // Alt + 0176 for celsius sign

// (Task 7)
// document.write("<h1>" + "Shopping Cart" + "</h1>")
//  // Items price //
// var item1Price = 650;
// var item2Price = 100;
// // Shipping charges //
// var shippingCharges = 100;
// // Order quantity //
// var orderQuantityItem1 = 3;
// var orderQuantityItem2 = 7;

//         // Order Calculation //
// document.write("Price of item 1 is " + item1Price + "<br>")
// document.write("Quantity of item 1 is " + orderQuantityItem1 + "<br>")
// var costTotalItem1 = item1Price * orderQuantityItem1;

// document.write("Price of item 2 is " + item2Price + "<br>")
// document.write("Quantity of item 2 is " + orderQuantityItem2 + "<br>")
// var costTotalItem2 = item2Price * orderQuantityItem2 ;

// document.write("Shipping Charges " + shippingCharges + "<br>")
// // Total cost of order //
// document.write("Total cost of your order is " + (costTotalItem1 + costTotalItem2) )

// (Task 8)
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (804 / 980) * 100;
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks otained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%" + "<br>");

// (Task 9)
// var totalCurrency = document.write("Total Currency in PKR: " + (104.80 * 10 + 28 *25))

// (Task 10)
// var tenthTask = (7 + 5 * 10) / 2;

// (Task 11)
// var currentYear = 2020;
// var birthYear = 2000;
// var actualAge = currentYear - birthYear;
// document.write("<h1>" + "Age Calcultor" + "</h1>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is: " + actualAge);

//    // (Task 12)
// var twoPieR = 2 * 3.142
// var circleRadius = 20;
// var diameter = 2 * circleRadius
// var circumference = 3.142 * diameter
// var circleArea = 3.142 * circleRadius * circleRadius
// document.write("Radius of a circle is: "+circleRadius+ "<br>" +"The Cirumference is: "+circumference + "<br>" +"The area is:" + circleArea)


// area = pir  * R square
// circum = pie * d
// diam = 2 * r



// (Task 13)
// var favSnack = "rite";
// var currentAge = 20;
// var maxAge = 60;
// var amountPerDay = 3;
// document.write("Favourite Snack: " + favSnack + "<br>");
// document.write("Current age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of snacks per day" + amountPerDay + "<br>");
// document.write("You will need " + (maxAge*365*3) + " choclate chip to last you untillthe ripe old age of " + maxAge);

// *** Chapter # 6 to 9 ***//

// (Task 1)
// document.write("Result: " + "<br>");
// a = 10;
// document.write("The Value of a is " + a + "<br>");
// document.write("............................................." + "<br>" + "<br>");

// document.write("The Value of ++a is " + ++a + "<br>");
// document.write("Now the value of ++a is " + a + "<br>");


// document.write("<br>" + "<br>" + "The Value of a++ is " + a++ + "<br>");
// document.write("Now the value of a++ is " + a + "<br>");


// document.write("<br>" + "<br>" + "The Value of --a is " + --a + "<br>");
// document.write("Now the value of --a is " + a + "<br>");


// document.write("<br>" + "<br>" + "The Value of a-- is " + a-- + "<br>");
// document.write("Now the value of a-- is " + a + "<br>");

// (Task 2)
// var a = 2;
// var b = 1;

// var result = --a;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>"+ "<br>");

// var result = --a - --b;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>"+ "<br>");

// var result = --a - --b + ++b;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>"+ "<br>");

// var result = --a - --b +  ++b + b--;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>"+ "<br>");

// (Task 3)
// var greetInput = prompt("Enter Your name");
// var greetUser = alert("congratulations " + greetInput + " for you to be part of this course");

// (Task 5)
// var inputTable = +prompt("Enter number",5);
// for(i = 1; i <= 10; i++){
//     document.write("2 x" + i + " = " + i*inputTable + "<br>");
// }

//     // (Task 6)
// var sub1 = prompt("Enter Subject Name","Maths");
// var sub2 = prompt("Enter Subject Name","Physics");
// var sub3 = prompt("Enter Subject Name","Computer");

// var totalMarks = 100;
// var totalAllSubMarks = totalMarks * 3;


// var obtainedMarkssub1 = +prompt("Obtained Marks in Subject1","100");
// var obtainedMarkssub2 = +prompt("Obtained Marks in Subject2","90");
// var obtainedMarkssub3 = +prompt("Obtained Marks in Subject3","80");
// var obtainedMarks = obtainedMarkssub1 + obtainedMarkssub2 + obtainedMarkssub3;

// var percnetageSub1 = obtainedMarkssub1 / totalMarks * 100;
// var percnetageSub2 = obtainedMarkssub2 / totalMarks * 100;
// var percnetageSub3 = obtainedMarkssub3 / totalMarks * 100;
// var totalPercentage = obtainedMarks / 300 * 100;

// document.write("<h1>" + "Subject  &nbsp; Total Marks &nbsp; Obtained MArks &nbsp; Percentage" + "</h1>");
// document.write(sub1 + " &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp "
//  + totalMarks + "&nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; " 
//  + obtainedMarkssub1 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" 
//  + percnetageSub1 + "%" + "<br>");

// document.write(sub2 + " &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp "
//  + totalMarks + "&nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; " 
//  + obtainedMarkssub2 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp &nbsp;&nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" 
//  + percnetageSub2 + "%" + "<br>");

// document.write(sub3 + " &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp "
//  + totalMarks + "&nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; " 
//  + obtainedMarkssub3 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" 
//  + percnetageSub3 + "%" + "<br>");

// document.write("<h2>" + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp" 
// + totalAllSubMarks + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp" 
// +  obtainedMarks + " &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " 
// +  totalPercentage + "%");

//  *************************************************************** //

// *** Chapter # 9 to 11 ***//

// (Task 1)
// var city = prompt("Enter City Name","Karachi");
// alert("Welcome to " + city + " the city of lights");

// (Task 2)
// var gender = prompt("Enter Your Gender","Male");
// gender = gender.toLocaleLowerCase();
// if(gender === "male"){
//     document.write("Good Morning Sir.");
// }
// else if(gender === "female"){
//     document.write("Good Morning Ma'mm.");
// }
// else{
//     alert("You have entered worng gender");
// }

// (Task 3)
// var signalColor = prompt("Enter Signal Color");
// signalColor = signalColor.toLowerCase();
// if (signalColor === "red"){
//     document.write("Must To Stop")
// } 
// else if (signalColor === "Ready To Move"){
//     document.write("")
// } 
// else if (signalColor === "green"){
//     document.write("Move On")
// } 
// (Task 4)
// var fuel = +prompt("Current fuel ammount in liters");
// if(fuel < 0.25){
//     document.write("Please refill the fuel in your car")
// }

//      (Task 5)
// (a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//     // (b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//     // (c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }

//     // (d)    
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//     // (e)
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//     // (f)
// if("car" < "cat"){
// alert("car is smaller than cat");
// }        

// (Task 6)
// var sub1 = +prompt("Enter your marks in Maths");
// var sub2 = +prompt("Enter your marks in Physics");
// var sub3 = +prompt("Enter your marks in Computer");
// var totalMarks = 300;
// var obtainedMarks = sub1 + sub2 + sub3;
// var percentage = obtainedMarks / totalMarks * 100;
// document.write("<h1>" + "Mark Sheet" + "</h1>")

// if(percentage >= 80 && percentage <= 100 ){
//     document.write("<h3>" + "Total Marks: " + totalMarks + "</h2>");
//     document.write("<h3>" + "Marks obtained" + obtainedMarks + "</h2>");
//     document.write("<h3>" + "Percentage " + percentage +   "</h2>");
//     document.write("<h3>" + "Grade : A+" +  "</h2>");
//     document.write("<h3>" + "Remarks: Excellent" +   "</h2>");
//    }
// else if(percentage >= 70 && percentage <= 80 ){
//     document.write("<h3>" + "Total Marks: " + totalMarks + "</h2>");
//     document.write("<h3>" + "Marks obtained" + obtainedMarks +  "</h2>");
//     document.write("<h3>" + "Percentage " + percentage +   "</h2>");
//     document.write("<h3>" + "Grade : A" +  "</h2>");
//     document.write("<h3>" + "Remarks: Good" +   "</h2>");
//    }
// else if(percentage >= 60 && percentage <= 70 ){
//     document.write("<h3>" + "Total Marks: " + totalMarks + "</h2>");
//     document.write("<h3>" + "Marks obtained" + obtainedMarks + "</h2>");
//     document.write("<h3>" + "Percentage " + percentage +   "</h2>");
//     document.write("<h3>" + "Grade : B" +  "</h2>");
//     document.write("<h3>" + "Remarks:  You need to improve" +   "</h2>");
//    }
// else if(percentage >= 0 && percentage <= 60 ){
//     document.write("<h3>" + "Total Marks: " + totalMarks + "</h2>");
//     document.write("<h3>" + "Marks obtained: " + obtainedMarks + "</h2>");
//     document.write("<h3>" + "Percentage " + percentage +   "</h2>");
//     document.write("<h3>" + "Grade : Fail" +  "</h2>");
//     document.write("<h3>" + "Remarks:  Sorry" +   "</h2>");
//    }

// (Task 7)
// var guessNum = +prompt("Guess the number")
// var secretNum = 7;
// if(guessNum === secretNum){
//     alert("Bingo! Correct")
// }
// else if(guessNum === ++secretNum ){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Try again")
// }

//      (Task 8)
// var givenNum = prompt("Check your number");
// num = givenNum % 3
// if(num === 0){
//     document.write("Given number is divisible by 3 ");
// }
// else {
//     document.write("Given number is'nt divisible by 3 ");
// }

//      (Task 9)
// var num = +prompt("Enter the number" );
// if(num % 2 === 0)
// {
//    document.write("Number is EVEN");
// }
// else{
//  document.write("Number is ODD");
// }

//      (Task 10)
// var temperature = +prompt("Input Today's Temprature in °C");  //alt + 0176
// if(temperature >= 40){
//     document.write("It is too hot outside.");
// }
// else if(temperature >= 30){
//     document.write("The Weather today is Normal");
// }
// else if(temperature >= 20){
//     document.write("Today’s Weather is cool.");
// }
// else if(temperature >= 0 && temperature <= 10 ){
//     document.write("“OMG! Today’s weather is so Cool.");
// }

//      (Task 11)
// var val1 = +prompt("Enter your 1st value");
// var val2 = +prompt("Enter your 2nd value");
// var sign = prompt("Enter your operator");

// if(sign === "+"){
//     document.write(val1 + val2)
// }
// else if(sign === "-"){
//     document.write(val1 - val2)
// }
// else if(sign === "/"){
//     document.write(val1 / val2)
// }
// else if(sign === "*"){
//     document.write(val1 + val2)
// }
// else if(sign === "%"){
//     document.write(val1 % val2)
// }
// else{
//     alert("Theres something worng")
// }

//  *************************************************************** //

// *** Chapter # 12 to 13 ***//

// (Task 1)
// var input =  prompt("Enter")
// if ( (input.charCodeAt(0) >=65) && (input.charCodeAt(0) <=90) ){ 
//     alert ("Uppercase Letter");}
// else if( (input.charCodeAt(0) >=97) && (input.charCodeAt(0) <=122) ){
//     alert ("Lowercase Letter");}

// (Task 2)
// var integer1st = +prompt("Enter 1st num");
// var integer2nd = +prompt("Enter 2nd num");
// if(integer1st === integer2nd){
//     document.write("Both Integer Are Equal");
// }
// else if(integer1st > integer2nd){
//     document.write("Integer 2= '"+ integer1st + "' is Bigger");
// }
// else if(integer1st < integer2nd){
//     document.write("Integer 2= '"+ integer2nd + "' is Bigger");
// }
// else{
//    console.log(null);
// }

// (Task 3)
// var inputNumber = +prompt("Enter your number");
// if(inputNumber === 0){
//     document.write("The number is ZERO")
// }
// else if(inputNumber > 0){
//     document.write("The number is POSITIVE")
// }
// else if(inputNumber < 0){
//     document.write("The number is NEGATIVE")
// }

// (Task 4)
// var a = "a";   
// var e = "e";   
// var i = "i";   
// var o = "o";   
// var u = "u";   
// var char = prompt("Enter any character to check")
// if(char === a || char === e || char ===  i || char ===  o || char ===  u){
//     document.write("True")
// }
// else{
//     document.write("False")
// }

// (Task 5)
// var passWord = "saywebapp";
// var inputPassword = prompt("Please Enter Your Password");
// if(passWord === inputPassword){
//     document.write("Correct! The password you entered matches the original password");
// }
// else if(inputPassword !== passWord){
//     document.write("Incorrect password");
// }
// else{
//     document.write("Please enter your password");
// }

//    // (Task 6)
// var greeting;
// var hour = 13;
// if(hour < 18){
//     greeting = document.write("Good day");
// }
// else{
//     greeting = document.write("Good evening");
// }

// (Task 7)
// var time = prompt("Enter Time like '1900'= (7pm) ")
// if(time >= 0000 && time <= 1200){
//     document.write("Good Morning !")
// }
// else if(time >= 1200 && time <= 1700){
//     document.write("Good Afternoon !");
// }
// else if(time >= 1700 && time <= 2100 ){
//     document.write("Good Evening !");
// }
// else if(time >= 2100 && time <= 2359){
//     document.write("Good Night !");
// }
// else{
//     document.write("you have entered worng time");
// }

//  *************************************************************** //

// *** Chapter # 13 to 15 ***//

// (Task 1)
// var studentsName = [];

// (Task 2)
// var studentsName = new Array();

// (Task 3)
// var strArray = ["Ghulam","Ibrahim","Khan"];

// (Task 4)
// var numArray = [1,3,4,5,5,6,7];

// (Task 5)
// var boolenArray = [true,false]

// (Task 6)
// var mixArray = ["ibrahim",3,"Khan",5]

// (Task 7)
// var eduQualInPak = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PHD"]
// for(var i = 0; i <= 7; i++){
//     document.write(eduQualInPak[i] + "<br>");
// }

// (Task 8)
// var students = ["Ibrahim","Osams","Sulaman"];
// var studentsScore = [450,300,380];
// var totalMArks = 500;

// for(var i = 0; i < 3; i++){
//     document.write("Score of " + students[i] + " is " + studentsScore[i] + ". Percentage " + (studentsScore[i] / totalMArks) * 100 + "<br>")
// }

// (Task 9)
// skipped

// (Task 10)
// var studentSCore = [320,230,480,120,480];
// document.write("Scores of Students :" + studentSCore + "<br>")
// studentSCore.sort();        
// studentSCore.reverse();
// document.write( "Order Scores of Students : " + studentSCore)

// (Task 11)
// var Cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// var selectedCities = Cities.slice(2,6);

// document.write( "Cities List:" + "<br>");
// document.write(Cities  + "<br>"  + "<br>");

// document.write("Selected cities list"  + "<br>");
// document.write(selectedCities);

// (Task 12)
// var arr = ["This","is","my","cat"];
// document.write("<h1>" + "Array:" + "<br>" + arr   + "<br>");
// var strJoin = arr.join(" ");                    // *****array’s join method****8
// document.write("String:" + "<br>" + strJoin);

// (Task 13)
// var arrNew = [];
// arrNew.push("Keyboard");
// arrNew.push("Mouse");
// arrNew.push("Printer");
// arrNew.push("Monitor");

// for(i = 0; i < 4; i++){
//     document.write("Out:" + "<br>" + arrNew[i] + "<br>")
// }

// (Task 14)
// var arrNew2 = [];
// arrNew2.unshift("Keyboard");
// arrNew2.unshift("Mouse");
// arrNew2.unshift("Printer");
// arrNew2.unshift("Monitor");

// for(i = 0; i < 4; i++){
//     document.write("Out:" + "<br>" + arrNew2[i] + "<br>")
// }

// (Task 15)
// var manufacturers = ["Apple","Samsung","Motorolla","Nokia","Sony","Haier"];

// document.write("<select>");
// for(i = 0; i < manufacturers.length; i++){
// document.write("<option>" + manufacturers[i] + "</option>)");
// }
// document.write("</select>");

//  *************************************************************** //

// *** Chapter # 17 to 20 ***//

// (Task 1)
// var multiDimArray = [
//     []
// ];

//         // (Task 2)
// var multiMatrixArray = [
//     [0,1,2,3,],
//     [1,0,1,2],
//     [2,1,0,1],
// ];
// document.write(multiMatrixArray[0] + "<br>" + multiMatrixArray[1] + "<br>" + multiMatrixArray[2])

// (Task 3)
// for(var i = 1; i <= 10; i++){
//     document.write(i + "<br>" )
// }

//          (Task 4)
// var num = prompt("Enter Number");
// var len = prompt("Enter Length");
// for(var i = 0; i <= len; i++ ){
//     document.write(num + " x " + i + " = " + i*num  + "<br>")
// }

//         (Task 5)
// fruits = ["apple", "banana", "mango", "orange","strawberry"]
// for(var i = 0; i < fruits.length ; i++ ){
//     document.write( fruits[i] + "  " + "<br>")
// }
// for(var i = 0; i < fruits.length ; i++ ){
//     document.write("<br>" + "Element at index " + i + " is " + fruits[i] + "  " + "<br>")
// }

// (Task 6)
// document.write("<h1>" + "Counting" + "</h1>")
// for(var i = 1; i < 15; i++ ){
//     document.write("" + i + " ,")
// }

// document.write("<h1>" + "Reverce Counting" + "</h1>")
// for(var i = 20; i > 0; i--){
//     document.write("" + i + " ,")
// }

// document.write("<h1>" + "Even" + "</h1>")
// for(var i = 0; i <= 20; i = i + 2 ){
//     document.write(i + ", ")
// }

// document.write("<h1>" + "Odd" + "</h1>")
// for(var i = 1; i < 20; i = i + 2 ){
//      document.write(i + ", ")
// }

// document.write("<h1>" + "Series" + "</h1>")
// for(var i = 2; i <= 20; i = i + 2 ){
//     document.write(i + "K , ")
// }

// (Task 7)

// var search = prompt("Welcome to Ibrahim's Bakery. What do you want to order sir/ma'am?", "Cookie");
// search = search.toLowerCase();
// var items = ["cake", "apple pie", "cookie", "chips", "patties"]


// if (items[0] === search) {
//     document.write(items[i] + " is available at index 1 in our bakery")
// }
// else if (items[1] === search) {
//     document.write(items[1] + " is available at index 2 in our bakery")
// }

// else if (items[2] === search) {
//     document.write(items[2] + " is available at index 3 in our bakery")
// }
// else if (items[3] === search) {
//     document.write(items[3] + " is available at index 4 in our bakery")
// }
// else if (items[4] === search) {
//     document.write(items[04] + " is available at index 5 in our bakery")
// }

// else {
//     document.write(" We're sorry. " + search + " is'nt available in our bakery ")
// }

// (Task 8)
// var numbers = [24,53,78,91,12]
// var large = 0
// for(var i = 0; i < 4; i++){
//     if(numbers[i] > large){
//         large = numbers[i]
//     } 
// }
// document.write("The largest numberis " + large)

// (Task 9)
// var numbers = [24,53,78,91,12]
// var small = numbers[0];
// for(var i = 0; i < 5; i++){
//     if (numbers[i] < small){
//         small = numbers[i]
//     }
// }
// document.write(small)
// (Task 10)
// document.write("<h1>" + "Series" + "</h1>")
// for(var i = 5; i <= 100; i = i = i + 5 ){
//     document.write(i + " , ")
// }



//           (chapter 21 to 25)

// (Task 1)
// var fstName = prompt("Enter Your First Name");
// var lstName = prompt("Enter Your Last Name");
// var fulName = document.write("Welcome on our website " + fstName + " " + lstName );

// (Task 2)           ***************Incomplete*****************
// var favMob = prompt("Enter your favorite mobile phone model");
// var favMobLength = favMob.length
// document.write("My favourite phone is: " + favMob + "<br>" + "Length of string: " +  favMobLength);

// (Task 3)
// var str = "Pakistani";
// var strLength = str.length;
// document.write("String: Pakistani" + "<br>");
// for(var i = 0; i < strLength; i++){
//        if(str.slice(i, i + 1) === "n"){
//               document.write("Index of 'n': " + i )
//               break
//        }
// }

// (Task 4)
// var HeWl = "Hello World"
// document.write("String: " + HeWl + "<br>");
// var lstIndex = HeWl.lastIndexOf("l")
// document.write("Last index of ' l ': "  + lstIndex);

// (Task 5)
// var str = "Pakistani";
// document.write("<h1>" + "String: Pakistani" + "<br>");
// var thirdIndex = str.slice(3,4);
// document.write("Character at index 3: " + thirdIndex + "</h1>" );

// (Task 6)
// var a = prompt("Your First Name");
// var b = prompt("Your Last Name");
// var c = a.concat(b);
// document.write(c)

// (Task 7)
// var city = "Islamabad";
// document.write("City: " + city + "<br>");
// var cityReplace = city.replace("Islam","Hyder");
// document.write("After replacement: " + cityReplace);

// (Task 8)

// var message = "Ali and Sami are best friends. They play cricket and football together"
// document.write(message + "<br>");
// var mesgReplace = message.replace(/and/g,"&");
// document.write(mesgReplace);

// (Task 9)
// var str = "472";
// document.write("Value: " + str + "<br>")
// document.write("Type: String " + "<br>" + "<br>")
// var num = parseInt(str);
// document.write("Value " + num + "<br>")
// document.write("Type: number " + str + "<br>")

// (Task 10)
// var input = prompt("Which Dry Fruits","Peanuts");
// document.write("User input: " + input + "<br>")

// var outputCapital = input.toUpperCase();
// document.write("Upper Case: " + outputCapital + "<br>")

// (Task 11)
// var inputLan = prompt("Programing Language","javascript");
// document.write("User input: " + inputLan + "<br>")

// var firstChar = inputLan.slice(0,1);
// firstChar = firstChar.toUpperCase();

// var otherChars = inputLan.slice(1)

// document.write("Title case: " + firstChar + otherChars + "<br>")

// (Task 12)
// var num = 33.36;
// var str = num.toString()
// var c = str.replace(".","")
// document.write("Number: " + num + "<br>" + "Result: " + c)

// (Task 13)

// var userName = prompt("Enter your name")
// for(var i=0; i < userName.length; i++){
//         var a = userName.charAt(0);
//         if (a[i] === 33 || 44 || 46 || 64){
//                 document.write("Enter a valid name")
//         }
// }

// (Task 14)
// var items = ["cake","apple pie","cookie","chips","patties"];
// var search = prompt("Welcome to our bakery,Search item","cake");
// search = search.toLowerCase();

// for(i = 0; i <= items.length; i++){
//        if(search === items[i]){
//               document.write(items[i] + " is available at index " + i + " in our bakery")
//        }
//        else{
//               document.write("We're sorry. " + search + " is not available in our bakery")
//        }
//        break
// }

//      (Task 15)
// var a = 97
// var b = 122
// var pass = prompt("Set Your Password");
// for(var i = 0; i < pass.length; i++){
//         var check = pass.charAt(0)
//         if(check[i]  > a && check[i] < b && check[i] >65 && check[i] < 90 && check[i] && check[i] > 48 && check[i] < 57){
//                 document.write("correct");
//         }
// } 
// ***********// 15 skipped*****************

// (Task 16)
// var uni = "University of Karachi"
// const words = uni.split('');
// for(i = 0; i < uni.length; i++){
//        document.write(words[i] + "<br>");
// }

//         // (Task 17)
// var input = prompt("Your Country Name","Pakistan");
// document.write("User input: " + input + "<br>")
// // var lastChar = input.length
// for(i = 0; i < input.length; i++){
//        if(input[i] === "n"){
//               document.write("Index of 'n': " + i)
//        }
// }

//          (Task 18)
// var para = "The quick brown fox jumps over the lazy dog";
// para = para.toLowerCase();


//           (chapter 26 to 30)

//          (Task 1)

// var positiveInteger = +prompt();
// document.write("number: " + positiveInteger + "<br>");

// var roundOff = Math.round(positiveInteger)
// document.write("round off value: " + roundOff + "<br>");

// var floor = Math.floor(positiveInteger)
// document.write("floor value: " + floor + "<br>");

// var ceil = Math.ceil(positiveInteger)
// document.write("ceil value: " + ceil + "<br>");

//          (Task 2)

// var negativeInteger = +prompt();


// var signConvert = negativeInteger.toString();

// var signCheck = signConvert.slice(0, 1);

// if (signCheck === "-") {
//     document.write("number: " + negativeInteger + "<br>");

//     var roundOff = Math.round(negativeInteger)
//     document.write("round off value: " + roundOff + "<br>");

//     var floor = Math.floor(negativeInteger)
//     document.write("floor value: " + floor + "<br>");

//     var ceil = Math.ceil(negativeInteger)
//     document.write("ceil value: " + ceil + "<br>");
// }
// else {
//     alert("Please enter negative value")
// }

//          (Task 3)
// var a = -4;
// var b = Math.abs(a)
// document.write("The absolute value of " + a + " is " + b)

//          (Task 4)
// var dice = Math.random() * 6;
// var diceValue = Math.ceil(dice);
// var diceResult = 2;
// document.write("Random dice value: " + "  " + diceValue + "<br>"  + "<br>")

// var dice = Math.random() * 6;
// var diceValue = Math.ceil(dice);
// var diceResult = 2;
// document.write("Random dice value: " + "  " + diceValue + "<br>")

//          (Task 5)
// var coin = Math.random() * 2;
// var coinValue = Math.ceil(coin);
// if(coinValue === 1){
// document.write(coinValue + "<br>"  + "random coin value: Heads" + "<br>")
// }
// else if(coinValue === 2){
// document.write(coinValue + "<br>"  + "random coin value: Tails")
// }

//          (Task 6)
// var randomNumGen = Math.random() * 100;
// var randomNum = Math.ceil(randomNumGen);
// document.write("random number between 1 and 100: " + randomNum);

//          (Task 7)
// var weight = prompt("Enter your weight","50 kgs");
// document.write("The weight of the user is " + weight);

//          (Task 8)
// var secretNum = 7;
// var guess = +prompt("Enter a number between 1 to 10");
// if(secretNum === guess){
//     alert("Whoohoo! You guess the right number")
// }
// else{
//     alert("Try Again")
// }

//           (chapter 31 to 34)

//          (Task 1)
// var date = new Date();
// document.write(date)

//          (Task 2)
// var date = new Date();
// months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
// currentMonth = date.getMonth();
// alert("Current Month: " + months[currentMonth])

//          (Task 3)
// var date = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = date.getDay();
// alert("Today is " + dayNames[day])

//          (Task 4)
// var date = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = date.getDay();
// var currentDay = dayNames[day];
// alert("Today is " + dayNames[day])
// if(currentDay === ("Sun"||"Sat")){
//     document.write("It's Fun Day");
// }

//          (Task 5)
// var date = new Date();
// var dateNum = date.getDate();
// if(dateNum < 16){
//     document.write("First 15 Days of The Month");
// }
// else{
//     document.write("Last Days of The Month");
// }

//          (Task 6)
// var a = new Date();
// document.write("Current Date" + a + "<br>");

// var b = a.getTime();
// document.write("Elapsed milliseconds since January 1 , 1970: "  + b + "<br>");

// var c = b/(1000*60)
// document.write("Elapsed minutes since January 1 , 1970: "  + c + "<br>");

//          (Task 7)
// var date = new Date();
// var hours = date.getHours();
// if(hours < 12){
//     document.write("It's AM")
// }
// else{
//     document.write("It's PM")
// }

//          (Task 8)
// var lastDate = new Date("Dec 31,2020");
// document.write(lastDate);  

//          (Task 9)
// var ramadanDate = new Date("June 18,2015");
// var ramadanTime = ramadanDate.getTime();

// var currentDate = new Date();
// var dateTime = currentDate.getTime();

// var timePassed = dateTime - ramadanTime
// console.log(timePassed)
// var actualDaysPassed = Math.round(timePassed/(1000*60*60*24));
// console.log(actualDaysPassed + " days have passed since 1st Ramadan,2015")

//  (Task 10)
// var referenceDate = new Date("Dec 5,2015");
// var referenceTime = referenceDate.getTime();

// var currentDate = new Date();
// var currentTime = currentDate.getTime();

// secPassed = currentTime - referenceTime;
// secPassed = Math.round(secPassed/1000)
// document.write("On reference date " + referenceDate +"<br>")
// document.write(secPassed + " second has pased since the beginning of 2015")

//  (Task 11)
// var currDate = new Date();
// var hour = currDate.getHours();
// document.write(currDate + "<br>");

// var date2 = new Date();
// var lastHour = date2.getHours(hour - 1)
// date2.setHours(hour - 1)

// document.write(date2);

//  (Task 12)
// var date = new Date();
// var year = date.getFullYear();
// document.write("current date: " + date + "<br>");

// var dateP = new Date();
// dateP.setYear(year - 100)
// document.write("100 yesrs back, it was  : " + dateP);

//  (Task 13)
// var dob = new Date("Feb 11,2000");
// var dobTime = dob.getTime();

// var cDate = new Date();
// var cTime = cDate.getTime();

// var difBw = cDate - dobTime;
// var actAge = Math.floor(difBw/(1000*60*60*30*24*12))
// document.write(actAge)

//  (Task 14)
// var cusName = "Ghulam Ibrahim Khan";

// var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date;
// var cMonth = date.getMonth();

// var noOfUnits = 410;
// var chrPerUnits = 16;
// var tAmount = noOfUnits * chrPerUnits;

// var lateChr = 350;
// var latePay = lateChr + tAmount;

// document.write("Customer Name: " + cusName + "<br>")
// document.write("Month: " + cMonth  + "<br>")
// document.write("Number of Units: " + noOfUnits + "<br>")
// document.write("Charges per Unit:" + chrPerUnits + "<br>"  +"<br>")

// document.write("Net Amount Payable (within Due Date): " + tAmount  +"<br>")
// document.write("Late payment surcharge: " + lateChr  +"<br>")
// document.write("Gross Amount Payable(after Due Date): " + latePay)

//           (chapter 35 to 38)

//  (Task 1)
// function date(){
//         document.write(new Date());
// }
// date();

//  (Task 2)
// function userName(){
//         var a = prompt("Enter Your First Name")
//         var b = prompt("Enter Your Last Name")
//         document.write("Greeting " + a + " " +b)
// }
// userName();

//  (Task 3)
// function sum(){
//         var a = +prompt("Enter 1st number","3");
//         var b = +prompt("Enter 2nd number","4");
//         var sum = a + b;
//         document.write(sum)
// }
// sum()

//  (Task 4)
// function sum() {
//         var a = +prompt("Enter 1st #");

//         var operator = prompt("Enter operator","+");

//         var b = +prompt("Enter 2nd #")
//         if(operator === "+"){
//                 document.write(a + b)
//         }
//         else if(operator === "-"){
//                 document.write(a - b)
//         }
//         else if(operator === "*"){
//                 document.write(a * b)
//         }
//         else if(operator === "/"){
//                 document.write(a / b)
//         }
//         else if(operator === "%"){
//                 document.write(a % b)
//         }
//         else{document.write("something went wrong")}
// }
// sum()

//  (Task 5) 
// function square() {
//         var a = +prompt("Enter Your Number")

//         for (i = 1; i < a; i = a + i - 1) {
//                 b = a * a;
//                 document.write(b);
//         }
// }
// square();

//  (Task 6)
// function factorial(){
// var a = +prompt("Enter your Number","7")
// var a = document.write(7)

// for(var i = a; i >= a; i--){
//         console.log(a)
// }

// }
// console.log(factorial())


//  (Task 7)
// function counting(){ 
// var f = +prompt("Where to start","Enter Number" )
// var l = +prompt("Where to end","Enter Number" )

// for(f ; f <= l; f++){
//         document.write(f + "<br>");
// }
// }
// counting();

// //  (Task 8)
// function hypo(base,Perpen){
//         var a = base * base ;
//         var b = Perpen * Perpen;
//         var c = a + b ;
//         var d = Math.sqrt(c)
//         document.write(d)
// }
// var base = +prompt("Enter base");
// var Perpen = +prompt("Enter perpendicular");
// hypo(base,Perpen)


// //  (Task 9)
// function area(width,height){
//         var a = width * height;
//         document.write(a)
// }
// var width = +prompt("Enter Width of a triangle")
// var heigth = +prompt("Enter Heigth of a triangle")
// area(width,heigth);

// //  (Task 10)
// function palindrom() {
//         var a = prompt("Check Word");
//         var a = a.toLowerCase();

//         var b = "";
//         for (var i = a.length - 1; i >= 0; i--){
//                 b += a[i]
//         }

//         if(a === b){
//                 document.write("This is Pallindrom Word")
//         }
//         else{
//                 document.write("This is'nt Pallindrom Word");
//         }Pallindrom
// }

// palindrom();

// //  (Task 11)
// function upperWords(str){
//         var words = str.split(" ").map(word =>{
//                 var firstLetter = word.slice(0,1)
//                 var rest = word.slice(1)
//                 firstLetter = firstLetter.toUpperCase();
//                 console.log(firstLetter, rest);
//                 return `${firstLetter}${rest}`;
//         });
//         return words.join(" ")

// }
// var a = upperWords("the quick brown fox");
// document.write(a)

// //  (Task 11)  // dusry triky sy
// function upperWords(str) {
//         var words = str.split(" ").map(word => {
              
//                 return word.charAt(0).toUpperCase()+word.slice(1);
//         });
//         return words.join(" ")

// }
// var a = upperWords("the quick brown fox");
// document.write(a)


// //  (Task 12)            ---Skipped***
// function longestWord(str){
//         var longestWord = "";
//         var words = str.split(" ");

//         for(var i=0; i < words.length; i++){
//                 var sinWord = words[i]
        
//         if(sinWord.length > longestWord.length){
//                 longestWord = sinWord
//         }
// }
//         return longestWord
// } 
// var fun = longestWord("Web Development Tutorial");
// document.write(fun)

// //  (Task 13)            ---Skipped***

// //  (Task 14) 
//      (A)
// function calcCircumference(radius){
//         var circum = (2 * 3.14) * radius;
        
//         return circum
// }
// var circumference = calcCircumference(3);
// document.write(circumference)

//       (A)
// function calcArea(radius){
//         var a = 3.14 * (radius * radius)

//         return  a;
// }
// var area = calcArea(7);
// document.write(area);