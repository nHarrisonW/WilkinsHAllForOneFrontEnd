let savedNum = '';
let Challenge6Url = '';

let userName = document.getElementById('mc6OutputField');
let submitBtn = document.getElementById('mc6Submit');
let whiteBox = document.getElementById('mc6Input');

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
    if (Number(whiteBox.value)) {
        savedNum = whiteBox.value;
        Challenge6Url = 'https://harrisonsallforone.azurewebsites.net/MiniChallenge6/evaluate/' + savedNum;
        urlCall(Challenge6Url)
    }
    else {
        userName.textContent = 'Enter a valid number!';
    }
}