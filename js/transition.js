const transitionBtn = document.querySelector('.transitionBtn');
const cover1 = document.querySelector('.cover1');
const cover2 = document.querySelector('.cover2');
const text = document.querySelector('.text-transition');

transitionBtn.addEventListener('click', (e)=>{
   e.preventDefault();
   cover1.classList.add('slide');
   cover2.classList.add('slide');
   setTimeout(()=>{
     text.style.display="flex";
   },600);
   setTimeout(()=>{
      window.location = transitionBtn.href;
   },1200);
});