function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"60q1":function(e,t,r){"use strict";r.r(t),r.d(t,"RentReceiptModule",(function(){return p}));var n,o,b,a=r("ofXK"),i=r("tyNb"),d=r("fXoL"),l=r("jhN1"),c=[{path:"",component:(n=function(){function e(t,r){_classCallCheck(this,e),this.title=t,this.meta=r,this.isRenderd=!1}return _createClass(e,[{key:"onEvent",value:function(e){this.jsLoad()}},{key:"ngOnInit",value:function(){this.title.setTitle("Free rent receipts"),this.meta.updateTag({content:"free rent receipts, rent receipts, free rent slips, rent slips"},"name='keywords'"),this.meta.updateTag({content:"Download free rent receipts PDF without login and email."},"name='description'"),this.jsLoad(),activeMenu(2)}},{key:"jsLoad",value:function(){this.isRenderd||"function"!=typeof rentReceipt||(rentReceipt(),this.isRenderd=!0)}}]),e}(),n.\u0275fac=function(e){return new(e||n)(d.Fb(l.c),d.Fb(l.b))},n.\u0275cmp=d.zb({type:n,selectors:[["app-main-page"]],hostBindings:function(e,t){1&e&&d.Ob("scroll",(function(e){return t.onEvent(e)}))("click",(function(e){return t.onEvent(e)}))("mousemove",(function(e){return t.onEvent(e)}))("focus",(function(e){return t.onEvent(e)}))},decls:127,vars:0,consts:[[1,"d-none"],[1,"site-title"],[1,"receipt-wrapper"],["id","receipts",1,"receipts"],["id","invoice1",1,"invoice"],[1,"invoiceWrapper"],[1,"container"],[1,"row"],[1,"col-12","col-md-12"],["id","receiptHeading"],[1,"col-6","col-md-6"],["id","receiptSartDate"],[1,"current-month"],["id","receiptNumber"],["id","receipt-number",1,"receipt-number"],["id","receiptGeneratDate"],["id","generate-date",1,"generate-date"],["id","receiptDeclar"],["data-tm","rent",1,"rent"],["data-tm","renter-name",1,"renter-name"],["data-tm","address",1,"address"],["data-tm","date-from",1,"date-from"],["data-tm","date-to",1,"date-to"],["id","landlord"],["data-tm","landlord-name",1,"landlord-name"],["data-tm","landlord-pan",1,"landlord-pan"],[1,"revenue"],["id","receipt-generator"],[1,"col-md-12","col-lg-6"],["for","renter-name",1,"form-label"],["id","renter-name","type","text",1,"form-control"],["data-error","renter-name",1,"validation-message"],[1,"row","g-3",2,"margin-top","5px"],["for","rent",1,"form-label"],["id","rent","type","number",1,"form-control"],["data-error","rent",1,"validation-message"],["for","address",1,"form-label"],["id","address","rows","3",1,"form-control"],["data-error","address",1,"validation-message"],[1,"col-md-12"],[1,"row","g-3"],[1,"col-md-6"],["for","landlord-name",1,"form-label"],["id","landlord-name","placeholder","","type","text",1,"form-control"],["data-error","landlord-name",1,"validation-message"],["for","landlord-pan",1,"form-label"],["id","landlord-pan","placeholder","","type","text",1,"form-control"],["data-error","landlord-pan",1,"validation-message"],[1,"col-12","col-md-3"],[1,"form-check"],["checked","","id","monthly","name","receipt-month","type","radio",1,"form-check-input"],["for","monthly",1,"form-check-label"],[1,"col-12","col-md-6"],["id","quarterly","name","receipt-month","type","radio",1,"form-check-input"],["for","quarterly",1,"form-check-label"],["for","date-from",1,"form-label"],["id","date-from","type","date",1,"form-control"],["data-error","date-from",1,"validation-message"],["for","date-to",1,"form-label"],["id","date-to","type","date",1,"form-control"],["data-error","date-to",1,"validation-message"],[1,"col-12"],["id","download-pdf","type","button",1,"btn","btn-success"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"],[1,"download-text"]],template:function(e,t){1&e&&(d.Ib(0,"article",0),d.Ib(1,"h2"),d.Ub(2,"Room rent receipt download"),d.Hb(),d.Ib(3,"p"),d.Ub(4,"Generate free room rent receipts, email and login are not required."),d.Hb(),d.Ib(5,"h2"),d.Ub(6,"Download home rent receipts."),d.Hb(),d.Ib(7,"p"),d.Ub(8,"Here you can download home rent receipts, fill out the form and download PDF file."),d.Hb(),d.Hb(),d.Ib(9,"article",1),d.Ib(10,"h2"),d.Ub(11,"Rent receipt"),d.Hb(),d.Hb(),d.Ib(12,"article"),d.Ib(13,"div",2),d.Ib(14,"div",3),d.Ib(15,"div",4),d.Ib(16,"div",5),d.Ib(17,"div",6),d.Ib(18,"div",7),d.Ib(19,"div",8),d.Ib(20,"p",9),d.Ub(21,"Provisional"),d.Hb(),d.Hb(),d.Hb(),d.Ib(22,"div",7),d.Ib(23,"div",10),d.Ib(24,"div",7),d.Ib(25,"div",8),d.Ib(26,"p",11),d.Ub(27,"RENT RECEIPT "),d.Hb(),d.Hb(),d.Ib(28,"div",8),d.Gb(29,"span",12),d.Hb(),d.Hb(),d.Hb(),d.Ib(30,"div",10),d.Ib(31,"div",7),d.Ib(32,"div",8),d.Ib(33,"p",13),d.Ub(34,"Receipt No: "),d.Gb(35,"span",14),d.Hb(),d.Hb(),d.Ib(36,"div",8),d.Ib(37,"p",15),d.Ub(38,"Date: "),d.Gb(39,"span",16),d.Hb(),d.Hb(),d.Hb(),d.Hb(),d.Hb(),d.Ib(40,"div",7),d.Ib(41,"div",8),d.Ib(42,"p",17),d.Ub(43,"Received a sum of INR "),d.Gb(44,"span",18),d.Ub(45," from "),d.Gb(46,"span",19),d.Ub(47," towards the rent of property located at "),d.Gb(48,"span",20),d.Ub(49," for the period from "),d.Gb(50,"span",21),d.Ub(51," to "),d.Gb(52,"span",22),d.Hb(),d.Hb(),d.Hb(),d.Ib(53,"div",7),d.Ib(54,"div",10),d.Ib(55,"p",23),d.Gb(56,"span",24),d.Ub(57," (Landlord), Pan: "),d.Gb(58,"span",25),d.Hb(),d.Hb(),d.Ib(59,"div",10),d.Ib(60,"div",26),d.Ib(61,"p"),d.Ub(62,"Revenue stamp"),d.Hb(),d.Hb(),d.Hb(),d.Hb(),d.Hb(),d.Hb(),d.Hb(),d.Hb(),d.Hb(),d.Ib(63,"div",27),d.Ib(64,"div",7),d.Ib(65,"div",28),d.Ib(66,"label",29),d.Ub(67,"Name"),d.Hb(),d.Gb(68,"input",30),d.Gb(69,"p",31),d.Hb(),d.Hb(),d.Ib(70,"div",32),d.Ib(71,"div",28),d.Ib(72,"label",33),d.Ub(73,"Rent Monthly"),d.Hb(),d.Gb(74,"input",34),d.Gb(75,"p",35),d.Hb(),d.Hb(),d.Ib(76,"div",32),d.Ib(77,"div",28),d.Ib(78,"label",36),d.Ub(79,"Address"),d.Hb(),d.Gb(80,"textarea",37),d.Gb(81,"p",38),d.Hb(),d.Hb(),d.Gb(82,"br"),d.Ib(83,"div",39),d.Gb(84,"hr"),d.Hb(),d.Gb(85,"br"),d.Ib(86,"div",40),d.Ib(87,"div",41),d.Ib(88,"label",42),d.Ub(89,"Landlord's Name"),d.Hb(),d.Gb(90,"input",43),d.Gb(91,"p",44),d.Hb(),d.Ib(92,"div",41),d.Ib(93,"label",45),d.Ub(94,"Landlord's PAN (optional)"),d.Hb(),d.Gb(95,"input",46),d.Gb(96,"p",47),d.Hb(),d.Hb(),d.Gb(97,"br"),d.Ib(98,"div",40),d.Ib(99,"div",48),d.Ib(100,"div",49),d.Gb(101,"input",50),d.Ib(102,"label",51),d.Ub(103,"Monthly"),d.Hb(),d.Hb(),d.Hb(),d.Ib(104,"div",52),d.Ib(105,"div",49),d.Gb(106,"input",53),d.Ib(107,"label",54),d.Ub(108," Quarterly "),d.Hb(),d.Hb(),d.Hb(),d.Hb(),d.Gb(109,"br"),d.Ib(110,"div",40),d.Ib(111,"div",41),d.Ib(112,"label",55),d.Ub(113,"From"),d.Hb(),d.Gb(114,"input",56),d.Gb(115,"p",57),d.Hb(),d.Ib(116,"div",41),d.Ib(117,"label",58),d.Ub(118,"To"),d.Hb(),d.Gb(119,"input",59),d.Gb(120,"p",60),d.Hb(),d.Hb(),d.Ib(121,"div",40),d.Ib(122,"div",61),d.Ib(123,"button",62),d.Gb(124,"span",63),d.Ib(125,"span",64),d.Ub(126,"Download"),d.Hb(),d.Hb(),d.Hb(),d.Hb(),d.Hb(),d.Hb())},styles:[""]}),n)}],s=((b=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=d.Db({type:b}),b.\u0275inj=d.Cb({factory:function(e){return new(e||b)},imports:[[i.b.forChild(c)],i.b]}),b),p=((o=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=d.Db({type:o}),o.\u0275inj=d.Cb({factory:function(e){return new(e||o)},imports:[[a.b,s]]}),o)}}]);