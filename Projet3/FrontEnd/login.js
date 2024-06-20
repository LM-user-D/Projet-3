const formulaire = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const connetion = document.getElementById('connetion')

const click = document.querySelector('.click')
connetion.addEventListener('click', ()=>{

function regexEmail(){
const valeurEmail = email.value 

const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i)
   
    if(regex.test(valeurEmail)){
        return true
    }
    else{
        alert("Entrez une adresse mail valide")
    }
console.log(regex)
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
            console.table(request.status)
   
         if(reponse.message === 'user not found' || request.status === 401){
            alert('Email ou Mot de passe sont incorrectes')
         }
         
         else if(reponse.userId === 1 && request.status !== 401){
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