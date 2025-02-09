// console.dir(_);

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const result = _.chunk(arrayNumber, 4);
console.log(result);

const arrayNumberOne = [0, 1, 2, 3, 4, 5, false, "", 6, 7, , 8, 9, 10];
const resultOne = _.compact(arrayNumberOne);
console.log(resultOne)

const box = document.querySelector(".box");
let count = 0;

const functions = (events) => {
    // console.log(events.clientX);
    events.count += 1
    console.log(count)

}
// _.throttle дозволяє зробити затримку "потворює"
box.addEventListener("mousemove", _.throttle(functions, 1000))
// _.throttle дозволяє зробити затримку "працює один раз"
box.addEventListener("mousemove", _.debounce(functions, 1000))

