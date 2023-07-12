// /*
// //  1. Ways to print in javascript
// //     console.log("Hello world");
// //     alert("me");
// //     document.write("This is document write"); 

// //     2. Console API
// //     console.log("Pakistan");
// //     console.warn("This is warning");
// //     console.error("This is an error");
// //     console.clear(); 

// // 3. Ways to intialize variables 
// // var;
// // let;
// // const;


// /* Data types in Javascript
//  Mainly of two types 
// 1. Premitive data types : Undefined, string ,boolean ,number ,symbol,null 
// 2. Refrence data types : Array and Object
// */

// // 1.Number 
// var num1 = 55.6;
// var num2 = 65;

// // 2.String 
// var str1 = "This is a string";
// var str2 = "This is also string";


// // 3. Boolean 
// var a = true;
// var b = false;
// // console.log(a,b);

// // 4. Undefined
// var und = undefined;
// // console.log(und);
// var pak;
// // console.log(pak);

// // 5.Null 
// var n = null;
// // console.log(n)

// // 6.Object 
// var marks = {
//     Ali: 76,
//     Ahmed: 99,
//     Ismail: 77.88
// };

// // 7. Array
// var arr=[1,2,3,"Ali Imran",5];
// // console.log(arr);

// // Operators in Javascript 
// var a = 54;
// var b = 65;
// // console.log("The value of a + b is ",a+b);
// // console.log("The value of a - b is ",a-b);
// // console.log("The value of a * b is ",a*b);
// // console.log("The value of a / b is ",a/b);

// // Assignment Operators
// var c =a+b;
// c += 10; /*c += c+10*/
// c -= 10;  /*c-= c-10*/
// c *= 10;  /*c += c*10*/
// c /= 10;  /*c/= c/10*/
// // console.log(c);

// // Comparsion Operators 
// var x=45;
// var y=56;
// // console.log(x == y); 
// // console.log(x<=y);
// // console.log(x>=y);
// // console.log(x>y);
// // console.log(x<y); 

// // Logical Operators 

// //1. AND Operator(Conjuction)
// /*console.log("Truth table of AND Operator");
// console.log(true && true);   
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


// // 2.OR Operator (Disconjuction)
// console.log("Truth table of OR Operator");
// console.log(true  || true);   
// console.log(true  || false);
// console.log(false || true);
// console.log(false || false);
 
// // 3.NOT Operator (Negation)
// console.log("Truth table of NOT Operator");
// console.log(!true)
// console.log(!false)*/

  
// //  Functions in Javascript(DRY = Do not repeat yourself)
// function avg(a,b){
//     c=(a+b)/2;
//     return c;
// }
// c1 = avg(4,7);
// c2 = avg(8,4);
// // console.log(c1,"\n",c2);

//  Conditional Statement in Javascript
// 1. if 
// 2. if-else 
// 3. if-else ladder 

// // Loops in Javascript 

// // 1.For loop 

// var arr = [1,2,3,4,5, 6,7];
// // for(var i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i])
// // }

// // arr.forEach(function(element){
// //     console.log(element)
// // })

// // 2.While loop 

// // let j=0;
// // while(j<arr.length){
// //     console.log(arr[j]);
// //     j++;
// // }

// // 3. Do while loop 

// // do{
// //     console.log(arr[j]);
// //     j++;
// // }
// // while(j<arr.length);

// // Break Statement : To exit from loop

// // for(let k=0;k<arr.length;k++)
// // {
// //     if(k==2)
// //     {break;}

// //     console.log(arr[k]);
// // }

// // Continue statement : To skip the statement and move forward

// for(let k=0;k<arr.length;k++)
// {
//     if(k==2)
//     {continue;}

//     console.log(arr[k]);
// }
// Use of some useful function

// 1. pop(): It is used to remove last element of array
// let arr= [1,"ALi",5,"hamza"];
// console.log(arr.length);
// arr.pop();
// console.log(arr);

// 2.push() : It is used to add something as a last element of array 
// let arr= [1,"ALi",5,"hamza"];
// arr.push(90,"Ahmed")
// console.log(arr);

