var jsLoad=(r,e,s,t)=>{let a=!1;var o;document.querySelectorAll("script").forEach(e=>{if(e.src==r)return!(a=!0)}),a?t(!0,"Script file already exist"):((o=document.createElement("script")).src=r,o.defer=e,o.onload=()=>{t(!0,"Script loaded successfuly")},o.onerror=()=>{t(!1,"Error occurred while loading script")},document[s].appendChild(o))},cssLoad=(r,e,s)=>{let t=!1;var a;document.querySelectorAll("link").forEach(e=>{if(e.href==r)return!(t=!0)}),t?s(!0,"Style file already exist"):((a=document.createElement("link")).href=r,a.rel="stylesheet",a.type="text/css",a.as="style",a.onload=()=>{s(!0,"Style loaded successfuly")},a.onerror=()=>{s(!1,"Error occurred while loading style")},document[e].appendChild(a))},loadGA=()=>{jsLoad("https://www.googletagmanager.com/gtag/js?id=G-HXL5BF20G0",!0,"head",(e,r)=>{function s(){dataLayer.push(arguments)}e&&(window.dataLayer=window.dataLayer||[],s("js",new Date),s("config","G-HXL5BF20G0"))})},loadAds=e=>{if("freeforonline.com"==window.location.host){let r="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2437807813389823";var t;let s=!1;document.querySelectorAll("script").forEach(e=>{if(e.src==r)return!(s=!0)}),s?e(!0,"Script file already exist"):((t=document.createElement("script")).src=r,t.async=!0,t.crossOrigin="anonymous",t.onload=()=>{e(!0,"Ads Script loaded successfuly")},t.onerror=()=>{e(!1,"Error occurred while loading script")},document.head.appendChild(t))}},lAll=(loadAds((e,r)=>{}),()=>{"freeforonline.com"==window.location.host&&loadGA(),cssLoad(server.serverPath+"/assets/plugins/bootstrap-5.3.0-alpha1-dist/css/bootstrap.min.css","head",(e,r)=>{e&&cssLoad(server.serverPath+"/assets/style/main"+server.serverStyle,"head",(e,r)=>{e&&("/fuel-bills"==server.serverPage?cssLoad(server.serverPath+"/assets/style/fuel-receipt"+server.serverStyle,"head",(e,r)=>{}):"/"!=server.serverPage&&"/rent-receipt"!=server.serverPage||cssLoad(server.serverPath+"/assets/style/generate-receipt"+server.serverStyle,"head",(e,r)=>{}))})}),jsLoad("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",!0,"body",(e,r)=>{e&&jsLoad(server.serverPath+"/assets/js/main-page"+server.serverScript,!0,"body",(e,r)=>{e&&("/fuel-bills"==server.serverPage?jsLoad(server.serverPath+"/assets/js/fuel-receipt"+server.serverScript,!0,"body",(e,r)=>{}):"/"==server.serverPage||"/rent-receipt"==server.serverPage?jsLoad(server.serverPath+"/assets/js/generate-receipt"+server.serverScript,!0,"body",(e,r)=>{}):"/contact"==server.serverPage?jsLoad(server.serverPath+"/assets/js/contact-us"+server.serverScript,!0,"body",(e,r)=>{}):"/about"==server.serverPage&&jsLoad(server.serverPath+"/assets/js/about-us"+server.serverScript,!0,"body",(e,r)=>{}))})})}),REle=(r,e,s)=>{document.querySelectorAll([e]).forEach(e=>{if(e.href==r)return e.remove(),s(!0,"file removed"),!1;s(!1,"file not found")})},setSite=e=>{let r=document.getElementById("nav-links");document.getElementById("linkmblmenu").addEventListener("click",()=>{r.classList.toggle("d-block")})},activeMenu=()=>{};["focus","scroll","mousemove","touchstart","click"].forEach(e=>{document.addEventListener(e,e=>{server.serverPage=window.location.pathname,lAll()})}),window.addEventListener("load",e=>{setSite()},{once:!0});