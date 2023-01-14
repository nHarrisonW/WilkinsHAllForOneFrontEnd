let savedName1 = '';
let savedName2 = '';
let savedName3 = '';
let savedName4 = '';
let Challenge8Url = '';

let userName = document.getElementById('mc8OutputField');
let submitBtn = document.getElementById('mc8Submit');
let whiteBox = document.getElementById('mc8Input');
let whiteBox2 = document.getElementById('mc8Input2');
let whiteBox3 = document.getElementById('mc8Input3');
let whiteBox4 = document.getElementById('mc8Input4');


submitBtn.addEventListener('click', function () {
    sayHello(whiteBox, whiteBox2, whiteBox3, whiteBox4)
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
function sayHello(whiteBox, whiteBox2, whiteBox3, whiteBox4) {
    (whiteBox.value) || (whiteBox2.value) || (whiteBox3.value) || (whiteBox4.value)
        savedName1 = whiteBox.value;
        savedName2 = whiteBox2.value;
        savedName3 = whiteBox3.value;
        savedName4 = whiteBox4.value;
        Challenge8Url = 'https://harrisonsallforone.azurewebsites.net/MiniChallenge8/GetStudentByFirstName/' + savedName1;
        urlCall(Challenge8Url)
}