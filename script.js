// TODO: add code here
window.addEventListener('load', function() {

  let result = document.getElementById("container");

    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(function (response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    })
});