
//VARIABALES
let elementNavbar = document.querySelectorAll('.element__navbar');
let demoBtn = document.querySelector('.demo__btn');
let row1 = document.querySelectorAll('.knowledge__row1');
let row2 = document.querySelectorAll('.knowledge__row2');
let column = document.querySelectorAll('.knowledge__column');
let pColumn = document.querySelectorAll('.knowledge__column p');
let costsTitle = document.querySelectorAll('.costs__service');
let costsBenefits = document.querySelectorAll('.costs__benefits');
let ulBenefits = document.querySelectorAll('.costs__benefits ul');





elementNavbar[1].addEventListener('click', (error)=>{
    error.preventDefault();
    for(let i=0; i<elementNavbar.length; i++){
        if(i==1){
            elementNavbar[1].classList.add('active2');
        }else{
            elementNavbar[i].classList.remove('active');
            elementNavbar[i].classList.remove('active2')
        }
    }
    document.getElementById('portfolio').scrollIntoView();
});
elementNavbar[0].addEventListener('click', (error)=>{
    error.preventDefault();
    for(let i=0; i<elementNavbar.length; i++){
        if(i==0){
            elementNavbar[0].classList.add('active');
        }else{
            elementNavbar[i].classList.remove('active');
            elementNavbar[i].classList.remove('active2')
        }
    }
    document.getElementById('about').scrollIntoView();
});
elementNavbar[2].addEventListener('click', (error)=>{
    error.preventDefault();
    for(let i=0; i<elementNavbar.length; i++){
        if(i==2){
            elementNavbar[2].classList.add('active');
        }else{
            elementNavbar[i].classList.remove('active');
            elementNavbar[i].classList.remove('active2')
        }
    }
    document.getElementById('services').scrollIntoView();
});



//PORTFOLIO SLIDES


let contorLeft=0, contorRight=0, imgSlide, iLeft, iRight;

imgSlide = document.querySelector('.slider img');
iLeft = document.querySelector('#iLeft');
iRight = document.querySelector('#iRight');

iLeft.addEventListener('click', (err)=>{
    err.preventDefault();
    if(contorLeft==0 && contorRight==0){
        contorLeft=1;
        contorRight=-1;
        iLeft.classList.add('active3');
        imgSlide.src="img/slide1.jpg";
    }else if(contorLeft=-1 && contorRight==1){
        imgSlide.src="img/slide.jpg";
        contorLeft=0;
        contorRight=0;
        iRight.classList.remove('active3');
        
    }    
    else if(contorLeft===false){
        contorLeft=1;
    }
   
})
iRight.addEventListener('click', (e)=>{
    e.preventDefault();
    if(contorLeft==1 && contorRight==-1){
        imgSlide.src="img/slide.jpg";
        contorLeft=0;
        contorRight=0;
        iLeft.classList.remove('active3');
    }
    else if(contorLeft==0 && contorRight==0){
        contorLeft=-1;
         contorRight=1;
         iRight.classList.add('active3');
         imgSlide.src="img/slide2.jpg";
    }  
  
})

demoBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(contorLeft==0){
        window.open('https://instagram.com', '_blank');
    }
    else if(contorLeft==-1){
        window.open('https://instagram.com/10ciprian', '_blank');
    }
    else{
        window.open('https://instagram.com/10ciprian.ro', '_blank');
    }
})

//My knowledge and services


for(let i=0; i<column.length; i++){
    column[i].addEventListener('mouseover', (e)=>{
        e.preventDefault();
        row1[i].classList.add('active5');
        setTimeout(()=>{
            pColumn[i].classList.add('active8');
           },800);
    })
   
   
}
for(let i=0; i<costsTitle.length; i++){
    costsTitle[i].addEventListener('mouseover', (e)=>{
        e.preventDefault();
        costsBenefits[i].classList.add('active10');
        setTimeout(()=>{
            ulBenefits[i].classList.add('active8');
        },800);
    })
}