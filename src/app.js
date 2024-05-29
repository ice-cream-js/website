import render from './lib/ice-cream.js';

const docsLink = "https://github.com/ice-cream-js/icecream-js/wiki/Documentation#documentation";
const githubLink = "https://github.com/ice-cream-js/";

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
        background-color: rgb(84, 57, 159);
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
        color:black;
        cursor: pointer;
    }
    </style>
    `)
}

render('app',
    `
    <div id="bar">
    <img src="./assets/logo.svg" class="logo"><a href=${docsLink} target="_blank">Docs</a><a href=${githubLink} target="_blank">GitHub</a><a href="https://github.com/ice-cream-js/icecream-cli" target="_blank">CLI</a>
    </div>

    <h1 class="ice-cream-js">Ice Cream JS.</h1>
    Ice Cream is a simple JavaScript library to <br>render HTML and CSS.
    <br><br>${btn("Our GitHub")}${btn2("Docs")}
    `,
    `
    @import url('https://dsans.davidstudios.uk/css2.css');
    @import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;800;900&display=swap);
    :root {
        margin:10px;
        background-color:#0d1116;
        color:#e6edf3;
        font-size:1.2rem;
        font-family:'DSans Regular',Arial,sans-serif;
    }
    .ice-cream-js {
        font-family:'DSans Bold','Lato',sans-serif;
        color:white;
        font-size:3rem;
    }
    .logo {
        border-right:2px solid #304053;
        border-radius:1.5px;
        margin-right:50px;
    }
    #bar {
        background-color:#232e3c;
        border-radius:5px;
        padding:5px;
        opacity:60%;
        margin-bottom:50px;
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
