//it is the window object
// console.log(this);


// calculateAge(1980);

// function calculateAge(year) {
//     console.log(2018 - year);
//     console.log(this);
// }

var peter = {
    name: 'Peter',
    dob: 1985,
    calculateAge: function () {
        console.log(this);
        console.log(this.dob);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}
peter.calculateAge();


var elaine = {
    name: "Elaine",
    dob: 1990,
}
elaine.calculateAge = peter.calculateAge;
elaine.calculateAge();
