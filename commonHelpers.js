import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as c,i as d}from"./assets/vendor-0ec40f1a.js";function l(t,e){t<Date.now()+400&&(clearInterval(e),e=null)}function m(t){const i=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),a=Math.floor(t%864e5%36e5%6e4/1e3);return f(i,s,u,a)}function f(t,e,o,n){const r=document.querySelector(".days"),i=document.querySelector(".hours"),s=document.querySelector(".minutes"),u=document.querySelector(".seconds");r.textContent=String(t).padStart(2,"0"),i.textContent=String(e).padStart(2,"0"),s.textContent=String(o).padStart(2,"0"),u.textContent=String(n).padStart(2,"0")}function b(){d.error({title:"",message:"Please choose a date in the future",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:"../img/bi_x-octagon.svg",position:"topRight",pauseOnHover:!0,timeout:3e3})}function p(t){const e=document.querySelector(".flatpickr-input.flatpickr-mobile");e&&(t?e.setAttribute("disabled",""):e.removeAttribute("disabled"))}function h(t,e,o){o.removeAttribute("disabled"),e.removeAttribute("disabled");let n;o.addEventListener("click",()=>{o.setAttribute("disabled",""),e.setAttribute("disabled",""),p(!0),n=setInterval(()=>{m(t-Date.now()),l(t,n)},200)})}function S(){const t=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]");let o;if(!t||!e)return;e.setAttribute("disabled",""),c(t,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,dateFormat:"Y-m-d h:m",onClose(r){o=r[0],o<=Date.now()||isNaN(o)?(e.setAttribute("disabled",""),b()):h(o,t,e)}})}S();
//# sourceMappingURL=commonHelpers.js.map
