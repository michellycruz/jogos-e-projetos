const input = document.querySelector('.loginInput');
const button = document.querySelector('.loginBtn');
const form = document.querySelector('.loginForm');


const validateInput = ({ target }) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);

    window.location = './pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);