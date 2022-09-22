//import Engineer
const Engineer = require('../library/engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Lucas', 10, 'lucas.polk04@gmail.com', 'ukn-tye');
    //expectations
    expect(engineer.github).toEqual(expect.any(String));
});

//grabs github

test('gets engineer github', () => {
    const engineer = new Engineer('Lucas', 10, 'lucas.polk04@gmail.com', 'ukn-tye');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//grabs getRole ()

test('gets employee role', () => {
    const engineer = new Engineer('Lucas', 10, 'lucas.pok04@gmail.com', 'ukn-tye');

    expect(engineer.getRole()).toEqual("Engineer");
}); 