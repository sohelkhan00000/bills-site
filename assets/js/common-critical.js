var globalData={appData:""},jsLoad=(r,e,s,t)=>{let a=!1;var o;document.querySelectorAll("script").forEach(e=>{if(e.src==r)return!(a=!0)}),a?t(!0,"Script file already exist"):((o=document.createElement("script")).src=r,o.defer=e,o.onload=()=>{t(!0,"Script loaded successfuly")},o.onerror=()=>{t(!1,"Error occurred while loading script")},document[s].appendChild(o))},cssLoad=(r,e,s)=>{let t=!1;var a;document.querySelectorAll("link").forEach(e=>{if(e.href==r)return!(t=!0)}),t?s(!0,"Style file already exist"):((a=document.createElement("link")).href=r,a.rel="stylesheet",a.type="text/css",a.as="style",a.onload=()=>{s(!0,"Style loaded successfuly")},a.onerror=()=>{s(!1,"Error occurred while loading style")},document[e].appendChild(a))},loadGA=()=>{jsLoad("https://www.googletagmanager.com/gtag/js?id=G-HXL5BF20G0",!0,"head",(e,r)=>{function s(){dataLayer.push(arguments)}e&&(window.dataLayer=window.dataLayer||[],s("js",new Date),s("config","G-HXL5BF20G0"))})},lAll=()=>{"freeforonline.com"==window.location.host&&loadGA(),cssLoad(server.serverPath+"/assets/plugins/bootstrap-5.3.0-alpha1-dist/css/bootstrap.min.css","head",(e,r)=>{e&&(cssLoad("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css","head",(e,r)=>{}),cssLoad(server.serverPath+"/assets/style/main"+server.serverStyle,"head",(e,r)=>{e&&("/fuel-bills"==server.serverPage||"/tools/petrol-bill"==server.serverPage?cssLoad(server.serverPath+"/assets/style/fuel-receipt"+server.serverStyle,"head",(e,r)=>{}):"/tools/rent-receipt"==server.serverPage||"/rent-receipt"==server.serverPage?cssLoad(server.serverPath+"/assets/style/rent-receipt"+server.serverStyle,"head",(e,r)=>{}):"/tools/driver-salary"==server.serverPage?cssLoad(server.cssPath+"/driver-salary.css","head",(e,r)=>{}):"/tools/lta/red-bus"==server.serverPage?cssLoad(server.cssPath+"/lta-bill.css","head",(e,r)=>{}):"/tools/internet-invoice/airtel"==server.serverPage?cssLoad(server.cssPath+"/internet-invoice.css","head",(e,r)=>{}):"/tester"==server.serverPage&&cssLoad(server.cssPath+"/tester.css","head",(e,r)=>{}))}))}),jsLoad(server.serverPath+"/assets/plugins/bootstrap-5.3.0-alpha1-dist/js/bootstrap.min.js",!0,"body",(e,r)=>{}),jsLoad("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",!0,"body",(e,r)=>{e&&jsLoad(server.jsPath+"/common.js",!0,"body",(e,r)=>{jsLoad(server.jsPath+"/app.js",!0,"body",(e,r)=>{e&&("/"==server.serverPage?jsLoad(server.jsPath+"/home.js",!0,"body",(e,r)=>{}):"/fuel-bills"==server.serverPage||"/tools/petrol-bill"==server.serverPage?jsLoad(server.serverPath+"/assets/js/fuel-receipt"+server.serverScript,!0,"body",(e,r)=>{}):"/tools/rent-receipt"==server.serverPage||"/rent-receipt"==server.serverPage?jsLoad(server.serverPath+"/assets/js/rent-receipt"+server.serverScript,!0,"body",(e,r)=>{}):"/contact"==server.serverPage?jsLoad(server.serverPath+"/assets/js/contact-us"+server.serverScript,!0,"body",(e,r)=>{}):"/about"==server.serverPage?jsLoad(server.serverPath+"/assets/js/about-us"+server.serverScript,!0,"body",(e,r)=>{}):"/tools/driver-salary"==server.serverPage?jsLoad(server.jsPath+"/driver-salary.js",!0,"body",(e,r)=>{}):"/tools/lta/red-bus"==server.serverPage?jsLoad(server.jsPath+"/lta-bill.js",!0,"body",(e,r)=>{}):"/tools/internet-invoice/airtel"==server.serverPage?jsLoad(server.jsPath+"/internet-invoice.js",!0,"body",(e,r)=>{}):"/tester"==server.serverPage&&jsLoad(server.jsPath+"/tester.js",!0,"body",(e,r)=>{}))})})})},REle=(r,e,s)=>{document.querySelectorAll([e]).forEach(e=>{if(e.href==r)return e.remove(),s(!0,"file removed"),!1;s(!1,"file not found")})},setSite=e=>{let r=document.getElementById("nav-links");document.getElementById("linkmblmenu").addEventListener("click",()=>{r.classList.toggle("d-block")}),r.addEventListener("click",e=>{r.classList.toggle("d-block")}),window.addEventListener("click",function(e){"nav-links-dots"!=e.target.classList[0]&&"nav-mobile"!=e.target.classList[0]&&r.classList.remove("d-block")})},activeMenu=e=>{document.querySelector(`[data-nav="${e}"]`)&&document.querySelector(`[data-nav="${e}"]`).classList.add("active")};["focus","scroll","mousemove","touchstart","click"].forEach(e=>{document.addEventListener(e,e=>{server.serverPage=window.location.pathname,lAll()})}),window.addEventListener("load",e=>{"freeforonline.com"==window.location.host&&loadGA(),setSite()},{once:!0});