let details =  document.querySelector('.continut');
let details2 =  document.querySelector('.continut2');
let details3 =  document.querySelector('.continut3');
 

document.querySelector('.icon i').onmouseover = ()=>{
    details.style.display="block";
    
};
document.querySelector('.icon i').onmouseout = ()=>{
    details.style.display="none";
    
};
document.querySelector('.icon1 i').onmouseover = ()=>{
    details2.style.display="block";
    
};
document.querySelector('.icon1 i').onmouseout = ()=>{
    details2.style.display="none";
    
};
document.querySelector('.icon2 i').onmouseover = ()=>{
    details3.style.display="block";
    
};
document.querySelector('.icon2 i').onmouseout = ()=>{
    details3.style.display="none";
    
};

let icon1 = document.getElementById('icon1');
let icon2 = document.getElementById('icon2');
let icon3 = document.getElementById('icon3');

icon1.addEventListener('click', ()=>{
    window.location = "https://www.instagram.com/10ciprian";
})
icon2.addEventListener('click', ()=>{
    window.location = "https://www.twitter.com/10ciprian1";
})
icon3.addEventListener('click', ()=>{
    window.location = "https://www.instagram.com/10ciprian.ro";
})
