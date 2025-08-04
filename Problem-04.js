/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";

if (fileName.indexOf("#") === 0) {
  console.log("Store");
} else if (fileName.indexOf(".pdf") === fileName.length - 4) {
  console.log("Store");
} else if (fileName.indexOf(".docx") === fileName.length - 5) {
  console.log("Store");
} else {
  console.log("Delete");
}
