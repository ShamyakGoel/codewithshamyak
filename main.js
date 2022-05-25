async function render(){
    let url = "./data.json"
    let res = await fetch(url)
    let json = await res.json()
    let cat = location.href.split("?")[1].split("=")[1]
    let type;
    for(i in json.data){
        if(json.data[i].category !== cat){
          console.log("no")
          continue
        }
        console.log(json.data[i])
        let code = json.data[i].code
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
        code = code.replace('>', '&gt;', json.data[i].code.length)
        let div = document.getElementById("codediv")
        if(json.data[i].category === 'html'){
          type = 'html'
        }
        div.innerHTML += `
        <div class="flex justify-center mx-3 my-3">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
  ${json.data[i].embed}
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
    <p class="text-gray-700 text-base mb-4">
      ${json.data[i].name}
    </p>
    <button type="button" onclick={location.replace("./sourcecode.html?slug=${json.data[i].slug}")} class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Download Source Code</button>
  </div>
</div>
        `
    }
}
render()
async function copy(slug){
    let url = "./data.json"
    let res = await fetch(url)
    let json = await res.json()
    for(i in json.data){
        if(json.data[i].slug === slug){
            navigator.clipboard.writeText(json.data[i].code)
        }
    }
}
// let url = "./data.json"
// let res = await fetch(url)
// let json = await res.json()
// for(i in json.data){
//     if(json.data[i].slug === slug){
//       SaveBlobAs(json.data[i].code, slug+"."+type)
//     }
// }