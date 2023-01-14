let savedNum1 = 0;
let savedNum2 = 0;
let Challenge2Url = '';

let userName = document.getElementById('mc2OutputField');
let submitBtn = document.getElementById('mc2Submit');
let whiteBox = document.getElementById('mc2Input');
let whiteBox2 = document.getElementById('mc2Input2');

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
        Challenge2Url = 'https://harrisonsallforone.azurewebsites.net/MiniChallenge2/Adding/' + savedNum1 + '/' + savedNum2;
        urlCall(Challenge2Url)
    }
    else {
        userName.textContent = 'Enter a valid number!';
    }
}