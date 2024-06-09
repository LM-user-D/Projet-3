const formulaire = document.getElementById('form')
const connection = document.getElementById('connection')
const email = document.getElementById('email')
const password = document.getElementById('password')


const click = document.querySelector('.click')

click.addEventListener('click', ()=>{

function testRegex(){
const valeurEmail = email.value 

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
   
    if(regex.test(valeurEmail)){
        return true
    }
    else{
        alert("entrez une adresse mail valide")
    }

}
testRegex()


})



/*



formulaire.addEventListener('submit', (e)=>{
    e.preventDefault()
 
    const login = {
        userId: document.querySelector('#email').value,
        token: document.querySelector('#password').value
    }
       
    const charge = JSON.stringify(login)
     
    console.log(charge);
    
         fetch('http://localhost:5678/api/users/login', 
            {
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body : charge
            }).then(format => format.json()).then(data =>{
                
                
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


            })

})






/*
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