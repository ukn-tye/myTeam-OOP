//import Intern
const Intern = require('../library/intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Lucas', 10, 'lucas.polk04@gmail.com', 'University of Washington');
    //expectations

    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('Lucas', 10, 'lucas.polk04@gmail.com', 'University of Washington');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets intern role', () => {
    const intern = new Intern('Lucas', 10, 'lucas.polk04@gmail.com', 'University of Washington');

    expect(intern.getRole()).toEqual('Intern');
});