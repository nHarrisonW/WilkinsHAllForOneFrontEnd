let savedNum1 = 0;
let savedNum2 = 0;
let Challenge4Url = '';

let userName = document.getElementById('mc4OutputField');
let submitBtn = document.getElementById('mc4Submit');
let whiteBox = document.getElementById('mc4Input');
let whiteBox2 = document.getElementById('mc4Input2');

submitBtn.addEventListener('click', function () {
    sayHello(whiteBox, whiteBox2)
})
function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            userName.textContent = data;
            console.log(data);
        }
    )
}
function sayHello(whiteBox, whiteBox2) {
    if (Number(whiteBox.value) && Number(whiteBox2.value)) {
        savedNum1 = whiteBox.value;
        savedNum2 = whiteBox2.value;
        Challenge4Url = 'https://harrisonsallforone.azurewebsites.net/MiniChallenge4/evaluate/' + savedNum1 + '/' + savedNum2;
        urlCall(Challenge4Url)
    }
    else {
        userName.textContent = 'One or more entries were invalid!';
    }
}
