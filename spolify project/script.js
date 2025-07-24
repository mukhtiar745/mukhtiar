// console.log("let javascript write")
let khas = document.querySelector(".right")
let currentSong = new Audio();
let songs;
// const currentSong = document.getElementById("currentSong");
const colorBar = document.querySelector(".right");

// Function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Automatically change color every second if not playing
setInterval(() => {
  if (currentSong.paused) {
   
  }
  else{
     const randomColor = getRandomColor();
    colorBar.style.boxShadow = ` inset 0px 500px 220px -300px ${getRandomColor()}`;
  }
}, 2000); // change every 1 second


function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getsongs(){
    let a = await fetch("http://127.0.0.1:5500/songs/")
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
   let as = div.getElementsByTagName("a")
   let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1])
            
        }
    }
    return songs
}
const playMusic = (track,pause=false)=>{
    // let audio = new Audio("/songs/" + track)
    currentSong.src = "/songs/" + track;
    if(!pause){
        currentSong.play()


    }
    // plays.src = "pause.svg"
    document.querySelector(".songinfo").innerHTML= track 
    document.querySelector(".songtime").innerHTML= "00:00 / 00:00"
}

async function main(){
  
     songs = await getsongs()
    playMusic(songs[0],true)
    
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
        
        
                            <img src="music.svg" alt="">
                            <div class="info">
                                <div class="songn">${song.replaceAll("%20","  ").replaceAll()}</div>
                                <div>song artest</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img src="play.svg" alt="">
                            </div> </li>`;
    }

   Array.from( document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click",element=>{
        // console.log(e.querySelector(".info").firstElementChild.innerHTML)
        playMusic(e.querySelector(".info").firstElementChild.innerHTML)
           document.querySelector(".seekbar").addEventListener("click",(e)=>{ 
        let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        // document.querySelector(".color").style.width = (e.offsetX/e.target.getBoundingClientRect().width) * 100 + "%";
        currentSong.currentTime = ((currentSong.duration)*percent)/100;
    })
        plays.src = "pause.svg"
        document.querySelector(".playbar").style.display="block";
              currentSong.addEventListener("timeupdate",()=>{
        // console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/
        ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime/ currentSong.duration) * 100 + "%"
        // document.querySelector(".color").style.width = (currentSong.currentTime/ currentSong.duration) * 100 + "%"
    })
        
    })
   })

    // play the first song
    // var audio = new Audio(songs[0]);
    // audio.play();

    // audio.addEventListener("loadeddata",()=>{
    //     let duration = audio.duration;
    //     console.log(audio.duration,audio.currentSrc,audio.currentTime)
    // })

plays.addEventListener("click",()=>{
    if (currentSong.paused){
        currentSong.play()
        plays.src = "pause.svg"
   
    }
    
    else{
        currentSong.pause()
        plays.src = "play.svg"
        document.querySelector(".right").style.boxShadow = "  inset 0px 500px 220px -300px rgb(11, 244, 104)";
        
    }

    currentSong.addEventListener("timeupdate",()=>{
        // console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/
        ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime/ currentSong.duration) * 98 + "%"
        // document.querySelector(".color").style.width = (currentSong.currentTime/ currentSong.duration) * 100 + "%"
    })
 
})
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".left").style.left = "0"
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".left").style.left = "-150%"
})
previous.addEventListener("click",()=>{
    // console.log("previous clicked")
    let index = songs.indexOf(currentSong.src.split("/").slice(-1) [0]); 
    
    // console.log(songs,index)
    if((index-1) >= 0){
        
        playMusic(songs[index-1])
    }
})
next.addEventListener("click",()=>{
    // currentSong.pause()  
    // console.log("next clicked")
    let index = songs.indexOf(currentSong.src.split("/").slice(-1) [0]); 
    // console.log(songs,index)
    if((index+1) < songs.length){
        
        playMusic(songs[index+1])
    }
    plays.src = "pause.svg"
})
// volume
document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
//    console.log(e.target.value)
   if( currentSong.volume= parseInt(e.target.value)/100){
       volumes.src = "volume.svg"
    //    currentSong.volume= parseInt(e.target.value)/100;
    }
   else{
    volumes.src = "muted.svg"
   }

})
volumes.addEventListener("click", () => {
  if (currentSong.volume === 0) {
    currentSong.volume = 1; // unmute
    volumes.src = "volume.svg";
  } else {
    currentSong.volume = 0; // mute
    volumes.src = "muted.svg";
  }
});
playclose.addEventListener("click",()=>{
    document.querySelector(".playbar").style.display="none";
    currentSong.pause()
    currentSong.currentTime=0
    colorBar.style.boxShadow="inset 0px 500px 220px -300px rgb(11, 244, 104)"
})

}
    
main()
