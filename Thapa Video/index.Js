// console.log("Hello World");

// Values and Variables
// var myName ="Ali Imran"; //String
// console.log(myName);
// var myAge = 22;   //Number
// console.log(myAge);
// var AmI = true  //Boolean
// console.log(AmI);
// var IAmUsless = null;
// console.log(IAmUsless);
// var StandBy ;
// console.log(StandBy)



// // isNaN function 

// // To check that is not a number or a number
// console.log(isNaN(myName));    // Output :true(means not a number)
// console.log(isNaN(myAge));      // Output :false(means a number)



// // typeof Function : Used to check Data Type of given Variable

// console.log(typeof(myName));
// console.log(typeof(myAge));     
// console.log(typeof(AmI));
// console.log(typeof(IAmUsless));   //Give Output :Object(2nd Bug in JavaScript)
// console.log(typeof(StandBy)); 



//  Premitive Data Types in JavaScript

// There are six Premitive DataTypes in JavaScript
// 1.Undefined
// 2.Boolean 
// 3.Number 
// 4. String 
// 5. BigInt
// 6.Symbol




// Checking of Number

// console.log(NaN===NaN)     //Output: False
// console.log(Number.NaN===NaN)   //Output: False
// console.log(isNaN(NaN))          //Output: True
// console.log(isNaN(Number.NaN))  //Output: True
// console.log(Number.isNaN(NaN));     //Output: True



// Practice # 1 

// console.log(10+"20")   //Output: 1020
// console.log(9 -"5")  //Output : 4 {1st Bug in JavaScript(Number and String can not sum but subract)}
// console.log("Java" + "Script")   //Output : JavaScript
// console.log(" "+" ")               // Output : 
// console.log(" "+ 0)             //Output: 0 
// console.log("Ali"-"Imran")    //Output : NaN(Not a number)
// console.log(true + true)        //Output : 2 
// console.log(true + false)       //Output : 1
// console.log(false-true)            //Output : -1
// console.log(true-false)             //Output : 1



// Expression and Operator 

// There are six types of Operator in JavaScript 
// 1.Assingment Operators  (=,==)
// 2. Arithematic Operators (+,-,*,/,%)
// 3. Comparsion Operators(<,>,<=,<=,=,!) 
// 4. Logical Operators 
// 5.String Operators 
// 6. Conditional Operators 


// 1.Assignment operator 
// var x =5;
// var y= 5;
// console.log("Is both are equal : "+ x == y); //(not give a corret output) //+ operator is used to concerent/joint string with number
// console.log(x==y);// (give correct output)

// // 2.Arithematic Operator 
// console.log(3+3);
// console.log(5-4);
// console.log(5*4);
// console.log(6/4);
// console.log(81 % 8);

// Increment and Decrement Operator 
// Posfix x++ or Prefix ++x 

// Postfix 
// var num = 15;
// var newNum = num++;
// console.log(num);
// console.log(newNum);

// Prefix 
// var num = 15;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);


// Decrement

// Prefix 
// var num = 15;
// var newNum = --num;
// console.log(num);
// console.log(newNum);

// Postfix
// var num = 15;
// var newNum = num--;
// console.log(num);
// console.log(newNum);

// Comparsion Operator 
// var a=10;
// var b =20;
// console.log(a!=b);  //!= (not equals to)
// console.log(a<b);  // <(less than)
// console.log(a>b);// >(greater than

// Logical Operators 
// Not(!) , And(&&) ,OR(||)
// Example

// var a=10;
// var b=30; 
// if(a<b && a!=b){
//     console.log("Both Conditions Satisfied");
// }
// else{
//     console.log("Both conditions are not satisfied");
// }

// if(a>b || a!=b){
//     console.log("Both or any one Condition is Satisfied");
// }
// else{
//     console.log("No condition is satisfied");
// }


// String Operator 
// +(Concatenation Operator )
// Example 
// var a= 786;
// console.log("Ali "+ a);




// // Practice:

// console.log(3**3);  //(**) Expontention operator (a**b)= a^b {e.g =3**3 =27 }
// console.log(1**-1);


// // Concate String and Number 
// console.log("Ali Imran "+ 123);



// Program to  Swapping of two number(WIth use of Third variable):
// var a =10;
// var b=20;
// var temp;
// console.log("Value of a before Swapping :"+a);
// console.log("Value of b before Swapping :"+b);
// temp=a;
// a=b;
// b=temp;
// console.log("Value of a after swapping :"+a);
// console.log("Value of b after swapping :"+b);



// Program to Swap two variables without Using Third Variable
// var a= 10;
// var b=5;
// console.log("Value of a before Swapping:"+a);
// console.log("Value of b before Swapping:"+b);
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("Value of a after Swapping:"+a);
// console.log("Value of b after Swapping:"+b);


// Difference Between (==) and (===)
// (==): Check only value of Variable 
// (===): Check value as well as Datatype of Variable 

// Example:
// var a =10;
// var b= "10";
// console.log(a==b); //Gives output true beacuse its only check the value
// console.log(a===b); //Gives output false beacuse the it checks datatype as well as value,in this case datatype is different therefore it gives the output false



// Control Statement 
//1. if..else
// var age =15;
// if(age>18)
// {console.log("Your are an adult person");
// }
// else{
//     console.log("Sorry you are a Child");
// }



// Write a program to check leap year or not 
// Hint : Speciality of Leap year (Exactly divided by four,exactly divided by 400 but not divided by hundred),Normal year has 365 days ,but leap year has 366 days 
// var year = 400;
// if(year % 4 === 0){
// if(year % 100 === 0){
// if(year % 400 === 0)
// {
//     console.log("This Year "+year +" a Leap year");
// }
// else{
//     console.log("This Year "+year +" is not a Leap year");
    
// }
// }
// else{
//     console.log("This Year "+year +" a Leap year");
// }
// }

// else{
//     console.log("This Year "+year +" is not a Leap year");
// }

// 2:16