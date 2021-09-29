export const CharacterCard = (character) => {
    const Card = document.createElement('div')
    Card.classList.add('col', 's12', 'm6', 'l4')
    
    Card.innerHTML=` 
        <div class="card small z-depth-5">
            <div class="card-image waves-effect waves-block waves-light">
                <img src=${character.img}>
                <span class="card-title activator white-text text-darken-4">${character.name}<i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${character.name}<i class="material-icons right activator">close</i></span>
                <p>Nick Name: "${character.nickname}".</p>
                <p>Ocupation: ${character.occupation.join(', ')}.</p>
                <p>State: ${character.status}.</p>
                <p>Seasons: ${character.appearance.join(', ')}.</p>
                <p>Actor: ${character.portrayed}.</p>
            </div>
        </div>`

    return Card
}