/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var area1 = area / 2;
console.log(area1);

/** Problem -02 ( Cycle or Laptop ) */
var money = 1000;
//write your code here

if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
// write your code here

for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(day + " - medicine");
  } else {
    console.log(day + " - rest");
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "result.pdf";
//write your code here

if (fileName.startsWith("#")) {
  console.log("Store");
} else if (fileName.endsWith(".pdf")) {
  console.log("Store");
} else if (fileName.endsWith(".docx")) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator ) */
var student = { name: "monu", roll: 99, department: "cse" };
//write your code here

var email =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(email);

/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here

for (var i = 0; i < experience; i++) {
  startingSalary *= 1.05;
}
console.log(startingSalary.toFixed(2));
