let accordion = document.querySelectorAll(".accordion");
console.log(accordion);

accordion.forEach(function(value){
    value.onclick = function(){
        let content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }})

    console.log(accordion);