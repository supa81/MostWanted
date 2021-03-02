"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  
  let searchResults = SearchForPerson(people);
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}
function SearchForPerson(people){
  let searchType = promptFor("Checking for a specific person? Enter 'yes' to search by name, or enter the person's 'occupation', 'dob', 'height', 'weight', 'EyeColor', 'gender'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
      case 'yes':
           searchResults = searchByName(people);
      break;

      case 'occupation':
        searchResults = SearchByOccupation(people);
      break;

      case 'dob':
        searchResults = SearchBydob(people);
      break;

      case 'height':
        searchResults = SearchByHeight(people);
      break;

      case 'weight':
        searchResults = SearchByWeight(people);
      break;

      case 'gender':
        searchResults = SearchByGender(people);
      break;

      case 'eyecolor':
        searchResults = SearchByEyecolor(people);
      break;

      case 'info':
        searchResults = displayPeople(people);//added this line of code #justNow
      break;

      case 'no':
                      // TODO: search by traits
            promptFor("Would you like to check by weight?", yesNo).toLowerCase();//take this out if needed
           case 'yes':
          searchResults = SearchByWeight(people);
           break;
          // case 'no':
          //                      //search
          //     promptFor("Check by weight?", yesNo).toLowerCase();//take this out if needed
          //       case 'yes':
          //       searchResults = SearchByWeight(people)
          //       default:
    app(people); // restart app
      break;
  }
  if(searchResults.length > 1){
    displayPeople(searchResults);
    promptFor("Would you like to narrow searching?")

    SearchForPerson(searchResults);
  }
  return searchResults[0];
}
// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Application did not find that individual.");
    return app(people); // restart
  }


  // Add prompt here, which result do you want to explore
  let displayOption = prompt("This application found " + person.firstName + " " + person.lastName + " " + person.height + "Do you want to know this person's 'info', 'family', or 'descendants'? Type that option you or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      displayPerson(person);
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

//See array.filter() for more info later. Filter returns new array of filtered results.
  let foundPerson = people.filter(function(person, idx, persons){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else
    {
      return false;
    }
  })
    // TODO: find the person using the name they entered
    return foundPerson /* try only 'found person' for entire returned array in future queries */
}
    function SearchByOccupation(people) {
        let occupation = promptFor("What is the person's occupation?", chars);
        let foundPerson = people.filter(function (person) {
        if (person.occupation === occupation) {
            return true;
        }
        else
        {
            return false;
        }
        })
       return foundPerson
    }
    function SearchBydob(people) {
        let dob = promptFor("What is the person's Date of Birth mm/dd/year?", chars);
        let foundPerson = people.filter(function (person) {
            if (person.dob === dob) {
            return true;
        }
            else
            {
                return false;
            }
    })
    return foundPerson
}
function SearchByHeight(people) {
   // get the height w/ prompt
   let height = promptFor("What is the person's height in cm?", chars)

   let foundHeights = people.filter(function (people) {
     // ==, b/c the prompt passes in a height string
     // and the data has height as a number
     // So we can't use strict "===", b/c it would throw an error
     if (people.height == height) {
       return true
     } else {
       return false
     }
   })
   return foundHeights
}

function SearchByWeight(people) {
  // get the weight w/ prompt
  let weight = promptFor("What is the person's weight in pounds?", chars)

  let foundWeights = people.filter(function (people) {
    // ==, b/c the prompt passes in a weight string
    // and the data has weight as a number
    // So we can't use strict "===", b/c it would throw an error
    if (people.weight == weight) {
      return true
    } else {
      return false
    }
  })
  return foundWeights
}

function SearchByGender(people) {
  // get the gender w/ prompt
  let gender = promptFor("What is the person's gender?", chars)

  let foundGender = people.filter(function (people) {
    // ==, b/c the prompt passes in a gender string
    // 
    // So we can't use strict "===", b/c it would throw an error
    if (people.gender == gender) {
      return true
    } else {
      return false
    }
  })
  return foundGender
}

function SearchByEyecolor(people) {
  // get the eyeColor w/ prompt
  let eyecolor = promptFor("What is the person's eyeColor?", chars)

  let foundeyecolor = people.filter(function (people) {
    // ==, b/c the prompt passes in a weight string
    // and the data has weight as a number
    // So we can't use strict "===", b/c it would throw an error
    if (people.eyecolor == eyecolor) {
      return true
    } else {
      return false
    }
  })
  return foundeyecolor
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName + ", " + person.height + " cm, " + person.eyecolor + " eye color, " + person.gender + ", " + person.weight + " pounds, " + person.dob + " (dob)";
  }).join("\n"));
}

// Multiple Results
// function displayPersons(results) {
//    results.forEach((p, idx, ppl) => {
// // p represents person, idx is index, ppl is the entire array of results
//      let personInfo = `First Name: ${p.firstName}\nLast Name: ${p.lastName}\n`
//      alert(personInfo);
//    });
// }

function displayPerson(person){
  // displayResults

  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.lastName + "\n";
  personInfo += "DOB: " + person.lastName + "\n";
  personInfo += "Height: " + person.lastName + "\n";
  personInfo += "Weight: " + person.lastName + "\n";
  personInfo += "Eye Color: " + person.lastName + "\n";




  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no" || input.toLowerCase() == "occupation" || input.toLowerCase() == "dob" || input.toLowerCase() == "height" || input.toLowerCase() == "weight" || input.toLowerCase() == "gender" || input.toLowerCase() == "eyecolor"|| input.toLowerCase() == "info";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
