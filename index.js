const generateHTML = require('./src/createHtml');

// team catagories

const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern'); 

// needed packages

const fs = require('fs'); 
const inquirer = require('inquirer');

const teamArray = []; 

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.error ("You need a manager name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter your ID",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.error ("Yoyu need a manager ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your Email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) //got help on this part 
                if (valid) {
                    return true;
                } else {
                    console.error ('You need an Email')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter Your office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.error ('You need an office number to continue')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managersInput => {
        const  { name, id, email, officeNumber } = managersInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

// start prompts for employees //

const addEmployee = () => {
    console.log('employee added to the team');

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.error ("You need a name to continue");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your ID',
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.error ('You need an ID to continue')
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.error ('You need an email to continue')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username',
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.error ('You need a Gitub Account to move on')
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school name',
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.error ('You must provide a school to move on')
                }
            }
        },

    // asks user if they would like to continue after every team member //

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add anyone else to the team?',
            default: false
        }
    ])
    .then(employeeData => {

    // data for employee types //

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

// generate HTML file using FS package //

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {

        // console logs an erorr message if error is encountered //

        if (err) {
            console.log(err);
            return;

        // logs a message if successful //

        } else {
            console.log("Your team profile has been created! Go check out the index.html file in the 'dist' folder")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });
