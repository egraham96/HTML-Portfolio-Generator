const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('././utils/generateHTML');

console.log('Welcome to the HTML Portfolio Generator.\n',
'Respond to the following prompts to generate your own professional portfolio website!\n',
'This portfolio generator was built using Node.js & the Inquirer Package. It generates an HTML document.\n',
);

const questions = [{
    type: 'input',
    name: 'fname',
    message: 'What is your first name?',
  },
  {
    type: 'input',
    name: 'lname',
    message: 'What is your last name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'phone',
    message: 'What is your phone number?',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where are you located?',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'What is your LinkedIn username?',
  },
  {
   type: 'input',
   name: 'bio',
   message: 'Please write a short biography about yourself.',
  },
  {
    type: 'input',
    name: 'title',
    message: 'Please describe your job title',
  },
  
  ];

function writeToFile(filename, data){
fs.writeFile(filename, data, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Your professional portfolio was successfully created!')
})}

//Function used to initialize the application
function init() {inquirer
    .prompt(questions)
    .then((userInput) => {
      console.log(userInput);
      writeToFile('assets/newPortfolio.html', generateHTML(userInput))
    });}

init()