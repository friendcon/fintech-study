let car = {
    name: "sonata",
    ph : 120,
    sn : 123123,
    date : new Date()
}

// const printCar = (name, ph, sn, date) => {
//     console.log(name, ph, sn, date);
// };

const printCar = (car) => {
    // let name = car.name;
    const {name, ph, sn, date} = car;
    const description = "자동차의 정보는" + name + " 입니다. 자동차의 마력은 : " + ph + " 입니다.";
    const templetDescription = `자동차의 이름은 : ${name} 입니다. 자동차의 마력은 ${ph} 입니다`; 
    console.log(name, ph, sn, date);
    console.log(templetDescription);
};

printCar(car);