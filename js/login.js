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
}

input.addEventListener('input', validadeInput);