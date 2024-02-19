const form = document.querySelector('.login-form');
const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');

const validadeInput = ({target}) => {
    
    if(target.value.length > 3) {
        button.classList.remove('hidden');
        button.classList.add('show');

        button.removeAttribute('disabled'); 
        return;
    }

    button.setAttribute('disabled', '');
};

const handeSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player: ', input.value);
    window.location = 'pages/game.html';

    input.value = '';
};

input.addEventListener('input', validadeInput);
form.addEventListener('submit', handeSubmit);