//What make the Employee role
class Employee {
    builder  (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //return name

    getName () {
        return this.name;
    }

    //return id

    getId () {
        return this.id;
    }

    //return email

    getEmail () {
        return this.email;
    }

    //return employee string

    getRole () {
        return 'Employee';
    }
};

//export function
module.exports = Employee;


