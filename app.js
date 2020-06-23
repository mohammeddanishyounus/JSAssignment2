//Chapter21-25
// //1
// var firstName = prompt("Enter your First Name: ");
// var lastName = prompt("Enter your Last Name: ");
// var fullName = firstName+" "+lastName;
// alert("Welcome "+fullName);

// //2
// var favPhoneModel = prompt("Enter your favourite mobile phone model: ");
// var len=favPhoneModel.length;
// document.write("length of string is: "+len);

// //3
// var string = "Pakistani";
// var index=string.indexOf("n");
// document.write(index);

// //4
// var string = "Hello World";
// var index=string.lastIndexOf("l");
// document.write(index);

// //5
// var string = "Pakistani";
// var index=string.charAt(3);
// document.write(index);

// //6
// var firstName = prompt("Enter your First Name: ");
// var lastName = prompt("Enter your Last Name: ");
// var fullName=firstName.concat(" ",lastName);
// document.write("Welcome "+fullName);

// //7
// var cityName = "Hyderabad";
// document.write(cityName);
// cityName=cityName.replace("Hyder","Islam");
// document.write(cityName);

// //8
// var textMessage = "and and";
// document.write(textMessage);
// textMessage=textMessage.replace(/"and"/g,"&");
// document.write(textMessage);

// //9
// var stringValue= "472";
// document.write(typeof(stringValue));
// stringValue=(+472);
// document.write(typeof(stringValue));

// //10
// var input = "peanuts";
// document.write(input);
// input=input.toUpperCase();
// document.write(input);

// //11
// var input = "javascript";
// document.write(input);
// var index=input.charAt(0).toUpperCase();
// input=input.replace(input[0],index);
// document.write(input);

// //12
// var stringValue= 35.36;
// document.write(typeof(stringValue));
// document.write(stringValue);
// stringValue=stringValue.toString();
// document.write(typeof(stringValue));
// document.write(stringValue);

// //13
// var text = prompt("Enter username: ");
// var spcChar = ["!",",",".","@"];
// var result;
// text.split();

// for(var i=0;i<=spcChar.length;i++){
//     for (var j=0;j<=spcChar.length;j++){
//         if(spcChar[j]==text[i]){
//             result++;
//         }
//         else {
//             result=0;
//         }
//     }
// }
// if(result==1){
//     document.write("Not a valid username.");
// }
// else{
//     document.write("Valid username.");
// }

// //14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search=prompt("Welcome to DH Bakery! What do you want to order Sir/Madam: ");
// var save=search.toLowerCase();
//     if(A.indexOf(save)!==-1){
//         document.write("<br>"+search+" is found");
//     }
//     else {
//         document.write("<br>"+search+" is not found");
//      }

// //15
// var password=prompt("Enter a valid password: ");
// var lowerCaseLetters = /[a-z]/g;
// var upperCaseLetters = /[A-Z]/g;
// var numbers = /[0-9]/g;
// var len=password.length;
// password.split();
// if(password[0]>0&&password[0]<9){
//     document.write("Password should not start with numbers.")
// }
// else if(password.match(lowerCaseLetters)&&password.match(upperCaseLetters)&&password.match(numbers)&&password.length>6){
//     document.write("Password is accepted! Valid Password");
// }
// else{
//     document.write("Password is not accepted! not a valid password");;
// }

// //16
// var university = "University of Karachi";
// university.split();
// for(var i=0; i<university.length;i++){
//     document.write(university[i]+"<br>");
// }

// //17
// var input=prompt("Enter any string: ");
// var len=input.length-1;
// document.write(input[len]);

// //18
// var input="The quick brown fox jumps over the lazy dog";
// var save=input.toLowerCase();
// var count=save.match(/the/g).length;
// document.write(count);

//Chapter 26-30
// //1
// var input = prompt("Enter positive integer: ");
// input=(+input);
// document.write("Round: "+ Math.round(input)+"<br>");
// document.write("Ceil: "+ Math.ceil(input)+"<br>");
// document.write("Floor: "+ Math.floor(input)+"<br>");

// //2
// var input = prompt("Enter negative integer: ");
// input=(+input);
// document.write("Round: "+ Math.round(input)+"<br>");
// document.write("Ceil: "+ Math.ceil(input)+"<br>");
// document.write("Floor: "+ Math.floor(input)+"<br>");

// //3
// var input=-4;
// document.write("Abosulte: "+ Math.abs(input)+"<br>");

// //4
// var diceRoll = Math.floor(Math.random() * 6 ) +1;
// document.write("You rolled a " + diceRoll);

// //5
// var tossACoin = Math.floor(Math.random() * 2 ) +1;
// if(tossACoin==1){
//     document.write("Your coin toss a Head");
// }
// else if (tossACoin==2){
//     document.write("Your coin toss a Tail");
// }

// //6
// var number = Math.floor(Math.random() * 100 ) +1;
// document.write("Random number found from 1 to 100 is: " + number);

// //7
// var weight=prompt("Enter your weight: ");
// weight=Number(weight);
// document.write(weight);
// weight=weight.toFixed(2);
// document.write(weight);

// //8
// var RandomNumber = Math.floor(Math.random() * 10 ) +1;
// var UserNumber = prompt("Guess any number in between 1 to 10: ");
// UserNumber=parseInt(UserNumber);
// if(RandomNumber===UserNumber){
//     document.write("You Guess a correct number.");
// }
// else {
//     document.write("Sorry! the correct number is "+RandomNumber);
// }

//Chapter 31-34
// //1
// var date = new Date();
// document.write(date);

// //2
// var date = new Date();
// var month = date.getMonth();
// var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// document.write(months[month]);

// //3
// var date = new Date();
// var day = date.getDay();
// var days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
// document.write(day[days]);

