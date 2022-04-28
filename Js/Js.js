
function ingredientText() {
    var cb = document.getElementById("i1, i2");
    var text = document.getElementById("text");

    if (cb.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }

}