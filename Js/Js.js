
var imgh, texth, h;
var cont = 0;
var recipe = [];
recipe.push({
    img: "Css-images/cookies.png",
    tittle: "Chocolate chips cookies",
    p: "As an afternoon snack or to satisfy a midnight craving, the classic chocolate chips cookies are a master key snack to any time of the day. Easy to make and certainly not time consuming.",
    page: "r2/chocolate_chips_cookies.html"
});
recipe.push({
    img: "Css-images/gal.jfif",
    tittle: "Fruit galette",
    p: "Symbols of summer, but as long as you have access to fruit, you have a perfectly good excuse to make a galette during the winter. This galette starts with apples, but feel free to add any other fruits.",
    page: "r3/fruit_galette.html"
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
    //setInterval(slide.classList = "",5000);
    //setInterval(slide.classList.add("fade"),3000);
    
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
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
    var notify = document.getElementById("answer");
    var cookies = document.getElementById("cookies");
    var ul_errors = document.querySelector("#errors");
    var submit = [];
    var errors = [];
    errors.push ("Must introduce a valid name");
    errors.push ("Must introduce a valid email direction");
    errors.push("Must introduce a comment!");
    var expresion = /^\w+@\w+(\.\w{3})$/;

    if (!name.value.trim()){
        name.classList.add('error');
        submit[0] = false;
    } else {
        name.classList.remove('error');
        submit[0] = true;
    }
    if (!expresion.test(email.value.trim())){
        email.classList.add('error');
        submit[1] = false;
    } else {
        email.classList.remove('error');
        submit[1] = true;
    }
    if (!comment.value.trim()){
        comment.classList.add('error');
        submit[2] = false;
    } else {
        comment.classList.remove('error');
        submit[2] = true;
    }

    var aux = 0;
    ul_errors.innerHTML = "";
    for (let index = 0; index < submit.length; index++) {
        if (submit[index]){
            aux++
        } else {
            var li = document.createElement("li");
            li.innerHTML = errors[index];
            ul_errors.appendChild(li);
        }
    };

    if (aux === submit.length){

        (notify.checked && cookies.checked) ? snackbar("Thanks! Name and email have been saved, you will be notified when someone answers your comment!"): notify.checked ? snackbar("You will be notified when someone answers your comment!") : cookies.checked ? snackbar("Thank you! name and email have been saved!"): false;
        
        var father = document.getElementById("cs");
        var div = document.createElement('div');
        var user = document.createElement('p');
        var c = document.createElement('p');
        div.className = 'comment';
        user.className = 'userName';
        user.innerHTML = name.value;
        c.innerHTML = comment.value;
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