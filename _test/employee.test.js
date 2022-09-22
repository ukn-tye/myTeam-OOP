//import Employee
const Employee = require('../library/employee.js');

test('builds an employee object', () => {
    const employee = new Employee('lucas', 10, 'lucas.polk04@gmial.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

//for name

test('gets employee name', () => {
    const employee = new Employee('lucas', 10, 'lucas.polk04@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets employee id //

test('gets employee id', () => {
    const employee = new Employee('Lucas', 10, 'lucas.polk04@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets employee email //

test('gets employee email', () => {
    const employee = new Employee('Lucas', 10, 'lucas.polk04@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets employee role //

test('gets employee role', () => {
    const employee = new Employee('Lucas', 10, 'lucas.polk04@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 