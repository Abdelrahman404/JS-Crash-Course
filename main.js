// Variables // var , let , const 
// let = const , const cannot be re-assigned 


// Data Types 
// number , string ,  null , boolean , undefined
let number = 10;
let name = 'minders';
let height = null;
let success = true;
let weight;
console.log(typeof weight);

// Concatination 
// Old way
 let fname = 'hussen';
 let lname = 'salah';
// let fullname = 'My first name is ' + fname + ' My last name is' + lname;
// console.log(fullname);

// new way using ES6 template string
let fullname = `my first name is ${fname} and my last name is ${lname}`;
console.log(fullname);

// Common String Functions and Properties
// Length , subString  , split , toUpperCase

let machines  = 'computers';
console.log(machines.length);
console.log(machines.toUpperCase());
console.log(machines.split(""));
console.log(machines.substring(0 , 5).toUpperCase());

// Arrays 
// 2 Ways to define Array 
// let array = new Array(1 , 2 , 2);
// console.log(array);

let array = [2016 , 'grapes' , true ];
console.log(array);

// Array common methods
// push , pop , unshift , Array is Array , length

array[3] = 'oragnes';
array.push('apples');
console.log(array);
array.pop();
console.log(array.unshift('apples'));
console.log(array);
 
//Objects
// let data = {
//     fname : 'Jeffery',
//     lname : 'White' , 
//     adress : 'Los Angles',
// }
// console.log(data);
// console.log(data.fname);
// data.emailAdrss = 'example@example.com';
// console.log(data);
// data.lname = 'black';
// console.log(data.lname);

// data.hobbies = [ 'reading' , 'swimming' , 'cycling'];
// console.log(data.hobbies[2]);

const companies = [{
        name: "Company One",
        category: "Finance",
        start: 1981,
        end: 2004
    },
    {
        name: "Company Two",
        category: "Retail",
        start: 1992,
        end: 2008
    },
    {
        name: "Company Three",
        category: "Auto",
        start: 1999,
        end: 2007
    },
    {
        name: "Company Four",
        category: "Retail",
        start: 1989,
        end: 2010
    },
    {
        name: "Company Five",
        category: "Technology",
        start: 2009,
        end: 2014
    },
    {
        name: "Company Six",
        category: "Finance",
        start: 1987,
        end: 2010
    },
    {
        name: "Company Seven",
        category: "Auto",
        start: 1986,
        end: 1996
    },
    {
        name: "Company Eight",
        category: "Technology",
        start: 2011,
        end: 2016
    },
    {
        name: "Company Nine",
        category: "Retail",
        start: 1981,
        end: 1989
    }
];

// High Order Array Methods filter , map , forEach , Sort , Reduce

// companies.forEach(company => console.log(company.name));
let data = companies.filter(company => (company.start > 1980 && company.start < 1990)) 
console.log(data);

let companyNames = companies.filter(company => company.category === 'Retail').map(name => name.name);
console.log(companyNames);

// Functions 
// Old Way 
// function addNumbers(x , y ){
//     return x + y;
// }

let addNumbers = (x , y ) =>  x + y;

// function sayHello(){
//     console.log('Hello');
// }
// DOM 
console.dir(document);
console.log(document.URL)
console.log(document.forms)

// Selectors 
// getElementsById
let header = document.getElementById('header-title');
// header.innerHTML = 'Hello';

// let header = document.getElementById('main-header');
// console.log(header);
// header.style.backgroundcolor = 'yellow';
// header.style.borderBottom = '1px solid red';

// 3 Methods to Change Text
// innerHTML  , innerText , textContent

// header.innerHTM = '<h3> Hello </h3>';
console.log(header);
header.innerText = 'Hello';

let list = document.getElementsByClassName('list-group-item');
// list.style.backgroundColor = 'red';

// for (let i = 0 ; i < list.length ; i++ ){
//     list[i].style.backgroundColor = 'red';
// }
// ES6 QuerySelectors

let input = document.querySelector('#inputField');
console.log(input);
// input.value = 'Write Here';
// input.type = 'submit';

// querySelectorAll
let listItems = document.querySelectorAll('.list-group-item');
console.log(listItems);
listItems.forEach(item => item.style.backgroundColor = 'red');


// Traversing The DOM
// Parent Node & Parent Element
let selector = document.querySelector('.title');
//console.log(selector.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);

// Next sibling , Next Element Sibling
console.log(selector.nextSibling);
console.log(selector.previousElementSibling);

// Children & Child Nodes
let headerContainer = document.querySelector('#main-header');
console.log(headerContainer.childNodes);


// Creating HTML Elements From Js 
// Created Element
let newDiv = document.createElement('div');
console.log(newDiv);
// Setting classes , id , attrbuites 
newDiv.className = 'createdClass';
newDiv.id = 'createdID';
newDiv.setAttribute('title', 'createdTitle');
// Creating Text Node
let divText = document.createTextNode('Hello From Created Div');
// Appending Node to div
newDiv.appendChild(divText);
// select Element Wanna Insert into & Before What  
let containerDiv = document.querySelector('#cont1');
let headerTitle = document.querySelector('#header-title');

containerDiv.insertBefore(newDiv, headerTitle);

// Events 
// mouse Events 
// click , hover , mousemove , dblclick , mouse Enter
// let btn = document.querySelector('#button').addEventListener('click', printYes);

// Mouse Move Event
let playArea = document.querySelector('#playArea');
playArea.addEventListener('mousemove' , play);
function play(e){
    e.preventDefault();
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
    playArea.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+" ,220)";
    document.body.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + " ,20)";

}

// Keybaord Events 
// keyup , keydown , change

let inputField = document.querySelector('#inputField').addEventListener('keyup' , ()=>{
    console.log(inputField.value)
})