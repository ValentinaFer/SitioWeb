
var imgh, texth, h;
var cont = 0;
var recipe = [];
recipe.push({
    img: "Css-images/cookies.png",
    tittle: "Chocolate chips cookies",
    p: "As an afternoon snack or to satisfy a midnight craving, the classic chocolate chips cookies are a master key snack to any time of the day. Easy to make and certainly not time consuming.",
    page: "#a"
});
recipe.push({
    img: "Css-images/gal.jfif",
    tittle: "Fruit galette",
    p: "One of the symbols of summer, but as long as you have access to fruit, you have a perfectly good excuse to make a galette during the winter. This galette starts with apples, but feel free to add any other fruits you have on hand.",
    page: "#b"
})
recipe.push({
    img: "Css-images/raspb.jfif",
    tittle: "Raspberry hand pies",
    p: "These raspberry hand pies, also known as turnovers, are the perfect combination of sweetness from the raspberry filling and saltiness from the flaky crust. Ideal for a picnic or just as an afternoon treat.",
    page: "r1/raspberry hand pie.html"
})


function load(){
    imgh = document.getElementById("img-slide");
    texth = document.getElementById("p-slide");
    h = document.getElementById("h-slide");
    a = document.querySelector("#slide a");

    set_slide(0);
    setInterval(nextImg, 3000);
   // setInterval(slide.classList.remove("fade"),3000);
}

function set_slide(i){
    imgh.src = recipe[i].img;
    h.innerHTML = recipe[i].tittle;
    texth.innerHTML = recipe[i].p;
    a.href = recipe[i].page;
}

function nextImg(){

    cont < recipe.length-1 ? cont++: cont = 0;
    set_slide(cont);
    slide.classList.add("fade");
}

function prevImg(){

    cont > 0 ? cont--: cont = recipe.length-1;
    set_slide(cont);

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