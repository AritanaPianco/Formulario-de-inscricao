let input = document.querySelector("input")
let botao = document.querySelector(".btn")
let addEmail = document.querySelector(".span")
let mainContent = document.querySelector(".main-content")
let seconContent = document.querySelector(".main-content2")
let errMSG = document.querySelector(".erro")
let email = 0


botao.addEventListener("click", verificar)


function verificar(){
    
    let regexEMAIL = /^[\w.-]+@[\w.-]+\.[\w]{2,}/
    email = input.value
    if(!regexEMAIL.test(email)){
        msgError()
    
    } else{
    
        addEmail.innerHTML = "<strong> " + email + " </strong>"
        mainContent.classList.add("hide")
        seconContent.classList.remove("hide")
    }

}


function msgError(){
    errMSG.classList.remove("hideErr")
}








    


    
   








