// const ageCalculator = function (name, yearOfBirth, currentYear) {
//   const age = currentYear - yearOfBirth;
//   return name + " is " + age + " years old.";  
// }

// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));

// const howManyHundreds = function (number) {
//   const fullContainer = Math.floor(number / 100)
//   return fullContainer;
// }

// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

const calculateRectangleArea = function (length, width) {
  const area = length * width;
  if (length < 0 || width < 0) {
    return undefined;
  }
  return area;
}

const calculateTriangleArea = function (base, height) {
  const area = 0.5 * base * height;
  if (base < 0 || height < 0) {
    return undefined;
  }
  return area;
}

const calculateCircleArea = function (radius) {

  const area = Math.PI * radius * radius;
  if (radius < 0) {
    return undefined;
  }
  return area;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined