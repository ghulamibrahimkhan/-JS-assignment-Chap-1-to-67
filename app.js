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
// var result = --a - --b +  ++b + b--;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>");

// --a;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>"+ "<br>");

// --a - --b;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>"+ "<br>");

// --a - --b + ++b;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>"+ "<br>");

// --a - --b + ++b +b--;
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

        // *** Chapter # 10 to 11 ***//

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
// skipped , will try in last

    // (Task 4)
// var fuel = +prompt("Current fuel ammount in liters");
// if(fuel < 0.25){
//     document.write("Please refill the fuel in your car")
// }

    // (Task 5)
    // (a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

    // (b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

    // (c)
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

    // (d)    
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

    // (e)
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

    // (f)
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

   // (Task 8)
// var num = prompt("Check your number");
// if(3 % num === 0){
//     document.write("Given number is divisible by 3 ");

// else{
//     document.write("Given number is'nt divisible by 3 ");
// }

   // (Task 9)
// var num = +prompt("Enter the number" );
// if(num % 2 === 0)
// {
//    document.write("Number is EVEN");
// }
// else{
//  document.write("Number is ODD");
// }

   // (Task 10)
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

   // (Task 11)
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
//     document.write("Integer 1 is Bigger");
// }
// else if(integer1st < integer2nd){
//     document.write("Integer 2 is Bigger");
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
// skipped yet

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

   // (Task 6)
// var greeting;
// var hour = 13;
// if(hour < 18){
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
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
// var boolenArray  skipped                     task 5,6,7

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

// var search= prompt("Welcome to Ibrahim's Bakery. What do you want to order sir/ma'am?","Cookie"); 
// search = search.toLowerCase();
// var items = ["cake", "apple pie", "cookie", "chips", "patties"]

// if(items[0] === search){
//     document.write(items[0] + " is available at index 1 in our bakery")
// }
// else if(items[1] === search){
//     document.write(items[1] + " is available at index 2 in our bakery")
// }
// else if(items[2] === search){
//     document.write(items[2] + " is available at index 3 in our bakery")
// }
// else if(items[3] === search){
//     document.write(items[3] + " is available at index 4 in our bakery")
// }
// else if(items[4] === search){
//     document.write(items[04] + " is available at index 5 in our bakery")
// }
// else{
//     document.write(" We're sorry. " + search + " is'nt available in our bakery "  )
// }

        // (Task 8)
        // Skipped

        // (Task 9)
        // Skipped

        // (Task 10)
// document.write("<h1>" + "Series" + "</h1>")
// for(var i = 5; i <= 100; i = i = i + 5 ){
//     document.write(i + " , ")
// }