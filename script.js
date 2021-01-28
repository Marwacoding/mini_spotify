/// adding color to like when click


heart_icon = document.querySelectorAll(".like");

heart_icon.forEach((valeur, index)=>{
valeur.addEventListener("click", function(elem){
    valeur.style.color='#DD2375'  
})
})
