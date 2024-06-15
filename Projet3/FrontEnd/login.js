const formulaire = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

const click = document.querySelector('.click')
click.addEventListener('click', ()=>{

function regexEmail(){
const valeurEmail = email.value 

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
   
    if(regex.test(valeurEmail)){
        return true
    }
    else{
        alert("entrez une adresse mail valide")
    }

}
regexEmail()


})

 


formulaire.addEventListener('submit', async function(e){
    e.preventDefault()

    const chargeUtile = {
       "email": email.value,
        "password": password.value
    }   

      const request =  await fetch('http://localhost:5678/api/users/login', 
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body : JSON.stringify(chargeUtile) 
            })
            
            let reponse = await request.json()
            console.log(reponse)
   
         if(reponse.message === 'user not found'){
            alert('Email ou Mot de passe sont incorrectes')
         }
         else if(reponse.userId === 1){
            window.location.assign('compte.html')
        } 
         window.localStorage.setItem("token", reponse.token) 
        
      
}, false)








/*
          
            if(urserId !== data.userId && token !== data.token){
            alert('Erreur dans l’identifiant ou le mot de passe')
            }

            
            else if(userId !== data.userId){
            alert('Erreur dans l’identifiant')
            }

            else if(token !== data.token){
                alert('Erreur dans le mot de passe')
            }

            else if (userId == data.userId && token == data.token){           
                window.location.assign('compte.html')
        
            }














connection.addEventListener('click', () =>{
  

    if(email.value !== 'Email' && password.value !== '000'){
        alert('Erreur dans l’identifiant ou le mot de passe')
    }

    else if(email.value !== 'Email'){
        alert('Erreur dans l’identifiant')

    }

    else if(password.value !== '000'){
        alert('Erreur dans le mot de passe')
    }

    else if (email.value == 'Email' && password.value == "000"){           
        window.location.assign('compte.html')

    }

})*/