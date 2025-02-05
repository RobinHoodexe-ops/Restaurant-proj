




const menu = () => {

    const page = document.getElementById('content');

    const menuItems = [
        {
            name: 'Pizza',
            description: 'The best pizza in town!',
            price: '$15.00'
        },
        {
            name: 'Burger',
            description: 'The best burger in town!',
            price: '$10.00'
        },
        {
            name: 'Pasta',
            description: 'The best pasta in town!',
            price: '$12.00'
        },
        {
            name: 'Salad',
            description: 'The best salad in town!',
            price: '$8.00'
        },
        {
            name: 'Steak',
            description: 'The best steak in town!',
            price: '$20.00'
        }
    ];

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    page.appendChild(menuTitle);

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        menuItem.appendChild(itemDescription);

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        menuItem.appendChild(itemPrice);

        page.appendChild(menuItem);
    });
};



export default menu;