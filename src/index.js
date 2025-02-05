import './styles.css';
import menu from './menu';
import home from './home';
import about from './about';

let mainPage = document.getElementById('content');

//menu button renders menu page
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('Menu');
    menuButton.addEventListener('click',() => {
        document.getElementById('content').innerHTML = '';
        menu();
    })
});

//home button renders home page
document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('Home');
    homeButton.addEventListener('click',() => {
        document.getElementById('content').innerHTML = '';
        home();
    })
})

//about button renders about page
document,addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.getElementById('About');
    aboutButton.addEventListener('click',() => {
        document.getElementById('content').innerHTML = '';
        about();
    })
})



const title = document.createElement('h1');
title.textContent = 'Hello and Welcome to the restaurant!';
mainPage.appendChild(title);

const description = document.createElement('p');
description.textContent = 'We serve the best food in town!';
description.classList.add('description');
mainPage.appendChild(description);

for (let i = 0; i < 10; i++) {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is paragraph number ' + i;
    paragraph.classList.add('paragraph');
    mainPage.appendChild(paragraph);
}