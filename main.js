const jsonUrl = './data.json'
let res;
let json;
let seacrhObj;
async function fetchVideos(){
  res = await fetch(jsonUrl)
  json = await res.json()
}
async function render(){
    await fetchVideos()
    console.log(json)
    seacrhObj = new URLSearchParams(window.location.search)
    let cat = seacrhObj.get('slug')
    let type;
    for(i in json[cat]){
        let code = json[cat][i].code
        let arr = Array.from(code)
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] === '<'){
                arr[i] = '&lt;'
            }           
            else if(arr[i] === '>'){
                arr[i] = '&gt;'
            }           
        }
        code = arr.join("")
        code = code.replace('>', '&gt;', json[cat][i].code.length)
        let div = document.getElementById("codediv")
        let replaced = cat
        for (let i = 0; i < cat.length; i++) {
            replaced = replaced.replace(`"`, `\"`)
        }
        div.innerHTML += `
        <div class="flex justify-center mx-3 my-3">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
  ${json[cat][i].embed}
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">${cat}</h5>
    <p class="text-gray-700 text-base mb-4">
      ${json[cat][i].name}
    </p>
    <button type="button" onclick='{location.replace('./sourcecode.html?slug=${json[cat][i].slug}&playlist=${replaced}')}' class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Download Source Code</button>
  </div>
</div>
        `
    }
}
render()
async function copy(slug){
    for(i in json[cat]){
        if(json[cat][i].slug === slug){
            navigator.clipboard.writeText(json[cat][i].code)
        }
    }
}
// let url = "./data.json"
// let res = await fetch(url)
// let json = await res.json()
// for(i in json[cat]){
//     if(json[cat][i].slug === slug){
//       SaveBlobAs(json[cat][i].code, slug+"."+type)
//     }
// }
