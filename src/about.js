const about = () => {
    const aboutpage = document.getElementById('content');
    aboutpage.innerHTML = ''; // Clear previous content

    const title = document.createElement('h1');
    title.textContent = 'About Us';
    aboutpage.appendChild(title); // Corrected

    const description1 = document.createElement('p');
    description1.textContent = 'We are a family-owned restaurant that has been serving the community for over 20 years.';
    description1.classList.add('description');
    aboutpage.appendChild(description1);

    const description2 = document.createElement('p');
    description2.textContent = 'We serve the best food in town!';
    description2.classList.add('description');
    aboutpage.appendChild(description2);

    const description3 = document.createElement('p');
    description3.textContent = 'We are open 7 days a week!';
    description3.classList.add('description');
    aboutpage.appendChild(description3);
};

export default about;
