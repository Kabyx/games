let sliderInner = document.querySelector(".slider--inner");

let index = 0

/*
setInterval(function() {
    let percentage = index * -100;
    sliderInner.style.transform = "translateX("+percentage+"%)";index++;


    if (index >= 3 ) {
        index = 0;
    }

}
,2000)
*/



function registro_on(){

    let login_bloque = document.getElementById("bloque_login");
    let register_bloque = document.getElementById("bloque_register");

    if (register_bloque !== null){

        if (register_bloque.style.display == "none"){

            register_bloque.style.display = "flex";
            login_bloque.style.display = "none";
    
        }

    }

    
}

function login_on(){

    let login_bloque = document.getElementById("bloque_login");
    let register_bloque = document.getElementById("bloque_register");

    if (login_bloque !== null){

        if (login_bloque.style.display == "none"){

            login_bloque.style.display = "flex";
            register_bloque.style.display = "none";
    
        }

}
}