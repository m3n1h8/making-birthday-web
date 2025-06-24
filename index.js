// đông hồ đếm ngược
//
let hour= document.getElementById("countdownhour");
setInterval(() => {
const now = new Date();

const nowhour= now.getHours();
const nowminute= now.getMinutes();  
const nowsecond= now.getSeconds();

 let countdownhour= 23 - nowhour;
 let countdownminute= 59 - nowminute;
 let countdownsecond= 60 - nowsecond;
 if(countdownhour < 10)
    {
        countdownhour = "0" + countdownhour;
    }
 
    if(countdownminute < 10)
    {
        countdownminute = "0" + countdownminute;
    }
    if(countdownsecond < 10)
    {
        countdownsecond = "0" + countdownsecond;
    }
    hour.innerHTML= countdownhour + ": " + countdownminute + ": " + countdownsecond;
}, 1000);




      
//
//căn giữa khối đông hồ đếm ngược

const countdown = document.querySelector(".countdown");
const contentborder = document.querySelector(".contentborder");
const content= document.querySelector(".content")
const countdownWidth = countdown.getBoundingClientRect().width;

const leftcontentborder = (countdownWidth - 810) / 2;
const leftcontent = (countdownWidth - 770) / 2;
contentborder.style.left = `${leftcontentborder}px`;
content.style.left = `${leftcontent}px`;

//
// hiệu ứng đốt nến bánh sinh nhật và hiện chữ HAPPY BIRTHDAY 
const cake = document.getElementById("cake");
const fire1= document.getElementById("fire1");
const fire2= document.getElementById("fire2");
const fire3= document.getElementById("fire3");
const fire4= document.getElementById("fire4");
const fire5= document.getElementById("fire5");
const fire6= document.getElementById("fire6");
const fire7= document.getElementById("fire7");
const notify= document.getElementById("notify");
let time= document.querySelector(".time");
function burnfire(){
    fire1.style.display="block";
   ;
    fire2.style.display="block";

    fire3.style.display="block";
    fire4.style.display="block";
    fire5.style.display="block";
    fire6.style.display="block";
    fire7.style.display="block";
    fire1.setAttribute("data-aos", "zoom-in-up")
    fire1.setAttribute("data-aos-duration", "2000")
    fire2.setAttribute("data-aos", "zoom-in-up")
    fire2.setAttribute("data-aos-duration", "2000")
    fire3.setAttribute("data-aos", "zoom-in-up")
    fire3.setAttribute("data-aos-duration", "2000")
    fire4.setAttribute("data-aos", "zoom-in-up")
    fire4.setAttribute("data-aos-duration", "2000")
    fire5.setAttribute("data-aos", "zoom-in-up")
    fire5.setAttribute("data-aos-duration", "2000")
    fire6.setAttribute("data-aos", "zoom-in-up")
    fire6.setAttribute("data-aos-duration", "2000")
    fire7.setAttribute("data-aos", "zoom-in-up")
    fire7.setAttribute("data-aos-duration", "2000")
    time.removeChild(notify);
    const timewish =document.createElement("p");
    timewish.innerHTML="HAPPY BIRTHDAY TO YOU";
    timewish.classList.add("timewish");
    timewish.setAttribute("data-aos", "zoom-in-up");
    timewish.setAttribute("data-aos-duration", "2000");
    time.appendChild(timewish);
    
    AOS.refresh(); 
}
cake.addEventListener("click", burnfire);











//
//cuộn đến vị trí quà
function scrolltogift(){
   // document.querySelector(".giftbox").scrollIntoView({
  //      behavior: "smooth",
  //      start: "block",
   // });
    backgroundmusic.play();
    backgroundmusicicon.name="volume-high-outline";
    backgroundmusicicon.onclick= offmusic
}

