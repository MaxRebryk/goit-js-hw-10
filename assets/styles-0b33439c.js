import{f,i as C}from"./vendor-77e16229.js";function S(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:h,seconds:y}}const v=t=>{for(let s in t){let e=t[s];return e.toString().length<2&&(e="0"+e.toString(),t[s]=e),t}},c=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),u=document.querySelector("[data-minutes]"),i=document.querySelector("[data-seconds]"),x=document.querySelector("#datetime-picker");let r;const o=document.querySelector("[data-start]");o.disabled=!0;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],r<Date.now()&&(C.show({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0),r>Date.now()&&(o.disabled=!1)}};f("#datetime-picker",p);o.addEventListener("click",t=>{const e=setInterval(()=>{o.disabled=!0,x.disabled=!0;const a=r-Date.now(),n=S(a);v(n),c.textContent=n.days,d.textContent=n.hours,u.textContent=n.minutes,i.textContent=n.seconds,a<=0&&(clearInterval(e),c.textContent="00",d.textContent="00",u.textContent="00",i.textContent="00")},1e3)});
//# sourceMappingURL=styles-0b33439c.js.map