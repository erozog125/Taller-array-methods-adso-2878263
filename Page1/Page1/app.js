let colorSelect = document.getElementById("backgroundSelector");

colorSelect.addEventListener("change", function() {

    let selectedColor = colorSelect.value;

    document.body.style.backgroundColor = selectedColor;
});