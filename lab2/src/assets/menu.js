document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nav__menu-button").addEventListener("click",function(){
    
        this.classList.toggle("open");
        document.querySelector(".nav__wrap").classList.toggle("open");
        document.querySelector(".nav__menu").classList.toggle("open");
        document.querySelector(".cover").classList.toggle("open");
        document.body.classList.toggle("hidden");        
    })
  });