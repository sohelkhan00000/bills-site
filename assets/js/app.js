var app=()=>{let r="app-data.js";{var e=(e,t)=>{if(e){document.querySelectorAll("footer [data-dynamic]").forEach(e=>{e=e.attributes["data-dynamic"].value;addDynamicHTML(e,globalData.appData[e],!1)});{let t=document.querySelector("#su-popover"),e=document.querySelector("#su-open"),r=document.querySelector("#su-close");e.addEventListener("click",()=>{t.style.display="block"}),r.addEventListener("click",()=>{t.style.display="none"}),window.addEventListener("click",function(e){"su-popover"!=e.target.id&&"su-wrapper"!=e.target.id&&"su-open"!=e.target.id&&(t.style.display="none")})}}},l=document.querySelectorAll("script");let t=!1;l.forEach(e=>{e.src.replace(/^.*[\\\/]/,"")==r&&(t=!0)}),t||((l=document.createElement("script")).src=server.jsPath+"/partialPage/"+r,l.async=!0,l.onload=()=>{e(!0,"Dynamic data loaded")},l.onerror=()=>{e(!1,"Error occurred while loading dynamic data")},document.body.appendChild(l))}var o=document.querySelector("#result-box"),t=document.querySelector("#sb-search"),a="",i=[];function s(e){a=e;e=[`{"Home":"${server.serverPath}"}`,'{"Rent Receipt" : "/tools/rent-receipt"}','{"Fuel Bill" : "/fuel-bills"}','{"Generate Petrol Bill" : "/tools/petrol-bill"}','{"CNG Bill" : "/fuel-bills"}','{"Diesel Bill" : "/fuel-bills"}','{"about" : "/about"}','{"Contact" : "/contact"}','{"Services" : "/services"}','{"Privacy Policy" : "/privacy"}','{"Terms & Conditions" : "/terms"}','{"Disclaimer" : "/disclaimer"}','{"Cookie Policy" : "/cookie"}',`{"Contact by email ${server.siteEmail}" : "mailto:${server.siteEmail}"}`,`{"Contact by call ${server.sitePhone}" : "tel:${server.sitePhone}"}`,`{"Phone ${server.sitePhone}" : "tel:${server.sitePhone}"}`,`{"Blog" : "${server.blogURL}"}`,`{"Social Site" : "${server.siteBlog}"}`,'{"Driver Salary Slip" : "/tools/driver-salary"}','{"Driver Salary Receipt" : "/tools/driver-salary"}','{"LTA Receipt" : "/tools/lta/red-bus"}','{"Internet Invoice" : "/tools/internet-invoice/airtel"}','{"Book Invoice" : "/tools/book-invoice/one"}','{"Daily Helper Bill" : "/tools/helper-bill"}','{"Restaurant Bill" : "/tools/restaurant-bill"}','{"Restaurant Invoice" : "/tools/restaurant-bill"}'];""!=a?(0<(i=e.filter(e=>{return Object.keys(JSON.parse(e)).toString().toLowerCase().includes(a.toLowerCase())})).length&&(i.forEach((e,t,r)=>{e=JSON.parse(e),e=`<a class="d-block p-1" href="${Object.values(e)}">${Object.keys(e)}</a>`;i[t]=e}),o.classList.remove("d-none")),i.length,0<i.length&&(o.innerHTML="",i.forEach((e,t)=>{o.innerHTML+=e}))):(o.classList.add("d-none"),i=[])}window.addEventListener("click",function(e){"result-box"!=e.target.id&&"sb-search"!=e.target.id&&o.classList.add("d-none")}),t.addEventListener("keyup",e=>{s(t.value)}),t.addEventListener("focusin",e=>{s(t.value)})};