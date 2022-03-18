//Модуль 7 задание 2

// произвольный объект
const inputObject = {
    a: 3,
    b: 5,
    c: 7,
    d: 12
  };
  
  //функция поиска ключа
  function findKey(key,outputObject) {
    let counter = "false";
    for (let x in outputObject){
       if (x == key) counter = "true"
    }
    return counter;
  }
  
  // запрос ключа и вызов фунции
  let inputKey = prompt("Input key to find: ");
  let result = findKey(inputKey, inputObject);
  console.log(result);
