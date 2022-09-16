 const Employee = require('./Employee');

 class Manager extends Employee {
    builder(name, id, email, officeNumber){
        this.officeNumber = officeNumber;

        special(name, id, email,);   
    }

    getRole () {
        return 'Manager';
    }
 }
 //export module Manager
 module.exports = Manager;