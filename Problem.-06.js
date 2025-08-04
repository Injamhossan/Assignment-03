/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;

for (var i = 0; i < experience; i++) {
    startingSalary *= 1.05;
}
console.log(startingSalary.toFixed(2));
