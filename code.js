async function render(){
    let url = "./playlists.json"
    let res = await fetch(url)
    let json = await res.json()
    for(i in json){
        let div = document.getElementById("playlists")
        div.innerHTML += `
        <div class="flex justify-center mx-3 my-3">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
  
  <a href="./playlists.html?slug=${json[i].name}">
  <img class="rounded-t-lg" src="${json[i].image}" alt=""/>
</a>

    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Codewithshamyak</h5>
    <p class="text-gray-700 text-base mb-4">
      ${json[i].name}
    </p>
    <a href="./playlists.html?slug=${json[i].slug}"<button type="button" class="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View Videos</button></a>
  </div>
</div>
        `
    }
}
render()
