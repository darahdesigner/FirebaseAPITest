function getData(){
  let query = document.getElementById("query").value
  let rating = document.getElementById("rating").value
  let fetchURL = `https://api.giphy.com/v1/gifs/search?&limit=1&lang=en&offset=0&rating=${rating}&q=${query}&api_key=VVb2R6n4wKmnbA1cFEMvfmcmBBGCYjxs`
  fetch(fetchURL).then(function(data){
  return data.json()
  })
  .then(function(json){
    console.log(json.data[0].images.fixed_height.url)
    let gifDataReturned = json.data[0].images.fixed_height.url
    let gif = document.createElement("img")
    gif.setAttribute("src", gifDataReturned)
    document.body.appendChild(gif)
  })}