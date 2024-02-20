const grid = document.querySelector('.grid');
const player = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'meeseeks',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'scroopy',
    'summer',
];

const createElement = (tag, className) => {
    
    const element = document.createElement(tag);
    element.classList(className);
    return element;

};

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'front');
    const back = createElement('div', 'back');

    front.style.backgroundImage = `url('../assets/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAtribute('data-character', character);

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters];

    const suffledArray = duplicateCharacters.sort(() => Math.random - 0.5);

    suffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);

    });
}

const startTimer = () => {

    this.loop = setInterval(() => {

        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
        
    }, 1000);
};