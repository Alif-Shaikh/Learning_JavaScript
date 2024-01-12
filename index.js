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


//Opeartors in JS
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

tn=document.getElementsByTagName('button');
console.log(tn);
tnd=document.getElementsByTagName('div');
console.log(tnd);

createdElement=document.createElement('P');
createdElement.innerText="This is a created para";
tnd[0].appendChild(createdElement); //tnd[0] is a first div

createdElement2=document.createElement('b');
createdElement2.innerText="This is a created bold";
tnd[0].replaceChild(createdElement2, createdElement); //tnd[0] is a first div

//tnd[0].removeChild(createdElement2); removes 'b' element

//Selecting using query
sel = document.querySelector('.container')
console.log(sel);
sel = document.querySelectorAll('.container')
console.log(sel);