// //4
// var date = new Date();
// var day = date.getDay();
// var days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

// if(day==6||day==7){
//     document.write("It's Fun Day");
// }
// else {
//     document.write("It's Work Day");
// }

// //5
// var date = new Date();
// var newDate = date.getDate();

// if(newDate<=15){
//     document.write("First fifteen days of the month");
// }
// else if(newDate>15&&newDate<=31){
//     document.write("Last days of the month");
// }

// //6
// var date = new Date();
// var time1970=date.getTime();
// document.write("Miliseconds: "+time1970+"<br>");
// time1970=time1970/(1000*60*60);
// document.write("Minutes: "+time1970);

// //7
// var date = new Date();
// var hour=date.getHours();
// if(hour<=12){
//         document.write("It's AM");
//     }
//     else if(hour>12&&hour<24){
//         document.write("It's PM");
//     }

// //8
// var laterDate= new Date("Dec 31,2020");
// document.write("Later Date: "+laterDate);

// //9
// var date = new Date();
// var RamadanStartDate= new Date("Apr 24,2020");
// var newDateMili=date.getTime();
// var newRamadanMili=RamadanStartDate.getTime();
// var diff=newDateMili-newRamadanMili;
// var days=diff/(1000*60*60*24);
// days=Math.ceil(days);
// document.write(days+" passed to Ramadan is this from "+RamadanStartDate);

// //10
// var date = new Date();
// var referencetDate= new Date("Dec 31,2019");
// var newDateMili=date.getTime();
// var newRefMili=referencetDate.getTime();
// var diff=newDateMili-newRefMili;
// var seconds=diff/(1000*60);
// seconds=Math.floor(seconds);
// document.write(seconds+" seconds passed from reference date "+referencetDate);

// //11
// var date = new Date();
// var hour=date.getHours()-12;
// var beforeHour=hour-1;
// document.write("Current time is: "+hour+" before 1 hour it was "+beforeHour);

// //12
// var date = new Date();
// var beforeDate=new Date(new Date().setFullYear(new Date().getFullYear() - 100));
// document.write("Today's Date: "+date+"<br>");
// document.write("100 years back date was: "+beforeDate+"<br>");

// //13
// var userAge=prompt("Enter your age: ");
// userAge=Number(userAge);
// document.write("User entered his/her age is:"+ userAge);
// var birthDate=new Date(new Date().setFullYear(new Date().getFullYear()-userAge));
// var birthYear=birthDate.getFullYear();
// document.write("User birth year is :"+ birthYear);

// //14
// var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// var customerName="Muhammad Danish Younus";
// var billingMonth=months[new Date().getMonth()];
// var billingUnits=200;
// var unitCharges=15;
// var netAmount= billingUnits*unitCharges;
// var lateCharges=netAmount/100*15;
// var grossAmount=netAmount+lateCharges;
// document.write("Customer Name: "+customerName+"<br>");
// document.write("Billing Month: "+billingMonth+"<br>");
// document.write("No. of Units Charged: "+billingUnits+"<br>");
// document.write("Net Amount Payable (with in due date): "+netAmount+"<br>");
// document.write("Late payment surcharge: "+lateCharges+"<br>");
// document.write("Gross Amount Payable (after due date): "+grossAmount+"<br>");

//Chapter 35-38
// //1
// function dateAndTime(){
//     var fullDate = new Date();
//     document.write(fullDate);
// }
// dateAndTime();

// //2
// function fullName(firstName, lastName){
//     var firstName = firstName;
//     var lastName = lastName;
//     var fullName = firstName + " " + lastName;
//     return fullName;
// }

// document.write(fullName("danish", "younus"));

// //3
// function add (a,b){
//     var a = prompt("enter first number: ");
//     var b = prompt("enter second number: ");
//     var add;
//     a=Number(a);
//     b=Number(b);
//     return add=a+b;
// }
// var c=add(2,3);
// document.write(c);

//4
// function calculator (a,b,c){
//     var num1 = a;
//     var num2 = b;
//     var operator= c;

// // var num1=prompt("Enter first number: ");
// // var num2=prompt("Enter second number: ");
// // var operator=prompt("Enter operator: ");
// num1=(+num1);
// num2=(+num2);

// if(operator=="+"){
//     var sum=num1+num2;
//     document.write("Addition of " + num1 + " and " + num2 + " is : "+(num1+num2));
// }
// else if (operator=="-"){
//     var sum=num1-num2;
//     document.write("Subtraction of " + num1 + " and " + num2 + " is : "+(num1-num2));
// }
// else if(operator=="*"){
//     var sum=num1*num2;
//     document.write("Multiplication of " + num1 + " and " + num2 + " is : "+(num1*num2));
// }
// else if(operator=="/"){
//     var sum=num1/num2;
//     document.write("Division of " + num1 + " and " + num2 + " is : "+(num1/num2));
// }
// else if(operator=="%"){
//     document.write("Moduler of " + num1 + " and " + num2 + " is : "+(num1%num2));
// }
// else {
//     document.write("You entered a wrong number.");
// }
// }

// calculator(2,4,"+");

// //5
// function squareRoot (a){
//     var num =a;
//     var squareRoot=num*num;
//     document.write("Square Root of "+num+" is: "+squareRoot);
// }

// squareRoot(2);

// //6
// function factorial(n){
//     var ans=1; 
//     for (var i = 2; i <= n; i++) 
//         ans = ans * i; 
//         return ans; 
// }
// document.write(factorial(5));

//7
function countNumber(start, end){
    var num1=start;
    var num2=end;
    for (var i=num1;i<=num2;i++){
        document.write(i+"<br>");
    }
}
countNumber(2,10);