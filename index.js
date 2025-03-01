// "string"
const user1 = "David";
const age1 = 15;
const user2 = "Mariam";
const age2 = 15;

console.log(user1)
console.log(user2)

const nam1 = 10;
const nam2 = -10;
const nam3 = 10 - 5;
const nam4 = 10 + 5;
const nam5 = 10 / 5;
const nam6 = 10 * 5;

console.log(nam1)
console.log(nam2)
console.log(nam3)
console.log(nam4)
console.log(nam5)
console.log(nam6)

let age3 = 16;

age3 = 13;

console.log(age3)

let color1 = "Royal Blue";
color1 = "Blue";
color1 = "red";
color1 = "violet";

const s = "hello my name is dato"

const h1 = document.querySelector(".mom");

console.log(h1);

h1.style.color = "blue"
h1.style.backgroundColor = "violet";
h1.style.border = "1px solid black";
h1.style.padding = "20px"
h1.style.borderradius = "20px"
h1.style.width = "70px"

h1.remove();

// homework

const button = document.querySelector(".btn");

console.log(button);

button.style.color = "pink";
button.style.backgroundColor = "violet";
button.style.border = "1px solid black";
button.style.padding = "20px";
button.style.width = "70px";
button.style.borderradius = "20px"

// homework

const p = document.querySelector(".lmao");
console.log(p);
p.style.color = "blue"
p.style.backgroundColor = "black"
p.style.border = "1px solid blue"
p.style.borderradius = "20px"
p.style.padding = "20px"
p.style.width = "70px"


// homework

const input = document.querySelector(".wow");
console.log(input);
input.style.color = "blue"
input.style.backgroundColor = "pink"
input.style.bordewr = "1px solid blue"
input.style.padding = "20px"
input.style.borderradius = "20px"
input.style.width = "200px"


// amocana

const remove = document.querySelector(".remove-btn");
const helloo = document.querySelector(".remove-p");

console.log(remove);
console.log(helloo);

remove.addEventListener("click", () => {
    console.log("btn was clicked");

    const num = 16;

    helloo.remove()

    console.log(num);

})






