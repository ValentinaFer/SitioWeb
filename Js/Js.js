
var imgh, texth;
var cont = 0;
var imgs = [];
var texts = [];
imgs[0] = "Css-images/cookies.png";
imgs[1] = "Css-images/gal.jfif";
imgs[2] = "Css-images/raspb.jfif";
texts[0] = "Chocolate chips cookies";
texts[1] = "Fruit galette";
texts[2] = "Raspberry hand pies";

function load(){
    imgh = document.getElementById("img-slide");
    texth = document.getElementById("p-slide");
    var slide = document.getElementById("slide");
    imgh.src = imgs[0];
    texth.innerHTML = texts[0];
    //setInterval(nextImg, 3000);
}

/* (Have yet to try this one, but it definitely looks better)
function slider(dir){

    dir == "left" ? cont--: cont++; cont = imgs.lenght; 
    imgh.src = imgs[cont];
    texth.innerHTML = texts[cont];

    cont > 0 ? cont = imgs.length-1: a; 

}
*/

function nextImg(){

    cont < imgs.length-1 ? cont++: cont = 0;
    imgh.src = imgs[cont];
    texth.innerHTML = texts[cont];
    slide.classList.add("fade");

}

function prevImg(){

    cont > 0 ? cont--: cont = imgs.length-1;
    imgh.src = imgs[cont];
    texth.innerHTML = texts[cont];

}

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

function submitOrNat(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    var notify = document.getElementById("answer");
    var cookies = document.getElementById("cookies");
    var submit = [];
    var expresion = /^\w+@\w+(\.\w{3})$/;

    if (!name){
        document.getElementById("name").classList.add('error');
        submit[0] = false;
    } else {
        document.getElementById("name").classList.remove('error');
        submit[0] = true;
    }
    if (!expresion.test(email)){
        document.getElementById("email").classList.add('error');
        submit[1] = false;
    } else {
        document.getElementById("email").classList.remove('error');
        submit[1] = true;
    }
    if (!comment){
        document.getElementById("comment").classList.add('error');
        submit[2] = false;
    } else {
        document.getElementById("comment").classList.remove('error');
        submit[2] = true;
    }

    var aux = 0;
    for (let index = 0; index < submit.length; index++) {(submit[index] ? aux++: aux)};

    if (aux === submit.length){

        (notify.checked && cookies.checked) ? snackbar("Thanks! Name and email have been saved, you will be notified when someone answers your comment!"): notify.checked ? snackbar("You will be notified when someone answers your comment!") : cookies.checked ? snackbar("Thank you! name and email have been saved!"): false;
        
        var father = document.getElementById("cs");
        var div = document.createElement('div');
        var user = document.createElement('p');
        var c = document.createElement('p');
        div.className = 'comment';
        user.className = 'userName';
        user.innerHTML = name;
        c.innerHTML = comment;
        father.appendChild(div);
        div.appendChild(user);
        div.appendChild(c);
        return false;
    }

    return false;
}

function snackbar(message){

    var psb = document.createElement('p');
    psb.textContent = message;
    var divsb = document.createElement('div');
    divsb.id = 'snackbar';
    divsb.appendChild(psb);
    document.querySelector('body').appendChild(divsb);
    setTimeout(function(){document.querySelector('body').removeChild(divsb);}, 4000);

}