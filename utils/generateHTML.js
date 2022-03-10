function generateHTML(userInput){
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="assets/css/style.css">
        <title>${userInput.fname} + ${userInput.lname} + 's + Professional Portfolio</title>
    </head>
    
    <body>
        <header>
            <h1>Welcome to ${userInput.fname} + ${userInput.lname} + 's Professional Portfolio</h1>
            <br>
            <img src="assets/photounavailable.jpg">
            <p id="intro">${userInput.title} <br>
                ${userInput.location} </p>
        </header>
        <div id="bubble">
            <img src="assets/speechbubble.jpeg" alt="speech bubble" style="width:100%;">
        </div>
        <div class="centered">Hi, please hire me!</div>
    
    
    
    <main>
        <p id="bio">${userInput.bio}</p>
        <br><p id="basicinfo">
            <u>Contact Me</u><br>
            Phone number: ${userInput.phone}<br>
            Email address: ${userInput.email} <br>
            LinkedIn: <a href="https://www.linkedin.com/in/${userInput.linkedin}">https://www.linkedin.com/in/${userInput.linkedin}</a><br>
            GitHub: <a href="https://github.com/${userInput.username}">https://github.com/${userInput.username}</a>
        </p>
    
        
    
    </main>
    </body>
    </html>`

;}

module.exports = generateHTML;