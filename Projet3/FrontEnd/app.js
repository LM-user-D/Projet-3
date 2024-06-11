
const gallery = document.querySelector('.gallery')
const objets = document.querySelector('.objets')
const appart = document.querySelector('.appartements')
const hotel = document.querySelector('.hotel-resto')
const tousLesProjets = document.querySelector('.tous')
 
async function reponseProjet(){
    return await fetch("http://localhost:5678/api/works").then(reponse => reponse.json())
}


reponseProjet().then(donnees =>{
        
        let data = donnees

        tousLesProjets.addEventListener('click', ()=>{
            function allPhotos (){
                for(let i = 0; i < data.length; i++){
                let image = document.createElement('img');
                let title = document.createElement('figcaption');
                let figure = document.createElement('figure');

                image.src = data[i].imageUrl;
                title.innerText = data[i].title;

                figure.appendChild(image);
                figure.appendChild(title);
                gallery.appendChild(figure);
            
                }
            }
            
            gallery.innerHTML = ""
            allPhotos()

        })


        objets.addEventListener('click', ()=>{
             
            function appelObj(){ 

                const imgObj = data.filter(function (dt){
                    return dt.category.name == 'Objets';
                })   

                for(let i = 0; i < imgObj.length; i++){

                    let image = document.createElement('img')
                    let titleImg = document.createElement('figcaption')
                    let figure = document.createElement('figure')

                    image.src = imgObj[i].imageUrl
                    titleImg.innerText = imgObj[i].title

                    figure.appendChild(image)
                    figure.appendChild(titleImg)
                    
                    gallery.appendChild(figure)

                }     

            }
            gallery.innerHTML = ""  
            appelObj()     

        })


        appart.addEventListener('click', ()=>{

            function appelAppart(){      

                const appartValue = data.filter(function(dt){
                  
                   return dt.category.name == 'Appartements'
                })
            
                for(let i = 0; i < appartValue.length; i++){
                        let image = document.createElement('img')
                        let titleAppart = document.createElement('figcaption')
                        let figure = document.createElement('figure')

                        image.src = appartValue[i].imageUrl
                        titleAppart.innerText = appartValue[i].title

                        figure.appendChild(image)
                        figure.appendChild(titleAppart)

                        gallery.appendChild(figure)
                        console.log(gallery)

                }

                }      
                 gallery.innerHTML = ""
                 appelAppart()
            }
            
        )


        hotel.addEventListener('click', ()=>{
            function HotelAndRestaurant (){
                const resto = data.filter(function(dt){
                    return dt.category.name == "Hotels & restaurants"
                })

                for(let i = 0; i < resto.length; i++){

                    image = document.createElement('img')
                    titleResto = document.createElement('figcaption')
                    figure = document.createElement('figure')

                    image.src = resto[i].imageUrl
                    titleResto.innerText = resto[i].title

                    figure.appendChild(image)
                    figure.appendChild(titleResto)

                    gallery.appendChild(figure)
                    
                }
                
            }

             gallery.innerHTML = ""
             HotelAndRestaurant()
        })

})
   
/*** partie avec la méthode POST******/




