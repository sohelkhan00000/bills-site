"use strict";(self.webpackChunkbills_site=self.webpackChunkbills_site||[]).push([[680],{1680:(g,p,n)=>{n.r(p),n.d(p,{FuelBillsModule:()=>f});var s=n(6814),d=n(6538),r=n(553),e=n(4946),m=n(6593);const Z=[{path:"",component:(()=>{class t{constructor(l,a){this.title=l,this.meta=a,this.siteEmail=r.N.siteEmail,this.sitePhone=r.N.sitePhone,this.serverPath=r.N.serverPath,this.siteName=r.N.siteName,this.allJSLoad={mainFunction:!1,activeMenu:!1}}onEvent(l){this.jsLoad()}onWindowLoad(l){this.activateMenu()}ngOnInit(){this.dynamicData(),this.jsLoad()}jsLoad(){!this.allJSLoad.mainFunction&&"function"==typeof fuelBills&&(fuelBills(),this.allJSLoad.mainFunction=!0)}activateMenu(){!this.allJSLoad.activeMenu&&"function"==typeof activeMenu&&(activeMenu("fuel-bill"),this.allJSLoad.activeMenu=!0)}dynamicData(){this.title.setTitle("Generate Fuel Bill Free"),this.meta.updateTag({content:"free fuel bills, free petrol bills, free diesel bills, free cng bills"},"name='keywords'"),this.meta.updateTag({content:"Free download fuel bills PDF without login and email."},"name='description'")}}return t.\u0275fac=function(l){return new(l||t)(e.Y36(m.Dx),e.Y36(m.h_))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-fuel-bill-main"]],hostBindings:function(l,a){1&l&&e.NdJ("scroll",function(o){return a.onEvent(o)},!1,e.Jf7)("click",function(o){return a.onEvent(o)})("mousemove",function(o){return a.onEvent(o)})("focus",function(o){return a.onEvent(o)})("load",function(o){return a.onWindowLoad(o)},!1,e.Jf7)},decls:244,vars:1,consts:[[1,"d-none"],[1,"site-title"],["id","fuel-bill"],[1,"row"],[1,"col-md-6"],[1,"col-md-12","mt-3"],[1,"form-label","fw-bold"],[1,"col-6"],[1,"form-check"],["checked","","id","pump-logo-bharat-petroleum","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-bharat-petroleum",1,"form-check-label"],["id","pump-logo-indian-oil","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-indian-oil",1,"form-check-label"],["id","pump-logo-hp","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-hp",1,"form-check-label"],["id","pump-logo-essar-oil","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-essar-oil",1,"form-check-label"],[1,"col-md-12","mt-4"],["for","fs-station-name",1,"form-label"],["id","fs-station-name","type","text",1,"form-control"],["data-error","fs-station-name",1,"validation-message"],["for","fs-address",1,"form-label"],["id","fs-address","rows","3",1,"form-control"],["data-error","fs-address",1,"validation-message"],[1,"col-lg-6","col-md-12","mt-3"],["for","fs-fuel-rate",1,"form-label"],["id","fs-fuel-rate","type","number",1,"form-control"],["data-error","fs-fuel-rate",1,"validation-message"],["for","fs-amount",1,"form-label"],["id","fs-amount","type","number",1,"form-control"],["data-error","fs-amount","id","ErrorAmount",1,"validation-message"],["for","fs-date",1,"form-label"],["id","fs-date","placeholder","","type","date",1,"form-control"],["data-error","fs-date",1,"validation-message"],["for","fs-time",1,"form-label"],["id","fs-time","placeholder","","type","time",1,"form-control"],["data-error","fs-time",1,"validation-message"],["for","u-name",1,"form-label"],["id","u-name","type","text",1,"form-control"],["data-error","u-name",1,"validation-message"],["for","u-vechicle-number",1,"form-label"],["id","u-vechicle-number","type","text",1,"form-control"],["data-error","u-vechicle-number",1,"validation-message"],["for","u-vehicle-type",1,"form-label"],["id","u-vehicle-type",1,"form-control"],["data-error","u-vehicle-type",1,"validation-message"],["for","u-payment-type",1,"form-label"],["id","u-payment-type",1,"form-control"],["data-error","u-payment-type",1,"validation-message"],["for","fs-receipt-number",1,"form-label"],["id","fs-receipt-number","type","text",1,"form-control"],["data-error","fs-receipt-number",1,"validation-message"],[1,"col-md-3","mt-3","gst-wrapper"],["checked","","id","vat-none","name","vat-type","type","radio",1,"form-check-input"],["for","vat-none",1,"form-check-label"],[1,"col-4","col-md-3","mt-3","p-md-0","gst-wrapper"],["id","vat-cst","name","vat-type","type","radio",1,"form-check-input"],["for","vat-cst",1,"form-check-label"],[1,"col-4","col-md-3","mt-3","p-0","gst-wrapper"],["id","vat-gst","name","vat-type","type","radio",1,"form-check-input"],["for","vat-gst",1,"form-check-label"],["id","vat-tax","name","vat-type","type","radio",1,"form-check-input"],["for","vat-tax",1,"form-check-label"],[1,"col-md-12","mt-3","mb-3","gst-wrapper"],["id","vat-number","type","text","value","06AAMPY6980B1Z8",1,"form-control","d-none"],[1,"col-md-12","d-none"],[1,"form-label"],[1,"col-12","d-none"],["checked","","id","flexRadioTemplate1","name","flexRadioDefault","type","radio",1,"btn-check"],[1,"form-check-label"],[1,"col-md-12"],[1,"col-3","col-lg-2","d-grid"],["checked","","id","template-1","name","templates","type","radio",1,"btn-check","select-template"],["for","template-1",1,"btn","btn-outline-success"],["id","template-2","name","templates","type","radio",1,"btn-check","select-template"],["for","template-2",1,"btn","btn-outline-success"],["id","template-3","name","templates","type","radio",1,"btn-check","select-template"],["for","template-3",1,"btn","btn-outline-success"],[1,"bilWrapper"],["data-tm","template-1",1,"templates","template-1","bill-container","d-none","p-md-3","mt-5","mt-md-3"],["data-tm","template-2",1,"templates","template-2","bill-container","p-md-3","mt-5","mt-md-3"],[1,"bill"],[1,"template-overlay","overlay-1"],[1,"template-overlay","overlay-2"],[1,"template-overlay","overlay-3"],["data-tm","fs-logo","alt","Bharat Petroleum",1,"fs-logo",3,"src"],[1,"welcome"],[1,"pump-name-para"],["data-tm","fs-station-name",1,"fs-station-name"],["data-tm","fs-address",1,"fs-address"],["data-tm","vat-none",1,"vat-none","d-none"],[1,"vat-type"],["data-tm","vat-number",1,"vat-number"],[1,"tele-number"],["data-tm","fs-receipt-number",1,"fs-receipt-number"],[1,"fcc-id"],[1,"fip-id"],[1,"nozzle-id-para"],[1,"nozzle-id"],[1,"product-type"],["data-tm","fs-fuel-rate",1,"fs-fuel-rate"],["data-tm","fs-amount",1,"fs-amount"],[1,"value-ltr-para"],[1,"value-ltr"],["data-tm","u-vehicle-type",1,"u-vehicle-type"],[1,"u-vechicle-number"],[1,"customer-name-para"],["data-tm","u-name",1,"u-name"],["data-tm","fs-date",1,"fs-date"],["data-tm","fs-time",1,"fs-time","ps-1"],[1,"cash-mode"],["data-tm","u-payment-type",1,"u-payment-type"],[1,"thanks-para"],["data-tm","template-3",1,"templates","template-3","bill-container","d-none","p-md-3","mt-5","mt-md-3"],[1,"col-md-12","col-lg-6","d-grid","d-md-block"],["id","download-fuel-bills","type","button",1,"btn","btn-success","mx-auto","download-pdf"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"],[1,"download-text"]],template:function(l,a){1&l&&(e.TgZ(0,"article",0)(1,"h2"),e._uU(2,"Download Fuel Bill Free"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Generate free fuel bill, email and login are not required."),e.qZA(),e.TgZ(5,"h2"),e._uU(6,"Get Fuel Bill Online"),e.qZA(),e.TgZ(7,"p"),e._uU(8,"Here you can download free fuel bills for tax savings. No login and email required"),e.qZA()(),e.TgZ(9,"article",1)(10,"h2"),e._uU(11,"Fuel bills"),e.qZA()(),e.TgZ(12,"article")(13,"div",2)(14,"div",3)(15,"div",4)(16,"div",3)(17,"div",5)(18,"label",6),e._uU(19,"Select Logo:"),e.qZA()(),e.TgZ(20,"div",7)(21,"div",8),e._UZ(22,"input",9),e.TgZ(23,"label",10),e._uU(24,"Bharat Petroleum"),e.qZA()()(),e.TgZ(25,"div",7)(26,"div",8),e._UZ(27,"input",11),e.TgZ(28,"label",12),e._uU(29,"Indian Oil"),e.qZA()()(),e.TgZ(30,"div",7)(31,"div",8),e._UZ(32,"input",13),e.TgZ(33,"label",14),e._uU(34,"HP Oil"),e.qZA()()(),e.TgZ(35,"div",7)(36,"div",8),e._UZ(37,"input",15),e.TgZ(38,"label",16),e._uU(39,"Essar Oil"),e.qZA()()(),e.TgZ(40,"div",17)(41,"label",18),e._uU(42,"Fuel Station Name"),e.qZA(),e._UZ(43,"input",19)(44,"p",20),e.qZA(),e.TgZ(45,"div",5)(46,"label",21),e._uU(47,"Address"),e.qZA(),e._UZ(48,"textarea",22)(49,"p",23),e.qZA(),e.TgZ(50,"div",24)(51,"label",25),e._uU(52,"Fuel Rate"),e.qZA(),e._UZ(53,"input",26)(54,"p",27),e.qZA(),e.TgZ(55,"div",24)(56,"label",28),e._uU(57,"Total Amount"),e.qZA(),e._UZ(58,"input",29)(59,"p",30),e.qZA(),e.TgZ(60,"div",24)(61,"label",31),e._uU(62,"Fuel Bill Date"),e.qZA(),e._UZ(63,"input",32)(64,"p",33),e.qZA(),e.TgZ(65,"div",24)(66,"label",34),e._uU(67,"Fuel Bill Time"),e.qZA(),e._UZ(68,"input",35)(69,"p",36),e.qZA(),e.TgZ(70,"div",5)(71,"label",37),e._uU(72,"Customer Name"),e.qZA(),e._UZ(73,"input",38)(74,"p",39),e.qZA(),e.TgZ(75,"div",24)(76,"label",40),e._uU(77,"Vehicle Number"),e.qZA(),e._UZ(78,"input",41)(79,"p",42),e.qZA(),e.TgZ(80,"div",24)(81,"label",43),e._uU(82,"Vehicle Type"),e.qZA(),e.TgZ(83,"select",44)(84,"option"),e._uU(85,"Petrol"),e.qZA(),e.TgZ(86,"option"),e._uU(87,"Deisel"),e.qZA(),e.TgZ(88,"option"),e._uU(89,"CNG"),e.qZA(),e.TgZ(90,"option"),e._uU(91,"Electric"),e.qZA()(),e._UZ(92,"p",45),e.qZA(),e.TgZ(93,"div",24)(94,"label",46),e._uU(95,"Payment Type"),e.qZA(),e.TgZ(96,"select",47)(97,"option"),e._uU(98,"Cash"),e.qZA(),e.TgZ(99,"option"),e._uU(100,"Online"),e.qZA(),e.TgZ(101,"option"),e._uU(102,"Debit Card"),e.qZA()(),e._UZ(103,"p",48),e.qZA(),e.TgZ(104,"div",24)(105,"label",49),e._uU(106,"Receipt Number"),e.qZA(),e._UZ(107,"input",50)(108,"p",51),e.qZA(),e.TgZ(109,"div",52)(110,"div",8),e._UZ(111,"input",53),e.TgZ(112,"label",54),e._uU(113,"None"),e.qZA()()(),e.TgZ(114,"div",55)(115,"div",8),e._UZ(116,"input",56),e.TgZ(117,"label",57),e._uU(118,"CST TIN"),e.qZA()()(),e.TgZ(119,"div",58)(120,"div",8),e._UZ(121,"input",59),e.TgZ(122,"label",60),e._uU(123,"GST TIN"),e.qZA()()(),e.TgZ(124,"div",58)(125,"div",8),e._UZ(126,"input",61),e.TgZ(127,"label",62),e._uU(128,"TXN NO"),e.qZA()()(),e.TgZ(129,"div",63),e._UZ(130,"input",64),e.qZA()()(),e.TgZ(131,"div",4)(132,"div",3)(133,"div",65)(134,"label",66),e._uU(135,"Select Template"),e.qZA()(),e.TgZ(136,"div",67)(137,"div",8),e._UZ(138,"input",68),e.TgZ(139,"label",69),e._uU(140,"Template 1"),e.qZA()()(),e.TgZ(141,"div",70)(142,"label",66),e._uU(143,"Select Template"),e.qZA()(),e.TgZ(144,"div",71),e._UZ(145,"input",72),e.TgZ(146,"label",73),e._uU(147,"1"),e.qZA()(),e.TgZ(148,"div",71),e._UZ(149,"input",74),e.TgZ(150,"label",75),e._uU(151,"2"),e.qZA()(),e.TgZ(152,"div",71),e._UZ(153,"input",76),e.TgZ(154,"label",77),e._uU(155,"3"),e.qZA()(),e.TgZ(156,"div",70)(157,"div",78),e._UZ(158,"div",79),e.TgZ(159,"div",80)(160,"div",81)(161,"div")(162,"p",82),e._uU(163,"receipt receipt"),e.qZA(),e.TgZ(164,"p",83),e._uU(165,"receipt receipt"),e.qZA(),e.TgZ(166,"p",84),e._uU(167,"receipt receipt"),e.qZA(),e._UZ(168,"img",85),e.TgZ(169,"p",86),e._uU(170,"WELCOME!!! "),e.qZA(),e.TgZ(171,"p",87),e._UZ(172,"span",88),e._uU(173,"\xa0\xa0"),e._UZ(174,"span",89),e.qZA(),e.TgZ(175,"p",90)(176,"span",91),e._uU(177,"CST NUMBER: "),e.qZA(),e._UZ(178,"span",92),e.qZA(),e.TgZ(179,"p"),e._uU(180,"TEL NO: "),e._UZ(181,"span",93),e.qZA(),e.TgZ(182,"p"),e._uU(183,"RECEIPT NO: "),e._UZ(184,"span",94),e.qZA(),e.TgZ(185,"p"),e._uU(186,"FCC ID: "),e._UZ(187,"span",95),e.qZA(),e.TgZ(188,"p"),e._uU(189,"FIP NO: "),e._UZ(190,"span",96),e.qZA(),e.TgZ(191,"p",97),e._uU(192,"NOZZLE NO: "),e._UZ(193,"span",98),e.qZA(),e.TgZ(194,"p"),e._uU(195,"PRODUCT:"),e._UZ(196,"span",99),e.qZA(),e.TgZ(197,"p"),e._uU(198,"RATE/LTR: \u20b9 "),e._UZ(199,"span",100),e.qZA(),e.TgZ(200,"p"),e._uU(201,"AMOUNT: \u20b9 "),e._UZ(202,"span",101),e.qZA(),e.TgZ(203,"p",102),e._uU(204,"VOLUME(LTR): "),e._UZ(205,"span",103),e._uU(206," lt "),e.qZA(),e.TgZ(207,"p"),e._uU(208,"VEH TYPE: "),e._UZ(209,"span",104),e.qZA(),e.TgZ(210,"p"),e._uU(211,"VEH NO: "),e._UZ(212,"span",105),e.qZA(),e.TgZ(213,"p",106),e._uU(214,"CUSTOMER NAME: "),e._UZ(215,"span",107),e.qZA(),e.TgZ(216,"p"),e._uU(217,"DATE: "),e._UZ(218,"span",108)(219,"span",109),e.qZA(),e.TgZ(220,"p",110),e._uU(221,"MODE: "),e._UZ(222,"span",111),e.qZA(),e.TgZ(223,"p"),e._uU(224,"LST NO: "),e._UZ(225,"span"),e.qZA(),e.TgZ(226,"p"),e._uU(227,"VAT NO: "),e._UZ(228,"span"),e.qZA(),e.TgZ(229,"p"),e._uU(230,"ATTENDANT ID: "),e.TgZ(231,"span"),e._uU(232,"not available"),e.qZA()(),e.TgZ(233,"p",112),e._uU(234,"SAVE FUEL YAANI SAVE MONEY !! THANKS FOR FUELLING WITH US. YOU CAN NOW CALL US ON "),e.TgZ(235,"span"),e._uU(236,"1800 226344"),e.qZA(),e._uU(237," (TOLL-FREE) FOR QUERIES/COMPLAINTS."),e.qZA()()()(),e._UZ(238,"div",113),e.qZA()()()(),e.TgZ(239,"div",114)(240,"button",115),e._UZ(241,"span",116),e.TgZ(242,"span",117),e._uU(243,"Download"),e.qZA()()()()()()),2&l&&(e.xp6(168),e.MGl("src","",a.serverPath,"/assets/images/bill/pump-logo-bharat-petroleum.webp",e.LSH))},styles:[".bill[_ngcontent-%COMP%]   .fs-logo[_ngcontent-%COMP%]{width:110px;height:136px}.gst-wrapper[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.templates[_ngcontent-%COMP%]{background-color:#a09595}}"]}),t})()}];let c=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(Z),d.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,c]}),t})()}}]);