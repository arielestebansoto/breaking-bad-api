function renderCharacters(characters) {
    let cardArray = []
    characters.forEach(character => {
      let card = document.createElement('div')
      card.classList.add('card', 'small')
  
      card.innerHTML = `
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
      `
      cardArray.push(card)
    });
  
    app.innerHTML = ``
    app.append(...cardArray)
}

export default renderCharacters
{/* <div class="card-content">
<span class="card-title activator grey-text text-darken-4">${character.name}<i class="material-icons right">more_vert</i></span>
<p><a href="#" class="red-text"><del>More Info</del></a></p> 
</div> */}