$(document).ready(function () {
$('.fa-bars').click(function () {
$('.navbar').toggle();
	$(this).toggleClass('fa-times');
})

	
});



const greet = () => {
	console.log("Hello!")
}
greet();
let elementById = document.getElementById("element-id");
let elementByClassname = document.getElementsByClassName("classname");

const greetwithname = (name) => console.log(`Hello ${this.name}`);


greetwithname("jude");

const sum = (a, b) => console.log(a + b);
sum(2, 3);


const myObject = {
	name : "AbdulRahman",
	sayHello :() =>{
		console.log(`Hello, how are you doing ${this.name}`)
	},

};

myObject.sayHello()


const add = (a, b) => {
const result = a + b;
	return result;

}

console.log(Number.parseFloat("3.14"));

console.log(Number.parseInt("42"));

console.log(add(3, 4));
