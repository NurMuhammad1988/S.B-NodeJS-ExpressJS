// const logger  = ()=> console.log("Hello logger")
// logger()//function chaqirilishi

// const car = { name: "Merc", color: "black" };
// const carLogger = () => console.log("Logger car");//bu holatda function ichida faqat string
// console.log(car);//objecni chaqirilishi
// carLogger()//functionni chaqirilishi

// const user = { name: "Nur" };
// const userLogger = () => console.log("Logger user");//

const userData = require("./user"); // bu holadta userData ichida require function bilan ./user papka ichida faqat module.exports = { user, userLogger }; bilan export qilingan narsalar keladi yani butun fail emas faqat export qilingan faillar keladi va malumotni turiga qarab chaqirish kerak huddi pastdagiday masalanfunction bo'lsa bu bilan(), object yoki array bo'lsa log bilan
const carData = require("./car");

console.log(userData.user); //object// ./user faili ichidan export qilingan user objecti
userData.userLogger(); //function// ./user faili ichidan export qilingan userLonger functioni

console.log(carData.car); //objectni qaytaradi
carData.carLogger(); //functionni qaytaradi
// yani bu holatda user va car global object usrLogger va carLogger clobal function ular o'zi turgan faillardan module.exports ={....} qilib export qilinsagina  index papka ichida ishlaydi yani jsdagi import function o'rniga nodejsda require function ishlatiladi

// bu holatda userga alqador hamma datalar user.js failida turadi carga aloqador hamma datalar car.js failida turadi va ular ichidan faqat keraklilarini shunday qilib index.js failga chaqirib ishlatish mumkun yani asosiy foydasi index.js fail kattalashib betartiblashib ketmaydi faqat modullarga bo'lib kerakli modul chaqirilib ishlatialdi tartib saqlanadi tushunish oson bo'ladi

//nodejsda har bitta modul o'zini ichki functioniga o'ralgan bo'ladi parametrida requireham bo'ladi yani bu hlatda user.js ham car.js ham bitta modul va asosiy ko'zga ko'rinmas ona functioni bor parametrida kerakli parametrlar bo'ladi shu sabab bu require ishlaydi yani hech qayerda chaqirilgani ko'rinmasaham require ishlaydi chunki har bir nodejs failda parametrida bu functionlar bo'ladi huddi shunga o'hshab node js fail yaratilganda serverda shunday functionga o'ralib keladi>>>>>function (require, module, exports. __dirname, __filename) =>()Bu Node.jsning ichki mexanizmi: har bir fayl aslida shunday functionga o'raladi Bu sababli require, module, exports kabi narsalar global emas, lekin har bir modulda mavjud yani alohida shu sabab parametrlarda function(require, module, exports, __dirname, __filename)qilib chaqirish shart emas
