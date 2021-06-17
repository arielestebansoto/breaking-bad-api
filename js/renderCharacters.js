function renderCharacters(characters) {
    let cardArray = []
    characters.forEach(character => {
      let col = document.createElement('div')
      col.classList.add('col', 's12', 'm6', 'l4')
  
      col.innerHTML = `
      <div class="card small">
        <div class="card-image waves-effect waves-block waves-light">
          <img src=${character.img}>
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${character.name}<i class="material-icons right">more_vert</i></span>
          <p><a href="#" class="red-text"><del>More Info</del></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${character.name}<i class="material-icons right activator">close</i></span>
          <p>Nick Name: "${character.nickname}".</p>
          <p>Ocupation: ${character.occupation.join(', ')}.</p>
          <p>State: ${character.status}.</p>
          <p>Seasons: ${character.appearance.join(', ')}.</p>
          <p>Actor: ${character.portrayed}.</p>
  
        </div>
      </div>
      `
      cardArray.push(col)
    });
  
    app.innerHTML = ``
    app.append(...cardArray)
}

export default renderCharacters