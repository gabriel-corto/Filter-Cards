

const filterElement = document.querySelector('header input')

const cards = document.querySelectorAll('.cards .card')


function filtercards(){

    if(filterElement.value != ""){

        for(const card of cards){

            let title = card.querySelector('h4 .content').textContent
            title = title.toLocaleLowerCase()

            let filterText = filterElement.value.toLocaleLowerCase()

            if(title.includes(filterText)){

                card.style.display = 'block'
            }
            else {
                card.style.display = 'none'
                
            }
        }
    }
    else {
        
        for(const card of cards){

            card.style.display = 'block'
        }
    }
}

filterElement.addEventListener('input', filtercards)