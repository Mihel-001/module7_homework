// Модуль 7 задание 3
// Написать функцию, которая создает пустой объект, но без прототипа.
 

const a = function () {
    Object.create(null);
   } 
 console.log(typeof a); 