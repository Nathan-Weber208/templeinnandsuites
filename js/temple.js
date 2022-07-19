const requestURL = 'js/data.json';

async function getTemples(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();

        const temples = data['temples'];
        temples.forEach(temple => {
            displayTemples(temple);
            
        });
    }
}

getTemples(requestURL);

function displayTemples(temple) {
    let card = document.createElement('section');
    
    // Business Name
    let h2 = document.createElement('h2');
    h2.textContent = temple.location;
    card.appendChild(h2);

    //Business Address
    let address = document.createElement('p');
    address.textContent = temple.address;
    card.appendChild(address);

    // Business Phone Number
    let number = document.createElement('p');
    number.textContent = temple.number;
    card.appendChild(number);

    // Business website link with text
    let website = document.createElement('a');
    website.textContent = 'Visit Website';
    website.href = temple.website;
    card.appendChild(website);


    // Business image
    let image = document.createElement('img');
    image.setAttribute('src', temple.imageurl);
    image.setAttribute('alt', `${temple.name} Logo`);
    card.appendChild(image);


    // Append card to the DOM (the prophet list).
    document.querySelector('div.cards').appendChild(card);
}
