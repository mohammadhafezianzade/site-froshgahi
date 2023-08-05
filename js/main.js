let SlideIndex = 1;
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

