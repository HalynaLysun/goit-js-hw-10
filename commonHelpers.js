import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m}from"./assets/vendor-2b44ac2e.js";const a=document.querySelector("#datetime-picker"),h=document.querySelector("button[data-start]"),y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(n){console.log(n[0])}};m(a,y);class S{constructor({onTick:t}){this.onTick=t,this.interval=null}start(){const e=new Date(a.value).getTime();e<Date.now()?alert("Error!!! Illegal operation"):this.interval=setInterval(()=>{const o=Date.now(),r=e-o,s=this.convertMs(r);this.onTick(s)},1e3)}convertMs(t){const i=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:u,minutes:l,seconds:d}}}const p=document.querySelector(".days"),f=document.querySelector(".hours"),T=document.querySelector(".minutes"),g=document.querySelector(".seconds"),c=new S({onTick:v});function v({days:n,hours:t,minutes:e,seconds:o}){p.textContent=String(n).padStart(2,"0"),f.textContent=String(t).padStart(2,"0"),T.textContent=String(e).padStart(2,"0"),g.textContent=String(o).padStart(2,"0")}h.addEventListener("click",c.start.bind(c));
//# sourceMappingURL=commonHelpers.js.map