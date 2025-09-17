 
//node js yuklanganda yani kompdan yuklangandaham npmdan modullari yuklangandaham o'zini asosiy default modullari (kutubhonalar) bilan yuklanadi

//Node.jsdagi path — bu built-in modul, ya'ni obyekt bo'lib, fayl va papka yo'llarini platformaga mos tarzda boshqarish uchun ishlatiladi. Bu modul Windows va POSIX (Linux/macOS) tizimlaridagi farqlarni yengillashtiradi.

//Fayl yo'llarini birlashtirish, ajratish, normalizatsiya qilish
//Cross-platform kod yozish: Windows \ ishlatadi, POSIX esa /
//path yordamida kod har qanday OS da to'g'ri ishlaydi// yani masalam mac windows yoki linux

//Node.jsda "path" — bu modul nomi, string ko'rinishda chaqiriladi, lekin require() uni obyektga aylantiradi yani require string holatda yozilgan nomni agar u core apida bor bo'lsa abjectga aylantirib chaqiradi core API esa Node.js o'zining ichki tizimida oldindan o'rnatilgan,  kompyuterga Node.js bilan birga keladigan modullar to'plami yani npm install qilib chaqirish shar bo'lmagan modullar to'plami yani biz compga node jsni yuklaganimizda keladigan object function va metodlari shu sabab require stringda chaqirilgan const path = require("path");
// console.log(typeof path); // "object"// "path" ni core apidan olib objectga aylantirib ishlatadi requerini vazifasi shu

//Node.jsda const path = require("path"); "path" — bu modul nomi, string ko'rinishda chaqiriladi, lekin require() uni obyektga aylantiradi va terminalda ishlatadi

//Node.jsdagi path moduli — bu platformaga mos yo'l (path) yaratish va o'qish vositas

//yani agar dasturchi kodni windowsda yozsa va kodni prodakshinga chiqarsa boshqa dasturchi kodni macOS dan yuklab ishlatsa path yani loyi ichidagi yo'llar boshqacha formatlanishi kerak yani mac linux va windows uchun boshqa boshqa yo' formati mavjud shu sabab path objecti ishlatiladi va path yo'lni aftamatik tarzda hamma OSlarga mos qilib unversal qilib formatlaydi yani Cross-platforma yani hamma oslarga mos degani yani oddiy jsga o'hshash formatda formatlaydi masalan>>>>
// Windowsda yozilgan
// const fs = require("fs");
// fs.readFile("data\\user.json", "utf8", callback); //  Linuxda va macda hato beradi 
// // Cross-platform yozilgan yani path objecti bilan yozilgan yo'llar
// const path = require("path");
// fs.readFile(path.join("data", "user.json"), "utf8", callback); //  Har qanday OSda ishlaydi
// path — bu cross-platform backend yozish uchun zarur modul
// Windowsda yozgan kodni Linuxda ishlatmoqchi bo'lsang — path yordamida yo'l manipulyatsiyasini to'g'ri yozishing xatolarni oldini oladi

//path yordamida kod har qanday OSda to'g'ri ishlaydi yani — dasturchi path modulidan foydalanganda, Node.js yo'l formatini avtomatik ravishda OSga moslashtiradi, va kod universal bo'ladi.

//agar dasturchi backend kodni Windowsda yozayotgan bo'lsa, va bu kod keyinchalik Linux serverda yoki boshqa OSda ishlatilsa, path modulidan foydalanish muhim sababi>>>> 
//Yo‘l separatorlari farqli:
// Windows: \ yani windows uchun chappa slash bilanyozish kerak bo'lardi

// Linux/macOS: / linux va mac uchun o'ng slashda yozish kerak bo'lardi Agar sen yo'lni qo'lda yozsag: "folder\file.js" bu Linuxda xato beradi path.join("folder", "file.js") deb yozsang  Node.js OSga qarab to'g'ri formatni tanlaydi yani shunda 



