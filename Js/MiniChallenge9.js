let savedName = '';
let Challenge9Url = '';

let userName = document.getElementById('mc9OutputField');
let submitBtn = document.getElementById('mc9Submit');
let whiteBox = document.getElementById('mc9Input');

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
    (whiteBox.value)
        savedName = whiteBox.value;
        Challenge9Url = 'https://harrisonsallforone.azurewebsites.net/MiniChallenge9/getFood/' + savedName;
        urlCall(Challenge9Url)
}