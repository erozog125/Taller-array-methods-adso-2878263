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
            document.body.style.backgroundColor = 'green';
            break;
        case 'purple':
            document.body.style.backgroundColor = 'purple';
            break;
        case 'black':
            document.body.style.backgroundColor = 'black';
            break;
        case 'grey':
            document.body.style.backgroundColor = 'grey';
            break;
    }
});