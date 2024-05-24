document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you for signing up, ${name}!`);
        document.getElementById('signup-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

var formdata = new FormData();
formdata.append("type", "Thick Horizontal");
formdata.append("tags", "Discount,Fitness Plan,Trainer");
var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "bLCHmXcQw3gDwzFGctVxHHcAgzjTt6Sm");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}