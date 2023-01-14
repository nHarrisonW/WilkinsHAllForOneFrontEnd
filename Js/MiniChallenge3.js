let savedName = 0;
let savedTime = 0;
let Challenge3Url = '';

let userName = document.getElementById('mc3OutputField');
let submitBtn = document.getElementById('mc3Submit');
let whiteBox = document.getElementById('mc3Input');
let whiteBox2 = document.getElementById('mc3Input2');

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
    if ((whiteBox.value) && (whiteBox2.value)) {
        savedName = whiteBox.value;
        savedTime = whiteBox2.value;
        Challenge3Url = 'https://harrisonsallforone.azurewebsites.net/MiniChallenge3/Asking/' + savedName + '/' + savedTime;
        urlCall(Challenge3Url)
    }
    else {
        userName.textContent = 'One or more entries were invalid, try again!';
    }
}