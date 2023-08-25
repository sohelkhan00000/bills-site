var ltaBill=()=>{class a{constructor(){this["template-1"]=document.querySelector("app-lta-bill #template-1"),this["template-2"]=document.querySelector("app-lta-bill #template-2"),this.templates=document.querySelectorAll("app-lta-bill [name='templates']"),this["lta-logo"]=document.querySelectorAll("app-lta-bill [name='lta-logo']"),this["passenger-name"]=document.querySelector("app-lta-bill #passenger-name"),this["no-person"]=document.querySelector("app-lta-bill #no-person"),this.seat=document.querySelector("app-lta-bill #seat"),this["reporting-date"]=document.querySelector("app-lta-bill #reporting-date"),this["departure-time"]=document.querySelector("app-lta-bill #departure-time"),this.location=document.querySelector("app-lta-bill #location"),this.landmark=document.querySelector("app-lta-bill #landmark"),this["drop-date"]=document.querySelector("app-lta-bill #drop-date"),this["drop-time"]=document.querySelector("app-lta-bill #drop-time"),this["drop-address"]=document.querySelector("app-lta-bill #drop-address"),this["travel-type"]=document.querySelector("app-lta-bill #travel-type"),this["travel-name"]=document.querySelector("app-lta-bill #travel-name"),this["ticket-no"]=document.querySelector("app-lta-bill #ticket-no"),this["traveler-address"]=document.querySelector("app-lta-bill #traveler-address"),this["boarding-point-no"]=document.querySelector("app-lta-bill #boarding-point-no"),this["customer-care"]=document.querySelector("app-lta-bill #customer-care"),this["payment-method"]=document.querySelector("app-lta-bill #payment-method"),this.amount=document.querySelector("app-lta-bill #amount"),this.tax=document.querySelector("app-lta-bill #tax"),this["vat-none"]=document.querySelector("app-lta-bill #vat-none"),this["vat-type"]=document.querySelectorAll("app-lta-bill [name='vat-type']"),this["vat-number"]=document.querySelector("app-lta-bill #vat-number"),this["download-pdf"]=document.querySelector("app-lta-bill #download-pdf"),this["spinner-grow"]=document.querySelector("app-lta-bill .spinner-grow"),this["download-text"]=document.querySelector("app-lta-bill .download-text"),this["form-control"]=document.querySelectorAll("app-lta-bill .form-control"),this["lta-bill-modal"]=document.querySelector("app-lta-bill #lta-bill-modal"),this["lta-bill-modal-view"]=document.querySelector("app-lta-bill #lta-bill-modal-view")}}let n={},r={},o={},l=new Date,i,d="template-1",c,s="lta-bill-data.js";{var e=(e,t)=>{e&&(document.querySelectorAll("app-lta-bill [data-dynamic]").forEach(e=>{e=e.attributes["data-dynamic"].value;addDynamicHTML(e,ltaBillData[e],!1)}),m(d))},p=document.querySelectorAll("script");let t=!1;p.forEach(e=>{e.src.replace(/^.*[\\\/]/,"")==s&&(t=!0)}),t||((p=document.createElement("script")).src=server.jsPath+"/partialPage/"+s,p.async=!0,p.onload=()=>{e(!0,"Dynamic data loaded")},p.onerror=()=>{e(!1,"Error occurred while loading dynamic data")},document.body.appendChild(p))}var m=async e=>{for(var t in dragScroller("lta-bill-template-wrapper"),o={templates:document.querySelectorAll("app-lta-bill .template-wrapper > .templates"),"modal-body":document.querySelector("app-lta-bill .modal-body"),"net-amount":document.querySelector("app-lta-bill [data-tm='net-amount']"),"taxable-amount":document.querySelector("app-lta-bill [data-tm='taxable-amount']"),"cancel-charge":document.querySelector("app-lta-bill [data-tm='cancel-charge']")},n=new a)document.querySelector("app-lta-bill p[data-error="+t+"]")&&(r[t]=document.querySelector("app-lta-bill p[data-error="+t+"]")),document.querySelector("[data-tm="+t+"]")&&"template-1"!=t&&"template-2"!=t&&(o[t]=document.querySelectorAll("app-lta-bill  [data-tm="+t+"]")),"template-1"!=t&&"template-2"!=t||(o[t]=document.querySelector("app-lta-bill .template-wrapper > [data-tm="+t+"]"));i=o[e],o.templates.forEach(e=>{e.classList.add("d-none")}),i.classList.remove("d-none"),n[e].checked=!0;try{n["drop-date"].value=l.toISOString().substring(0,10),n["drop-time"].value=l.toISOString().substring(11,16),o["drop-date"].forEach(e=>{e.innerHTML=l.toISOString().substring(0,10)}),o["drop-time"].forEach(e=>{e.innerHTML=l.toISOString().substring(11,16)}),n["reporting-date"].value=l.toISOString().substring(0,10),n["departure-time"].value=l.toISOString().substring(11,16),o["reporting-date"].forEach(e=>{e.innerHTML=l.toISOString().substring(0,10)}),o["departure-time"].forEach(e=>{e.innerHTML=l.toISOString().substring(11,16)}),n["ticket-no"].value="QS7IBW5Y62JGJIIA",o["ticket-no"].forEach(e=>{e.innerHTML="QS7IBW5Y62JGJIIA"}),n["boarding-point-no"].value="080595145",o["boarding-point-no"].forEach(e=>{e.innerHTML="080595145"}),n["customer-care"].value="080792421",o["customer-care"].forEach(e=>{e.innerHTML="080792421"}),n.tax.value="0",o.tax.forEach(e=>{e.innerHTML="0"})}catch(e){}n["form-control"].forEach(t=>{["keyup","change"].forEach(function(e){t.addEventListener(e,function(){document.querySelectorAll("[data-tm="+t.id+"]").forEach(e=>{if("amount"==t.id||"tax"==t.id){let t=n.amount.value,a=""==n.tax.value?0:parseInt(n.tax.value),e=0,l=0;e=t*(100/(100+a)),l=t-e,e=e.toFixed(2),l=l.toFixed(2),o.amount.forEach(e=>{e.innerHTML=t}),o.tax.forEach(e=>{e.innerHTML=a}),o["net-amount"].innerHTML=e,o["taxable-amount"].innerHTML=l,o["cancel-charge"].innerHTML=(t-t*(100/110)).toFixed(2)}else e.innerHTML=t.value})})})}),n["lta-logo"].forEach(e=>e.addEventListener("click",t=>{o["lta-logo"].forEach(e=>{e.src=server.serverPath+"/assets/images/lta-bill/"+t.currentTarget.id+".png"})})),n["vat-type"].forEach(e=>e.addEventListener("click",t=>{"vat-none"==t.currentTarget.id?(o["vat-none"].forEach(e=>{e.classList.add("d-none")}),n["vat-number"].classList.add("d-none")):(n["vat-number"].classList.remove("d-none"),o["vat-none"].forEach(e=>{e.classList.remove("d-none")}),o["vat-type"].forEach(e=>{e.innerHTML=t.target.id.slice(4).toLocaleUpperCase()+" NO: "}),o["vat-number"].forEach(e=>{e.innerHTML=n["vat-number"].value}))}));try{n["lta-bill-modal-view"].addEventListener("click",e=>{u()})}catch(e){}c=new bootstrap.Modal(n["lta-bill-modal"]),window.addEventListener("click",function(e){"modal-body"==e.target.classList[0]&&c.toggle()}),["touchend","ondblclick"].forEach(t=>{o.templates.forEach(e=>{var a,l;"ondblclick"==t?e.ondblclick=()=>{u(),c.toggle()}:"touchend"==t&&(l=0,e.addEventListener(t,()=>{var e=(new Date).getTime(),t=e-l;clearTimeout(a),t<500&&0<t?(u(),c.toggle(),event.preventDefault()):a=setTimeout(function(){clearTimeout(a)},500),l=e}))})}),n.templates.forEach(t=>t.addEventListener("click",e=>{n.templates.forEach(e=>{e.id!=t.id&&(o[t.id].classList.remove("d-none"),i=o[t.id],o[e.id].classList.add("d-none"))})}))},t=(m(d),(e,t,a,l)=>{return"Name"==t?""==e?(l(!1,a+" cannot be  empty!"),!1):35<e.length?(l(!1,a+" cannot be more than 35 characters!"),!1):/\d/g.test(e)?(l(!1,a+" cannot contain numbers and space!"),!1):(l(!0,a+" validated successfully!"),!0):"Empty"==t?""==e?(l(!1,a+" cannot be empty!"),!1):(l(!0,a+" validated successfully!"),!0):void 0}),u=e=>{o["modal-body"].innerHTML="";var t=i.cloneNode(!0),n=(o["modal-body"].appendChild(t),document.querySelector(".modal-body .templates"));["touchend","ondblclick"].forEach(e=>{var a,l;"ondblclick"==e?n.ondblclick=()=>{c.toggle()}:"touchend"==e&&(l=0,n.addEventListener(e,()=>{var e=(new Date).getTime(),t=e-l;clearTimeout(a),t<500&&0<t?(c.toggle(),event.preventDefault()):a=setTimeout(function(){clearTimeout(a)},500),l=e}))})};n["download-pdf"].addEventListener("click",()=>{{var e=(e,t)=>{var a;e&&(n["spinner-grow"].style.display="inline-block",n["download-text"].innerHTML="PDF Generating...",e=i.cloneNode(!0),(a=document.createElement("div")).id="pdf-wrapper",a.setAttribute("class","pdf-wrapper"),a.appendChild(e),html2pdf().set({jsPDF:{format:"a4",orientation:"portrait"},html2canvas:{letterRendering:!0,useCORS:!0,logging:!0,scrollX:0,scrollY:0},margin:[20,20,0,20],padding:0,image:{type:"jpeg",quality:.98}}).from(a).toPdf().save("LTA Receipt "+server.pdfName).then(e=>{n["spinner-grow"].style.display="none",n["download-text"].innerHTML="Download"}).catch(e=>{console.log("PDF Error "+e)}))};let a=!0,l=(t(n["passenger-name"].value,"Empty","Passenger details",function(e,t){e?r["passenger-name"].style.display="none":(r["passenger-name"].innerHTML=t,r["passenger-name"].style.display="block")}),t(n["no-person"].value,"Empty","Number of passenger",function(e,t){e?r["no-person"].style.display="none":(r["no-person"].innerHTML=t,r["no-person"].style.display="block")}),t(n.seat.value,"Empty","Seat number",function(e,t){e?r.seat.style.display="none":(r.seat.innerHTML=t,r.seat.style.display="block")}),t(n.location.value,"Empty","Location",function(e,t){e?r.location.style.display="none":(r.location.innerHTML=t,r.location.style.display="block")}),t(n.landmark.value,"Empty","Landmark",function(e,t){e?r.landmark.style.display="none":(r.landmark.innerHTML=t,r.landmark.style.display="block")}),t(n["drop-address"].value,"Empty","Drop Address",function(e,t){e?r["drop-address"].style.display="none":(r["drop-address"].innerHTML=t,r["drop-address"].style.display="block")}),t(n["traveler-address"].value,"Empty","raveler Address",function(e,t){e?r["traveler-address"].style.display="none":(r["traveler-address"].innerHTML=t,r["traveler-address"].style.display="block")}),t(n["travel-name"].value,"Empty","Travel Name",function(e,t){e?r["travel-name"].style.display="none":(r["travel-name"].innerHTML=t,r["travel-name"].style.display="block")}),t(n.amount.value,"Empty","Location",function(e,t){e?r.amount.style.display="none":(r.amount.innerHTML=t,r.amount.style.display="block")}),document.getElementsByClassName("validation-message"));Object.keys(l).some(function(e){var t;if("block"==l[e].style.display)return t="ErrorAdress"==l[e].id?130:80,t=l[e].getBoundingClientRect().top+window.pageYOffset-t,window.scrollTo({top:t,behavior:"smooth"}),a=!1,l[e].previousElementSibling.focus(),!0}),a?e(!0,"Template ready"):e(!1,"Template not ready")}})};