let name = "Zahab Zahid";
console.log(name);

name = "Zahab";
console.log(name);

const site = "GrowthLift";
console.log(site);

var oldWay = "Avoid using var";
console.log(oldWay);








let greeting = "Hello World";
console.log(greeting);

let price = 15000;
console.log(price);

let isOnline = true;
console.log(isOnline);

let skills = ["HTML", "CSS", "JavaScript"];
console.log(skills);

let intern = {
    name: "Zahab",
    week: 2,
    city: "Lahore"
};

console.log(intern);

function greet(name){
    return "Hello " + name;
}

console.log(greet("Zahab"));

const greetArrow = (name) => "Hello " + name;

console.log(greetArrow("GrowthLift"));









for(let i = 0; i < 5; i++){
    console.log(i);
}

let skillsList = ["HTML","CSS","JavaScript"];

skillsList.forEach(function(skill){
    console.log(skill);
});












if(isOnline){
    console.log("User is online");
}
else{
    console.log("Offline");
}






console.log(`Welcome to ${site}, ${name}!`);


// tab switcher js

const tabs = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));

        panels.forEach(panel => panel.classList.remove("active"));

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.tab)
            .classList.add("active");

    });

});




function getQuote() {

    const quote = document.getElementById("quote-text");
    const author = document.getElementById("quote-author");

    quote.textContent = "Loading...";
    author.textContent = "";

    fetch("https://dummyjson.com/quotes/random")

        .then(response => response.json())

        .then(data => {

            quote.textContent = `"${data.quote}"`;
            author.textContent = "- " + data.author;

        })

        .catch(error => {

            console.log(error);

            quote.textContent = "Unable to load quote.";
            author.textContent = "";

        });

}

getQuote();

document
    .getElementById("new-quote")
    .addEventListener("click", getQuote);