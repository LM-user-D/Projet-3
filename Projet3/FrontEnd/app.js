const gallery = document.querySelector('.gallery')
const objs = document.querySelector('.objets')
const appart = document.querySelector('.appartements')
const hotel = document.querySelector('.hotel-resto')
const tous = document.querySelector('.tous')



async function attenteReponse (){

    return await fetch("http://localhost:5678/api/works").then(reponse => reponse.json())

}

console.log(attenteReponse());
 
attenteReponse().then(donnees =>{
        
        let data = donnees

        tous.addEventListener('click', ()=>{
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


        objs.addEventListener('click', ()=>{
             
            function appelObj(){ 

                const imgObj = data.filter(function (dt){
                    return dt.category.name == 'Objets';
                })   

                for(let i = 0; i < imgObj.length; i++){

                    let imgBox = document.createElement('img')
                    let titleImg = document.createElement('figcaption')
                    let figureObj = document.createElement('figure')

                    imgBox.src = imgObj[i].imageUrl
                    titleImg.innerText = imgObj[i].title

                    figureObj.appendChild(imgBox)
                    figureObj.appendChild(titleImg)
                    
                    gallery.appendChild(figureObj)

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
                        let imgAppart = document.createElement('img')
                        let titleAppart = document.createElement('figcaption')
                        let figureAppart = document.createElement('figure')

                        imgAppart.src = appartValue[i].imageUrl
                        titleAppart.innerText = appartValue[i].title

                        figureAppart.appendChild(imgAppart)
                        figureAppart.appendChild(titleAppart)

                        gallery.appendChild(figureAppart)
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
                    imgResto = document.createElement('img')
                    titleResto = document.createElement('figcaption')
                    figureResto = document.createElement('figure')

                    imgResto.src = resto[i].imageUrl
                    titleResto.innerText = resto[i].title

                    figureResto.appendChild(imgResto)
                    figureResto.appendChild(titleResto)

                    gallery.appendChild(figureResto)

                    
                }
                
                
            }

             gallery.innerHTML = ""
             HotelAndRestaurant()
        })

})
   