let sendEmail = document.querySelector(".btn-send");

sendEmail.addEventListener("click", function(){
    
    let myform = document.querySelector(".myform");
    myform.addEventListener("submit", function(event){
        event.preventDefault();
    });

    let getEmail = document.querySelector(".input-email");
    let email = getEmail.value;
    console.log(email);
    function validarEmail(email) {
        // Expressão regular para validar o formato do email
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Verifica se o email corresponde ao formato esperado
        return regex.test(email);
      }
      
    if((validarEmail(email)) && (email!=="") && (email!==null)){
        let messageSucess = document.querySelector(".msg-sucess");
        let card = document.querySelector(".mainClass");
        let emailValido = document.querySelector(".msg-sucess .msg-sucess-text > .email-valido");
        messageSucess.style.display = "flex";
        emailValido.innerHTML = email;
        card.style.display = "none";
    }else{
        let erro = document.querySelector(".message-erro-text");
        erro.style.display = "block";
        let inputErro = document.querySelector(".input-email");
        let inputClass = inputErro.classList;
        if(inputClass !== "erro"){
            inputErro.classList.add("erro");
        }else{
            inputErro.classList.remove("erro");
        }
    }

});

let getEmail = document.querySelector(".input-email");

getEmail.addEventListener("focus", function(){
    let erro = document.querySelector(".message-erro-text");
    let inputClass = getEmail.classList;
    if((erro.style.display === "block") && (inputClass.contains("erro"))){
        erro.style.display = "none";
        inputClass.remove("erro"); 
    }
});
let btnSucess = document.querySelector(".btn-sucess");
btnSucess.addEventListener("click", function(){
    let messageSucess = document.querySelector(".msg-sucess");
    let card = document.querySelector(".mainClass");
    if(messageSucess.style.display == "flex"){
        messageSucess.style.display = "none";
        card.style.display = "flex";
    }  
})