// 3. shift() : It is used to remove first element of array 
// let arr= [1,"ALi",5,"hamza"];
// arr.shift();
// console.log(arr);

// 4. unshift(): It is used to add something as a first element of array
// There are two methods to use unshift function 
                // (1)
// let arr= [1,"ALi",5,"hamza"];
// arr.unshift("1 ,Pakistan");
// console.log(arr);

                // (2)
// let arr= [1,"ALi",5,"hamza"];
// const newlength =arr.unshift("Pakistan")
// console.log(newlength)
// console.log(arr)


// Array to String function 
// (to string)
// let arr= [1,"ALi",5,"hamza"];
//  let temp = arr.toString()
// console.log(temp)


// To arrange/sort the array sort() will use 

// let arr= [1,"ALi",5,"hamza"];
// let temp1 = arr.sort()
// console.log(temp1)


// at(): It is used to call a/c to index of array

// let fruits =["Apple","Mango","Banana","Orange"]
// let fruit =fruits.at(2);
// console.log(fruit);
// console.log(fruits)


// concat()= Used to joint/merge two or more arrays 

// let arr1= ["Ali","Ahmed","Abdullah"]
// let arr2=["Ubaid","Raza","Yousuf"]
// const joint =arr1.concat(arr2)
// console.log(joint)  


// Construcor 

// let arr1= ["Ali","Ahmed","Abdullah"]
// let text = arr1.constructor;
// console.log(text)


// copyWithin() is used to remove,copy and pasting of array Elements 
// Three parameters are given (target,start,end)

// let arr1= ["Ali","Ahmed","Abdullah","Ismail"]
// arr1.copyWithin(2,0,2)
// console.log(arr1)


// function check() is used to check the correctivity of element of array

// const ages = [32,34,35,55]
// let ahmed =ages.every(checkAge);
// console.log(ahmed)
// function checkAge(age){
//     return age> 18;
// // }


// fill(): Used to fill the array (having three parameter )

// 1st parameter : What you want to fill
// 2nd parameter : From which index the fill start 
// 3rd parameter : Just before the index write in third parameter

// let fruits = ["Banana","Apple","Mango","graphes","Strawberry"];
// let temp = fruits.fill("Kiwi",1,4);
// console.log(temp)


// Map function is used to edit the elements of existing array 

// const number =[4,9,16,25]
// let number1 =number.map(Math.sqrt)
// console.log(number1)

// const arr=[6,9,12,7]
// const newarr=arr.map(myfunction);
// console.log(newarr)
// function myfunction(num){
//     return num*10;
// }


// slice () : It is used call the elements b/w the starting index to ending index giving in parameter  

// let fruits = ["Apple","Mango","Banana","Orange","Graphes"]
// let temp = fruits.slice(2,4)    //index from 2 to just before 4 will call
// console.log(temp)


// splice (): It is used to remove the element from array 

// const animals = ["cat","dog","cow","goat"]
// const add = animals.splice(1)
// console.log(add)


// Use of string in javascript


// To measure string length 

// let my_string = "This is a lovely string,this is lovely"
// console.log(my_string.length) 


// // To check the index of a word from string 
// console.log(my_string.indexOf("lovely"));


// // To check the index of a same word but in the last of string 
// console.log(my_string.lastIndexOf("lovely"));


// // slice(): It is used to check the element/string in the starting index to just before ending index
// console.log(my_string.slice(10,20))


// // replace() : It is used to replace a word from string
// c = my_string.replace("lovely","Saim")
// console.log(c)
// d=c.replace("string","good")
// console.log(d)


// Dates in Javascript(Date function is used to set current date)

// let my_date = new Date();
// console.log(my_date)//  to get date with time a/c to your country
// console.log(my_date.getTime())//   To get time in seconds
// console.log(my_date.getFullYear())   //To get year only
// console.log(my_date.getDate())  //To get date only
// console.log(my_date.getDay())  //To get day only(But in numeric)
// console.log(my_date.getMinutes())  //To get minute
// console.log(my_date.getHours())  //To get hours


