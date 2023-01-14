let savedName1 = '';
let savedName2 = '';
let savedName3 = '';
let savedName4 = '';
let savedName5 = '';
let savedName6 = '';
let savedName7 = '';
let savedName8 = '';
let savedName9 = '';
let savedName10 = '';
let Challenge5Url = '';

let userName = document.getElementById('mc5OutputField');
let submitBtn = document.getElementById('mc5Submit');
let whiteBox = document.getElementById('mc5Input');
let whiteBox2 = document.getElementById('mc5Input2');
let whiteBox3 = document.getElementById('mc5Input3');
let whiteBox4 = document.getElementById('mc5Input4');
let whiteBox5 = document.getElementById('mc5Input5');
let whiteBox6 = document.getElementById('mc5Input6');
let whiteBox7 = document.getElementById('mc5Input7');
let whiteBox8 = document.getElementById('mc5Input8');
let whiteBox9 = document.getElementById('mc5Input9');
let whiteBox10 = document.getElementById('mc5Input10');

submitBtn.addEventListener('click', function () {
    sayHello(whiteBox, whiteBox2, whiteBox3, whiteBox4, whiteBox5, whiteBox6, whiteBox7, whiteBox8, whiteBox9, whiteBox10)
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
    if ((whiteBox.value) && (whiteBox2.value) && (whiteBox3.value) && (whiteBox4.value) && (whiteBox5.value) && (whiteBox6.value) && (whiteBox7.value) && (whiteBox8.value) && (whiteBox9.value) && (whiteBox10.value)) {
        savedName1 = whiteBox.value;
        savedName2 = whiteBox2.value;
        savedName3 = whiteBox3.value;
        savedName4 = whiteBox4.value;
        savedName5 = whiteBox5.value;
        savedName6 = whiteBox6.value;
        savedName7 = whiteBox7.value;
        savedName8 = whiteBox8.value;
        savedName9 = whiteBox9.value;
        savedName10 = whiteBox10.value;
        Challenge5Url = 'https://harrisonsallforone.azurewebsites.net/MiniChallenge5/game/' + savedName1 + '/' + savedName2 + '/' + savedName3 + '/' + savedName4 + '/' + savedName5 + '/' + savedName6 + '/' + savedName7 + '/' + savedName8 + '/' + savedName9 + '/' + savedName10;
        urlCall(Challenge5Url)
    }
    else {
        userName.textContent = 'One or more entries were invalid!';
    }
}