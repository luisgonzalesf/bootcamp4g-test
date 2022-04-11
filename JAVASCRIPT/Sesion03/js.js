const  numbers = document.querySelectorAll(".card__item");
const value = document.getElementById("value");

document.addEventListener("DOMContentLoaded", ()=>{
    if(value){
        value.textContent = localStorage.getItem("value") || "0"
    }
})

numbers.forEach( number => {
    number.addEventListener('click', (e)=>{
        localStorage.setItem('value', e.target.textContent)
        numbers.forEach(n =>{

            if(n.classList.contains('active')){
                n.classList.remove('active')
            }
        })
        e.target.classList.add('active')
    })
})