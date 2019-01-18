function greet() {
    console.log('greet funtion called');
    // get the first name input by id 
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    

// get values out of inputs
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    console.log(firstName, lastName);

// make gretting 

var greeting = 'Hello ' + firstName + ' ' + lastName + '!';
console.log(greeting);

// display 

// remove prompt
}


// todo: validate name inputs 
// todo: clear inputs after greet

