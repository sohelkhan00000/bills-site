var bookInvoice=()=>{class n{constructor(){this["template-1"]=document.querySelector("book-invoice #template-1"),this["template-2"]=document.querySelector("book-invoice #template-2"),this.templates=document.querySelectorAll("book-invoice [name='templates']"),this["book-author"]=document.querySelector("book-invoice #book-author"),this["bs-name"]=document.querySelector("book-invoice #bs-name"),this["store-address"]=document.querySelector("book-invoice #store-address"),this["name-book"]=document.querySelector("book-invoice #name-book"),this.publisher=document.querySelector("book-invoice #publisher"),this.description=document.querySelector("book-invoice #description"),this.quantity=document.querySelector("book-invoice #quantity"),this["book-price"]=document.querySelector("book-invoice #book-price"),this["customer-name"]=document.querySelector("book-invoice #customer-name"),this["payment-method"]=document.querySelector("book-invoice #payment-method"),this["p-date"]=document.querySelector("book-invoice #p-date"),this["download-pdf"]=document.querySelector("book-invoice #download-pdf"),this["spinner-grow"]=document.querySelector("book-invoice .spinner-grow"),this["download-text"]=document.querySelector("book-invoice .download-text"),this["form-control"]=document.querySelectorAll("book-invoice .form-control"),this["template-view-modal"]=document.querySelector("book-invoice #template-view-modal"),this["book-invoice-view"]=document.querySelector("book-invoice #book-invoice-view")}}let a={},r={},i={},c=new Date,l,t="template-1",o,d="book-invoice-data.js";{var e=(e,o)=>{e&&(document.querySelectorAll("book-invoice [data-dynamic]").forEach(e=>{e=e.attributes["data-dynamic"].value;addDynamicHTML(e,bookInvoiceData[e],!1)}),u(t))},s=document.querySelectorAll("script");let o=!1;s.forEach(e=>{e.src.replace(/^.*[\\\/]/,"")==d&&(o=!0)}),o||((s=document.createElement("script")).src=server.jsPath+"/partialPage/"+d,s.async=!0,s.onload=()=>{e(!0,"Dynamic data loaded")},s.onerror=()=>{e(!1,"Error occurred while loading dynamic data")},document.body.appendChild(s))}var m=()=>{a["form-control"].forEach(n=>{["keyup","change"].forEach(function(e){n.addEventListener(e,function(){document.querySelectorAll("[data-tm="+n.id+"]").forEach(e=>{if("p-date"==n.id)e.innerHTML=y(n.value);else{if("quantity"==n.id||"book-price"==n.id){let e=a.quantity.value,o=a["book-price"].value,t=0;"quantity"==n.id?e=n.value:o=n.value,t=0==e||""==e?o:o*e,i["book-total"].forEach(e=>{e.innerHTML="₹ "+t})}e.innerHTML=n.value}})})})}),a["template-view-modal"].addEventListener("click",e=>{b()}),o=new bootstrap.Modal(a["book-invoice-view"]),window.addEventListener("click",function(e){"modal-body"==e.target.classList[0]&&o.toggle()}),a.templates.forEach(o=>o.addEventListener("click",e=>{a.templates.forEach(e=>{e.id!=o.id&&(i[o.id].classList.remove("d-none"),l=i[o.id],i[e.id].classList.add("d-none"))}),"template-2"==o.id?(document.querySelector('book-invoice [data-wrap="book-author"').classList.add("d-none"),document.querySelector('book-invoice [data-wrap="bs-name"').classList.add("d-none"),document.querySelector('book-invoice [data-wrap="store-address"').classList.add("d-none")):(document.querySelector('book-invoice [data-wrap="book-author"').classList.remove("d-none"),document.querySelector('book-invoice [data-wrap="bs-name"').classList.remove("d-none"),document.querySelector('book-invoice [data-wrap="store-address"').classList.remove("d-none"))}))},u=async e=>{for(var o in dragScroller("book-invoice-template-wrapper"),i={templates:document.querySelectorAll("book-invoice .template-wrapper > .templates"),"modal-body":document.querySelector("book-invoice .modal-body"),"book-total":document.querySelectorAll('book-invoice [data-tm="book-total"]'),"receipt-number":document.querySelectorAll('book-invoice [data-tm="receipt-number"]')},a=new n)document.querySelector("book-invoice p[data-error="+o+"]")&&(r[o]=document.querySelector("book-invoice p[data-error="+o+"]")),document.querySelector("[data-tm="+o+"]")&&"template-1"!=o&&"template-2"!=o&&(i[o]=document.querySelectorAll("book-invoice  [data-tm="+o+"]")),"template-1"!=o&&"template-2"!=o||(i[o]=document.querySelector("book-invoice .template-wrapper > [data-tm="+o+"]"));l=i[e],i.templates.forEach(e=>{e.classList.add("d-none")}),l.classList.remove("d-none"),a[e].checked=!0,a["p-date"].value=c.toISOString().substring(0,10),i["p-date"].forEach(e=>{e.innerHTML=y(c)});var t="R0"+Math.floor(9e3*Math.random()+1e3);i["receipt-number"].forEach(e=>{e.innerHTML=t}),a.quantity.value=0,i.quantity.forEach(e=>{e.innerHTML=0}),a["book-price"].value=0,i["book-price"].forEach(e=>{e.innerHTML=0}),i["book-total"].forEach(e=>{e.innerHTML=0}),m()},p=(u(t),(e,o,t,n)=>{return"Name"==o?""==e?(n(!1,t+" cannot be  empty!"),!1):35<e.length?(n(!1,t+" cannot be more than 35 characters!"),!1):/\d/g.test(e)?(n(!1,t+" cannot contain numbers and space!"),!1):(n(!0,t+" validated successfully!"),!0):"Empty"==o?""==e?(n(!1,t+" cannot be empty!"),!1):(n(!0,t+" validated successfully!"),!0):void 0}),b=e=>{i["modal-body"].innerHTML="";var o=l.cloneNode(!0);i["modal-body"].appendChild(o)};function y(e){let o=new Date(e);return o=(o=o.toLocaleDateString("en-GB",{year:"numeric",month:"numeric",day:"numeric"})).replaceAll("/","-")}a["download-pdf"].addEventListener("click",()=>{{var e=(e,o)=>{e&&(a["spinner-grow"].style.display="inline-block",a["download-text"].innerHTML="PDF Generating...",e=l.cloneNode(!0),html2pdf().set({jsPDF:{format:"a4",orientation:"portrait"},html2canvas:{letterRendering:!0,useCORS:!0,logging:!0,scrollX:0,scrollY:0},margin:[20,20,0,20],padding:0,image:{type:"jpeg",quality:.98}}).from(e).toPdf().save(`Book Invoice by [${server.siteName}]`).then(e=>{a["spinner-grow"].style.display="none",a["download-text"].innerHTML="Download"}).catch(e=>{console.log("PDF Error "+e)}))};let t=!0,n=(p(a["name-book"].value,"Empty","Book name",function(e,o){e?r["name-book"].style.display="none":(r["name-book"].innerHTML=o,r["name-book"].style.display="block")}),p(a.publisher.value,"Empty","Publisher",function(e,o){e?r.publisher.style.display="none":(r.publisher.innerHTML=o,r.publisher.style.display="block")}),p(a["customer-name"].value,"Empty","Customer name",function(e,o){e?r["customer-name"].style.display="none":(r["customer-name"].innerHTML=o,r["customer-name"].style.display="block")}),document.getElementsByClassName("validation-message"));Object.keys(n).some(function(e){var o;if("block"==n[e].style.display)return o="ErrorAdress"==n[e].id?130:80,o=n[e].getBoundingClientRect().top+window.pageYOffset-o,window.scrollTo({top:o,behavior:"smooth"}),t=!1,n[e].previousElementSibling.focus(),!0}),t?e(!0,"Template ready"):e(!1,"Template not ready")}})};