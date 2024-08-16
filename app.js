document.getElementById('background').addEventListener('change',function(){
    const selectValue = this.value;
    switch(selectValue){
        case 'blue':
            document.body.style.backgroundColor = 'blue';
            break;
        case 'yellow':
            document.body.style.backgroundColor = 'yellow';
            break;
        case 'green':
            document.body.style.backgroundColor = 'grreen';
            break;
        case 'white':
            document.body.style.backgroundColor = 'white';
            break;
        case 'black':
            document.body.style.backgroundColor = 'black';
            break;
        case 'red':
            document.body.style.backgroundColor = 'red';
            break;
    }
});