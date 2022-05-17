
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

    var img_num = 3;
    var random_n = Math.random();
    var rand1 = Math.round((img_num-1)*random_n)+1;
    img = new Array;
    img[1] = "Css-images/cookies.png";
    img[2] = "Css-images/gal.jfif";
    img[3] = "Css-images/raspb.jfif";
    document.miimagen.src = img[rand1];

}

function submitOrNat(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    var submit;
    var expresion = /^\w+@\w+(\.\w{3})$/;

    if (!name){
        //alert("Must enter a valid name");
        document.getElementById("name").classList.add('error');
    } else {
        document.getElementById("name").classList.remove('error');
    }
    if (!expresion.test(email)){
        //alert("Must enter a valid email direction");
        document.getElementById("email").classList.add('error');
    } else {
        document.getElementById("email").classList.remove('error');
    }
    if (!comment){
        //alert("Must write a comment");
    }

    let notify = document.getElementById("answer");
    if (notify.checked){
        alert("You will be notified when someone answers your comment!");
    }

    if (name && email && comment){
        alert("correct");
        var father = document.getElementById("cs");
        var div = document.createElement('div');
        div.className = 'comment';
        var user = document.createElement('p');
        user.className = 'userName';
        var c = document.createElement('p');
        father.appendChild(div);
        
        user.innerHTML = name;
        c.innerHTML = comment;
        div.appendChild(user);
        div.appendChild(c);
        return false;
    }

    return false;
}
