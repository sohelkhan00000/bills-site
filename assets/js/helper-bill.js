function helperBill(){class t{constructor(){this["template-1"]=document.querySelector("helper-bill #template-1"),this["template-2"]=document.querySelector("helper-bill #template-2"),this["template-3"]=document.querySelector("helper-bill #template-3"),this.templates=document.querySelectorAll("helper-bill [name='templates']"),this["helper-name"]=document.querySelector("helper-bill #helper-name"),this["working-as"]=document.querySelector("helper-bill #working-as"),this["employee-name"]=document.querySelector("helper-bill #employee-name"),this.salary=document.querySelector("helper-bill #salary"),this["salary-date"]=document.querySelector("helper-bill #salary-date"),this["salary-month"]=document.querySelector("helper-bill #salary-month"),this.signature=document.querySelector("helper-bill #signature"),this["signature-remove"]=document.querySelector("helper-bill [aria-label='signature']"),this["revenue-stamp"]=document.querySelector("helper-bill #revenue-stamp"),this["download-pdf"]=document.querySelector("helper-bill #download-pdf"),this["spinner-grow"]=document.querySelector("helper-bill .spinner-grow"),this["download-text"]=document.querySelector("helper-bill .download-text"),this["form-control"]=document.querySelectorAll("helper-bill .form-control"),this["modal-helper"]=document.querySelector("helper-bill #modal-helper"),this["modal-btn"]=document.querySelector("helper-bill #modal-btn")}}let a={},n={},r={},o=new Date,s,i="template-1",l,d="helper-bill-data.js";{var e=(e,l)=>{e&&(document.querySelectorAll("helper-bill [data-dynamic]").forEach(e=>{e=e.attributes["data-dynamic"].value;addDynamicHTML(e,helperBillData[e],!1)}),p(i))},c=document.querySelectorAll("script");let l=!1;c.forEach(e=>{e.src.replace(/^.*[\\\/]/,"")==""+d&&(l=!0)}),l||((c=document.createElement("script")).src=server.jsPath+"/partialPage/"+d,c.async=!0,c.onload=()=>{e(!0,"Dynamic data loaded")},c.onerror=()=>{e(!1,"Error occurred while loading dynamic data")},document.body.appendChild(c))}var m=()=>{document.querySelector(".loader-wrap").classList.add("d-none"),a["form-control"].forEach(l=>{["keyup","change"].forEach(function(e){l.addEventListener(e,function(){document.querySelectorAll("[data-tm="+l.id+"]").forEach(e=>{"salary-date"==l.id?e.innerHTML=h(l.value):e.innerHTML=l.value})})})}),a["revenue-stamp"].addEventListener("click",function(){a["revenue-stamp"].checked?document.querySelectorAll("helper-bill [data-wrap='revenue-stamp']").forEach(e=>{e.style.display="block"}):document.querySelectorAll("helper-bill [data-wrap='revenue-stamp']").forEach(e=>{e.style.display="none"})}),a.signature.addEventListener("change",e=>{var l,t=a.signature.files[0];t&&(a["signature-remove"].classList.remove("d-none"),(l=new FileReader).readAsDataURL(t),l.addEventListener("load",l=>{r.signature.forEach(e=>{this.result?e.src=this.result:e.src=l.srcElement.result,e.classList.remove("d-none")})}))}),a["signature-remove"].addEventListener("click",e=>{a.signature.files[0]&&(a.signature.value="",r.signature.forEach(e=>{e.classList.add("d-none")}),a["signature-remove"].classList.toggle("d-none"))}),a["modal-btn"].addEventListener("click",e=>{y()}),l=new bootstrap.Modal(a["modal-helper"]),window.addEventListener("click",function(e){"modal-body"==e.target.classList[0]&&l.toggle()}),a.templates.forEach(l=>l.addEventListener("click",e=>{a.templates.forEach(e=>{e.id!=l.id&&(r[l.id].classList.remove("d-none"),s=r[l.id],r[e.id].classList.add("d-none"))})}))},p=async e=>{for(var l in dragScroller("helper-template-wrapper"),r={templates:document.querySelectorAll("helper-bill .template-wrapper > .templates"),"modal-body":document.querySelector("helper-bill .modal-body")},a=new t)document.querySelector("helper-bill p[data-error="+l+"]")&&(n[l]=document.querySelector("helper-bill p[data-error="+l+"]")),document.querySelector("[data-tm="+l+"]")&&"template-1"!=l&&"template-2"!=l&&"template-3"!=l&&(r[l]=document.querySelectorAll("helper-bill  [data-tm="+l+"]")),"template-1"!=l&&"template-2"!=l&&"template-3"!=l||(r[l]=document.querySelector("helper-bill .template-wrapper > [data-tm="+l+"]"));s=r[e],r.templates.forEach(e=>{e.classList.add("d-none")}),s.classList.remove("d-none"),a[e].checked=!0,a["salary-date"].value=o.toISOString().substring(0,10),r["salary-date"].forEach(e=>{e.innerHTML=h(o)}),a["revenue-stamp"].checked=!0;e=new Date;a["salary-month"].selectedIndex=e.getMonth(),r["salary-month"].forEach(e=>{e.innerHTML=a["salary-month"].value}),m()},u=(p(i),(e,l,t,r)=>{return"Name"==l?""==e?(r(!1,t+" cannot be  empty!"),!1):35<e.length?(r(!1,t+" cannot be more than 35 characters!"),!1):/\d/g.test(e)?(r(!1,t+" cannot contain numbers and space!"),!1):(r(!0,t+" validated successfully!"),!0):"Empty"==l?""==e?(r(!1,t+" cannot be empty!"),!1):(r(!0,t+" validated successfully!"),!0):void 0}),y=e=>{r["modal-body"].innerHTML="";var l=s.cloneNode(!0);r["modal-body"].appendChild(l)};function h(e){let l=new Date(e);return l=(l=l.toLocaleDateString("en-GB",{year:"numeric",month:"numeric",day:"numeric"})).replaceAll("/","-")}a["download-pdf"].addEventListener("click",()=>{{var e=(e,l)=>{e&&(a["spinner-grow"].style.display="inline-block",a["download-text"].innerHTML="PDF Generating...",e=s.cloneNode(!0),html2pdf().set({jsPDF:{format:"a4",orientation:"portrait"},html2canvas:{letterRendering:!0,useCORS:!0,logging:!0,scrollX:0,scrollY:0},margin:[0,20,0,20],padding:0,image:{type:"jpeg",quality:.98}}).from(e).toPdf().save("Helper Bill "+server.pdfName).then(e=>{a["spinner-grow"].style.display="none",a["download-text"].innerHTML="Download"}).catch(e=>{console.log("PDF Error "+e)}))};let t=!0,r=(u(a["helper-name"].value,"Empty","Helper name",function(e,l){e?n["helper-name"].style.display="none":(n["helper-name"].innerHTML=l,n["helper-name"].style.display="block")}),u(a["working-as"].value,"Empty","Working details",function(e,l){e?n["working-as"].style.display="none":(n["working-as"].innerHTML=l,n["working-as"].style.display="block")}),u(a["employee-name"].value,"Empty","Employee name",function(e,l){e?n["employee-name"].style.display="none":(n["employee-name"].innerHTML=l,n["employee-name"].style.display="block")}),u(a.salary.value,"Empty","Salary amount",function(e,l){e?n.salary.style.display="none":(n.salary.innerHTML=l,n.salary.style.display="block")}),document.getElementsByClassName("validation-message"));Object.keys(r).some(function(e){var l;if("block"==r[e].style.display)return l="ErrorAdress"==r[e].id?130:80,l=r[e].getBoundingClientRect().top+window.pageYOffset-l,window.scrollTo({top:l,behavior:"smooth"}),t=!1,r[e].previousElementSibling.focus(),!0}),t?e(!0,"Template ready"):e(!1,"Template not ready")}})}(()=>{let e=setInterval(()=>{isSiteReady?(clearInterval(e),helperBill()):document.querySelector(".loader-wrap")&&document.querySelector(".loader-wrap").classList.remove("d-none")},100)})();