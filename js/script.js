// Data 1
var waseemMass1 = 78;
var waseemHeight1 = 1.69;

var aliMass1 = 92;
var aliHeight1 = 1.95;

// Data 2
var waseemMass2 = 95;
var waseemHeight2 = 1.88;

var aliMass2 = 85;
var aliHeight2 = 1.76;

// Calculate BMI function
function calculateBMI(mass, height) {
  return mass / (height ** 2);
}

// Compare BMI function
function compareBMI(waseemMass, waseemHeight, aliMass, aliHeight) {
  var waseemBMI = calculateBMI(waseemMass, waseemHeight);
  var aliBMI = calculateBMI(aliMass, aliHeight);

  return waseemBMI > aliBMI;
}

// Display results for both sets of data in the console
console.log("Data 1: Waseem has higher BMI than Ali? " + compareBMI(waseemMass1, waseemHeight1, aliMass1, aliHeight1));
console.log("Data 2: Waseem has higher BMI than Ali? " + compareBMI(waseemMass2, waseemHeight2, aliMass2, aliHeight2));