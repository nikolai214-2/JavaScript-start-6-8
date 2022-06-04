const testTextField = document.querySelector('#testTextField');
testTextField.onclick = function() {
    // тело обработчика 1
    const userText = prompt('Введите текст')
    const userTextField = document.querySelector('a');
    userTextField.textContent = userText;
    console.log('Текст в a изменен на', userText);
    // конец тела обработчика 1
    // тело обработчика 2
    this.textContent = 'Вы уверены, что хотите изменить текст?';
    Event.preventDefault(); 
    // конец тела обработчика 2 
}