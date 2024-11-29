/****************************************************************************************************************/
/* In-Class Exercises                                                                                           */
/****************************************************************************************************************/
/* 1. create an array called "fruits" and assign the values "Strawberry", "Raspberry", and "Apple" to it         */
// add code here
let fruits = []
fruits = ["Strawberry", "Raspberry", "Apple"];

console.log(fruits);
/* 2. add two more fruits to the "fruits" array using the correct array method                                   */
// add code here
fruits.push("Banana", "Pear")

console.log(fruits);
/* 3. sort the fruits array alphabetically using the correct array method                                        */
// add code here
console.log(fruits.sort());

/* 4. create a function called printFruit that prints each item in the fruits array to the console              */
/*    and call the printFruit function                                                                          */
// add code here
function printFruit(){
    for(let i = 0;i<fruits.length;i++){
        console.log(fruits[i])
    }
}

printFruit();
/* 5. create a fruit class that has three properties: name, color, and season and one method: printFruit()      */
/*    that prints all three properties of the fruit to the console. Then, create 3 fruit objects and print      */
/*    them using the printFruit() method             
// add code here */
class Fruit{
    constructor(name, color, season){
        this.name = name,
        this.color = color,
        this.season = season
    }

    printFruit(){
        console.log("Fruit Name: " + this.name + ", Fruit Color: " + this.color + ", Season: " + this.season
        );
    }
}

const strawberry = new Fruit("Strawberry", "red", "summer");
const apple = new Fruit("apple", "green", "winter");
const banana = new Fruit("banana", "yellow", "summer");

strawberry.printFruit();
apple.printFruit();
banana.printFruit();

/****************************************************************************************************************/
/* In-Class Lab                                                                                                 */
/****************************************************************************************************************/
/* 1. Write a function that asks the user if they want to say hi. If the user selects "Okay" (true), then       */
/*    display a welcome message. If the user selects "Cancel" (false), then display a different message         */
function areYouSure() {
    let response = confirm("Are you sure?")

    if (response){
        document.getElementById("welcome").innerText = "Welcome"
    }
    else{
        document.getElementById("welcome").innerText = "Goodbye, see you some other time"
    }
}

/* 2. Write a function to change 3 styles on the webpage                                                        */
function changeStyle() {
    document.body.style.backgroundColor = "red";
    document.getElementById("welcome").style.color = "green";
    document.getElementById("welcome").style.fontSize = "2m";
}
