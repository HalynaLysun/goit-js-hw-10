import{c as a}from"./assets/bi_x-octagon-9412797a.js";/* empty css                      */import{i as s}from"./assets/vendor-0ec40f1a.js";const c="/goit-js-hw-10/assets/bi_check2-circle-286069d5.svg",i=document.querySelector(".form");function m(e,o){return new Promise((r,t)=>{setTimeout(()=>{o==="fulfilled"?r(e):t(e)},e)})}i.addEventListener("submit",e=>{const o=e.currentTarget.delay.value,r=e.currentTarget.state.value;e.preventDefault(),m(o,r).then(t=>{s.error({title:"",message:`Fulfilled promise in ${t}ms`,class:"popup-message",iconUrl:c,theme:"dark",backgroundColor:"#59A10D",messageColor:"#fff",position:"topRight",pauseOnHover:!0,timeout:3e3})}).catch(t=>{s.error({title:"",message:`Rejected promise in ${t}ms`,class:"popup-message",iconUrl:a,theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",pauseOnHover:!0,timeout:3e3})}),i.reset()});
//# sourceMappingURL=commonHelpers2.js.map
