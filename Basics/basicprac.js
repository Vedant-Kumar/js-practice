"use strict";

// First Code:
// console.log("Hello World, I'm here to conquer!!");


// Variables :
// let accountId = 1232323;
// let accountEmail = "vedant8999@gmail.com";
// let accountState;
// var accountPassword = "231231 ";
// accountCity = "Mumbai"; 
// console.log(accountId);
// accountEmail = "hello@google.com";
// accountPassword = "1212213";
// accountCity = "Pondicherry";
// console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


//Datatypes and ECMA Types :
// let myName = "Vedant Kumar";
// let age = 27;
// let isLoggedin = true;
// null 
// undefined
// symbol => unique identifier
// object
// console.log(typeof age); 

// Conversions and Operations : 
// let score = true
// console.log(typeof score);
// console.log(typeof (score));
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// "33" => 33
// "33abc" => NaN
// true => 1

// Operations :
// let value = 3;
// let negValue = -value;
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

// let str1 = "Hello";
// let str2 = " Vedant";
// let str3 = str1 + str2;
// console.log(str3);

// console.log(typeof(1 + "2"));
// console.log(typeof("1" + 2));
// console.log(typeof("1" + "2"));
// console.log(typeof(1 + 2));
// console.log(1 + 2 + "2");
// console.log("1" + 2 + 2); 
 

// let gameCounter = 100;
// console.log(gameCounter);
// console.log(gameCounter);
// ++gameCounter; 
// ++gameCounter;
// console.log(gameCounter);
// console.log(gameCounter);
// gameCounter++;
// ++gameCounter;
// console.log(gameCounter);
// console.log(gameCounter);

// Comparison of Datatypes :
// console.log(2>1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log("2" == 2);  
// console.log("2" === 2);

// Two types of datatypes : Primitive & Non-Primitive;
// Primitive Datatypes(Call by value) : string, number, boolean, null, undefined, symbol and bigInt
// const str = "Hello"; 
// const num = 23;
// const bool = true; 
// const temp = null;
// let userEmail;
// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId);
// const bigNumber = 7231231242323221213n;
// Non-Primitive Datatypes(Call by reference) : arrays, objects and functions 
// let heroes = ["Superman", "Batman", "IronMan", "Hulk", "Thor"];
// let myObj = {
//     name : "Vedant",
//     age : 27
// }
// const myFunction = function() {
//     console.log("Hello World");
// }

// Stack (Primitive types) and Heap (Non-Primitive) Memory
// let myYoutubeName = "VedantKumar";
// let anotherName = myYoutubeName;
// anotherName = "VedantKumarYT";
// console.log({anotherName});
// console.log({myYoutubeName});
// let userOne = {
//     name : "Vedant",
//     email : "vedant@google.com",
//     upi : "vedant@upi"
// }

// let userTwo = userOne;
// userTwo.name = "Vedant Kumar";
// console.log(userOne);
// console.log(userTwo);

// const name = "Vedant Kumar";
// const repoCount = 50;
// console.log(`Hello, my name is ${name} and I have ${repoCount} repositories.`);

// Two different ways to decalre a string :
// let gameName = new String("Zelda");
// let gameName2 = "Zelda";
// console.log(gameName === gameName2);

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); 
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf("Z"));
// console.log(gameName.lastIndexOf("a"));
// console.log(gameName.includes("Zelda"));
// console.log(gameName.startsWith("Zel"));
// console.log(gameName.endsWith("da"));

// const newString = gameName.substring(0,4);
// console.log(newString);
// const anotherString = gameName.slice(0,4);
// console.log(anotherString);

// const newStringOne = "    Vedant Kumar   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://vedantkumar.com/vedant%20Kumar";
// console.log(url.replace("%20", "-"));
// console.log(url.includes("vedant"));

// let gameName = new String("Call-Of-Duty");
// console.log(gameName.split("-"));
