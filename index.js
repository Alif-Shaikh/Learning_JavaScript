//1.ways to print in Javascript

    //console.log("Hello World");
    // alert("Hello Alif");
    document.write("Hello JS World"); //not recommanded


    //2.Javascript console apis

        // console.log("Hello  World");
        // console.log("Hello World",6+8,"another log");
        // console.warn("This is a warning!!!");
        // console.error("This is a error");
        // console.clear();     to clear the window
        // console.assert(4==6);//assertion failed
        // console.assert(4==(5-1));//assertion passed


  //3. Javascript variables
 
  var number1=34;
  var number2=56;
  // console.log(number1+number2);

  //Data Types in Javascript
   //Numbers
  var num1=455;
  var num2=56.76;

  //String
  var str1="This is a string";
  var str2='This is a string';

  //Objects
  var marks={
    Ravi:34,
    Shubham:78,
    Harry:99.977
  }

  // console.log(marks);

  //Booleans
  var a=true;
  var b=false;
 // console.log(a,b);

  //Undefined
  var und;  //dont know what to put
 var und=undefined;
// console.log(undefined);
 //console.log(und);

//Null
var n=null;
// console.log(n);

//at avery high level there are two types data types in JS
// 1.Primitive: number, string, boolean, undefined,null, Symbol

// 2.Reference:Arrays and Objects

// var arr=[1,2,"alif",4,5];
// console.log(arr); 
//--------------------------------------------------


//Operators in JS
//Arithmetic operators
var a=34;
var b=56;
// console.log("the value of a+b is",a+b);
// console.log("the value of a-b is",a-b);
// console.log("the value of a*b is",a*b);
// console.log("the value of a/b is",a/b);

//assignment Operators
var c=b;
c+=2;
c-=2;
c*=2;
c/=2;
// console.log(c);

// comparison/rational Operators
var x=34;
var y=56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x!=y);
// console.log(x>y);
// console.log(x<y);


//logical operators
//logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// logical not
// console.log(!true);
// console.log(!false);
//--------------------------------------------------



//FUNCTIONS in JS
//DRY=> Do not repeat yourself
function avg(a,b){
  return(a+b)/2;
}
c1=avg(4,6);
c2=avg(14,16); 
// console.log(c1,c2);
//-------------------------------------------------


//CONDITIONALS in JS
var age=41;

//single if statement
// if(age>8)
// console.log("You are not a kid");

//if-else statement
// if(age>8)
// console.log("You are not a kid");
// else
// console.log("You are a kid");

//if-else ladder
// if(age>0 && age<18)
// console.log("You are a child");
// else if(age>=13 && age<18)
// console.log("You are a teen");
// else
// console.log("You are adult");
//--------------------------------------------------



// LOOPS in javascript
// var arr=[1,2,3,4,5,6,7];
// console.log(arr);

// for(var i=0;i<arr.length;i++)
// {
//   console.log(arr[i]);
// }

// arr.forEach(function(element){
//   console.log(element);
// })


//while-loop
let j=0 //block level scope
//variable declared with let will not be available after the fun
const ac=0;
// ac=ac+1;   ...not allowed

// while(j<arr.length)
// {
//   console.log(arr[j]);
//   j++; 
// }

let k=10;
let m=5;
//do-while loop
// do{
// console.log(arr[k]); //k=10 is not present so undefined
// k++;
// }while(k<arr.length);
//----------------------------------



//break and continue statement
var arr=[1,2,3,4,5,6,7];
// for(var i=0;i<arr.length;i++)
// {
//   if(i==2){
//     break;
//   }console.log(arr[i]);
// } //0/p=1 2

// for(var i=0;i<arr.length;i++)
// {
//   if(i==2){
//     continue;
//   }console.log(arr[i]);
// } //o/p= 1 2 4 5 6 7
//------------------------------------------------



//Array  Methods
let myArr=["Fan","Camera",34,null,true]; //length=5

// myArr.pop();
// console.log(myArr.length); //after pop length will be 4(last ele is popped)
// myArr.push("Alif");//pushed at the end
// myArr.shift(); //shifts/removes 1st ele
// console.log(myArr.length); //4
// const newLen=myArr.unshift("Alif");  //Alif is unshifted at 1st
// console.log(newLen);
// console.log(myArr);
// console.log(myArr.toString()); //string representation
// let arr1=[3,11,7,4,22]; //11 22 3 4 7 //sorts num by alphabetically by first converting it into string
// arr1.sort();
// console.log(arr1);
//-----------------------------------------------


