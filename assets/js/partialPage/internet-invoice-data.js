var internetInvoiceData = {
    "form-controls":`                    <div class="col-md-12 mt-3 description-wrap">
    <label for="i-description" class="form-label">Description</label>
    <textarea id="i-description" rows="3" class="form-control"></textarea>
    
</div>

<div class="col-md-6 mt-3">
    <label for="ac-number" class="form-label">Bill Acount Number</label>
    <input class="form-control" id="ac-number" type="text" />
    
</div>
<div class="col-md-6 mt-3">
    <label for="ii-date" class="form-label">Billing Date</label>
    <input id="ii-date" type="date" class="form-control">
    
</div>

<div class="col-12">
    <label class="form-label mt-4 mb-4 fw-bold">Customer Details:</label>
</div>
<div class="col-md-6 mt-3">
    <label for="c-name" class="form-label">Customer Name</label>
    <input id="c-name" type="text" class="form-control">
    
</div>
<div class="col-md-6 mt-3">
    <label for="c-address" class="form-label">Customer Address</label>
    <input id="c-address" type="text" class="form-control">
    
</div>

<div class="col-12">
    <label class="form-label mt-4 mb-4 fw-bold">Internet Service Provider Plan Details:</label>
</div>
<div class="col-md-12 mt-3">
    <label for="plan-speed" class="form-label">Tarrif Plan Speed</label>
    <select id="plan-speed" class="form-select">
        <option>Select One</option>
        <option value="10Mbps">10Mbps</option>
        <option value="20Mbps">20Mbps</option>
        <option value="40Mbps">40Mbps</option>
        <option value="50Mbps">50Mbps</option>
        <option value="100Mbps">100Mbps</option>
        <option value="150Mbps">150Mbps</option>
        <option value="200Mbps">200Mbps</option>
        <option value="500Mbps">500Mbps</option>
        <option value="1Gbps">1Gbps</option>
    </select>
    
</div>
<div class="col-md-6 mt-3">
    <label for="plan-package" class="form-label">Tarrif Plan Package</label>
    <select id="plan-package" class="form-select">
        <option>Select One</option>
        <option value="Limited">Limited</option>
        <option value="Unlimited">Unlimited</option>
        <option value="FUP">FUP</option>
    </select>
    
</div>
<div class="col-md-6 mt-3">
    <label for="tarrif-plan" class="form-label">Tarrif Plan</label>
    <select id="tarrif-plan" class="form-select">
        <option>Select One</option>
        <option value="Monthly">Monthly</option>
        <option value="Quarterly">Quarterly</option>
        <option value="Half Year">Half Year</option>
        <option value="Annual">Annual</option>
    </select>
    
</div>
<div class="col-12">
    <label class="form-label mt-4 mb-4 fw-bold">Payment Details:</label>
</div>
<div class="col-md-6 mt-3">
    <label for="payment-method" class="form-label">Payment Method</label>
    <select id="payment-method" class="form-select">
        <option>Select One</option>
        <option value="Cash">Cash</option>
        <option value="Online">Online</option>
        <option value="Check">Check</option>
    </select>
    
</div>
<div class="col-md-6 mt-3">
    <label for="total-amount" class="form-label">Total Plan Amount</label>
    <input id="total-amount" placeholder="" value="100" type="text" class="form-control">
    
</div>
<div class="col-12 mt-3">
    <div com-fm="tax" class="com-wrapper v2 close">
        <div class="com-container">
            <div class="com-header d-none">
                <div class="row">
                    <div class="col-8">
                        <label class="form-label">Tax &amp; Discount</label>
                    </div>
                    <!-- <div class="col-4 text-end">
                        <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                    </div> -->
                </div>


            </div>
            <div class="com-sub-header">
                <div class="row justify-content-between">
                    <div class="col-auto">
                        <label class="form-label fw-bold mb-0">Tax</label>
                    </div>
                    <div class="col-auto">
                        <div class="row">
                            <div class="col-auto">
                                <button class="com-clear"><i class="bi bi-eraser"></i><span class="ps-1">Clear</span></button>
                            </div>
                            <div class="col-auto">
                                <div title="Remove Logo" class="form-check mb-0">
                                    <input id="tax-disable" type="checkbox" class="form-check-input com-disable">
                                    <label for="tax-disable" class="form-check-label">Disable</label>
                                </div>
                            </div>
                            <div class="col-auto pe-2 ps-0">
                                <button title="Toggle Tab" class="com-close"><i class="bi bi-dash-lg"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="com-body pb-0">
                <div class="border-bottom pb-3 row">

                    <div class="col-12 col-lg-6">
                        <label class="form-label mt-2" for="field-value-tax">Total Tax</label>
                        
                    </div>
                    <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                        
                        <input class="form-control" data-fm="field-value-tax" id="field-value-tax" value="18" type="text">
                    </div>
                

                </div>
                <div class="border-bottom pb-3 row mt-2">

                    <div class="col-12 col-lg-6">
                        <label class="form-label label-none" for="field-name-cgst">Field Name</label>
                        <input class="form-control" data-fm="field-name-cgst" id="field-name-cgst" type="text">
                    </div>

                    <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                        <label class="form-label label-none" for="field-value-cgst">value</label>
                        <input class="form-control" disabled data-fm="field-value-cgst" id="field-value-cgst" type="text">
                    </div>

                    <div class="col-6 mt-3">
                        <label class="form-label label-none" for="field-name-cgstinr">Field Name</label>
                        <input class="form-control" data-fm="field-name-cgstinr" id="field-name-cgstinr" type="text">
                    </div>
                    <div class="col-6 mt-3">
                        
                        <input class="form-control" disabled data-fm="field-value-cgstinr" id="field-value-cgstinr" type="text">
                    </div>
                    <!-- <div class="col-12">
                        <div class="float-end pt-3">
                            <input type="checkbox" checked="" id="tax-cgst-check" data-fm="tax-cgst-check" class="form-check-input">
                            <label class="label-none" for="tax-cgst-check">h</label>
                        </div>
                    </div> -->
            


                </div>
                <div class="pb-3 mt-3 row">

                    <div class="col-12 col-lg-6">
                        <label class="form-label label-none" for="field-name-sgst">Field Name</label>
                        <input class="form-control" data-fm="field-name-sgst" id="field-name-sgst" type="text">
                    </div>
                    <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                        <label class="form-label label-none" for="field-value-sgst">Value</label>
                        <input class="form-control" data-fm="field-value-sgst" disabled id="field-value-sgst" type="text">
                    </div>


                    <div class="col-6 mt-3">
                        <label class="form-label label-none" for="field-name-sgstinr">Field Name</label>
                        <input class="form-control" data-fm="field-name-sgstinr" id="field-name-sgstinr" type="text">
                    </div>
                    <div class="col-6 mt-3">
                        <label class="form-label label-none" for="field-value-sgstinr">Field Name</label>
                        <input class="form-control" data-fm="field-value-sgstinr" disabled id="field-value-sgstinr" type="text">
                    </div>
         
                

                </div>
            </div>

        </div>
    </div>
</div>
<div class="col-12 mt-3">
    <div com-fm="currency" class="com-wrapper v2 disable">
        <div class="com-container">
            <div class="com-header d-none">
                <div class="row">
                    <div class="col-8">
                        <label class="form-label">Currency</label>
                    </div>
                    <!-- <div class="col-4 text-end">
                        <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                    </div> -->
                </div>


            </div>
            <div class="com-sub-header">
                <div class="row justify-content-between">
                    <div class="col-auto">
                        <label class="form-label fw-bold mb-0">Currency</label>
                    </div>
                    <div class="col-auto">
                        <div class="row">
                            <div class="col-auto">
                                <div class="float-end form-check mb-0">
                                    <input id="currency-disable" class="form-check-input com-disable" type="checkbox">
                                    <label for="currency-disable" class="form-check-label">Disable</label>
                                </div>
                            </div>
                            <div class="col-auto pe-2 ps-0"><button title="Toggle Tab" class="com-close"><i
                                        class="bi bi-dash-lg bi-plus-lg"></i></button>
                            </div>
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
</div>


<div class="col-md-12 mt-3">
    <button id="download-pdf" class="btn btn-success mx-auto download-pdf" type="button">
        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        <span class="download-text">Download</span>
    </button>
</div>`,
    "com-logo":`   <div class="col-12">
    <div com-fm="logo" class="com-wrapper v2">
        <div class="com-container">
            <div class="com-header d-none">
                <div class="row">
                    <div class="col-8">
                        <label class="form-label">Logo</label>
                    </div>
                 
                </div>


            </div>
          
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
                                <div class="col-auto pe-2 ps-0">
                                  
                                        <button title="Toggle Tab" class="com-close"><i class="bi bi-dash-lg bi-plus-lg"></i></button>
                                    
                                </div>
                            </div>
                        </div>
                    
                        
                    </div>
                </div>
                <div class="com-body">
                    <div class="row pt-2">
                        <div class="col-6">
                            <div class="form-check">
                                <input class="form-check-input" checked id="logo-airtel" name="ii-logo" type="radio" />
                                <label for="logo-airtel" class="form-check-label">Airtel</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-check">
                                <input class="form-check-input" id="logo-vodafone" name="ii-logo" type="radio" />
                                <label for="logo-vodafone" class="form-check-label">Vodafone</label>
                            </div>
                        </div>
                        <div class="col-6 mt-2">
                            <div class="form-check">
                                <input class="form-check-input" id="logo-jio" name="ii-logo" type="radio" />
                                <label for="logo-jio" class="form-check-label">Jio</label>
                            </div>
                        </div>
                        <div class="col-6 mt-2">
                            <div class="form-check">
                                <input class="form-check-input" id="logo-hathway" name="ii-logo" type="radio" />
                                <label for="logo-hathway" class="form-check-label">Hathway</label>
                            </div>
                        </div>
                        <div class="col-6 mt-2">
                            <div class="form-check">
                                <input class="form-check-input" id="logo-act" name="ii-logo" type="radio" />
                                <label for="logo-act" class="form-check-label">Act</label>
                            </div>
                        </div>
                        <div class="col-6 mt-2">
                            <div class="form-check">
                                <input class="form-check-input" id="logo-general" name="ii-logo" type="radio" />
                                <label for="logo-general" class="form-check-label">General</label>
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
         
        </div>
    </div>
</div>`,
"ii-logo":`
<div com-tm="logo">
        <img data-tm="logo" class="logo" alt="Airtel Logo" src="${server.imagePath}/internet-invoice/logo-airtel.png">
    </div>
`,
"template-2":`<div data-tm="template-2" tabindex="0"
class="templates template-2 ii-template-container shadow">

<div class="ii-slip">

    <div class="row">
        <div class="col-12">
            <p style="margin-top: -20px;
        margin-right: -15px;" class="text-end fw-bold ">(Receipt for the Recipient)</p>
        </div>
        <div class="col-4">
            <!-- <div data-dynamic="template-2"></div> -->
            <div style=" position: relative;    width: 140px;
                                                height: 170px;
                                                background-color: white;
                                                margin-left: -20px;
                                                margin-top: -20px;
                                                border-bottom-right-radius: 8px;
                                                text-align: center;
                                                padding-top: 30px;
                                            ">
                                            <img data-tm="ii-logo" alt="A Airtel Logo"
                                            src="${server.imagePath}/internet-invoice/logo-airtel.png" />
                <div style="position: absolute;     position: absolute;
            width: 100%;
            text-align: left;
            padding-left: 17px;
            bottom: 0;
            padding-bottom: 5px;
        ">
                    <p class="mt-2 fw-bold" data-tm="provider-name"></p>
                    <p class="fw-bold" data-tm="provider-address"></p>
                </div>

            </div>


        </div>

        <div class="col-4 mt-5 fw-bold">
            <p>
                <span>Name: </span><span data-tm="c-name"></span>
            </p>
            <p>
                <span data-tm="c-address"></span>
            </p>
            <p>
                <span>Account Number: </span><span data-tm="ac-number"></span>
            </p>
        </div>
        <div class="col-4 text-end mt-5 fw-bold">

            <p><span>Invoice No: </span> <span data-tm="receipt-number"></span>
            </p>
            <p><span>Account No: </span> <span data-tm="ac-number"></span>
            </p>
            <p><span>Bill Date: </span> <span data-tm="ii-date"></span></p>
        </div>

    </div>
    <div class="row mt-3">
        <div class="col-12">
            <table class="table-one">
                <tr class="head">
                    <td>Taxble Amount</td>
                    <td>CGST Rate%</td>
                    <td>CGST Amount <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span></td>
                    <td>SGST Rate%</td>
                    <td>SGST Amount <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span></td>
                    <td>Payments Received <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span></td>
                </tr>
                <tr>
                    <td><span data-tm="taxable-amount"></span></td>
                    <td>9%</td>
                    <td><span data-tm="gst-amount"></span></td>
                    <td>9%</td>
                    <td><span data-tm="gst-amount"></span></td>
                    <td><span data-tm="total-amount"></span></td>
                </tr>
            </table>
            <table class="table-two">
                <tr>
                    <td>Service Plan Summary</td>
                    <td>Account No: <span data-tm="ac-number"></span></td>
                    <td>User Name: <span data-tm="c-name"></span></td>
                </tr>

            </table>
            <div class="row">
                <table class="table-three">
                    <tr class="head">
                        <td>Plan Speed</td>
                        <td>Plan Package</td>
                        <td>Plan Validity</td>
                        <td>Discount</td>
                        <td>Plan Amount</td>
                    </tr>
                    <tr>
                        <td><span data-tm="plan-speed"></span></td>
                        <td><span data-tm="plan-package"></span></td>
                        <td><span data-tm="tarrif-plan"></span></td>
                        <td>0</td>
                        <td><span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="total-amount"></span></td>
                    </tr>

                </table>
            </div>


            <table class="table-two">
                <tr>
                    <td>Receipt Details</td>
                    <td>Account No: <span data-tm="ac-number"></span></td>
                    <td>User Name: <span data-tm="c-name"></span></td>
                </tr>

            </table>
            <div class="row">
                <table class="table-three">
                    <tr class="head">
                        <td>Invoice No.</td>
                        <td>Internet Service Description</td>
                        <td>Amount Incl. Tax</td>

                    </tr>
                    <tr>
                        <td><span data-tm="receipt-number"></span></td>
                        <td><span data-tm="i-description"></span></td>
                        <td><span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="total-amount"></span></td>

                    </tr>

                </table>
            </div>

        </div>
        <div class="col-12">
            <p class="text-center mt-5">Registered office address: <span data-tm="provider-address"></span>.</p>
            <table class="table-terms">
                <tr>
                    <td>Terms and Conditions</td>
                </tr>
                <tr>
                    <td class="pt-3">1. Cheques to be in favour of "<span data-tm='provider-name'></span>".</td>
                </tr>
                <tr>
                    <td>2. In case of cheque bounce, <span com-tm="currency" class="d-none"><span data-tm="currency" class="pe-1"></span></span> 100/- penalty will be applicable.
                    </td>
                </tr>
                <tr>
                    <td>3. <span data-tm='provider-name'></span> Shall levy late fee charge in case the bill is paid after the
                        due date</td>
                </tr>
                <tr>
                    <td>4. In case of overdue, the right to deactivate your services, is
                        reserved.</td>
                </tr>
                <tr>
                    <td>5. This Invoice is system generated hence signature and stamp is
                        not required</td>
                </tr>
            </table>
            <table class="table-ak">
                <tr>
                    <td colspan="3">
                        Acknowledgement Slip
                    </td>

                </tr>
                <tr>
                    <td>AccountNo : <span data-tm="ac-number"></span></td>
                    <td>
                        Subscriber Name : <span data-tm="c-name"></span>
                    </td>
                    <td>
                        Payment Method : <span data-tm="payment-method"></span>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" class="ps-4 text-start">Invoice No : <span data-tm="receipt-number"></span></td>
                </tr>
            </table>
        </div>


    </div>
</div>
</div>`,
"template-3":`  <div data-tm="template-3" tabindex="0" class="templates template-3 ii-template-container shadow">
                            
<div class="ii-slip">

    <div class="row">
        <div class="col-12 logo-wrapper">
        <div com-tm="logo">
        <img data-tm="logo" class="logo" alt="Airtel Logo" src="${server.imagePath}/internet-invoice/logo-airtel.png">
    </div>
            
        </div>


        <div class="col-6 mt-4">
            <p class="fw-bold">
                <span>Hello, </span><span data-tm="c-name"></span>,
            </p>
            <p class="mt-3">
                <span data-tm="c-address"></span>
            </p>
        </div>
        <div class="col-6 text-end mt-4">
        
            <p><span>Invoice No: </span> <span data-tm="receipt-number"></span>
            </p>
            <p class="mt-3"><span>Date: </span> <span data-tm="ii-date"></span></p>
            <p><span>Billing Cycle: </span> <span data-tm="tarrif-plan"></span></p>
        </div>

    </div>

    <div class="row mt-3 ps-4">
        <div class="col-2">
            <img class="carder" src="${server.imagePath}/internet-invoice/card.png" />
        </div>
        <div class="col-2 ps-0">
            <p class="fw-bold" data-tm="provider-name"></p>
            <p data-tm="provider-address"></p>
        </div>
        <div class="col-3">
            <p>Invoice Total: <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span class="fw-bold" data-tm="total-amount"></span></p>
            <p>Payment Method: <span class="fw-bold" data-tm="payment-method"></span></p>
        </div>
        <div class="col-3">
            <p>Currency: <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span></p>
            <p>Bill Account Number: <span class="fw-bold" data-tm="ac-number"></span></p>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12">
            <table class="table-one">
                <tr class="head">
                    <td class="text-end">Taxble Amount</td>
                    <td data-tm="field-name-cgst">CGST Rate%</td>
                    <td><span data-tm="field-name-cgstinr">CGST Amount</span> <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span></td>
                    <td><span data-tm="field-name-sgst">SGST Rate%</span</td>
                    <td><span data-tm="field-name-sgstinr"> SGST Amount</span> <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span></td>
                    <td>Payments Received <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span></td>
                </tr>
                <tr>
                    <td><span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="taxable-amount"></span></td>
                    <td>9%</td>
                    <td><span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="gst-amount"></span></td>
                    <td>9%</td>
                    <td><span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="gst-amount"></span></td>
                    <td><span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="total-amount"></span></td>
                </tr>
            </table>
        
            <p class="mt-5 head-t">Service Plan Summary</p>
        
            <table class="table-three">
                <tr class="head">
                    <td>Plan Speed</td>
                    <td>Plan Package</td>
                    <td>Plan Validity</td>
                    <td>Discount</td>
                    <td>Plan Amount</td>
                </tr>
                <tr>
                    <td><span data-tm="plan-speed"></span></td>
                    <td><span data-tm="plan-package"></span></td>
                    <td><span data-tm="tarrif-plan"></span></td>
                    <td>0</td>
                    <td><span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="total-amount"></span></td>
                </tr>
        
            </table>

            <div class="table-terms">
                <p>Terms and Conditions</p>
                <table >
           
                    <tr>
                        <td class="pt-3">1. Cheques to be in favour of "<span data-tm='provider-name'></span>".</td>
                    </tr>
                    <tr>
                        <td>2. In case of cheque bounce, <span com-tm="currency" class="d-none"><span data-tm="currency" class="pe-1"></span></span> 100/- penalty will be applicable.
                        </td>
                    </tr>
                    <tr>
                        <td>3. <span data-tm='provider-name'></span> Shall levy late fee charge in case the bill is paid
                            after the
                            due date</td>
                    </tr>
                    <tr>
                        <td>4. In case of overdue, the right to deactivate your services, is
                            reserved.</td>
                    </tr>
                    <tr>
                        <td>5. This Invoice is system generated hence signature and stamp is
                            not required</td>
                    </tr>
                </table>
            </div>
       
        
        </div>
    </div>
</div>
</div>`,
"template-1":`  <div data-tm="template-1" tabindex="0"
class="templates template-1 ii-template-container shadow ">

<div class="ii-slip">


    <p class="header">Internet Invoice</p>
    <div class="row">
        <div class="col-6 mt-3">
        <div com-tm="logo">
        <img data-tm="logo" class="logo" alt="Airtel Logo" src="${server.imagePath}/internet-invoice/logo-airtel.png">
    </div>
           
        </div>
        <div class="col-6 text-end mt-3">
            <p class="fw-bolder">Receipt Details</p>
            <p class="mt-2"><span class="fw-bold ">Receipt Number: </span> <span
                    data-tm="receipt-number">IN9842</span></p>
            <p><span class="fw-bold">Date: </span> <span data-tm="ii-date"></span></p>
        </div>

    </div>
    <div class="row mt-3">
        <div class="col-6">

            <p class="fw-bolder">
                Billed To,
            </p>
            <p class="mt-2">
                <span class="fw-bold">Customer Name: </span><span
                    data-tm="c-name"></span>
            </p>
            <p>
                <span class="fw-bold">Customer Address: </span> <span
                    data-tm="c-address"></span>
            </p>
            <p>
                <span class="fw-bold">Bill Account Number: </span><span
                    data-tm="ac-number"></span>
            </p>

        </div>
        <div class="col-6 text-end">
            <p class="fw-bold">Internet Provider Details</p>
            <p class="mt-2" data-tm="provider-name"></p>
            <p data-tm="provider-address"></p>
            <p>Billing Cycle: <span data-tm="tarrif-plan"></span></p>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-6">
            <p class="fw-bold">Payment Method</p>
            <p data-tm="payment-method"></p>
        </div>
        <div class="col-6 text-end">
            <p class="fw-bold">Receipt Date</p>
            <p data-tm="ii-date"></p>
        </div>

    </div>
    <div class="row">
        <div class="col-12">
            <p class="bg-body-secondary fw-bold mt-3 p-2">
                Service Plan Summary
            </p>
        </div>
    </div>
    <div class="plan-sum border-bottom border-top row">

        <div class="col-3">
            <p>Plan Speed</p>

        </div>
        <div class="col-3">
            <p>Plan Package</p>

        </div>
        <div class="col-3">
            <p>Plan Validity</p>

        </div>
        <div class="col-3">
            <p>Plan Amount</p>

        </div>
    </div>
    <div class="border-bottom me-0 ms-0 p-2 row">
        <div class="col-3"><span data-tm="plan-speed"></span></div>
        <div class="col-3"><span data-tm="plan-package"></span></div>
        <div class="col-3"><span data-tm="tarrif-plan"></span></div>
        <div class="col-3 text-center"><span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="total-amount"></span></div>
    </div>
    <div class="border-bottom me-0 ms-0 p-2 row">

        <div class="text-end">
            <p>Total: <span com-tm="currency" class="d-none"><span data-tm="currency"></span></span> <span data-tm="total-amount"></span>
            </p>
        </div>
    </div>
    <p class="fw-bold p-4 text-center">ALL PAYMENTS TO BE MADE IN FAVOUR OF <span
            data-tm="provider-name" class="text-uppercase"></span></p>

    <p class="p-4 pt-0 text-center">THIS IS A COMPUTER GENERATED INVOICE AND DOES NOT
        REQUIRE ANY SIGNATURE</p>

</div>
</div>`,
"modal":`   <div class="modal fade template-modal ii-modal" id="ii-modal" tabindex="-1"
aria-labelledby="ii-modal-view">
<div class="modal-dialog modal-fullscreen">
    <div class="modal-content">

        <div class="modal-body">

        </div>
        <div class="modal-footer d-block d-md-none text-end bg-body">
            <button type="button" class="btn btn-success"
                data-bs-dismiss="modal">Close</button>
        </div>
    </div>
</div>
</div>`
}
