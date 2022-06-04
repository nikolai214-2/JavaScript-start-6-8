const userText = document.querySelector('#inputText');
const textShow = document.querySelector('#duplicateField');
const Button = document.querySelector('#clearText');
userText.addEventListener('keyup', function() {
    textShow.textContent=userText.value;
});
Button.addEventListener('click', function() {
    console.log (userText.value="");
    textShow.textContent="";    
});
 