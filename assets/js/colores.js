let colors = document.getElementById('backgroundSelector');
let body = document.getElementById('background');

colors.addEventListener('change', getColors);

function getColors (){
    body.style.backgroundColor = colors.value;

}