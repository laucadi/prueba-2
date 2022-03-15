
/*let js = 'amazing';
if (js==='amazing') alert('javascript is FUN!');

console.log(40+ 8 + 23 -10);
*/

///////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

const markWeightOne = 78;
const markHeightOne = 1.69;
const johnWeightOne = 92;
const johnHeightOne = 1.95;

const markWeightTwo = 95;
const markHeightTwo = 1.88;
const johnWeightTwo= 85;
const johnHeightTwo= 1.76;

const bmiMark = markWeightOne/ markHeightOne ** 2;
const bmiJhon = johnWeightOne/ johnHeightOne ** 2;

const markHigherBMI= bmiMark > bmiJhon;


console.log("BMI Mark:" + bmiMark);
console.log("BMI John:" + bmiJhon);

console.log("BMI Mark Test data 2:" + (markHeightTwo/(markHeightTwo**2)));
console.log("BMI John Test data 2:" + (johnHeightTwo/ (johnHeightTwo**2)));

console.log(markHigherBMI);


