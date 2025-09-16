// const logger  = ()=> console.log("Hello logger")
// logger()//function chaqirilishi

// const car = { name: "Merc", color: "black" };
// const carLogger = () => console.log("Logger car");//bu holatda function ichida faqat string
// console.log(car);//objecni chaqirilishi
// carLogger()//functionni chaqirilishi

// const user = { name: "Nur" };
// const userLogger = () => console.log("Logger user");

const userData = require("./user");
const carData = require("./car");

console.log(userData.user); //object
userData.userLogger(); //function

console.log(carData.car); //object
carData.carLogger(); //function
