document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("navigation__menu-button").addEventListener("click",function(){
    
        this.classList.toggle("open");
        document.querySelector(".navigation__wrap").classList.toggle("open");
        document.querySelector(".navigation__menu").classList.toggle("open");
        document.querySelector(".cover").classList.toggle("open");
        document.body.classList.toggle("hidden");
        document.querySelector("html").classList.toggle("hidden");
        
    })
  });