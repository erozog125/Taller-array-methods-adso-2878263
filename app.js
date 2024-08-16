document.getElementById('backgroundSelector').addEventListener('change', function() {
    const selectedValue = this.value;
    switch (selectedValue) {
        case 'blue':
            document.body.style.backgroundColor = 'blue';
            break;
        case 'green':
            document.body.style.backgroundColor = 'green';
            break;
        case 'red':
            document.body.style.backgroundColor = 'red';
            break;
        case 'yellow':
            document.body.style.backgroundColor = 'yellow';
            break;
        case 'pink':
            document.body.style.backgroundColor = 'pink';
            break;
        case 'black':
            document.body.style.backgroundColor = 'black';
            break;
        case 'grey':
            document.body.style.backgroundColor = 'grey';
            break;
        default:
            document.body.style.backgroundColor = '';
            break;  
    }
});