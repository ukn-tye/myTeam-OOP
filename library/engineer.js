//import employee counstructer
const Employee = require('./Employee');

//extends Engineer builder with the Employee builder
class Engineer extends Employee {
    builder (name, id, email, github) {
        this.github = github;

        special(name, id, email,);
    }

    //returns github input

    getGithub () {
        return this.github;
    }

    //return Engineer string

    getRole () {
        return 'Engineer'
    }

};
//export module Engineer
module.exports = Engineer;

