(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"60q1":function(e,t,r){"use strict";r.r(t),r.d(t,"RentReceiptModule",(function(){return l}));var b=r("ofXK"),n=r("tyNb"),o=r("fXoL"),a=r("jhN1");const d=[{path:"",component:(()=>{class e{constructor(e,t){this.title=e,this.meta=t,this.isRenderd=!1}onEvent(e){this.jsLoad()}ngOnInit(){this.title.setTitle("Free rent receipts"),this.meta.updateTag({content:"free rent receipts, rent receipts, free rent slips, rent slips"},"name='keywords'"),this.meta.updateTag({content:"Download free rent receipts PDF without login and email."},"name='description'"),this.jsLoad()}jsLoad(){this.isRenderd||"function"!=typeof rentReceipt||(rentReceipt(),this.isRenderd=!0)}}return e.\u0275fac=function(t){return new(t||e)(o.Fb(a.c),o.Fb(a.b))},e.\u0275cmp=o.zb({type:e,selectors:[["app-main-page"]],hostBindings:function(e,t){1&e&&o.Ob("scroll",(function(e){return t.onEvent(e)}))("click",(function(e){return t.onEvent(e)}))("mousemove",(function(e){return t.onEvent(e)}))("focus",(function(e){return t.onEvent(e)}))},decls:127,vars:0,consts:[[1,"d-none"],[1,"site-title"],[1,"receipt-wrapper"],["id","receipts",1,"receipts"],["id","invoice1",1,"invoice"],[1,"invoiceWrapper"],[1,"container"],[1,"row"],[1,"col-12","col-md-12"],["id","receiptHeading"],[1,"col-6","col-md-6"],["id","receiptSartDate"],[1,"current-month"],["id","receiptNumber"],["id","receipt-number",1,"receipt-number"],["id","receiptGeneratDate"],["id","generate-date",1,"generate-date"],["id","receiptDeclar"],["data-tm","rent",1,"rent"],["data-tm","renter-name",1,"renter-name"],["data-tm","address",1,"address"],["data-tm","date-from",1,"date-from"],["data-tm","date-to",1,"date-to"],["id","landlord"],["data-tm","landlord-name",1,"landlord-name"],["data-tm","landlord-pan",1,"landlord-pan"],[1,"revenue"],["id","receipt-generator"],[1,"col-md-12","col-lg-6"],["for","renter-name",1,"form-label"],["id","renter-name","type","text",1,"form-control"],["data-error","renter-name",1,"validation-message"],[1,"row","g-3",2,"margin-top","5px"],["for","rent",1,"form-label"],["id","rent","type","number",1,"form-control"],["data-error","rent",1,"validation-message"],["for","address",1,"form-label"],["id","address","rows","3",1,"form-control"],["data-error","address",1,"validation-message"],[1,"col-md-12"],[1,"row","g-3"],[1,"col-md-6"],["for","landlord-name",1,"form-label"],["id","landlord-name","placeholder","","type","text",1,"form-control"],["data-error","landlord-name",1,"validation-message"],["for","landlord-pan",1,"form-label"],["id","landlord-pan","placeholder","","type","text",1,"form-control"],["data-error","landlord-pan",1,"validation-message"],[1,"col-12","col-md-3"],[1,"form-check"],["checked","","id","monthly","name","receipt-month","type","radio",1,"form-check-input"],["for","monthly",1,"form-check-label"],[1,"col-12","col-md-6"],["id","quarterly","name","receipt-month","type","radio",1,"form-check-input"],["for","quarterly",1,"form-check-label"],["for","date-from",1,"form-label"],["id","date-from","type","date",1,"form-control"],["data-error","date-from",1,"validation-message"],["for","date-to",1,"form-label"],["id","date-to","type","date",1,"form-control"],["data-error","date-to",1,"validation-message"],[1,"col-12"],["id","download-pdf","type","button",1,"btn","btn-success"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"],[1,"download-text"]],template:function(e,t){1&e&&(o.Ib(0,"article",0),o.Ib(1,"h2"),o.Ub(2,"Room rent receipt download"),o.Hb(),o.Ib(3,"p"),o.Ub(4,"Generate free room rent receipts, email and login are not required."),o.Hb(),o.Ib(5,"h2"),o.Ub(6,"Download home rent receipts."),o.Hb(),o.Ib(7,"p"),o.Ub(8,"Here you can download home rent receipts, fill out the form and download PDF file."),o.Hb(),o.Hb(),o.Ib(9,"article",1),o.Ib(10,"h2"),o.Ub(11,"Rent receipt"),o.Hb(),o.Hb(),o.Ib(12,"article"),o.Ib(13,"div",2),o.Ib(14,"div",3),o.Ib(15,"div",4),o.Ib(16,"div",5),o.Ib(17,"div",6),o.Ib(18,"div",7),o.Ib(19,"div",8),o.Ib(20,"p",9),o.Ub(21,"Provisional"),o.Hb(),o.Hb(),o.Hb(),o.Ib(22,"div",7),o.Ib(23,"div",10),o.Ib(24,"div",7),o.Ib(25,"div",8),o.Ib(26,"p",11),o.Ub(27,"RENT RECEIPT "),o.Hb(),o.Hb(),o.Ib(28,"div",8),o.Gb(29,"span",12),o.Hb(),o.Hb(),o.Hb(),o.Ib(30,"div",10),o.Ib(31,"div",7),o.Ib(32,"div",8),o.Ib(33,"p",13),o.Ub(34,"Receipt No: "),o.Gb(35,"span",14),o.Hb(),o.Hb(),o.Ib(36,"div",8),o.Ib(37,"p",15),o.Ub(38,"Date: "),o.Gb(39,"span",16),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Ib(40,"div",7),o.Ib(41,"div",8),o.Ib(42,"p",17),o.Ub(43,"Received a sum of INR "),o.Gb(44,"span",18),o.Ub(45," from "),o.Gb(46,"span",19),o.Ub(47," towards the rent of property located at "),o.Gb(48,"span",20),o.Ub(49," for the period from "),o.Gb(50,"span",21),o.Ub(51," to "),o.Gb(52,"span",22),o.Hb(),o.Hb(),o.Hb(),o.Ib(53,"div",7),o.Ib(54,"div",10),o.Ib(55,"p",23),o.Gb(56,"span",24),o.Ub(57," (Landlord), Pan: "),o.Gb(58,"span",25),o.Hb(),o.Hb(),o.Ib(59,"div",10),o.Ib(60,"div",26),o.Ib(61,"p"),o.Ub(62,"Revenue stamp"),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Ib(63,"div",27),o.Ib(64,"div",7),o.Ib(65,"div",28),o.Ib(66,"label",29),o.Ub(67,"Name"),o.Hb(),o.Gb(68,"input",30),o.Gb(69,"p",31),o.Hb(),o.Hb(),o.Ib(70,"div",32),o.Ib(71,"div",28),o.Ib(72,"label",33),o.Ub(73,"Rent Monthly"),o.Hb(),o.Gb(74,"input",34),o.Gb(75,"p",35),o.Hb(),o.Hb(),o.Ib(76,"div",32),o.Ib(77,"div",28),o.Ib(78,"label",36),o.Ub(79,"Address"),o.Hb(),o.Gb(80,"textarea",37),o.Gb(81,"p",38),o.Hb(),o.Hb(),o.Gb(82,"br"),o.Ib(83,"div",39),o.Gb(84,"hr"),o.Hb(),o.Gb(85,"br"),o.Ib(86,"div",40),o.Ib(87,"div",41),o.Ib(88,"label",42),o.Ub(89,"Landlord's Name"),o.Hb(),o.Gb(90,"input",43),o.Gb(91,"p",44),o.Hb(),o.Ib(92,"div",41),o.Ib(93,"label",45),o.Ub(94,"Landlord's PAN (optional)"),o.Hb(),o.Gb(95,"input",46),o.Gb(96,"p",47),o.Hb(),o.Hb(),o.Gb(97,"br"),o.Ib(98,"div",40),o.Ib(99,"div",48),o.Ib(100,"div",49),o.Gb(101,"input",50),o.Ib(102,"label",51),o.Ub(103,"Monthly"),o.Hb(),o.Hb(),o.Hb(),o.Ib(104,"div",52),o.Ib(105,"div",49),o.Gb(106,"input",53),o.Ib(107,"label",54),o.Ub(108," Quarterly "),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Gb(109,"br"),o.Ib(110,"div",40),o.Ib(111,"div",41),o.Ib(112,"label",55),o.Ub(113,"From"),o.Hb(),o.Gb(114,"input",56),o.Gb(115,"p",57),o.Hb(),o.Ib(116,"div",41),o.Ib(117,"label",58),o.Ub(118,"To"),o.Hb(),o.Gb(119,"input",59),o.Gb(120,"p",60),o.Hb(),o.Hb(),o.Ib(121,"div",40),o.Ib(122,"div",61),o.Ib(123,"button",62),o.Gb(124,"span",63),o.Ib(125,"span",64),o.Ub(126,"Download"),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Hb(),o.Hb())},styles:[""]}),e})()}];let i=(()=>{class e{}return e.\u0275mod=o.Db({type:e}),e.\u0275inj=o.Cb({factory:function(t){return new(t||e)},imports:[[n.b.forChild(d)],n.b]}),e})(),l=(()=>{class e{}return e.\u0275mod=o.Db({type:e}),e.\u0275inj=o.Cb({factory:function(t){return new(t||e)},imports:[[b.b,i]]}),e})()}}]);