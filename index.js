// @ts-check
/**@typedef {import("./ts-test").Car} Car */

console.log("hi");

/** @type {Car} */
const car = Car("Honda", 2006);

car.changeCarYear(3)


/** @type {string[]} */
let info = car.getInfo();
