//import Manager
const Manager = require('../library/manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Lucas', 10, 'lucas.polk04@gmail.com', 6);
    //expectation

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager role', () => {
    const manager = new Manager('Lucas', 10, 'lucas.polk04@gmail.com', 6);

    expect(manager.getRole()).toEqual('Manager');
});