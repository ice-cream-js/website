import render from './lib/ice-cream.js';

const docsLink = "https://icecream.js.org/docs"
const githubLink = "https://icecream.js.org/github"
const cliLink = "https://icecream.js.org/cli"
function btn(text, link) {
    return (`
    <a href=${link}><button class="btn">${text}</button></a>
    <style>
    .btn {
        background-color: #6f4cd2;
        padding:12px 40px;
        margin-top:10px;
        border-radius:5px;
        border:none;
        font-family:'DSans Regular','Lato',sans-serif;
    }
    .btn:hover {
        background-color: z;
        cursor: pointer;
        color:white;
    }
    </style>
    `)
}

function btn2(text, link) {
    return (`
    <a href=${link}><button class="btn2">${text}</button></a>
    <style>
    .btn2 {
        background-color: #232e3c;
        padding:12px 40px;
        margin-top:10px;
        border-radius:5px;
        border:none;
        color:white;
        font-family:'DSans Regular','Lato',sans-serif;
    }
    .btn2:hover {
        background-color:#151c25;
        cursor: pointer;
    }
    </style>
    `)
}

render('app',
    `
    <div id="bar">
    <img src="./assets/logo.svg" class="logo"><a href=${docsLink} target="_blank">Docs</a><a href=${githubLink} target="_blank">GitHub</a><a href=${cliLink} target="_blank">CLI</a>
    </div>
    <h1 class="ice-cream-js">Sweeten your <br>workflow with<br>Ice Cream <span class="js-text">JS</span></h1>
    Ice Cream is a simple JavaScript library to <br>render HTML and CSS.
    <br><br>${btn("Our GitHub", githubLink)}${btn2("Docs", docsLink)}
    <br><img src="./assets/logo2.png" id="logo">
    
    `,
    `
    @import url('https://dsans.davidstudios.uk/css2.css');
    @import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;800;900&display=swap);
    :root {
        margin:15px;
        background-color:#fffff;
        color:#0d1116;
        font-size:1.2rem;
        font-family:'DSans Regular',Arial,sans-serif;
    }
    .js-text {
        background-color:#f59e0b;
        padding:5px 10px;
        border-radius:5px;
    }
    .ice-cream-js {
        font-family:'DSans Bold','Lato',sans-serif;
        color:black;
        font-size:3rem;
    }
    .logo {
        border-right:2px solid #304053;
        border-radius:1.5px;
        margin-right:50px;
    }
    @keyframes spin {
      0% {
        transform rotate(0deg)
      }
      100% {
        transform: rotate(360deg);
      }
    }
    #logo {
        position:relative;
        left:50%;
        bottom:300px;
        overflow:hidden;
        animation: spin 5s ease 0s infinite normal none;
    }
    #bar {
        background-color:#232e3c;
        border-radius:5px;
        padding:5px;
        opacity:60%;
        margin-bottom:50px;
        text-align: center;
    }
    a {
        margin-right:30px;
        color:#7299c5;
        text-decoration:none;
        position:relative;
        bottom:6.5px;
        transition:ease all 0.3s;
    }
    a:hover {
        color:#91c6ff;
        font-size:105%;
    }
    `
)
