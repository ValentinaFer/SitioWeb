
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

function submitOrNat(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;
    let submit;

    if (!name){
        alert("Must enter a valid name");
    }
    if (!email){
        alert("Must enter a valid email direction");
    }
    if (!comment){
        alert("Must write a comment");
    }

    if (name && email && comment){
        let father = document.getElementById("cs");
        let div = document.createElement('div');
        div.className = 'comment';
        div.innerHTML = comment.value;
        
    }

    let notify = document.getElementById("answer");
    if (notify.checked){
        alert("You will be notified when someone answers your comment!");
    }

}
