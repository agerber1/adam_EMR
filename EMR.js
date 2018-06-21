// Gerber Medical Record System
// Created by Adam Gerber

/* Next features to be added
-- Add health issues, glucose (be able to add to object on the fly);
-- Convert height/weight to in/kg
-- Ask about glucose if Diabetes entered
-- Ask about BP if Hypertension entered
*/

//prompts user to choose action
function runSystem() {
  let answer = true;
  while (answer) {
    let response = parseInt(prompt("What would you like to do? (enter number)"
        + "\nAdd Patient: 1 \nDisplay list of your patients: 2"
        + "\nDisplay total number of patients: 3 \nAdd medical history: 4"
        + "\nExit: 0"));

    switch (response) {
      case 1:
        addPatient();
        break;
      case 2:
        console.log(sortCatalogue());
        break;
      case 3:
        console.log(numberOfPatients());
        break;
      case 4:
        addMedHx();
        break;
      case 0:
        answer = false;
        break;
      default:
        console.log("Try again");

    }
  }
}

//creats patient catalogue as array of objects with sample patients
const patientCatalogue = [
  {
    fName: "John",
    lName: "Walker",
    age: 55,
    height: 65,
    weight: 200,
    allergies: ["NKA"],
    medHx: ["Hypertension"],
  },
  {
    fName: "Jane",
    lName: "Doe",
    age: 86,
    height: 58,
    weight: 145,
    allergies: ["Sulfa"],
    medHx: ["Diabetes Type 2"],
  },
  {
    fName: "Adam",
    lName: "Gerber",
    age: 27,
    height: 69,
    weight: 190,
    allergies: ["Penicillin"],
    medHx: ["Diabetes"],
  },
];

//loops through if user wants to add patient
function addPatient(){
  let answer = "yes";
  while (answer.toLowerCase() === "yes") {
    pushPatient(
      prompt("Enter first name"),
      prompt("Enter last name"),
      parseInt(prompt("Enter age in years")),
      parseInt(prompt("Enter height in inches")),
      parseInt(prompt("Enter weight in pounds")),
      [prompt("Allergies?")],
      ["None"], //default array for medical history
      );



      let another = prompt("Add another patient? (yes or no)");
      if (another.toLowerCase() === "no")
      {
        answer = "no";
      };

    };
};

//adds patient to patientCatalogue
function pushPatient(fName, lName, age, height, weight, allergies, medHx)
{
   patientCatalogue.push({fName, lName , age, height, weight, allergies, medHx});
};

//adds medical history
function addMedHx() {

   const lastName = prompt("Enter patient's last name");
   const history = prompt("Enter History separated by commas");

   const index = findIndex(lastName);

    
   if (patientCatalogue[index].medHx[0].toLowerCase() === "none") {
     patientCatalogue[index].medHx = [history];
   } else {
     patientCatalogue[index].medHx.push(history);
   };

 };

//finds index of patient
 function findIndex(lastName) {
   return patientCatalogue.indexOf(findPatient(lastName));
 };

//finds number of patients
function numberOfPatients() {
  return `${patientCatalogue.length} patient(s) in catalogue`;
}

//return specific patient
function findPatient(lastName) {
  for (var i = 0; i < (patientCatalogue.length + 1); i++) {
    if (patientCatalogue[i].lName.toLowerCase() === lastName.toLowerCase())
    {
      return patientCatalogue[i];
    };
  };
};

//logs entire pt profile
function logPtInfo(lastName) {
  const element = findPatient(lastName);
  console.log(`Name: ${element.fName} ${element.lName}\nAge: ${element.age} years\n` +
  `Height: ${element.height} in\nWeight: ${element.weight} lb`);
};

//Sorts patient catalogue
function sortCatalogue() {
  const sortedArray = [];
  patientCatalogue.forEach(function(element) {
    sortedArray.push(`${element.lName}, ${element.fName}  ${element.age} y/o  Allergies: ${element.allergies}`);
  });

  return sortedArray.sort().join('\n');

};

runSystem();
