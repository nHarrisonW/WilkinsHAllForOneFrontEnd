let savedName = '';
let Challenge1Url = '';

let userName = document.getElementById('OutputField');
let submitBtn = document.getElementById('Submit');
let whiteBox = document.getElementById('JoeBlow');

submitBtn.addEventListener('click', function () {
    sayHello(whiteBox)
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
function sayHello(whiteBox) {
    var letters = /^[A-Za-z ]+$/;
    if (whiteBox.value.match(letters)) {
        savedName = whiteBox.value;
        Challenge1Url = 'https://harrisonsallforone.azurewebsites.net/MiniChallenge1/Hello/' + savedName;
        urlCall(Challenge1Url)
    }
    else {
        userName.textContent = 'Enter a valid name!';
    }
}