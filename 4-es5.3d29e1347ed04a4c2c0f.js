function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var n=_toPrimitive(t,"string");return"symbol"==typeof n?n:String(n)}function _toPrimitive(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,n||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{S2jg:function(t,n,e){"use strict";e.r(n),e.d(n,"FuelBillsModule",(function(){return p}));var o,a,l,i=e("ofXK"),c=e("tyNb"),r=e("fXoL"),b=[{path:"",component:(o=function(){function t(){_classCallCheck(this,t),this.isRenderd=!1}return _createClass(t,[{key:"onEvent",value:function(t){this.jsLoad()}},{key:"ngOnInit",value:function(){this.jsLoad()}},{key:"jsLoad",value:function(){this.isRenderd||"function"!=typeof fuelBills||(fuelBills(),this.isRenderd=!0)}}]),t}(),o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=r.yb({type:o,selectors:[["app-fuel-bill-main"]],hostBindings:function(t,n){1&t&&r.Nb("scroll",(function(t){return n.onEvent(t)}))("click",(function(t){return n.onEvent(t)}))("mousemove",(function(t){return n.onEvent(t)}))("touchstart",(function(t){return n.onEvent(t)}))("focus",(function(t){return n.onEvent(t)}))},decls:228,vars:0,consts:[["id","fuel-bill"],[1,"row"],[1,"col-md-6"],[1,"col-md-12"],["for","fs-station-name",1,"form-label"],["id","fs-station-name","type","text",1,"form-control"],["data-error","fs-station-name",1,"validation-message"],[1,"col-md-12","mt-3"],["for","fs-address",1,"form-label"],["id","fs-address","rows","3",1,"form-control"],["data-error","fs-address",1,"validation-message"],[1,"col-lg-6","col-md-12","mt-3"],["for","fs-fuel-rate",1,"form-label"],["id","fs-fuel-rate","type","number",1,"form-control"],["data-error","fs-fuel-rate",1,"validation-message"],["for","fs-amount",1,"form-label"],["id","fs-amount","type","number",1,"form-control"],["data-error","fs-amount","id","ErrorAmount",1,"validation-message"],["for","fs-date",1,"form-label"],["id","fs-date","placeholder","","type","date",1,"form-control"],["data-error","fs-date",1,"validation-message"],["for","fs-time",1,"form-label"],["id","fs-time","placeholder","","type","time",1,"form-control"],["data-error","fs-time",1,"validation-message"],["for","u-name",1,"form-label"],["id","u-name","type","text",1,"form-control"],["data-error","u-name",1,"validation-message"],["for","u-vechicle-number",1,"form-label"],["id","u-vechicle-number","type","text",1,"form-control"],["data-error","u-vechicle-number",1,"validation-message"],["for","u-vehicle-type",1,"form-label"],["id","u-vehicle-type",1,"form-control"],["data-error","u-vehicle-type",1,"validation-message"],["for","u-payment-type",1,"form-label"],["id","u-payment-type",1,"form-control"],["data-error","u-payment-type",1,"validation-message"],["for","fs-receipt-number",1,"form-label"],["id","fs-receipt-number","type","text",1,"form-control"],["data-error","fs-receipt-number",1,"validation-message"],[1,"col-md-3","mt-3"],[1,"form-check"],["checked","","id","vat-none","name","vat-type","type","radio",1,"form-check-input"],["for","vat-none",1,"form-check-label"],[1,"col-4","col-md-3","mt-3","p-md-0"],["id","vat-cst","name","vat-type","type","radio",1,"form-check-input"],["for","vat-cst",1,"form-check-label"],[1,"col-4","col-md-3","mt-3","p-0"],["id","vat-gst","name","vat-type","type","radio",1,"form-check-input"],["for","vat-gst",1,"form-check-label"],["id","vat-tax","name","vat-type","type","radio",1,"form-check-input"],["for","vat-tax",1,"form-check-label"],[1,"col-md-12","mt-3","mb-3"],["id","vat-number","type","text","value","06AAMPY6980B1Z8",1,"form-control","d-none"],[1,"col-md-12","d-none"],[1,"form-label"],[1,"col-12","d-none"],["checked","","id","flexRadioTemplate1","name","flexRadioDefault","type","radio",1,"form-check-input"],[1,"form-check-label"],[1,"col-2"],["checked","","id","template-1","name","templates","type","radio",1,"form-check-input","select-template"],["for","template-1",1,"form-check-label"],["id","template-2","name","templates","type","radio",1,"form-check-input","select-template"],["for","template-2",1,"form-check-label"],[1,"col-6"],["checked","","id","pump-logo-bharat-petroleum","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-bharat-petroleum",1,"form-check-label"],["id","pump-logo-indian-oil","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-indian-oil",1,"form-check-label"],["id","pump-logo-hp","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-hp",1,"form-check-label"],["id","pump-logo-essar-oil","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-essar-oil",1,"form-check-label"],[1,"bilWrapper"],["data-tm","template-1",1,"templates","template-1","bill-container","d-none"],["data-tm","template-2",1,"templates","template-2","bill-container"],[1,"bill"],[1,"template-overlay","overlay-1"],[1,"template-overlay","overlay-2"],[1,"template-overlay","overlay-3"],["data-tm","fs-logo","alt","Bharat Petroleum","src","https://sohelkhan00000.github.io/cdn-generate-reciept/assets/images/bill/pump-logo-bharat-petroleum.webp",1,"fs-logo"],[1,"welcome"],[1,"pump-name-para"],["data-tm","fs-station-name",1,"fs-station-name"],["data-tm","fs-address",1,"fs-address"],["data-tm","vat-none",1,"vat-none","d-none"],[1,"vat-type"],["data-tm","vat-number",1,"vat-number"],[1,"tele-number"],["data-tm","fs-receipt-number",1,"fs-receipt-number"],[1,"fcc-id"],[1,"fip-id"],[1,"nozzle-id-para"],[1,"nozzle-id"],[1,"product-type"],["data-tm","fs-fuel-rate",1,"fs-fuel-rate"],["data-tm","fs-amount",1,"fs-amount"],[1,"value-ltr-para"],[1,"value-ltr"],["data-tm","u-vehicle-type",1,"u-vehicle-type"],[1,"u-vechicle-number"],[1,"customer-name-para"],["data-tm","u-name",1,"u-name"],["data-tm","fs-date",1,"fs-date"],["data-tm","fs-time",1,"fs-time"],[1,"cash-mode"],["data-tm","u-payment-type",1,"u-payment-type"],[1,"thanks-para"],[1,"col-md-12","col-lg-6","d-grid","d-md-block"],["id","download-fuel-bills","type","button",1,"btn","btn-success","mx-auto","download-pdf"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"],[1,"download-text"]],template:function(t,n){1&t&&(r.Hb(0,"div",0),r.Hb(1,"div",1),r.Hb(2,"div",2),r.Hb(3,"div",1),r.Hb(4,"div",3),r.Hb(5,"label",4),r.Sb(6,"Fuel Station Name"),r.Gb(),r.Fb(7,"input",5),r.Fb(8,"p",6),r.Gb(),r.Hb(9,"div",7),r.Hb(10,"label",8),r.Sb(11,"Address"),r.Gb(),r.Fb(12,"textarea",9),r.Fb(13,"p",10),r.Gb(),r.Hb(14,"div",11),r.Hb(15,"label",12),r.Sb(16,"Fuel Rate"),r.Gb(),r.Fb(17,"input",13),r.Fb(18,"p",14),r.Gb(),r.Hb(19,"div",11),r.Hb(20,"label",15),r.Sb(21,"Total Amount"),r.Gb(),r.Fb(22,"input",16),r.Fb(23,"p",17),r.Gb(),r.Hb(24,"div",11),r.Hb(25,"label",18),r.Sb(26,"Fuel Bill Date"),r.Gb(),r.Fb(27,"input",19),r.Fb(28,"p",20),r.Gb(),r.Hb(29,"div",11),r.Hb(30,"label",21),r.Sb(31,"Fuel Bill Time"),r.Gb(),r.Fb(32,"input",22),r.Fb(33,"p",23),r.Gb(),r.Hb(34,"div",7),r.Hb(35,"label",24),r.Sb(36,"Customer Name"),r.Gb(),r.Fb(37,"input",25),r.Fb(38,"p",26),r.Gb(),r.Hb(39,"div",11),r.Hb(40,"label",27),r.Sb(41,"Vehicle Number"),r.Gb(),r.Fb(42,"input",28),r.Fb(43,"p",29),r.Gb(),r.Hb(44,"div",11),r.Hb(45,"label",30),r.Sb(46,"Vehicle Type"),r.Gb(),r.Hb(47,"select",31),r.Hb(48,"option"),r.Sb(49,"Petrol"),r.Gb(),r.Hb(50,"option"),r.Sb(51,"Deisel"),r.Gb(),r.Hb(52,"option"),r.Sb(53,"CNG"),r.Gb(),r.Hb(54,"option"),r.Sb(55,"Electric"),r.Gb(),r.Gb(),r.Fb(56,"p",32),r.Gb(),r.Hb(57,"div",11),r.Hb(58,"label",33),r.Sb(59,"Payment Type"),r.Gb(),r.Hb(60,"select",34),r.Hb(61,"option"),r.Sb(62,"Cash"),r.Gb(),r.Hb(63,"option"),r.Sb(64,"Online"),r.Gb(),r.Hb(65,"option"),r.Sb(66,"Debit Card"),r.Gb(),r.Gb(),r.Fb(67,"p",35),r.Gb(),r.Hb(68,"div",11),r.Hb(69,"label",36),r.Sb(70,"Receipt Number"),r.Gb(),r.Fb(71,"input",37),r.Fb(72,"p",38),r.Gb(),r.Hb(73,"div",39),r.Hb(74,"div",40),r.Fb(75,"input",41),r.Hb(76,"label",42),r.Sb(77,"None"),r.Gb(),r.Gb(),r.Gb(),r.Hb(78,"div",43),r.Hb(79,"div",40),r.Fb(80,"input",44),r.Hb(81,"label",45),r.Sb(82,"CST TIN"),r.Gb(),r.Gb(),r.Gb(),r.Hb(83,"div",46),r.Hb(84,"div",40),r.Fb(85,"input",47),r.Hb(86,"label",48),r.Sb(87,"GST TIN"),r.Gb(),r.Gb(),r.Gb(),r.Hb(88,"div",46),r.Hb(89,"div",40),r.Fb(90,"input",49),r.Hb(91,"label",50),r.Sb(92,"TXN NO"),r.Gb(),r.Gb(),r.Gb(),r.Hb(93,"div",51),r.Fb(94,"input",52),r.Gb(),r.Gb(),r.Gb(),r.Hb(95,"div",2),r.Hb(96,"div",1),r.Hb(97,"div",53),r.Hb(98,"label",54),r.Sb(99,"Select Template"),r.Gb(),r.Gb(),r.Hb(100,"div",55),r.Hb(101,"div",40),r.Fb(102,"input",56),r.Hb(103,"label",57),r.Sb(104,"Template 1"),r.Gb(),r.Gb(),r.Gb(),r.Hb(105,"div",3),r.Hb(106,"label",54),r.Sb(107,"Select Template"),r.Gb(),r.Gb(),r.Hb(108,"div",58),r.Hb(109,"div",40),r.Fb(110,"input",59),r.Hb(111,"label",60),r.Sb(112,"1"),r.Gb(),r.Gb(),r.Gb(),r.Hb(113,"div",58),r.Hb(114,"div",40),r.Fb(115,"input",61),r.Hb(116,"label",62),r.Sb(117,"2"),r.Gb(),r.Gb(),r.Gb(),r.Hb(118,"div",7),r.Hb(119,"label",54),r.Sb(120,"Select Logo"),r.Gb(),r.Gb(),r.Hb(121,"div",63),r.Hb(122,"div",40),r.Fb(123,"input",64),r.Hb(124,"label",65),r.Sb(125,"Bharat Petroleum"),r.Gb(),r.Gb(),r.Gb(),r.Hb(126,"div",63),r.Hb(127,"div",40),r.Fb(128,"input",66),r.Hb(129,"label",67),r.Sb(130,"Indian Oil"),r.Gb(),r.Gb(),r.Gb(),r.Hb(131,"div",63),r.Hb(132,"div",40),r.Fb(133,"input",68),r.Hb(134,"label",69),r.Sb(135,"HP Oil"),r.Gb(),r.Gb(),r.Gb(),r.Hb(136,"div",63),r.Hb(137,"div",40),r.Fb(138,"input",70),r.Hb(139,"label",71),r.Sb(140,"Essar Oil"),r.Gb(),r.Gb(),r.Gb(),r.Hb(141,"div",3),r.Hb(142,"div",72),r.Fb(143,"div",73),r.Hb(144,"div",74),r.Hb(145,"div",75),r.Hb(146,"div"),r.Hb(147,"p",76),r.Sb(148,"receipt receipt"),r.Gb(),r.Hb(149,"p",77),r.Sb(150,"receipt receipt"),r.Gb(),r.Hb(151,"p",78),r.Sb(152,"receipt receipt"),r.Gb(),r.Fb(153,"img",79),r.Hb(154,"p",80),r.Sb(155,"WELCOME!!! "),r.Gb(),r.Hb(156,"p",81),r.Fb(157,"span",82),r.Sb(158,"\xa0\xa0"),r.Fb(159,"span",83),r.Gb(),r.Hb(160,"p",84),r.Hb(161,"span",85),r.Sb(162,"CST NUMBER: "),r.Gb(),r.Fb(163,"span",86),r.Gb(),r.Hb(164,"p"),r.Sb(165,"TEL NO: "),r.Fb(166,"span",87),r.Gb(),r.Hb(167,"p"),r.Sb(168,"RECEIPT NO: "),r.Fb(169,"span",88),r.Gb(),r.Hb(170,"p"),r.Sb(171,"FCC ID: "),r.Fb(172,"span",89),r.Gb(),r.Hb(173,"p"),r.Sb(174,"FIP NO: "),r.Fb(175,"span",90),r.Gb(),r.Hb(176,"p",91),r.Sb(177,"NOZZLE NO: "),r.Fb(178,"span",92),r.Gb(),r.Hb(179,"p"),r.Sb(180,"PRODUCT:"),r.Fb(181,"span",93),r.Gb(),r.Hb(182,"p"),r.Sb(183,"RATE/LTR: \u20b9 "),r.Fb(184,"span",94),r.Gb(),r.Hb(185,"p"),r.Sb(186,"AMOUNT: \u20b9 "),r.Fb(187,"span",95),r.Gb(),r.Hb(188,"p",96),r.Sb(189,"VOLUME(LTR): "),r.Fb(190,"span",97),r.Sb(191," lt "),r.Gb(),r.Hb(192,"p"),r.Sb(193,"VEH TYPE: "),r.Fb(194,"span",98),r.Gb(),r.Hb(195,"p"),r.Sb(196,"VEH NO: "),r.Fb(197,"span",99),r.Gb(),r.Hb(198,"p",100),r.Sb(199,"CUSTOMER NAME: "),r.Fb(200,"span",101),r.Gb(),r.Hb(201,"p"),r.Sb(202,"DATE: "),r.Fb(203,"span",102),r.Fb(204,"span",103),r.Gb(),r.Hb(205,"p",104),r.Sb(206,"MODE: "),r.Fb(207,"span",105),r.Gb(),r.Hb(208,"p"),r.Sb(209,"LST NO: "),r.Fb(210,"span"),r.Gb(),r.Hb(211,"p"),r.Sb(212,"VAT NO: "),r.Fb(213,"span"),r.Gb(),r.Hb(214,"p"),r.Sb(215,"ATTENDANT ID: "),r.Hb(216,"span"),r.Sb(217,"not available"),r.Gb(),r.Gb(),r.Hb(218,"p",106),r.Sb(219,"SAVE FUEL YAANI SAVE MONEY !! THANKS FOR FUELLING WITH US. YOU CAN NOW CALL US ON "),r.Hb(220,"span"),r.Sb(221,"1800 226344"),r.Gb(),r.Sb(222," (TOLL-FREE) FOR QUERIES/COMPLAINTS."),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Hb(223,"div",107),r.Hb(224,"button",108),r.Fb(225,"span",109),r.Hb(226,"span",110),r.Sb(227,"Download"),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Gb())},styles:['.row[_ngcontent-%COMP%]{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y)*-1);margin-right:-.75rem;margin-left:-.75rem}.row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*0.5);padding-left:calc(var(--bs-gutter-x)*0.5);margin-top:1rem}.col[_ngcontent-%COMP%]{flex:1 0 0%}.col-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}@media (min-width:576px){.col-sm[_ngcontent-%COMP%]{flex:1 0 0%}.col-sm-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-sm-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-sm-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-sm-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-sm-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-sm-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-sm-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-sm-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-sm-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-sm-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-sm-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-sm-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}}@media (min-width:768px){.col-md[_ngcontent-%COMP%]{flex:1 0 0%}.col-md-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-md-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-md-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-md-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-md-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-md-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-md-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-md-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-md-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-md-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-md-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-md-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}}@media (min-width:992px){.col-lg[_ngcontent-%COMP%]{flex:1 0 0%}.col-lg-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-lg-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-lg-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-lg-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-lg-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-lg-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-lg-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-lg-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-lg-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-lg-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-lg-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-lg-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}}@media (min-width:1200px){.col-xl[_ngcontent-%COMP%]{flex:1 0 0%}.col-xl-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-xl-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-xl-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-xl-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-xl-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-xl-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-xl-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-xl-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-xl-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-xl-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-xl-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-xl-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}}@media (min-width:1400px){.col-xxl[_ngcontent-%COMP%]{flex:1 0 0%}.col-xxl-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-xxl-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-xxl-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-xxl-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-xxl-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-xxl-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-xxl-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-xxl-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-xxl-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-xxl-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-xxl-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-xxl-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}}.d-none[_ngcontent-%COMP%]{display:none!important}.form-label[_ngcontent-%COMP%]{margin-bottom:.5rem}label[_ngcontent-%COMP%]{display:inline-block}input[_ngcontent-%COMP%]{margin:0}.form-control[_ngcontent-%COMP%]{display:block;width:100%;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.btn[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]{padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529}.btn[_ngcontent-%COMP%]{display:inline-block;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}.h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:border-box}*[_ngcontent-%COMP%]{padding:0;margin:0}[_ngcontent-%COMP%]:root{--logo-c:#4f4f4f;--nav-bg:#4f4f4f;--main-c:#4f4f4f;--comboA-bg:#f5eded;--comboA-fg:#4f4f4f;--comboB-bg:#4f4f4f;--comboB-fg:#f5eded;--comboB-hover-bg:#000;--comboB-hover-fg:#fff;--comboC-bg:#fff;--comboC-fg:#4f4f4f;--comboD-bg:#fff;--comboD-fg:#4f4f4f;--comboD-hover-fg:#ccc5c5}.form-check-input[_ngcontent-%COMP%], .form-label[_ngcontent-%COMP%]{color:var(--main-c)}.btn-success[_ngcontent-%COMP%]{color:var(--comboB-fg);background-color:var(--comboB-bg);border-color:var(--comboB-bg)}.form-check-input[_ngcontent-%COMP%]:checked{background-color:var(--main-c);border-color:var(--main-c)}.form-check-input[_ngcontent-%COMP%]:focus{border-color:var(--main-c);outline:0;box-shadow:0 0 0 .25rem #fff}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:var(--main-c)}body[_ngcontent-%COMP%]{background-color:#e4dfda;font-family:sans-serif}header[_ngcontent-%COMP%]{background-color:var(--comboC-bg);padding-left:20px;padding-top:20px!important;padding-bottom:20px}.site-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{pointer-events:none;letter-spacing:-1px;font:36px/42px Ubuntu,sans-serif;color:var(--comboC-fg);text-decoration:none}.site-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;padding-left:4px;color:var(--comboC-fg)}.site-page[_ngcontent-%COMP%]{max-width:1080px;width:auto;min-width:100px;height:auto;margin:0 auto;padding-left:12px;padding-right:12px}.social-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;display:inline-block}.social-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-family:Genericons;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;padding:2px 3px;border-radius:2px;font-size:21px;color:var(--comboD-fg);transition:.3s ease-out;vertical-align:top;text-align:center;font-style:normal;font-weight:400;font-variant:normal;line-height:1;text-decoration:inherit;text-transform:none;speak:none}.social-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.facebook[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"\\24D5"}.social-icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"\\0024e3"}nav[_ngcontent-%COMP%]{display:block;width:100%;height:auto;position:fixed;left:0;background-color:var(--comboB-bg);z-index:1000}nav[_ngcontent-%COMP%]   .nav-heading[_ngcontent-%COMP%]{margin:0 auto;display:block;font-size:23px;float:left;width:85%;padding:5px 5px 5px 15%;color:var(--comboB-fg)}nav[_ngcontent-%COMP%]   .nav-heading[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   div.nav-mobile[_ngcontent-%COMP%]{text-align:center;text-decoration:none}nav[_ngcontent-%COMP%]   div.nav-mobile[_ngcontent-%COMP%]{float:right;padding:8px 12px;font-size:20px;color:#fff;width:15%}nav[_ngcontent-%COMP%]   div.nav-mobile[_ngcontent-%COMP%]:after{content:"\\2630"}.nav-links[_ngcontent-%COMP%]{clear:both;display:none}nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;padding:10px;background-color:var(--comboB-bg);color:#f5eded;font-size:17px;display:block;border-bottom:1px solid #000}nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border:0}footer[_ngcontent-%COMP%]{font-size:12px;padding:20px 20px 20px 0;border-top:1px dashed #6c5a5a;color:var(--main-c)}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}article[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:30px}.contant-bar[_ngcontent-%COMP%] > main[_ngcontent-%COMP%], .site-bar[_ngcontent-%COMP%] > aside[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 1px 2px rgba(0,0,0,.2)}.contant-bar[_ngcontent-%COMP%], .site-bar[_ngcontent-%COMP%]{padding-top:60px;padding-bottom:15px;margin-top:0}.contant-bar[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding:0 15px}input[type=date][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%]{display:inline-block;position:relative}input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator, input[type=time][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{background:transparent;bottom:0;color:transparent;cursor:pointer;height:auto;left:0;position:absolute;right:0;top:0;width:auto}article.site-title[_ngcontent-%COMP%]{padding-bottom:0}.post-title[_ngcontent-%COMP%]{display:none}@media (min-width:768px){.d-md-block[_ngcontent-%COMP%]{display:block!important}.contant-bar[_ngcontent-%COMP%]{padding-top:15px;margin-top:0}.page-wrapper[_ngcontent-%COMP%]{background-color:#e4dfda;padding-right:12px;padding-left:12px}body[_ngcontent-%COMP%]{background-color:#a09595}.nav-links[_ngcontent-%COMP%]{display:block}nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left;border:0;padding-left:20px;padding-right:20px}nav[_ngcontent-%COMP%]{display:flex;position:static;background-color:var(--comboB-bg);width:100%}nav[_ngcontent-%COMP%]   .nav-heading[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .nav-mobile[_ngcontent-%COMP%]{display:none}.site-page[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px}article.site-title[_ngcontent-%COMP%]{padding-bottom:20px}}#blog-pager[_ngcontent-%COMP%], #comments[_ngcontent-%COMP%], #pdfWrapper[_ngcontent-%COMP%], .blog-feeds[_ngcontent-%COMP%], .post-footer[_ngcontent-%COMP%]{display:none!important;visibility:hidden!important}.download-pdf[_ngcontent-%COMP%]{float:right}.bill[_ngcontent-%COMP%]{background-color:#f5f7f7;width:260px;height:100%;position:relative;padding:15px 5px;margin:30px auto}.bill[_ngcontent-%COMP%]   .fs-logo[_ngcontent-%COMP%]{position:relative}.bill[_ngcontent-%COMP%]   .fs-logo[_ngcontent-%COMP%], .bill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 auto;display:block}.bill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:myFirstFont;font-size:8.5px;font-stretch:extra-condensed;letter-spacing:-.7px;color:#212529;font-weight:400;line-height:1.2;width:95%}.bill[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]{text-align:center;padding-bottom:5px;padding-top:5px}.bill[_ngcontent-%COMP%]   .pump-name-para[_ngcontent-%COMP%]{text-align:center;padding-bottom:10px}.bill[_ngcontent-%COMP%]   .customer-name-para[_ngcontent-%COMP%], .bill[_ngcontent-%COMP%]   .nozzle-id-para[_ngcontent-%COMP%], .bill[_ngcontent-%COMP%]   .value-ltr-para[_ngcontent-%COMP%]{padding-bottom:30px}.bill[_ngcontent-%COMP%]   .thanks-para[_ngcontent-%COMP%]{padding-top:50px;text-align:center}.bill[_ngcontent-%COMP%]   .side-logo1[_ngcontent-%COMP%]{top:100px}.bill[_ngcontent-%COMP%]   .side-logo1[_ngcontent-%COMP%], .bill[_ngcontent-%COMP%]   .side-logo2[_ngcontent-%COMP%]{transform:rotate(270deg);right:-70px;width:60%;position:absolute;filter:grayscale(100%);opacity:.35;display:flex}.bill[_ngcontent-%COMP%]   .side-logo2[_ngcontent-%COMP%]{top:400px}#cstNumber[_ngcontent-%COMP%], .download-pdf[_ngcontent-%COMP%]   .spinner-grow[_ngcontent-%COMP%], p.cst-number-text[_ngcontent-%COMP%]{display:none}.validation-message[_ngcontent-%COMP%]{color:#e25656}#cstNumber[_ngcontent-%COMP%]{margin-bottom:30px}.template-2[_ngcontent-%COMP%]   .bill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#727578;position:relative}.template-2[_ngcontent-%COMP%]   p.template-overlay[_ngcontent-%COMP%]{position:absolute;font-size:20px;transform:rotate(268deg);-webkit-transform:rotate(312deg);font-family:Arial,Helvetica,sans-serif;color:#e7e3e3;word-spacing:55px;text-align:center;margin-top:100px}.template-2[_ngcontent-%COMP%]   p.template-overlay.overlay-2[_ngcontent-%COMP%]{margin-top:250px}.template-2[_ngcontent-%COMP%]   p.template-overlay.overlay-3[_ngcontent-%COMP%]{margin-top:400px}.template-2[_ngcontent-%COMP%]   .bill[_ngcontent-%COMP%]{background-image:url(texture-2.143b7cf74b2beffc0d28.webp);background-repeat:round;position:relative;padding:5px}.template-2[_ngcontent-%COMP%]   .bill[_ngcontent-%COMP%]:after{top:14px}.template-2[_ngcontent-%COMP%]   .bill[_ngcontent-%COMP%]:after, .template-2[_ngcontent-%COMP%]   .bill[_ngcontent-%COMP%]:before{background:linear-gradient(-53deg,transparent 16px,#f0eded 0),linear-gradient(34deg,transparent 14px,#f0eded 0);background-repeat:repeat-x;background-position:0 100%;background-size:22px 32px;content:"";display:block;width:calc(100% + 10px);height:10px;position:relative;left:0;margin-left:-5px}.template-2[_ngcontent-%COMP%]   .bill[_ngcontent-%COMP%]:before{top:-15px;transform:rotateX(180deg)}.template-2[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{display:none;width:260px;height:auto;margin:0 auto}#blog-pager[_ngcontent-%COMP%], #comments[_ngcontent-%COMP%], .blog-feeds[_ngcontent-%COMP%], .date-header[_ngcontent-%COMP%], .post-feeds[_ngcontent-%COMP%], .post-footer[_ngcontent-%COMP%], .template-2[_ngcontent-%COMP%]   .bill[_ngcontent-%COMP%]{display:none}.bill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}']}),o)}],d=((l=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=r.Cb({type:l}),l.\u0275inj=r.Bb({factory:function(t){return new(t||l)},imports:[[c.b.forChild(b)],c.b]}),l),p=((a=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=r.Cb({type:a}),a.\u0275inj=r.Bb({factory:function(t){return new(t||a)},imports:[[i.b,d]]}),a)}}]);