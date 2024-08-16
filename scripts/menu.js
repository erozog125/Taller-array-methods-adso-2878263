
const colorInput = document.getElementById('colorMenu')

colorInput.addEventListener("change", () =>{

   const color = colorInput.value
   document.body.style.backgroundColor = color;
})

