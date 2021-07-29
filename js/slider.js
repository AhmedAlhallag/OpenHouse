// Slider
const slider = document.querySelector('.slider');


// $('.slider').on('click',(e)=>{

M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});
