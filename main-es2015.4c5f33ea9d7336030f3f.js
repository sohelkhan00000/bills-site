(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,i){e.exports=i("zUnb")},zUnb:function(e,t,i){"use strict";i.r(t);var n=i("fXoL"),l=i("jhN1"),o=i("tyNb"),r=i("3Pt+"),b=i("ofXK");function s(e,t){1&e&&n.Kb(0,"li",48),2&e&&n.Wb("innerHTML",t.$implicit,n.ac)}function c(e,t){if(1&e&&(n.Mb(0,"ul"),n.dc(1,s,1,1,"li",47),n.Lb()),2&e){const e=n.Vb(2);n.zb(1),n.Wb("ngForOf",e.searchResults)}}function a(e,t){if(1&e&&(n.Mb(0,"div",45),n.dc(1,c,2,1,"ul",46),n.Lb()),2&e){const e=n.Vb();n.zb(1),n.Wb("ngIf",e.searchResults.length>0)}}let h=(()=>{class e{constructor(){this.mail=server.siteEmail,this.phone=server.sitePhone,this.serverPath=server.serverPath,this.siteName=server.siteName,this.blogURL=server.siteBlog,this.searchTerm="",this.showResults=!1,this.searchResults=[],this.myScriptElement=document.createElement("script"),this.myScriptElement.src="../assets/js/main-critical.js",document.body.appendChild(this.myScriptElement)}onSearch(){""!=this.searchTerm?(this.searchResults=[`{"Home":"${this.serverPath}"}`,'{"Rent Receipt" : "/rent-receipt"}','{"Fuel Bills" : "/fuel-bills"}','{"about" : "/about"}','{"Contact" : "/contact"}','{"Services" : "/services"}','{"Privacy Policy" : "/privacy"}','{"Terms & Conditions" : "/terms"}','{"Disclaimer" : "/disclaimer"}','{"Cookie Policy" : "/cookie"}',`{"Contact by email" : "mailto:${this.mail}"}`,`{"Contact by call" : "mailto:${this.phone}"}`,`{"Blog" : "${this.blogURL}"}`,`{"Social Site" : "${this.blogURL}"}`].filter(e=>Object.keys(JSON.parse(e)).toString().toLowerCase().includes(this.searchTerm.toLowerCase())),this.searchResults.length>0&&this.searchResults.forEach((e,t,i)=>{let n=JSON.parse(e);var l=`<a href="${Object.values(n)}">${Object.keys(n)}</a>`;this.searchResults[t]=l}),0==this.searchResults.length&&console.log("result is 0"),this.showResults=this.searchResults.length>0):this.searchResults=[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Db({type:e,selectors:[["app-root"]],decls:95,vars:13,consts:[[1,"container","site-page"],[1,"d-md-block","d-none"],[1,"row"],[1,"col-md-9","site-logo"],[1,"mb-0"],["href","#",1,"d-none"],[3,"href"],[1,"col-md-3","social-icons","pt-3","text-md-center","d-none","d-md-block"],["tabindex","100"],[1,"nav-heading",3,"title","href"],["tabindex","100","id","linkmblmenu",1,"nav-mobile"],["tabindex","100","id","nav-links",1,"nav-links"],["onclick","activeMenu(1)","href","/",1,"nav-links-dots"],["onclick","activeMenu(2)","routerLink","/rent-receipt","href","/rent-receipt",1,"nav-links-dots"],["routerLink","/fuel-bills","href","/fuel-bills",1,"nav-links-dots"],["href","/services",1,"nav-links-dots"],["href","/contact",1,"nav-links-dots"],["href","/about",1,"nav-links-dots"],[1,"page-wrapper"],[1,"col-md-9","contant-bar"],[1,"col-md-3","site-bar"],[1,"search-bar"],["for","exampleDataList",1,"form-label"],["type","text","list","datalistOptions","id","exampleDataList","placeholder","Type to search...",1,"form-control",3,"ngModel","ngModelChange","input"],["class","result-box",4,"ngIf"],[1,"side-link-container"],["onclick","activeMenu(2)","routerLink","/rent-receipt","href","/rent-receipt",1,"sidebar-links"],["onclick","activeMenu(3)","routerLink","/fuel-bills","href","/fuel-bills",1,"sidebar-links"],[1,"col-md-6"],["title","Home","href","/"],["title","About Us","href","/about"],["title","Contact Us","href","/contact"],["title","Privacy Policy","href","/privacy"],["title","Terms & Conditions","href","/terms"],["title","Cookie Policy","href","/cookie"],["title","Disclaimer","href","/disclaimer"],[1,"icon","icon-envelope"],["id","footerEmail","title","Email",3,"href"],[1,"icon","icon-phone"],["id","footerPhone","title","Phone",3,"href"],[1,"blog-icon"],["id","footerBlog","title","Blogger","href","https://codecoca.blogspot.com"],[1,"col-md-12"],[1,"text-center"],["title","Free for Online",3,"href"],[1,"result-box"],[4,"ngIf"],[3,"innerHTML",4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(e,t){1&e&&(n.Mb(0,"div",0),n.Mb(1,"header",1),n.Mb(2,"div",2),n.Mb(3,"div",3),n.Mb(4,"h1",4),n.Mb(5,"a",5),n.ec(6,"Generate Receipt"),n.Lb(),n.Mb(7,"a",6),n.ec(8),n.Lb(),n.Lb(),n.Mb(9,"p"),n.ec(10,"Download Rent receipt PDF, Fuel bills PDF, without login and email."),n.Lb(),n.Lb(),n.Kb(11,"div",7),n.Lb(),n.Lb(),n.Mb(12,"nav",8),n.Mb(13,"a",9),n.ec(14),n.Lb(),n.Kb(15,"div",10),n.Mb(16,"div",11),n.Mb(17,"a",12),n.ec(18,"Home"),n.Lb(),n.Mb(19,"a",13),n.ec(20,"Rent Receipt"),n.Lb(),n.Mb(21,"a",14),n.ec(22,"Fuel Bills"),n.Lb(),n.Mb(23,"a",15),n.ec(24,"Services"),n.Lb(),n.Mb(25,"a",16),n.ec(26,"Contact Us"),n.Lb(),n.Mb(27,"a",17),n.ec(28,"About Us"),n.Lb(),n.Lb(),n.Lb(),n.Mb(29,"div",18),n.Mb(30,"div",2),n.Mb(31,"div",19),n.Mb(32,"main"),n.Mb(33,"section"),n.Kb(34,"router-outlet"),n.Lb(),n.Lb(),n.Kb(35,"div"),n.Lb(),n.Mb(36,"div",20),n.Mb(37,"aside"),n.Mb(38,"div",21),n.Mb(39,"h5",22),n.ec(40,"Search:"),n.Lb(),n.Mb(41,"input",23),n.Tb("ngModelChange",(function(e){return t.searchTerm=e}))("input",(function(){return t.onSearch()})),n.Lb(),n.dc(42,a,2,1,"div",24),n.Lb(),n.Mb(43,"div",25),n.Mb(44,"h5"),n.ec(45,"Our Services"),n.Lb(),n.Mb(46,"a",26),n.ec(47,"Rent Receipt"),n.Lb(),n.Mb(48,"a",27),n.ec(49,"Fuel Bills"),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(50,"footer"),n.Mb(51,"div",2),n.Mb(52,"div",28),n.Mb(53,"ul"),n.Mb(54,"li"),n.Mb(55,"a",29),n.ec(56,"Home"),n.Lb(),n.Lb(),n.Mb(57,"li"),n.Mb(58,"a",30),n.ec(59,"About Us"),n.Lb(),n.Lb(),n.Mb(60,"li"),n.Mb(61,"a",31),n.ec(62,"Contact Us"),n.Lb(),n.Lb(),n.Mb(63,"li"),n.Mb(64,"a",32),n.ec(65,"Privacy Policy"),n.Lb(),n.Lb(),n.Mb(66,"li"),n.Mb(67,"a",33),n.ec(68,"Terms & Conditions"),n.Lb(),n.Lb(),n.Mb(69,"li"),n.Mb(70,"a",34),n.ec(71,"Cookie Policy"),n.Lb(),n.Lb(),n.Mb(72,"li"),n.Mb(73,"a",35),n.ec(74,"Disclaimer"),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(75,"div",28),n.Mb(76,"ul"),n.Mb(77,"li"),n.Kb(78,"i",36),n.Mb(79,"a",37),n.ec(80),n.Lb(),n.Lb(),n.Mb(81,"li"),n.Kb(82,"i",38),n.Mb(83,"a",39),n.ec(84),n.Lb(),n.Lb(),n.Mb(85,"li"),n.Mb(86,"span",40),n.ec(87,"B"),n.Lb(),n.Mb(88,"a",41),n.ec(89,"Blogger"),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(90,"div",42),n.Mb(91,"p",43),n.ec(92," Copyright \xa9 2023. Powered by "),n.Mb(93,"a",44),n.ec(94),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb()),2&e&&(n.zb(7),n.Xb("href",t.serverPath,n.bc),n.zb(1),n.fc(t.siteName),n.zb(5),n.Xb("title",t.siteName),n.Xb("href",t.serverPath,n.bc),n.zb(1),n.fc(t.siteName),n.zb(27),n.Wb("ngModel",t.searchTerm),n.zb(1),n.Wb("ngIf",t.showResults),n.zb(37),n.Yb("href","mailto:",t.mail,"",n.bc),n.zb(1),n.fc(t.mail),n.zb(3),n.Yb("href","tel:",t.phone,"",n.bc),n.zb(1),n.fc(t.phone),n.zb(9),n.Xb("href",t.serverPath,n.bc),n.zb(1),n.fc(t.siteName))},directives:[o.a,o.c,r.a,r.c,r.d,b.i,b.h],encapsulation:2}),e})();const d=[{path:"",loadChildren:()=>i.e(8).then(i.bind(null,"ct+p")).then(e=>e.HomeModule)},{path:"rent-receipt",loadChildren:()=>i.e(13).then(i.bind(null,"60q1")).then(e=>e.RentReceiptModule)},{path:"fuel-bills",loadChildren:()=>i.e(7).then(i.bind(null,"S2jg")).then(e=>e.FuelBillsModule)},{path:"contact",loadChildren:()=>i.e(6).then(i.bind(null,"lhKH")).then(e=>e.ContactUsModule)},{path:"about",loadChildren:()=>i.e(5).then(i.bind(null,"00wH")).then(e=>e.AboutUsModule)},{path:"services",loadChildren:()=>i.e(14).then(i.bind(null,"334H")).then(e=>e.ServicesModule)},{path:"cookie",loadChildren:()=>i.e(9).then(i.bind(null,"RYTh")).then(e=>e.CookieModule)},{path:"terms",loadChildren:()=>i.e(12).then(i.bind(null,"LPN9")).then(e=>e.TermsModule)},{path:"privacy",loadChildren:()=>i.e(11).then(i.bind(null,"aVlk")).then(e=>e.PrivacyModule)},{path:"disclaimer",loadChildren:()=>i.e(10).then(i.bind(null,"JsSp")).then(e=>e.DisclaimerModule)}];let u=(()=>{class e{}return e.\u0275mod=n.Hb({type:e,bootstrap:[h]}),e.\u0275inj=n.Gb({factory:function(t){return new(t||e)},providers:[],imports:[[l.a,o.b.forRoot(d),r.b],o.b]}),e})();Object(n.R)(),l.d().bootstrapModule(u).catch(e=>console.error(e))},zn8P:function(e,t){function i(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}i.keys=function(){return[]},i.resolve=i,e.exports=i,i.id="zn8P"}},[[0,0,4]]]);