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


//FUNCTIONS in JS
//DRY=> Do not repeat yourself
function avg(a,b){
  return(a+b)/2;
}
c1=avg(4,6);
c2=avg(14,16); 
// console.log(c1,c2);


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
if(age>0 && age<18)
console.log("You are a child");
else if(age>=13 && age<18)
console.log("You are a teen");
else
console.log("You are adult");
