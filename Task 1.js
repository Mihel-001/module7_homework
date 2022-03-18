//Модуль 7 задание 1

// исходный объект
const inputObject = {
    a: 3,
    b: 5,
    c: 7
  };
  
  // функция печати только собственных свойств
  function displayObject(outputObject){
    console.log("Ключ: Значение");
    for (let key in outputObject){
      if(outputObject.hasOwnProperty(key)) {
        console.log(key + " : " + outputObject[key]);
      }  
    }
  }
  
  // вызов функции
  displayObject(inputObject);