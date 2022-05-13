
function ingredientText(){
    let ingchecked = 0;
    let ings = document.getElementsByName("in");
    let text = document.getElementById("text");

    for (let i = 0; i < ings.length; i++){
        if (ings[i].checked){
            ingchecked++;
        }
    }

    if (ingchecked == ings.length){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function imgRandom(){

    let img_num = 3;
    let random_n = Math.random();
    let rand1 = Math.round((img_num-1)*random_n)+1;
    img = new Array;
    img[1] = "Css-images/cookies.png";
    img[2] = "Css-images/gal.jfif";
    img[3] = "Css-images/raspb.jfif";
    document.miimagen.src = img[rand1];

}
