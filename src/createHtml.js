const generateIntern = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">School: ${intern.school}</p>
            <p class="card-text">Contact: ${intern.email}</p>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" class="btn btn-primary">Email</a>
        </div>
    </div>`;
};

const generateManager = function (manager) {
    return`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Contact: ${manager.email}</p>
            <p class="card-text">Office Number: ${manager.officeNumber}</p>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" class="btn btn-primary">Email</a>
        </div>
    </div>`;
};

const generateEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Contact: ${engineer.email}</p>
            <a href="https://github.com/${engineer.github}" class="btn btn-primary">GitHub</a>
        </div>
    </div>`;
};

generateHTML = (data) => {
    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const employeeRole = employee.getRole(); 

         if (employeeRole === 'Manager') {
            const managerCard = generateManager(employee);

            cardArray.push(managerCard);
        }

        if (employeeRole === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            cardArray.push(engineerCard);
        }

        if (employeeRole === 'Intern') {
            const internCard = generateIntern(employee);

            cardArray.push(internCard);
        }
        
    };

// join the strings in the array //

const employeeCards = cardArray.join('')

// return array to generated page //

 const generateTeam = generateTeamOop(employeeCards); 
 return generateTeam;
};

const generateTeamOop = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team Profile</h1>
                <p class="lead">Here's the members in my team!</p>
            </div>
        </div>
        <div class="contain">
            <div class="card-row"> 
            <!-- My Cards Go Here -->
                ${employeeCards}
            </div>
        </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    </html>
  `;
};

module.exports = generateHTML;