var fuelBills=()=>{class a{constructor(){this["template-1"]=document.querySelector("app-fuel-bill-main #template-1"),this["template-2"]=document.querySelector("app-fuel-bill-main #template-2"),this.templates=document.querySelectorAll("app-fuel-bill-main [name='templates']"),this["fs-logo"]=document.querySelectorAll("app-fuel-bill-main [name='fs-logo']"),this["download-fuel-bills"]=document.querySelector("app-fuel-bill-main #download-fuel-bills"),this["form-control"]=document.querySelectorAll("app-fuel-bill-main .form-control"),this["fs-date"]=document.querySelector("app-fuel-bill-main #fs-date"),this["fs-time"]=document.querySelector("app-fuel-bill-main #fs-time"),this["vat-none"]=document.querySelector("app-fuel-bill-main #vat-none"),this["vat-type"]=document.querySelectorAll("app-fuel-bill-main [name='vat-type']"),this["vat-number"]=document.querySelector("app-fuel-bill-main #vat-number"),this["fs-station-name"]=document.querySelector("app-fuel-bill-main #fs-station-name"),this["fs-address"]=document.querySelector("app-fuel-bill-main #fs-address"),this["fs-fuel-rate"]=document.querySelector("app-fuel-bill-main #fs-fuel-rate"),this["fs-amount"]=document.querySelector("app-fuel-bill-main #fs-amount"),this["u-name"]=document.querySelector("app-fuel-bill-main #u-name"),this["u-vechicle-number"]=document.querySelector("app-fuel-bill-main #u-vechicle-number"),this["u-vehicle-type"]=document.querySelector("app-fuel-bill-main #u-vehicle-type"),this["u-payment-type"]=document.querySelector("app-fuel-bill-main #u-payment-type"),this["fs-receipt-number"]=document.querySelector("app-fuel-bill-main #fs-receipt-number"),this["spinner-grow"]=document.querySelector("app-fuel-bill-main .spinner-grow"),this["download-text"]=document.querySelector("app-fuel-bill-main .download-text"),this["select-template"]=document.querySelector("app-fuel-bill-main .select-template"),this["bill-container"]=document.querySelectorAll("app-fuel-bill-main .bill-container")}}let r={},o={},i={},s=new Date,c;var l=e=>{for(var t in i={"tele-number":document.querySelectorAll(".tele-number"),"vat-type":document.querySelectorAll(".vat-type"),templates:document.querySelectorAll(".templates")},r=new a)document.querySelector("p[data-error="+t+"]")&&(o[t]=document.querySelector("p[data-error="+t+"]")),document.querySelector("[data-tm="+t+"]")&&"template-1"!=t&&"template-2"!=t&&(i[t]=document.querySelectorAll("[data-tm="+t+"]")),"template-1"!=t&&"template-2"!=t||(i[t]=document.querySelector("[data-tm="+t+"]"));c=i[e],i.templates.forEach(e=>{e.classList.add("d-none")}),c.classList.remove("d-none"),r[e].checked=!0,r["fs-station-name"].value="Bharat Petroleum",i["fs-station-name"].forEach(e=>{e.innerHTML="Bharat Petroleum"}),r["fs-date"].value=s.toISOString().substring(0,10),r["fs-time"].value=s.toISOString().substring(11,16),i["fs-date"].forEach(e=>{e.innerHTML=s.toISOString().substring(0,10)}),i["fs-time"].forEach(e=>{e.innerHTML=s.toISOString().substring(11,16)});let l=Math.floor(1e3+9e3*Math.random()),n=(i["fs-receipt-number"].forEach(e=>{e.innerHTML=l}),r["fs-receipt-number"].value=l,Math.floor(1e6+9e6*Math.random()));i["tele-number"].forEach(e=>{e.innerHTML=n}),i["u-vehicle-type"].forEach(e=>{e.innerHTML=r["u-vehicle-type"].options[r["u-vehicle-type"].selectedIndex].value}),i["u-payment-type"].forEach(e=>{e.innerHTML=r["u-payment-type"].options[r["u-payment-type"].selectedIndex].value})},t=(l("template-2"),r["fs-logo"].forEach(e=>e.addEventListener("click",t=>{const l=t.currentTarget.id.slice(10).replace("-"," ").split(" ");for(let e=0;e<l.length;e++)l[e]=l[e][0].toUpperCase()+l[e].substr(1);r["fs-station-name"].value=l.join(" "),i["fs-station-name"].forEach(e=>{e.innerHTML=l.join(" ")}),i["fs-logo"].forEach(e=>{e.src="https://sohelkhan00000.github.io/cdn-generate-reciept/assets/images/bill/"+t.currentTarget.id+".webp"})})),r["vat-type"].forEach(e=>e.addEventListener("click",t=>{"vat-none"==t.currentTarget.id?(i["vat-none"].forEach(e=>{e.classList.add("d-none")}),r["vat-number"].classList.add("d-none")):(r["vat-number"].classList.remove("d-none"),i["vat-none"].forEach(e=>{e.classList.remove("d-none")}),i["vat-type"].forEach(e=>{e.innerHTML=t.target.id.slice(4).toLocaleUpperCase()+" NO: "}),i["vat-number"].forEach(e=>{e.innerHTML=r["vat-number"].value}))})),r["form-control"].forEach(function(t){["keyup","change"].forEach(function(e){t.addEventListener(e,function(){document.querySelectorAll("."+t.id).forEach(e=>{e.innerHTML=t.value})})})}),r.templates.forEach(t=>t.addEventListener("click",e=>{n((e,t)=>{e?(l("template-1"),r["form-control"].forEach(t=>{document.querySelectorAll("."+t.id).forEach(e=>{e.innerHTML=t.value})})):console.log(t)}),r.templates.forEach(e=>{e.id!=t.id&&(i[t.id].classList.remove("d-none"),c=i[t.id],i[e.id].classList.add("d-none"))})})),(e,t,l,n)=>{return"Name"==t?""==e?(n(!1,l+" cannot be  empty!"),!1):35<e.length?(n(!1,l+" cannot be more than 35 characters!"),!1):/\d/g.test(e)?(n(!1,l+" cannot contain numbers and space!"),!1):(n(!0,l+" validated successfully!"),!0):"Empty"==t?""==e?(n(!1,l+" cannot be empty!"),!1):(n(!0,l+" validated successfully!"),!0):void 0}),n=e=>{var t=document.querySelectorAll("script");let l=!1;t.forEach(e=>{"partial-fuel-receipt.js"==e.src.replace(/^.*[\\\/]/,"")&&(l=!0)}),l||((t=document.createElement("script")).src=server.serverPath+"/assets/js/partialPage/partial-fuel-receipt"+server.serverScript,t.async=!0,t.onload=()=>{i["template-1"].innerHTML=template.code,e(!0,"Script loaded successfuly")},t.onerror=()=>{e(!1,"Error occurred while loading script")},document.body.appendChild(t))};r["download-fuel-bills"].addEventListener("click",()=>{{var e=(e,t)=>{e&&(r["spinner-grow"].style.display="inline-block",r["download-text"].innerHTML="PDF Generating...",html2pdf().set({jsPDF:{format:"a4",orientation:"portrait"},html2canvas:{letterRendering:!0,useCORS:!0,logging:!0,scrollX:0,scrollY:0},margin:0,image:{type:"jpeg",quality:1.1}}).from(c).toPdf().save("Fuel bill by Generate Receipt").then(e=>{r["spinner-grow"].style.display="none",r["download-text"].innerHTML="Download"}).catch(e=>{console.log("PDF Error "+e)}))};let l=!0,n=(t(r["fs-station-name"].value,"Empty","Station name",function(e,t){e?o["fs-station-name"].style.display="none":(o["fs-station-name"].innerHTML=t,o["fs-station-name"].style.display="block")}),t(r["fs-address"].value,"Empty","Address",function(e,t){e?o["fs-address"].style.display="none":(o["fs-address"].innerHTML=t,o["fs-address"].style.display="block")}),t(r["fs-fuel-rate"].value,"Empty","Fuel rate",function(e,t){e?o["fs-fuel-rate"].style.display="none":(o["fs-fuel-rate"].innerHTML=t,o["fs-fuel-rate"].style.display="block")}),t(r["fs-amount"].value,"Empty","Amount",function(e,t){e?o["fs-amount"].style.display="none":(o["fs-amount"].innerHTML=t,o["fs-amount"].style.display="block")}),t(r["u-name"].value,"Name","Costomer name",function(e,t){e?o["u-name"].style.display="none":(o["u-name"].innerHTML=t,o["u-name"].style.display="block")}),t(r["u-vechicle-number"].value,"Empty","Vechical number",function(e,t){e?o["u-vechicle-number"].style.display="none":(o["u-vechicle-number"].innerHTML=t,o["u-vechicle-number"].style.display="block")}),document.getElementsByClassName("validation-message"));Object.keys(n).some(function(e){var t;if("block"==n[e].style.display)return t="ErrorAdress"==n[e].id?130:80,t=n[e].getBoundingClientRect().top+window.pageYOffset-t,window.scrollTo({top:t,behavior:"smooth"}),l=!1,n[e].previousElementSibling.focus(),!0}),l?e(!0,"Template ready"):e(!1,"Template not ready")}})};