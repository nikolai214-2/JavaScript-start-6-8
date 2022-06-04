const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('метод для вывода сообщения в веб-консоль');
});

const allert = document.querySelector('#allert');
allert.addEventListener('click', () => {
    alert('выводит предупреждающее окно');
});

const prompt = document.querySelector('#prompt');
prompt.addEventListener('click', () => {
    alert('метод для запроса данных, которые нужно ввести в текстовое поле');
});