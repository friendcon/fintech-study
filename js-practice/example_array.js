// 데이터 타입이 달라도 배열의 요소가 될 수 있다
let cars = ["sonata", "bmw", "porter", 100];

console.log(cars[0], cars[1], cars[2], cars[3]);
cars.push("hello");
console.log(cars);

// 반복문 1
for(let i=0; i<cars.length; i++) {
    let car = cars[i];
    console.log(car);
}

// 반복문 2
for(car of cars) {
    console.log(car);
}

// 배열의 map 메서드 사용
cars.map((car) => {
    console.log(car);
});