//import Employee
const Employee = require('./Employee');

class Intern extends Employee {
    builder (name, id, email, school) {
        this.school = school;

        special(name, id, email);
    }

    getSchool() {
        return this.school;
    }

    getRole () {
        return 'Intern';
    }
}
//export modules
module.exports = Intern;