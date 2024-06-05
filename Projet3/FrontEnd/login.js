
const connection = document.getElementById('connection')
const email = document.getElementById('email')
const password = document.getElementById('password')


connection.addEventListener('click', () =>{
  

    if(email.value !== 'Email' && password.value !== '000'){
        email.value = ""
        email.placeholder = "Erreur dans l’identifiant"
        password.value = ""
        password.placeholder = "Erreur dans le mot de passe"
    }

    else if(email.value !== 'Email'){
        email.value = ""
        email.placeholder = "Erreur dans l’identifiant"

    }

    else if(password.value !== '000'){
        password.value = ""
        password.placeholder = "Erreur dans le mot de passe"
    }

    else if (email.value == 'Email' && password.value == "000"){
        email.style.color = "green"
        password.style.color = "green"
           
        window.location.assign('compte.html')

    }

})