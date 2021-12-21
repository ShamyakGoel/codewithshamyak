function go(link , openInNewTab){
    if(openInNewTab){
        window.open(link, '_blank');
    }
    else{
        location.replace(link);
    }
}