// DOM(Documnet object model) in javascript(Access DOM/HTML material in page) 

// document.getElementById('btn').style.color='orange' //Writing CSS dynamatically

// document.getElementById('btn').style.border='2px solid blue' //Writing CSS dynamatically

// document.getElementById('btn').style.color='orange' //Writing CSS dynamatically

// let element = document.getElementById('btn')  //get the element through id 
// console.log(element)

// let element2 = document.getElementsByClassName("container")
// console.log(element2)


//classlist.add(): is used to add another class in pre-existing class /property will add
// element2[0].classList.add("bg-primary")
// element2[0].classList.add("text-success")


//classlist.remove(): Is used to remove applied class
// element2[0].classList.remove("container")

//innerHTML is used to check HTML
// console.log(element.innerHTML)



// innerText is used to check text only
// console.log(element.innerText)


//to get element by tag name
// tn = document.getElementsByTagName('p')
// console.log(tn)


//to append a child in parent
// createdelement= document.createElement('p');
// createdelement.innerText = "This is a created paragraph"
// tn[0].appendChild(createdelement)


// to replace a child 
// createdelement2= document.createElement('b');
// createdelement2.innerText = "This is a bold paragraph"
// tn[0].replaceChild(createdelement2,createdelement)


//To see the location
// console.log(document.location)


//TO check the title of the page
// console.log(document.title)


//To check the Url 
// console.log(document.URL)


//To see no of scripts
// console.log(document.scripts)


//To check all link given in HTML page
// console.log(document.links)


// //To check images 
// console.log(document.images)


// //To check domain only
// console.log(document.domain)


//To select element using query
// sel = document.querySelector("container1")
// console.log(sel)    


//TO select all element using query 
// sel = document.querySelectorAll("container1")
// console.log(sel)    


//Evenets in Javascript
// 1. onclick event using "onclick"

// function clicked(){
//     console.log("The button was clicked")
// }

// // // 2. loading event using "window.onload"

// window.onload= function(){
//     console.log("Document was loaded")
// }


// //TO add event to pre existing class use : .addeventlistner(eventname)
// // 1.Click (when you click on given destination this function will work)

// // // through class 
// firstcontainer.addEventListener('click',function()
//     {   
//     console.log("Clicked on")
// }
// )
// // // through id 
// // btn.addEventListener('click',function(){
// //     console.log("click me")
// // })


// // // 2.mouseover(when you apply mouse on given destination this function will work) 
// // firstcontainer.addEventListener('mouseover',function()
// //     {console.log("Mouse on container")
// // }
// // )


// // //3.mouseout(when you out the mouse from given destination this function will work)
// // firstcontainer.addEventListener('mouseout',function()
// //     {console.log("Mouse is out of container")
// // }
// // )

// // 4.mouseup(when you release your click from given destination this function will work)

// let prevHtml =document.querySelector('.firstcontainer').innerHTML //can change html also

// firstcontainer.addEventListener('mouseup',function()
// {   document.querySelector('.firstcontainer').innerHTML=prevHtml;
//         console.log("Mouse is up of  container")
// }
// )

// // 5.mousedown(when you click on given destination this function will work)

// firstcontainer.addEventListener('mousedown',function()
//     {
// document.querySelector('.firstcontainer').innerHTML = "<b> We have clicked</b>"

//         console.log("Mouse is down of  container")
// }
// )


// Set timeout and set interval 
// Arrow function 
// sum = (a,b)=>{
//     return a+b;
    
// }


// Settimeout: USe to set something in given time 
// (Two arguments) : (First argument= want to write , Second argument = In given time(milisec))

logkaro = ()=>{

    document.querySelector('.firstcontainer').innerHTML = "<b> <i>Set interval fired </i> </b>"

    console.log("This is log")
}
setTimeout(logkaro,2000);


// Setinterval(): Used to work constantly
// setInterval(logkaro,3000);


//To clear interval(stop interval working)
a=setInterval(logkaro,3000);
clearInterval(a);


// To clear setTimeout(stop timeout working )
clr=setTimeout(logkaro,2000)
clearTimeout(clr)

    
