let savedNum = 0;
let Challenge7Url = '';

let userName = document.getElementById('mc7OutputField');
let submitBtn = document.getElementById('mc7Submit');
let whiteBox = document.getElementById('mc7Input');

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
    (Number(whiteBox.value))
        savedNum = whiteBox.value;
        Challenge7Url = 'https://harrisonsallforone.azurewebsites.net/MiniChallenge7/this/' + savedNum;
        urlCall(Challenge7Url)
}