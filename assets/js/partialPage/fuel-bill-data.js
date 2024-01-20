var template ={
        "logo-tm":`   <div com-tm="logo">
        <img data-tm="logo" class="logo" alt="Fuel Bill Logo" src="../../../../assets/images/bill/pump-logo-bharat-petroleum.webp">
    </div>`,
        "logo":`    <div class="col-12">
        <div com-fm="logo" class="com-wrapper">
            <div class="com-container">
                <div class="com-header d-none">
                    <div class="row">
                        <div class="col-8">
                            <label class="form-label">Logo</label>
                        </div>
                        <div class="col-4 text-end">
                            <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                        </div>
                    </div>
    
    
                </div>
                <!-- <div class="custom-box"> -->
                    <div class="com-sub-header">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <label class="form-label fw-bold mb-0">Logo</label>
                            </div>
                            <div class="col-auto">
                                <div class="row">
                                    <div class="col-auto">
                                        <button class="com-clear"><i class="bi bi-eraser"></i>
                                            <span class="ps-1">Clear</span></button>
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-check mb-0" title="Remove Logo">
                                            <input id="logo-disable" class="form-check-input com-disable" type="checkbox">
                                            <label for="logo-disable" class="form-check-label">Disable</label>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                        
                            
                        </div>
                    </div>
                    <div class="com-body">
                        <div class="row pt-2">
                            <div class="col-12 col-lg-6">
                                <div class="form-check">
                                    <input class="form-check-input" checked id="pump-logo-bharat-petroleum" name="fs-logo"
                                        type="radio" />
                                    <label for="pump-logo-bharat-petroleum" class="form-check-label">Bharat
                                        Petroleum</label>
                                </div>
                            </div>
                            <div class="col-12 mt-3 col-lg-6 mt-lg-0">
                                <div class="form-check">
                                    <input class="form-check-input" id="pump-logo-indian-oil" name="fs-logo" type="radio" />
                                    <label for="pump-logo-indian-oil" class="form-check-label">Indian Oil</label>
                                </div>
                            </div>
                            <div class="col-12 mt-3 col-lg-6">
                                <div class="form-check">
                                    <input class="form-check-input" id="pump-logo-hp" name="fs-logo" type="radio" />
                                    <label for="pump-logo-hp" class="form-check-label">HP Oil</label>
                                </div>
                            </div>
                            <div class="col-12 mt-3 col-lg-6">
                                <div class="form-check">
                                    <input class="form-check-input" id="pump-logo-essar-oil" name="fs-logo" type="radio" />
                                    <label for="pump-logo-essar-oil" class="form-check-label">Essar Oil</label>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
        
                                <label for="logo-upload" class="form-label label-none">Upload</label>
                                <div class="input-group">
                                    <input type="file" class="form-control" data-fm="upload" id="logo-upload">
        
                                </div>
                                <label for="logo-url" class="form-label text-center  label-none">h</label>
                                <div class="input-group mt-4">
        
                                    <span class="input-group-text">
                                        URL
                                    </span>
                                    <input type="text" id="logo-url" data-fm="url" class="form-control">
        
                                </div>
                            </div>
                        </div>
        
                    </div>
                <!-- </div> -->
            </div>
        </div>
    </div>`,
    "form-controls":`
  
    <div class="col-lg-6 col-md-12 mt-3">
        <label for="fs-fuel-rate" class="form-label">Fuel Rate</label>
        <input class="form-control" id="fs-fuel-rate" type="number" />
        
    </div>
    <div class="col-lg-6 col-md-12 mt-3">
        <label for="fs-amount" class="form-label">Total Amount</label>
        <input class="form-control" id="fs-amount" type="number" />
        
    </div>
    <div class="col-lg-6 col-md-12 mt-3">
        <label for="fs-date" class="form-label">Fuel Bill Date</label>
        <input class="form-control" id="fs-date" placeholder="" type="date" />
        
    </div>
    <div class="col-lg-6 col-md-12 mt-3">
        <label for="fs-time" class="form-label">Fuel Bill Time</label>
        <input class="form-control" id="fs-time" placeholder="" type="time" />
        
    </div>
    <div class="col-md-12 mt-3">
        <label for="u-name" class="form-label">Customer Name</label>
        <input class="form-control" id="u-name" type="text" />
        
    </div>
    <div class="col-lg-6 col-md-12 mt-3">
        <label for="u-vechicle-number" class="form-label">Vehicle Number</label>
        <input class="form-control" id="u-vechicle-number" type="text" />
        
    </div>
    <div class="col-lg-6 col-md-12 mt-3">
        <!-- select box -->

        <label for="u-vehicle-type" class="form-label">Vehicle Type</label>
        <select class="form-select" id="u-vehicle-type">
            <option>Petrol</option>
            <option>Deisel</option>
            <option>CNG</option>
            <option>Electric</option>
        </select>
        
    </div>
    <div class="col-lg-6 col-md-12 mt-3">
        <label for="u-payment-type" class="form-label">Payment Type</label>
        <select class="form-select" id="u-payment-type">
            <option>Cash</option>
            <option>Online</option>
            <option>Debit Card</option>
        </select>
        
    </div>
    <div class="col-lg-6 col-md-12 mt-3">
        <label for="fs-receipt-number" class="form-label">Receipt Number</label>
        <input class="form-control" id="fs-receipt-number" type="text" />
       
    </div>


    <div class="col-12 mt-3">
        <div class="row">

      

    <div class="col-md-3 mt-3 gst-wrapper">
        <div class="form-check">
            <input class="form-check-input" checked id="vat-none" name="vat-type" type="radio">
            <label for="vat-none" class="form-check-label">None</label>
        </div>
    </div>
    <div class="col-4 col-md-3 mt-3 p-md-0 gst-wrapper">
        <div class="form-check">
            <input class="form-check-input" id="vat-cst" name="vat-type" type="radio">
            <label for="vat-cst" class="form-check-label">CST TIN</label>
        </div>
    </div>
    <div class="col-4 col-md-3 mt-3 p-0 gst-wrapper">
        <div class="form-check">
            <input class="form-check-input" id="vat-gst" name="vat-type" type="radio">
            <label for="vat-gst" class="form-check-label">GST TIN</label>
        </div>
    </div>
    <div class="col-4 col-md-3 mt-3 p-0 gst-wrapper">
        <div class="form-check">
            <input class="form-check-input" id="vat-tax" name="vat-type" type="radio" />
            <label for="vat-tax" class="form-check-label">TXN NO</label>
        </div>
    </div>
    <div class="col-md-12 mt-3 mb-3 gst-wrapper">
        <input class="form-control d-none" id="vat-number" type="text" value="06AAMPY6980B1Z8" />
    </div>
    </div>
    </div>

    <div class="col-12">
        <label for="fs-thank-you" class="form-label">Bottom Text</label>
        <textarea class="form-control" id="fs-thank-you">****************<br>Thank You! Visit Again<br> Save Fuel, Save Money.
        </textarea>
    </div>
    <div class="col-12 mt-3">
        <div com-fm="currency" class="com-wrapper">
            <div class="com-container">
                <div class="com-header d-none">
                    <div class="row">
                        <div class="col-8">
                            <label class="form-label">Currency</label>
                        </div>
                        <div class="col-4 text-end">
                            <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                        </div>
                    </div>


                </div>
                <div class="com-sub-header">
                    <div class="row justify-content-between">
                    <div class="col-auto">
                    <label class="form-label fw-bold mb-0">Currency</label>
                </div>
                        <div class="col-auto">
                            <div class="float-end form-check mb-0">
                                <input id="currency-disable" class="form-check-input com-disable" type="checkbox">
                                <label for="currency-disable" class="form-check-label">Disable</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="com-body">
                    <div class="row">

                        <div class="col-12">
                            <div class="currency-box-wrap">
                                <label for="search-currency" class="form-label label-none">Search</label>
                                <div class="input-group mt-2">
                                 
                                      <input data-fm="search-currency" placeholder="Search country" id="search-currency" type="text" class="form-control">
                                      <span class="input-group-text" id="basic-addon1">
                                        <i class="bi bi-search"></i>
                                      </span>
                                </div>
                               
                                <div class="search-currency-box d-none" data-fm="search-currency-box">
                                </div>
                            </div>

                        </div>
                        <div class="col-12 mt-4">
                            <label for="select-currency" class="form-label label-none">Select</label>
                            <select data-fm="select-currency" id="select-currency" class="form-select">
                                <option value="">Select</option>
                                <option value="AFN">Afghan Afghani - ؋</option>
                                <option value="ALL">Albanian Lek - Lek</option>
                                <option value="DZD">Algerian Dinar - دج</option>
                                <option value="AOA">Angolan Kwanza - Kz</option>
                                <option value="ARS">Argentine Peso - $</option>
                                <option value="AMD">Armenian Dram - ֏</option>
                                <option value="AWG">Aruban Florin - ƒ</option>
                                <option value="AUD">Australian Dollar - $</option>
                                <option value="AZN">Azerbaijani Manat - m</option>
                                <option value="BSD">Bahamian Dollar - B$</option>
                                <option value="BHD">Bahraini Dinar - .د.ب</option>
                                <option value="BDT">Bangladeshi Taka - ৳</option>
                                <option value="BBD">Barbadian Dollar - Bds$</option>
                                <option value="BYR">Belarusian Ruble - Br</option>
                                <option value="BEF">Belgian Franc - fr</option>
                                <option value="BZD">Belize Dollar - $</option>
                                <option value="BMD">Bermudan Dollar - $</option>
                                <option value="BTN">Bhutanese Ngultrum - Nu.</option>
                                <option value="BTC">Bitcoin - ฿</option>
                                <option value="BOB">Bolivian Boliviano - Bs.</option>
                                <option value="BAM">Bosnia-Herzegovina Convertible Mark - KM</option>
                                <option value="BWP">Botswanan Pula - P</option>
                                <option value="BRL">Brazilian Real - R$</option>
                                <option value="GBP">British Pound Sterling - £</option>
                                <option value="BND">Brunei Dollar - B$</option>
                                <option value="BGN">Bulgarian Lev - Лв.</option>
                                <option value="BIF">Burundian Franc - FBu</option>
                                <option value="KHR">Cambodian Riel - KHR</option>
                                <option value="CAD">Canadian Dollar - $</option>
                                <option value="CVE">Cape Verdean Escudo - $</option>
                                <option value="KYD">Cayman Islands Dollar - $</option>
                                <option value="XOF">CFA Franc BCEAO - CFA</option>
                                <option value="XAF">CFA Franc BEAC - FCFA</option>
                                <option value="XPF">CFP Franc - ₣</option>
                                <option value="CLP">Chilean Peso - $</option>
                                <option value="CNY">Chinese Yuan - ¥</option>
                                <option value="COP">Colombian Peso - $</option>
                                <option value="KMF">Comorian Franc - CF</option>
                                <option value="CDF">Congolese Franc - FC</option>
                                <option value="CRC">Costa Rican ColÃ³n - ₡</option>
                                <option value="HRK">Croatian Kuna - kn</option>
                                <option value="CUC">Cuban Convertible Peso - $, CUC</option>
                                <option value="CZK">Czech Republic Koruna - Kč</option>
                                <option value="DKK">Danish Krone - Kr.</option>
                                <option value="DJF">Djiboutian Franc - Fdj</option>
                                <option value="DOP">Dominican Peso - $</option>
                                <option value="XCD">East Caribbean Dollar - $</option>
                                <option value="EGP">Egyptian Pound - ج.م</option>
                                <option value="ERN">Eritrean Nakfa - Nfk</option>
                                <option value="EEK">Estonian Kroon - kr</option>
                                <option value="ETB">Ethiopian Birr - Nkf</option>
                                <option value="EUR">Euro - €</option>
                                <option value="FKP">Falkland Islands Pound - £</option>
                                <option value="FJD">Fijian Dollar - FJ$</option>
                                <option value="GMD">Gambian Dalasi - D</option>
                                <option value="GEL">Georgian Lari - ლ</option>
                                <option value="DEM">German Mark - DM</option>
                                <option value="GHS">Ghanaian Cedi - GH₵</option>
                                <option value="GIP">Gibraltar Pound - £</option>
                                <option value="GRD">Greek Drachma - ₯, Δρχ, Δρ</option>
                                <option value="GTQ">Guatemalan Quetzal - Q</option>
                                <option value="GNF">Guinean Franc - FG</option>
                                <option value="GYD">Guyanaese Dollar - $</option>
                                <option value="HTG">Haitian Gourde - G</option>
                                <option value="HNL">Honduran Lempira - L</option>
                                <option value="HKD">Hong Kong Dollar - $</option>
                                <option value="HUF">Hungarian Forint - Ft</option>
                                <option value="ISK">Icelandic KrÃ³na - kr</option>
                                <option value="INR">Indian Rupee - ₹</option>
                                <option value="IDR">Indonesian Rupiah - Rp</option>
                                <option value="IRR">Iranian Rial - ﷼</option>
                                <option value="IQD">Iraqi Dinar - د.ع</option>
                                <option value="ILS">Israeli New Sheqel - ₪</option>
                                <option value="ITL">Italian Lira - L,£</option>
                                <option value="JMD">Jamaican Dollar - J$</option>
                                <option value="JPY">Japanese Yen - ¥</option>
                                <option value="JOD">Jordanian Dinar - ا.د</option>
                                <option value="KZT">Kazakhstani Tenge - лв</option>
                                <option value="KES">Kenyan Shilling - KSh</option>
                                <option value="KWD">Kuwaiti Dinar - ك.د</option>
                                <option value="KGS">Kyrgystani Som - лв</option>
                                <option value="LAK">Laotian Kip - ₭</option>
                                <option value="LVL">Latvian Lats - Ls</option>
                                <option value="LBP">Lebanese Pound - £</option>
                                <option value="LSL">Lesotho Loti - L</option>
                                <option value="LRD">Liberian Dollar - $</option>
                                <option value="LYD">Libyan Dinar - د.ل</option>
                                <option value="LTL">Lithuanian Litas - Lt</option>
                                <option value="MOP">Macanese Pataca - $</option>
                                <option value="MKD">Macedonian Denar - ден</option>
                                <option value="MGA">Malagasy Ariary - Ar</option>
                                <option value="MWK">Malawian Kwacha - MK</option>
                                <option value="MYR">Malaysian Ringgit - RM</option>
                                <option value="MVR">Maldivian Rufiyaa - Rf</option>
                                <option value="MRO">Mauritanian Ouguiya - MRU</option>
                                <option value="MUR">Mauritian Rupee - ₨</option>
                                <option value="MXN">Mexican Peso - $</option>
                                <option value="MDL">Moldovan Leu - L</option>
                                <option value="MNT">Mongolian Tugrik - ₮</option>
                                <option value="MAD">Moroccan Dirham - MAD</option>
                                <option value="MZM">Mozambican Metical - MT</option>
                                <option value="MMK">Myanmar Kyat - K</option>
                                <option value="NAD">Namibian Dollar - $</option>
                                <option value="NPR">Nepalese Rupee - ₨</option>
                                <option value="ANG">Netherlands Antillean Guilder - ƒ</option>
                                <option value="TWD">New Taiwan Dollar - $</option>
                                <option value="NZD">New Zealand Dollar - $</option>
                                <option value="NIO">Nicaraguan CÃ³rdoba - C$</option>
                                <option value="NGN">Nigerian Naira - ₦</option>
                                <option value="KPW">North Korean Won - ₩</option>
                                <option value="NOK">Norwegian Krone - kr</option>
                                <option value="OMR">Omani Rial - .ع.ر</option>
                                <option value="PKR">Pakistani Rupee - ₨</option>
                                <option value="PAB">Panamanian Balboa - B/.</option>
                                <option value="PGK">Papua New Guinean Kina - K</option>
                                <option value="PYG">Paraguayan Guarani - ₲</option>
                                <option value="PEN">Peruvian Nuevo Sol - S/.</option>
                                <option value="PHP">Philippine Peso - ₱</option>
                                <option value="PLN">Polish Zloty - zł</option>
                                <option value="QAR">Qatari Rial - ق.ر</option>
                                <option value="RON">Romanian Leu - lei</option>
                                <option value="RUB">Russian Ruble - ₽</option>
                                <option value="RWF">Rwandan Franc - FRw</option>
                                <option value="SVC">Salvadoran ColÃ³n - ₡</option>
                                <option value="WST">Samoan Tala - SAT</option>
                                <option value="SAR">Saudi Riyal - ﷼</option>
                                <option value="RSD">Serbian Dinar - din</option>
                                <option value="SCR">Seychellois Rupee - SRe</option>
                                <option value="SLL">Sierra Leonean Leone - Le</option>
                                <option value="SGD">Singapore Dollar - $</option>
                                <option value="SKK">Slovak Koruna - Sk</option>
                                <option value="SBD">Solomon Islands Dollar - Si$</option>
                                <option value="SOS">Somali Shilling - Sh.so.</option>
                                <option value="ZAR">South African Rand - R</option>
                                <option value="KRW">South Korean Won - ₩</option>
                                <option value="XDR">Special Drawing Rights - SDR</option>
                                <option value="LKR">Sri Lankan Rupee - Rs</option>
                                <option value="SHP">St. Helena Pound - £</option>
                                <option value="SDG">Sudanese Pound - .س.ج</option>
                                <option value="SRD">Surinamese Dollar - $</option>
                                <option value="SZL">Swazi Lilangeni - E</option>
                                <option value="SEK">Swedish Krona - kr</option>
                                <option value="CHF">Swiss Franc - CHf</option>
                                <option value="SYP">Syrian Pound - LS</option>
                                <option value="STD">São Tomé and Príncipe Dobra - Db</option>
                                <option value="TJS">Tajikistani Somoni - SM</option>
                                <option value="TZS">Tanzanian Shilling - TSh</option>
                                <option value="THB">Thai Baht - ฿</option>
                                <option value="TOP">Tongan pa'anga - $</option>
                                <option value="TTD">Trinidad &amp; Tobago Dollar - $</option>
                                <option value="TND">Tunisian Dinar - ت.د</option>
                                <option value="TRY">Turkish Lira - ₺</option>
                                <option value="TMT">Turkmenistani Manat - T</option>
                                <option value="UGX">Ugandan Shilling - USh</option>
                                <option value="UAH">Ukrainian Hryvnia - ₴</option>
                                <option value="AED">United Arab Emirates Dirham - إ.د</option>
                                <option value="UYU">Uruguayan Peso - $</option>
                                <option value="USD">US Dollar - $</option>
                                <option value="UZS">Uzbekistan Som - лв</option>
                                <option value="VUV">Vanuatu Vatu - VT</option>
                                <option value="VEF">Venezuelan BolÃ&shy;var - Bs</option>
                                <option value="VND">Vietnamese Dong - ₫</option>
                                <option value="YER">Yemeni Rial - ﷼</option>
                                <option value="ZMK">Zambian Kwacha - ZK</option>
                            </select>
                        </div>
                        <div class="col-6 col-md-4 mt-3">
                            <div class="form-check">
                                <input checked="" data-fm="currency-code" id="currency-code" name="currency-type" type="radio" class="form-check-input">
                                <label for="currency-code" class="form-check-label">Code</label>
                            </div>
                        </div>
                        <div class="col-6 mt-3">
                            <div class="form-check">
                                <input id="currency-symbol" data-fm="currency-symbol" name="currency-type" type="radio" class="form-check-input">
                                <label for="currency-symbol" class="form-check-label">Symbol</label>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>`,
    "code" : `    <div class="bill">
   
    <div com-tm="logo">
    <img data-tm="logo" class="logo" alt="Fuel Bill Logo" src="../../../../assets/images/bill/pump-logo-bharat-petroleum.webp">
</div>

    <img class="side-logo1" src="https://freeforonline.com/assets/images/bill/side-logo.webp" />
    <img class="side-logo2" src="https://freeforonline.com/assets/images/bill/side-logo.webp" />
    <p class="welcome">WELCOME!!! </p>
    <p class="pump-name-para"><span data-tm="fs-station-name" class="fs-station-name"></span> <span data-tm="fs-address" class="fs-address"></span></p>
    <p data-tm="vat-none" class="vat-none d-none"><span class="vat-type">CST NUMBER: </span><span data-tm="vat-number" class="vat-number"></span></p>
    <p>TEL NO: <span class="tele-number"></span>  </p>
    <p>RECEIPT NO: <span data-tm="fs-receipt-number" class="fs-receipt-number"></span></p>
    <p>FCC ID: <span class="fcc-id"></span></p>
    <p>FIP NO: <span class="fip-id"></span></p>
    <p class="nozzle-id-para">NOZZLE NO: <span class="nozzle-id"></span></p>

    <p>PRODUCT:<span class="product-type"></span></p>
    <p>RATE/LTR: <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="fs-fuel-rate" class="fs-fuel-rate"></span></p>
    <p>AMOUNT: <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="fs-amount" class="fs-amount"></span></p>
    <p class="value-ltr-para">VOLUME(LTR): <span class="value-ltr"></span> lt</p>

    <p>VEH TYPE: <span data-tm="u-vehicle-type" class="u-vehicle-type"></span></p>
    <p>VEH NO: <span data-tm="u-vechicle-number" class="u-vechicle-number"></span></p>
    <p class="customer-name-para">CUSTOMER NAME: <span aria-labeulledby="u-name" class="u-name"></span></p>
    <p>DATE: <span data-tm="fs-date" class="fs-date"></span> <span data-tm="fs-time" class="fs-time"></span></p>
    <p class="cash-mode">MODE: <span data-tm="u-payment-type" class="u-payment-type"></span></p>
    <p>LST NO: <span></span></p>
    <p>VAT NO: <span></span></p>
    <p>ATTENDENT ID: <span>not available</span></p>

    <p class="fs-thank-you" data-tm="fs-thank-you">SAVE FUEL YAANI SAVE MONEY !! THANKS FOR FUELLING WITH US. YOU CAN NOW CALL US ON <span>1800 226344</span>  (TOLL-FREE) FOR QUERIES/COMPLAINTS.</p>
</div>`,
"css":'css',
"js" : 'js',
"template-3":`           <div class="bill">
<div com-tm="logo">
<img data-tm="logo" class="logo" alt="Fuel Bill Logo" src="../../../../assets/images/bill/pump-logo-bharat-petroleum.webp">
</div>
<div class="pt-5 pb-5">


    <p data-tm="vat-none" class="vat-none d-none"><span class="vat-type">CST NUMBER:
        </span><span data-tm="vat-number" class="vat-number"></span></p>
    <p>TEL NO: <span class="tele-number"></span> </p>
    <p>RECEIPT NO: <span data-tm="fs-receipt-number"
            class="fs-receipt-number"></span>
    </p>
    <p>FCC ID: <span class="fcc-id"></span></p>
    <p>FIP NO: <span class="fip-id"></span></p>
    <p class="nozzle-id-para">NOZZLE NO: <span class="nozzle-id"></span></p>

    <p>PRODUCT:<span class="product-type"></span></p>
    <p>RATE/LTR: <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="fs-fuel-rate" class="fs-fuel-rate"></span></p>
    <p>AMOUNT: <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="fs-amount" class="fs-amount"></span></p>
    <p class="value-ltr-para">VOLUME(LTR): <span class="value-ltr"></span> lt
    </p>

    <p>VEH TYPE: <span data-tm="u-vehicle-type" class="u-vehicle-type"></span></p>
    <p>VEH NO: <span class="u-vechicle-number"></span></p>
    <p class="customer-name-para">CUSTOMER NAME: <span data-tm="u-name"
            class="u-name"></span></p>
    <p>DATE: <span data-tm="fs-date" class="fs-date"></span> <span data-tm="fs-time"
            class="fs-time"></span></p>
    <p class="cash-mode">MODE: <span data-tm="u-payment-type"
            class="u-payment-type"></span></p>
    <p>LST NO: <span></span></p>
    <p>VAT NO: <span></span></p>
    <p>ATTENDANT ID: <span>not available</span></p>

    <p class="fs-thank-you" data-tm="fs-thank-you">SAVE FUEL YAANI SAVE MONEY !! THANKS FOR FUELLING
        WITH US. YOU CAN NOW CALL US ON <span>1800 226344</span> (TOLL-FREE) FOR
        QUERIES/COMPLAINTS.</p>
</div>
</div>`

}
