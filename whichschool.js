function whichSchool(age) {
  if (age < 13) {
    return ("Elementary School");
  } if (age >= 13 && age <= 18) {
    return ("Secondary School");
  } else {
  return ("Lighthouse Labs");
  }
}



console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 13. Which school should I go to?");
console.log(whichSchool(13));