var driverSalary=()=>{class a{constructor(){this["template-1"]=document.querySelector("app-driver-salary #template-1"),this["template-2"]=document.querySelector("app-driver-salary #template-2"),this.templates=document.querySelectorAll("app-driver-salary [name='templates']"),this["ds-driver-name"]=document.querySelector("app-driver-salary #ds-driver-name"),this["ds-employee-name"]=document.querySelector("app-driver-salary #ds-employee-name"),this["ds-vehical-number"]=document.querySelector("app-driver-salary #ds-vehical-number"),this["ds-salary-amount"]=document.querySelector("app-driver-salary #ds-salary-amount"),this["ds-date"]=document.querySelector("app-driver-salary #ds-date"),this["ds-month"]=document.querySelector("app-driver-salary #ds-month"),this["ds-signature"]=document.querySelector("app-driver-salary #ds-signature"),this["ds-signature-remove"]=document.querySelector("app-driver-salary [aria-label='ds-signature']"),this["ds-stamp"]=document.querySelector("app-driver-salary #ds-stamp"),this.currency=document.querySelector("app-driver-salary [com-fm='currency']"),this["download-pdf"]=document.querySelector("app-driver-salary #download-pdf"),this["spinner-grow"]=document.querySelector("app-driver-salary .spinner-grow"),this["download-text"]=document.querySelector("app-driver-salary .download-text"),this["form-control"]=document.querySelectorAll("app-driver-salary .form-control"),this["ds-modal"]=document.querySelector("app-driver-salary #ds-modal"),this["ds-modal-view"]=document.querySelector("app-driver-salary #ds-modal-view")}}let n={},t={},d={},o=new Date,l,s="template-1",r,c="driver-salary-data.js",e=!1,i=!1,m=!1;{var u=(e,r)=>{e?(document.querySelectorAll("app-driver-salary [data-dynamic]").forEach(e=>{e=e.attributes["data-dynamic"].value;addDynamicHTML?addDynamicHTML(e,dsData[e],!1):saveLogs("error",{id:"25",pageName:""+server.pageName,eventName:"addDynamicHTML",msg:"ad dynamic html is not defined",metaData:'{"server" : '+server.serverPath})}),i=!0,v(s)):saveLogs("error",{id:"25",pageName:""+server.pageName,eventName:"partial load",msg:""+r,metaData:'{"server" : '+server.serverPath})},p=document.querySelectorAll("script");let r=!1;p.forEach(e=>{e.src.replace(/^.*[\\\/]/,"")==c&&(r=!0)}),r||((p=document.createElement("script")).src=server.jsPath+"/partialPage/"+c,p.async=!0,p.onload=()=>{u(!0,"Dynamic data loaded")},p.onerror=()=>{u(!1,"Error occurred while loading dynamic data")},document.body.appendChild(p))}var y=()=>{n["form-control"].forEach(r=>{["keyup","change"].forEach(function(e){r.addEventListener(e,function(){document.querySelectorAll("."+r.id).forEach(e=>{"ds-date"==r.id?e.innerHTML=g(r.value):e.innerHTML=r.value})})})}),n["ds-modal-view"]&&n["ds-modal-view"].addEventListener("click",e=>{h()}),n["ds-modal"]&&(r=new bootstrap.Modal(n["ds-modal"]),window.addEventListener("click",function(e){"modal-body"==e.target.classList[0]&&r.toggle()})),n.templates.forEach(r=>r.addEventListener("click",e=>{n.templates.forEach(e=>{e.id!=r.id&&(d[r.id].classList.remove("d-none"),l=d[r.id],d[e.id].classList.add("d-none"))})})),e=e||!0,i&&!m&&(m=!0,n["ds-stamp"].addEventListener("click",()=>{d["ds-stamp"].forEach(e=>{e.classList.toggle("d-none")})}),n["ds-signature"].addEventListener("change",e=>{var r,a=n["ds-signature"].files[0];a&&(n["ds-signature-remove"].classList.remove("d-none"),(r=new FileReader).readAsDataURL(a),r.addEventListener("load",r=>{d["ds-signature"].forEach(e=>{this.result?e.src=this.result:e.src=r.srcElement.result,e.classList.remove("d-none")})}))}),n["ds-signature-remove"].addEventListener("click",e=>{n["ds-signature"].files[0]&&(n["ds-signature"].value="",d["ds-signature"].forEach(e=>{e.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}),n["ds-signature-remove"].classList.toggle("d-none"))}),n["ds-month"].addEventListener("change",e=>{d["ds-month"].forEach(e=>{e.innerHTML=n["ds-month"].value})}),f(),L(),setCurrencyCall(69))},v=e=>{for(var r in dragScroller("ds-template-wrapper"),d={templates:document.querySelectorAll("app-driver-salary .template-wrapper > .templates"),"modal-body":document.querySelector("app-driver-salary .ds-modal .modal-body")},n=new a)document.querySelector("app-driver-salary p[data-error="+r+"]")&&(t[r]=document.querySelector("app-driver-salary p[data-error="+r+"]")),document.querySelector("[data-tm="+r+"]")&&"template-1"!=r&&"template-2"!=r&&(d[r]=document.querySelectorAll("app-driver-salary  [data-tm="+r+"]")),"template-1"!=r&&"template-2"!=r||(d[r]=document.querySelector("app-driver-salary .template-wrapper > [data-tm="+r+"]")),document.querySelector("[com-tm="+r+"]")&&(d[r]=document.querySelectorAll("app-driver-salary [com-tm="+r+"]"));l=d[e],d.templates.forEach(e=>{e.classList.add("d-none")}),l.classList.remove("d-none"),n[e].checked=!0,i&&(n["ds-date"].value=o.toISOString().substring(0,10),d["ds-date"].forEach(e=>{e.innerHTML=g(o)}),d["ds-month"].forEach(e=>{e.innerHTML=n["ds-month"].options[n["ds-month"].selectedIndex].value}),d["ds-stamp"].forEach(e=>{e.classList.add("d-none")})),y()},h=(v(s),e=>{d["modal-body"].innerHTML="";var r=l.cloneNode(!0);d["modal-body"].appendChild(r),document.querySelector(".modal-body .templates")});function g(e){let r=new Date(e);return r=(r=r.toLocaleDateString("en-GB",{year:"numeric",month:"numeric",day:"numeric"})).replaceAll("/","-")}var f=e=>{document.querySelectorAll(".com-wrapper").forEach(r=>{r.classList.contains("disable")&&(r.querySelector(".com-disable").checked=!0,r.attributes["com-fm"])&&document.querySelectorAll(`[com-tm='${r.attributes["com-fm"].value}']`).forEach(e=>{e.classList.add("d-none")}),r.querySelector(".com-disable").addEventListener("click",e=>{r.classList.toggle("disable"),r.attributes["com-fm"]&&document.querySelectorAll(`[com-tm='${r.attributes["com-fm"].value}']`).forEach(e=>{e.classList.toggle("d-none")})}),r.querySelector(".com-close").addEventListener("click",e=>{r.classList.toggle("close")}),r.querySelector(".com-clear")&&r.querySelector(".com-clear").addEventListener("click",e=>{1!=r.querySelector(".com-disable").checked&&(r.querySelectorAll('.com-body input[type="text"]').forEach(e=>{e.value=""}),r.querySelectorAll(".com-body textarea").forEach(e=>{elA.value=""}),r.querySelectorAll('.com-body input[type="file"]').forEach(e=>{elA.value=""}))})})},L=e=>{var r=document.querySelector('[data-fm="select-currency"]'),a=(r.addEventListener("change",()=>{setCurrencyCall(r.selectedIndex)}),n.currency.querySelectorAll('[name="currency-type"').forEach(e=>{e.addEventListener("click",()=>{setCurrencyCall(r.selectedIndex)})}),[]),t=(r.querySelectorAll("option").forEach((e,r)=>{e={[e.innerHTML]:r};a[r]=e}),document.querySelector('[data-fm="search-currency-box"]')),d=document.querySelector('[data-fm="search-currency"]'),o="",l=[];function s(e){""!=(o=e)?(0<(l=a.filter(e=>{return Object.keys(e).toString().toLowerCase().includes(o.toLowerCase())})).length&&(l.forEach((e,r,a)=>{e=`<button class="d-block" onclick="setCurrencyCall(${Object.values(e)})">${Object.keys(e)}</button>`;l[r]=e}),t.classList.remove("d-none")),l.length,0<l.length&&(t.innerHTML="",l.forEach((e,r)=>{t.innerHTML+=e}))):(t.classList.add("d-none"),l=[])}window.addEventListener("click",function(e){e.target.attributes["data-fm"]&&("search-currency-box"==e.target.attributes["data-fm"].value||"search-currency"==e.target.attributes["data-fm"].value)||t.classList.add("d-none")}),d.addEventListener("keyup",e=>{s(d.value)}),d.addEventListener("focusin",e=>{s(d.value)})};setCurrencyCall=r=>{var a,t=document.querySelector('[data-fm="select-currency"]');t.selectedIndex=r,n.currency.querySelector('[data-fm="currency-code"]').checked?d.currency.forEach(e=>{e.innerHTML=t.options[r].value}):(a=(a=(a=t.options[r].innerHTML).split("-").pop()).split(",",1).pop(),d.currency.forEach(e=>{e.innerHTML=a}))},n["download-pdf"].addEventListener("click",()=>{{var e=(e,r)=>{var a;e&&(n["spinner-grow"].style.display="inline-block",n["download-text"].innerHTML="PDF Generating...",e=l.cloneNode(!0),(a=document.createElement("div")).id="pdf-wrapper",a.setAttribute("class","pdf-wrapper"),a.appendChild(e),html2pdf().set({jsPDF:{format:"a4",orientation:"portrait"},html2canvas:{letterRendering:!0,useCORS:!0,logging:!0,scrollX:0,scrollY:0},margin:[10,0,0,0],padding:0,image:{type:"jpeg",quality:1}}).from(a).toPdf().save("Driver Salary Slip "+server.pdfName).then(e=>{n["spinner-grow"].style.display="none",n["download-text"].innerHTML="Download",saveLogs("download",{id:"25",pageName:""+server.pageName,template:""+l.attributes["data-tm"].value,metaData:""})}).catch(e=>{saveLogs("error",{id:"25",pageName:""+server.pageName,eventName:"PDF Download",msg:"On PDF download button clicked :   "+e,metaData:'{"server" : '+server.serverPath})}))};let a=!0,t=document.getElementsByClassName("validation-message");Object.keys(t).some(function(e){var r;if("block"==t[e].style.display)return r="ErrorAdress"==t[e].id?130:80,r=t[e].getBoundingClientRect().top+window.pageYOffset-r,window.scrollTo({top:r,behavior:"smooth"}),a=!1,t[e].previousElementSibling.focus(),!0}),a?e(!0,"Template ready"):e(!1,"Template not ready")}})};