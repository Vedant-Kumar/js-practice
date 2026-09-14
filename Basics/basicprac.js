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

// const score = 100;
// const balance = new Number(100);
// console.log(score === balance);
// console.log(score == balance);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,3));
// console.log(Math.min(0, 150, 30, 20, -8, -200));
// console.log(Math.max(0, 150, 30, 20, -8, -200));
// console.log(Math.random());
// console. log (Math.floor(Math. random() * (max - min + 1)) + min)
// console. log (Math. floor(Math. random()*10)+1);

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());  
// console.log(myDate.getMilliseconds());
// console.log(myDate.getTime());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);
// let myCreatedDate = new Date(2023, 3, 25);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toLocaleTimeString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// let myDate = new Date(myTimeStamp);
// console.log(myDate.getTime());
// console.log(Math.floor(myDate.getTime() / 1000));

// let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));

// Arrays :
// let myArr = [0,1,2,3,4,5];
// const myHeroes = new Array("IronMan", "Thor", "Hulk", "Batman");
// console.log(myArr[0]);
// myArr.push(6);
// myArr.push(7);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr.includes(9));
// console.log(myArr);
// console.log(myArr.indexOf(8));
// let newArr = myArr.join();
// console.log(typeof myArr);
// console.log(typeof newArr);

// slice, splice
// console.log(`A ${myArr}`);
// console.log(`B ${myArr.slice(1,4)}`);
// console.log(`C ${myArr}`);
// console.log(`D ${myArr.splice(1,4)}`);
// console.log(`E ${myArr}`);

// const marvelHeroes = ["IronMan", "Thor", "Hulk", "Captain America"];
// const dcHeroes = ["Superman", "Flash", "Batman", "Cyborg"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes); 
// console.log(marvelHeroes[4][1]);

// const Heroes = marvelHeroes.concat(dcHeroes);
// console.log(Heroes);

// const allHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allHeroes);

// let anotherArr = [1,2,3,[4,5,6],7,[6,7], [4,5]];
// let usableAnotherArr = anotherArr.flat(2);
// console.log(usableAnotherArr);

// console.log(Array.isArray("Vedant Kumar"));
// console.log(Array.from("12345"));
// console.log(Array.from({name: "Vedant"}));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3));

// Objects :
const mySymbol = Symbol("key1");

const JSUSer ={
    name : "Vedant Kumar",
    age : 27,
    [mySymbol] : "mykey1",
    "full name" : "Vedant Kumar",
    location : "Mumbai",
    email : "vedant@google.com",
    isloggedin : false, 
    lastLoginDays : ["Monday", "Friday"],   
};

// console.log(JSUSer["email"]);
// console.log(JSUSer.email);
// console.log(JSUSer["full name"]);
// console.log(JSUSer[mySymbol]);

// JSUSer.email = "vedant@apple.com";
// Object.freeze(JSUSer);
// JSUSer.email = "vedant@microsoft.com";
// console.log(JSUSer);

JSUSer.greeting = function() {
    console.log("Hello JS User");
}

console.log(JSUSer.greeting);
console.log(JSUSer.greeting());