const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', event => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID')

      
      //alternate way to get value based on event target 
      //console.log(event.target.children[1].value)
      

      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(resp => resp.json())
      .then(data => {
          const title = document.querySelector('section#movieDetails h4')
          const summary = document.querySelector('section#movieDetails p')
        if(data.title === 'undefined'){
            title.innerText = 'Movie not found!'
        } else {
          title.innerText = data.title;
          summary.innerText = data.summary;
        }
      })
  })
}

document.addEventListener('DOMContentLoaded', init);