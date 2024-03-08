let img = document.querySelector("img")
let name = document.querySelector("h4")
let duration = document.querySelectorAll("input")[0]
let volumne = document.querySelectorAll("input")[1]
let previousbtn = document.querySelector(".fa-backward")
let playbtn = document.querySelector(".fa-play")
let pausebtn = document.querySelector(".fa-pause")
let nextbtn = document.querySelector(".fa-forward")
let audioplayer = document.querySelector("audio")
pausebtn.style.display = "none"
// console.log(img,name,duration,volume,previousbtn,playbtn,pausebtn,nextbtn)
let storage = [
    {songname:"Tattoo",
    songimage: "Images/basketball-scoring-points-action-photo-going-basket-live-game-37043542.webp",
    songsource:"Images/Loreen - Tattoo (Official Audio).mp3"
},{songname:"Doraemon",
    songimage: "Images/doraemon.jpg",
    songsource:"Images/doraemon opening song HD.mp3"},
    {songname:"Tattoo",
    songimage: "Images/basketball-scoring-points-action-photo-going-basket-live-game-37043542.webp",
    songsource:"Images/Loreen - Tattoo (Official Audio).mp3"},
    {songname:"Ninja Hattori",
    songimage: "Images/ninja hattori.jpg",
    songsource:"Images/Ninja Hattori (LYRICS) - Main Ninja Hattori.mp3"}]
let index =0;
let realTime= 0;
function playfun(){
    name.innerHTML = storage[index].songname
    img.src = storage[index].songimage; 
    audioplayer.src=storage[index].songsource;
    audioplayer.currentTime = realTime;
    audioplayer.play();
    playbtn.style.display = "none"
    pausebtn.style.display = "block"

    
    

}
playbtn.addEventListener("click", playfun);
pausebtn.addEventListener("click" ,()=>{
    audioplayer.pause();
    playbtn.style.display = "block"
    pausebtn.style.display = "none"
    realTime = audioplayer.currentTime;

})
nextbtn.addEventListener("click",()=>{
    index = (index + 1)%storage.length;
    realTime = 0
    playfun();
})
