//Goal: Get random memes

document.querySelector('button').addEventListener('click', getMeme)

function getMeme() {
//   let meme = document.querySelector('button').value

  let url= `https://api.imgflip.com/get_memes`
  fetch(url)
    .then(res => res.json()) 
    .then(data => {

      document.querySelector('img').src = data[0].url


      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    })

}