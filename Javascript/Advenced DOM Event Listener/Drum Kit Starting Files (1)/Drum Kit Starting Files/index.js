var arr=['w','a','s','d','j','k','l'];
for(let i=0;i<=6;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){
        alert("i got clicked "+arr[i]);
    })
}
