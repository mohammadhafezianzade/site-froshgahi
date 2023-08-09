let SlideIndex = 1;
let rimainingTime=70000;
function setTime(){
  if (rimainingTime==0) return;
  let h=Math.floor(rimainingTime/3600);
  let m = Math.floor((rimainingTime%3600)/60);
  let s = Math.floor((rimainingTime%3600)%60);
  document.querySelector("#h").innerHTML=h;
  document.querySelector("#m").innerHTML=m;
  document.querySelector("#s").innerHTML=s;
}
setInterval(()=>{
rimainingTime-=1
setTime();
},1000)


function setSlide(input,index){
    SlideIndex = index;
    let item = document.querySelector(`#${input}`);
    let slides = [...document.querySelector('.slides').children];
    slides.forEach((element)=>{
    element.classList.remove("active");
  
    })
      item.classList.add("active");
      
      
 }
setInterval(()=>{
  SlideIndex+=1;
  if(SlideIndex==4){
    SlideIndex=1;
  }
  setSlide(`slide${SlideIndex}`,SlideIndex);
},4000)

