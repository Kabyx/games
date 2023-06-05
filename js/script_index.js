let sliderInner = document.querySelector(".slider--inner");


let index = 0


setInterval(function() {
    let percentage = index * -100;
    sliderInner.style.transform = "translateX("+percentage+"%)";index++;


    if (index >= 3 ) {
        index = 0  
    }

}
,2000)