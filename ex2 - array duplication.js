// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An",lastName: "Roza", batch:"A",age: 20 },
  { firstName: "Bình",lastName:"Panha",batch:"B", age: 22 },
  { firstName: "Cẩm",lastName:"Maryna",batch:"A",age: 21 },
  { firstName: "An", lastName:"Jessica",batch:"B",age: 19 }, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {age} newAge  - the student new age
 * @param{string} lastName - the lastName student
 * @param{string} batch - the student's batch
 */
function updateStudentAge(firstName, lastName, batch,newAge) {
  let student = STUDENTS_DATA.find((s) => s.firstName === firstName && s.lastName === lastName && s.batch === batch);
  if (student) {
    student.age = newAge;
  }
}

// 1 - Update An age to 30
updateStudentAge("An","Roza","A",30);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA,null,1));
