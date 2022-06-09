
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
    img: "Css-images/gallete_loweq.jpg",
    tittle: "Fruit galette",
    p: "Symbols of summer, but as long as you have access to fruit, you have a perfectly good excuse to make a galette during the winter. This galette starts with apples, but feel free to add any other fruits.",
    page: "r3/fruit_galette.html"
})
recipe.push({
    img: "Css-images/raspb_lq.jpeg",
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
    setInterval(nextImg, 4000);    
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
        text.innerHTML = "You have all the ingredients! :D";
    } else {
        text.innerHTML = "";
    }
}

var errores = {
    nombre_invalido: "You must introduce a valid name.",
    email_invalido: "You must introduce a valid email.",
    comentario_invalido: "You must introduce a valid comment.",
    edad_invalida: "You must be at least 13 years old!",
    password_vacio: "You must introduce a valid password!",
    password_corto: "Your password must have at least 8 characters!",
    terminosYcondiciones: "You must agree to our Terms and Conditions."
}

function submitOrNat(){
    var name = document.getElementById("name");
    name.classList.remove('error');
    var email = document.getElementById("email");
    email.classList.remove('error');
    var comment = document.getElementById("comment");
    comment.classList.remove('error');
    var notify = document.getElementById("answer");
    var cookies = document.getElementById("cookies");
    var ul_errors = document.querySelector("#errors");
    const date = new Date();
    var d = date.toLocaleDateString();

    var expresion = /^\w+@\w+(\.\w{3})$/;
    var error = [];

    if (!name.value.trim()){
        error.push(errores.nombre_invalido);
        name.classList.add("error");
    } 
    if (!expresion.test(email.value.trim())){
        error.push(errores.email_invalido);
        email.classList.add('error');
    }
    if (!comment.value.trim()){
        error.push(errores.comentario_invalido);
        comment.classList.add("error");
    }

    ul_errors.innerHTML = "";

    if (error.length == 0){

        if (notify.checked && cookies.checked) {
            snackbar("Thanks! Name and email have been saved, you will be notified when someone answers your comment!")
        } else if (notify.checked){
            snackbar("You will be notified when someone answers your comment!")
        } else if (cookies.checked){
            snackbar("Thank you! name and email have been saved!")
        } 

        var father = document.getElementById("cs");
        var div = document.createElement('div');
        var user = document.createElement('p');
        var c = document.createElement('p');
        var time = document.createElement('p');
        div.className = 'comment';
        user.className = 'userName';
        time.classList.add("time");
        user.innerHTML = name.value;
        time.innerHTML = d;
        c.innerHTML = comment.value;
        father.appendChild(div);
        div.appendChild(user);
        div.appendChild(time);
        div.appendChild(c);

        return false; //true!
    } else {
        for (let i = 0; i < error.length; i++){
            var li = document.createElement("li");
            li.innerHTML = error[i];
            ul_errors.appendChild(li);
        }
        return false;
    }

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

function loginValidation(){

    var mail = document.getElementById("email1");
    var pswrd = document.getElementById("password1");
    pswrd.classList.remove("error");
    mail.classList.remove("error");
    var ul = document.getElementById("loginErrors");
    ul.innerHTML = "";
    err = [];

    if (!email("email1")){
        err.push(errores.email_invalido);
    }
    if (!empty("password1")){
        err.push(errores.password_vacio);
    }
    if (pswrd.value.trim().length < 8){
        err.push("Passwords have at least 8 characters");
        pswrd.classList.add("error");
    }

    if (err.length == 0){

        var form = document.getElementById("log_in");
        form.classList.add("hide");
        var c = document.getElementById("content_log");
        var h = document.createElement("h2");
        h.classList.add("h-heart");
        h.classList.add("center");
        var span = document.createElement("span");
        span.innerHTML = "Login succesfully :D";
        h.appendChild(span);
        c.appendChild(h);
        return false; //true!

    } else {
        for (let i = 0; i < err.length; i++){
            var li = document.createElement("li");
            li.innerHTML = err[i];
            ul.appendChild(li);
        }
    }
    return false;
}

function signValidation(){

    var ul = document.getElementById("signErrors");
    var sig_nom = document.getElementById("username");
    var mail = document.getElementById("email2");
    var age = document.getElementById("age");
    var pswrd = document.getElementById("password2");
    pswrd.classList.remove("error");
    age.classList.remove("error");
    mail.classList.remove("error");
    sig_nom.classList.remove("error");
    ul.innerHTML = "";
    err = [];

    if (!empty("username")){
        err.push(errores.nombre_invalido);
    }
    if (!email("email2")){
        err.push(errores.email_invalido);
    }
    if (!agge("age")){
        err.push(errores.edad_invalida);
    }

    if (!empty("password2")){
        err.push(errores.password_vacio);
    }
    if (pswrd.value.trim().length < 8){
        err.push(errores.password_corto);
        pswrd.classList.add("error");
    }

    termAndCond = document.getElementById("tac");
    if (!termAndCond.checked){
        err.push(errores.terminosYcondiciones);
    }

    if (err.length == 0){
        var form = document.getElementById("sign_up");
        form.classList.add("hide");
        var c = document.getElementById("content_log");
        var h = document.createElement("h2");
        h.classList.add("h-heart");
        h.classList.add("center");
        var span = document.createElement("span");
        span.innerHTML = "Your account has been created!";
        p = document.createElement("p");
        p.classList.add("center");
        p.innerHTML = "Username: " + sig_nom.value + " , email: " + mail.value + ".";
        h.appendChild(span);
        c.appendChild(h);
        c.appendChild(p);
        return false; //true!
    } else {
        for (let i = 0; i < err.length; i++){
            var li = document.createElement("li");
            li.innerHTML = err[i];
            ul.appendChild(li);
        }
    }
    return false;

}

//decided to break down each part of the login/signup form validation!
//but decided to keep the comment section form validation in one function!

function agge(id){
    var age = document.getElementById(id); 
    if (!isNaN(age.value.trim()) && +age.value.trim() < 13){
        age.classList.add("error");
        return false;
    }
    return true;
}

function email(id){
    var mail = document.getElementById(id);
    var expresion = /^\w+@\w+(\.\w{3})$/;
    if (!expresion.test(mail.value.trim())){
        mail.classList.add("error");
        return false;
    }
    return true;
}

function empty(id){
    var nom = document.getElementById(id);
    if (!nom.value.trim()){
        nom.classList.add("error");
        return false;
    }
    return true;
}