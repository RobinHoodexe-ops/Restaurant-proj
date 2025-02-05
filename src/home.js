



const Home = () =>{

    let mainPage = document.getElementById('content');



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

}

export default Home;