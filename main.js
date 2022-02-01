function go(link , openInNewTab){
    if(openInNewTab){
        window.open(link, '_blank');
    }
    else{
        location.replace(link);
    }
}
function copy(id){
    text = document.getElementById(id).innerText
    console.log(text)
    navigator.clipboard.writeText(text);
    alert("Copied To ClipBoard")
}