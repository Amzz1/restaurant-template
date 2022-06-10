

$(window).scroll(function() {
    var hT = $('.circle-page2').offset().top,
        hH = $('.circle-page2').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        const lala = document.querySelector('.circle-page2')
        const focaccia = document.querySelector('.focaccia')
        const breakfast = document.querySelector('.breakfast')
    if (wS > (hT+hH-wH)){
       
       lala.classList.add('animate')
       focaccia.classList.add('animate')
       breakfast.classList.add('animate')
    }
    else{
        lala.classList.remove('animate')
        focaccia.classList.remove('animate')
        breakfast.classList.remove('animate')
    }
 });
 const x = document.querySelector(".dining")
 function myFunc(){
     x.style.animationName="dining0"
     x.style.animationDuration="3s"
 }
const y = document.querySelector(".chef")
function myChef(){
    y.style.animationName ="chef"
    y.style.animationDuration = "3s"
}

 const z = document.querySelector(".circle--3")
 function circle3(){
       z.style.animationName="cirThree"
       z.style.animationDuration="3s"
 }



