//Модуль 7 задание 4
// Prototype function
function ElectricDevice(name,power,color,powerSwitch){
  this.name = name,                         //название объекта
  this.power = power,                       //потребляемая энергия, Вт
  this.color = color,                       //цвет объекта
  this.powerSwitchPosition = powerSwitch    //текущее положения выключателя Power
}

// функция переключения питания вынесена в prototype
ElectricDevice.prototype.switchPower = function(){           
    if (this.powerSwitchPosition == 'on') this.powerSwitchPosition = 'off';
    else this.powerSwitchPosition = 'on'; 
    }

// раздел создания новых приборов из прототипа и их массива
const lamp = new ElectricDevice('Table lamp', 10, 'white', 'on');      //создаём объект lamp
      lamp.lightColor = "cold light";                                        //доп.св-во: цветовая температура
      lamp.changeColor = function(){                                         //доп.функция: переключение цветовой температуры
        if (this.lightColor == 'cold light') this.lightColor = 'warm light';
        else this.lightColor = 'cold light';
}
const kettle = new ElectricDevice('Electric kettle', 1500, 'red', 'off'); //создаём объект kettle
      kettle.kettleVolume = 2;                                            //доп.св-во: ёмкость 
const fridge = new ElectricDevice('Fridge', 900, 'grey', 'on');           //создаём объект fridge
      fridge.fridgeTemperature = -4;                                      //доп.св-во: температура 

let myHomeElectricDevices = new Array(lamp, kettle, fridge);              //создаём массив приборов

// раздел переключения цветовой температуры лампы
   lamp.changeColor();
   console.log("Light Color now is: " + lamp.lightColor);

// раздел проверки состояния питния любого прибора 
//  let interestedDevice = kettle; // внести имя прибора
//  console.log(interestedDevice.name + " now power " + interestedDevice.powerSwitchPosition);

// раздел включения/выключения любого прибора
   let poweredDevice = lamp;        // внести имя прибора, например lamp
   poweredDevice.switchPower();     // функция переключения питания 
   console.log(poweredDevice.name + " now power " + poweredDevice.powerSwitchPosition);

// текущее состояние питания всех приборов + суммарное потребление энергии
   let totalPower = 0;
   console.log("-------- Current state --------");
   for(let eachDevice of myHomeElectricDevices) {
      console.log(eachDevice.name + " now power " + eachDevice.powerSwitchPosition);
      if (eachDevice.powerSwitchPosition == 'on') totalPower += eachDevice.power;
   } 
   console.log("Total power now is " + totalPower + " Watt ");


//вывод всех объектов в консоль
   for(let eachDevice of myHomeElectricDevices) {
   console.log("-----------------------------------")
   for (let key in eachDevice) {
      console.log(key + " : " + eachDevice[key]);
     }
   }

//гордимся собой, даже если что-то не так :-)
  
  