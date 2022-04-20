let openFace = document.querySelector('.open');
let closedFace = document.querySelector('.closed');

closedFace.addEventListener('mouseenter', () =>{
    if(openFace.classList.contains('open')){
        openFace.classList.add("active");
        closedFace.classList.remove("active");
    }
})

openFace.addEventListener('mouseleave', () =>{
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add("active");
        openFace.classList.remove("active");
    }
})