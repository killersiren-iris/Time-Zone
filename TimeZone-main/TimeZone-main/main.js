let btn = document.getElementById("get Timezone");

if(btn !==null){
    btn.addEventListener("click", Timezone);
}

function Timezone(){
    let time = document.getElementById("showTimezone");
    time.innerHTML = Date();
}