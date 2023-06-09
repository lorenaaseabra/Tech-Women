document.getElementById("button").addEventListener("click", validaFormulario)

function validaFormulario(){
    if (document.getElementById("nome").value != "" && document.getElementById("linkedin").value != ""){
        alert("Linkedin enviado com sucesso!")
    }
    else{
        alert("Ops, algo deu errado. Preencha novamente seus dados")
    } 
}


//listener: deQuemVemOevento.addEventListener("evento", oqueDeveFazer)