//
//bóng bay
document.getElementById("cake").addEventListener("click",baloon);
notify.addEventListener("click",baloon);
 function baloon () {
      const container = document.getElementById("balloon-container");

      for (let i = 0; i < 30; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";

        balloon.style.left = `${Math.random() * 100}%`;

        const colors = ["#ff4d4d", "#ff66cc", "#66ccff", "#ffff66", "#99ff99"];
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(balloon);
        setTimeout(() => balloon.remove(), 5000);
      }
    }


    //
    // nổi phần lời chúc
    const details = document.querySelector("detail");
    const loichuc = document.querySelector(".loichuc");
    const summary1 = document.querySelector(".summary1");
    const summary2 = document.querySelector(".summary2");
    const summary3 = document.querySelector(".summary3");
    const summary4 = document.querySelector(".summary4");
    const loichucbox = document.querySelector(".loichucbox");
    const manh = document.querySelector(".manh");

    function showloichuckly(){
         
         loichucbox.style.zIndex="109";

        backgroundmusicicon.style.zIndex="70"
         loichucbox.setAttribute("class","loichucshowing");
            
         layoutcontainer.style.zIndex="99";
         layoutcontainer.style.display="flex";
      //   layoutcontainer.style.opacity="1";
         videobox.style.display="none"; 
         layoutcontainer.addEventListener("click",hide);
         backgroundmusic.pause();
       //  manh.play();

    }
    summary1.addEventListener("click",showloichuckly);
    summary2.addEventListener("click",showloichuckly);
    summary3.addEventListener("click",showloichuckly);
    summary4.addEventListener("click",showloichuckly);
//
// ẩn video 
function hide(){
    layoutcontainer.style.display="none";
    backgroundmusicicon.style.zIndex="110"
    
    layoutcontainer.removeEventListener("click",hide); 
    video.pause();
    backgroundmusic.play();
    backgroundmusicicon.name="volume-high-outline";
    backgroundmusicicon.onclick= offmusic
}
//
// chiếu video anh da đen 

 const layoutcontainer= document.querySelector(".layoutcontainer");
 const videobox= document.querySelector(".videobox");
 const video= document.querySelector("video");
 const backgroundmusic= document.querySelector("#backgroundmusic");
function watchvideo(){
    layoutcontainer.style.display="flex";
    layoutcontainer.style.zIndex="111";
  
    videobox.style.display="flex"; 
   
    setTimeout(()=>{video.play()}, 1500);
    
    backgroundmusic.pause();
    AOS.refresh(); 
}
//
//

  const bgMusic = document.getElementById("bg-music");
  const voiceAudios = document.querySelectorAll(".voice-msg");

  voiceAudios.forEach(audio => {
    audio.addEventListener("play", () => {
      if (!bgMusic.paused) {
        bgMusic.pause();
      }
    });

   
  });


  //
  // tắt bật nhạc nền
   const backgroundmusicicon = document.getElementById
   ("backgroundmusicicon")
   const offmusic =()=>{
    backgroundmusicicon.name="volume-mute-outline";
    backgroundmusic.pause();
    backgroundmusicicon.onclick= onmusic
   }
   const onmusic= () =>{
    backgroundmusicicon.name="volume-high-outline";
    backgroundmusic.play();
    backgroundmusicicon.onclick= offmusic

   }
   backgroundmusicicon.onclick= offmusic


   //
   // nút ẩn hiện form chỉnh sửa

   const hideEditBtn= document.querySelector(".hide-edit-btn");
   const formNhapLieu= document.querySelector(".form-nhap-lieu");
   
  function hideEditForm(){
    formNhapLieu.setAttribute("class","form-nhap-lieu")
    // const tieudesothich=  document.querySelectorAll('.tieude-sothich')
    // const arraytieudesothich = Array.from(tieudesothich).map((el)=>{return el.value})
    // console.log(arraytieudesothich)
  }

  function appearEditForm(){
    formNhapLieu.setAttribute("class","form-nhap-lieu2")
    
  }