//String Methods in javascript
let str="Amit is a teacher is is";
// console.log(str.length); //23
// console.log(str.indexOf("is")); //5 by default gives index of 1st occurance
// console.log(str.lastIndexOf("is"));//21

// console.log(str.slice(0,3)); //Ami
// console.log(str.slice(3,7));  //t is
// newStr=str.replace("Amit","Rohan"); //replaces first occurance only
// newStr=newStr.replace("teacher","Scientist");
// console.log(newStr, str);
//-------------------------------------------------


//DATES in javascript
// let myDate = new Date(); //to create new date
// console.log(myDate);
// console.log(myDate.getTime());//in seconds
// console.log(myDate.getFullYear());//2024
// console.log(myDate.getDay());//Today is fri so its 5th day //o/p=>5
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
//--------------------------------------------------
//DOM(Document Object Model) Manipulation
//def=> "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."
let elem=document.getElementById('click');
// console.log(elem);

let elemClass=document.getElementsByClassName('container');
//console.log(elemClass);
//  elemClass[0].style.background="yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
elemClass[0].classList.remove("text-success");
// elemClass[0].innerHTML; ...gives HTML code inside that particular element
// elemClass[0].innerText; ...gives text inside that particular element
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn=document.getElementsByTagName('button');
// console.log(tn);
// tnd=document.getElementsByTagName('div');
// console.log(tnd);

// createdElement=document.createElement('P');
// createdElement.innerText="This is a created para";
// tnd[0].appendChild(createdElement); //tnd[0] is a first div

// createdElement2=document.createElement('b');
// createdElement2.innerText="This is a created bold";
// tnd[0].replaceChild(createdElement2, createdElement); //tnd[0] is a first div

//tnd[0].removeChild(createdElement2); removes 'b' element

//Selecting using query
// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

// function clicked(){
//   console.log('The button was clicked');
// }
window.onload=function(){
  // console.log('The document was loaded'); //defines things to do when page is loaded
}
//-----------------------------------------------

//EVENTS in javascript
  
// firstContainer.addEventListener('click',function(){
//   document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked";
//   console.log("Clicked on Container");
// })

// firstContainer.addEventListener('mouseover',function(){
//   console.log("mouse on container");
// })

// firstContainer.addEventListener('mouseout',function(){
//   console.log("mouse out of container");
// })

// let preHTML=document.querySelectorAll('.container')[1].innerHTML
// firstContainer.addEventListener('mouseup',function(){
//   document.querySelectorAll('.container')[1].innerHTML =preHTML;  
//   console.log("mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown',function(){
//   document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//   console.log("mouse down when clicked on container");
// })
//------------------------------------------------


//Arrow Functions
// function summ(a,b){
//   return a+b;
// }
summ=(a,b)=>{
  return a+b;
}


// setTimeout and setInterval

logIn =()=>{
  document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired... </b>"
  console.log("I am your log");
}
// setTimeout(logIn,2000);
// here log is function and 2000 is time in millisecond
// clr1=setTimeout(logIn,3000)
// clearTimeout(clr1);
//clearTimeout is used to stop

// setInterval(logIn,2000);
clr2=setInterval(logIn,2000); //to repeat function 
clearInterval(clr2);
//clearInterval is used to stop
//------------------------------------------------

//LOCAL STORAGE IN JAVASCRIPT
// localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. This means the data stored persists even after the user closes the browser or restarts the computer.//
// localStorage.setItem('Name','Alif');
// localStorage.setItem('Course','DAC');
//localStorage O/p=> Storage {Name: 'Alif', Course: 'DAC', length: 2}
//localStorage.clear();//clears the storage
// localStorage.getItem('name');
// localStorage.getItem('itemsjson');   //null if not present
//localStorage.remove('name');



// JSON(JavaScript Object Notation)
// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

// obj={name:"Alif",length:1,a:{this:'tha"t'}};
//javascript object supports single quotes but JSON does not
// console.log(obj);
//typeof() fun is used to find the type of variable
//typeof obj is Object
// jso=JSON.stringify(obj); //we can easily transport string across
//typeof jso is String
// --------------------------------------------  


// VERSIONS in javascript
//ECMA script is a standard by which js is maintained
//Template Lirerals- Backticks
a=34;
console.log(`This is my ${a}`);//34
