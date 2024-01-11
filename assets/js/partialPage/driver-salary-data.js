var dsData = {
    "template-2": `                            <div data-tm="template-2" tabindex="0"
    class="templates template-2 ds-template-container d-none">
    <div class="ds-slip">

        <p class="fw-bold text-center">Driver Salary Receipt</p>
        <p class="fw-bold">
            Date: <span data-tm="ds-date" class="ds-date fw-normal"></span>
        </p>
        <p class="fw-bold">
            Salary of the Month: <span data-tm="ds-month" class="ds-month fw-normal"></span>
        </p>
        <p class="fw-bold">
            Vehicle No: <span data-tm="ds-vehical-number"
                class="ds-vehical-number fw-normal"></span>
        </p>

        <p class="fw-bold">
            Amount Paid: <span com-tm="currency" data-tm="currency"></span> <span class="ds-salary-amount fw-bold"
                data-tm="ds-salary-amount"></span><span class="fw-bold">/-</span>
        </p>
        <p>
            Please note that this salary slip is based on the salary disbursement for the
            month of <span data-tm="ds-month" class="ds-month fw-bold"></span>. It reflects
            the total amount of <span com-tm="currency" data-tm="currency"></span> <span class="ds-salary-amount fw-bold"
                data-tm="ds-salary-amount"></span><span class="fw-bold">/-</span> paid to
            the driver <span data-tm="ds-driver-name" class="ds-driver-name fw-bold"></span>
            and provides a breakdown of earnings and deductions, if applicable.
        </p>

        <p class="fw-bold text-end">Employee Name: <span data-tm="ds-employee-name"
                class="ds-employee-name fw-normal"></span></p>

        <p class="fw-bold text-center">Receipt Acknowledgment</p>
        <p class="fw-bold">
            Date: <span data-tm="ds-date" class="ds-date fw-normal"></span>
        </p>
        <p class="fw-bold">
            Salary of the Month: <span data-tm="ds-month" class="ds-month fw-normal"></span>
        </p>
        <p class="fw-bold">
            Amount Paid: <span com-tm="currency" data-tm="currency"></span> <span class="ds-salary-amount fw-bold"
                data-tm="ds-salary-amount"></span><span class="fw-bold">/-</span>
        </p>


        <p>


            Received a sum of <span com-tm="currency" data-tm="currency">INR</span> <span class="ds-salary-amount fw-bold"
                data-tm="ds-salary-amount"></span><span class="fw-bold">/-</span> only
            for the <span class="ds-month fw-bold" data-tm="ds-month"></span> month from Mr
            / Mrs.
            <span class="ds-employee-name fw-bold" data-tm="ds-employee-name"></span> to
            driver <span data-tm="ds-driver-name" class="ds-driver-name fw-bold"></span>
            towards salary.
        </p>
        <p class="fw-bold text-end">Driver Name: <span data-tm="ds-driver-name"
                class="ds-driver-name fw-normal"></span></p>

        <div class="row">
            <div class="col-6">
            <div data-tm="ds-stamp">
            <p>
            Revenue Stamp
        </p>
                <img alt="stamp" style="width: 60px;" class="ds-stamp "
    src="${server.imagePath}/driver-salary/revenu.webp" />
    </div>
            </div>
            <div class="col-6">
                <div class="ds-signature-wrapper">
                <img alt="signature" style="width: 100px; height: auto;"
                class="ds-signature float-end" data-tm="ds-signature"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
                </div>
            </div>

        </div>

    </div>
</div>`,
    "tm-control": `                       <p>
    Received a sum of <span com-tm="currency" data-tm="currency"
        >INR</span> <span class="ds-salary-amount fw-bold"
        data-tm="ds-salary-amount"></span><span class="fw-bold">/-</span> only
    for the <span class="ds-month fw-bold" data-tm="ds-month"></span> month from Mr
    / Mrs.
    <span class="ds-employee-name fw-bold" data-tm="ds-employee-name"></span> .
</p><div class="row">
    <div class="col-6">
        
        <div data-tm="ds-stamp">
            <p>
                Revenue Stamp
            </p>
            <img alt="stamp" style="width: 60px;" class="ds-stamp "
            src="${server.imagePath}/driver-salary/revenu.webp" />
        </div>

    </div>
    <div class="col-6">
        <div class="ds-signature-wrapper">
        <img alt="signature" style="width: 100px; height: auto;"
        class="ds-signature float-end" data-tm="ds-signature"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
        </div>
    </div>

</div>`,
   
    "ds-modal": `<div class="modal fade template-modal ds-modal" id="ds-modal" tabindex="-1"
    aria-labelledby="tester-view" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <!-- <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
        </div> -->
            <div class="modal-body">

            </div>
            <div class="modal-footer d-block text-end bg-body">
                <button type="button" class="btn btn-success"
                    data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>`,
    "ds-modal-view": `                            <button type="button" title="View Full Screen" class="btn btn-outline-secondary btn-expand" data-bs-toggle="modal"
    data-bs-target="#ds-modal" id="ds-modal-view">

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
      </svg>
    
</button>`,
"form-control": `                    <div class="col-md-12 mt-3">
<label for="ds-salary-amount" class="form-label">Salary Amount</label>
<input class="form-control" id="ds-salary-amount" type="number" />
<p class="validation-message" data-error="ds-salary-amount"></p>
</div>
<div class="col-md-12 mt-3">
<label for="ds-date" class="form-label">Salary Date</label>
<input class="form-control" id="ds-date" placeholder="" type="date" />
<p class="validation-message" data-error="ds-date"></p>
</div>
<div class="col-md-12 mt-3">
<label for="ds-month" class="form-label">Salary Month</label>
<select id="ds-month" class="form-select">
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
</select>
<p class="validation-message" data-error="ds-month"></p>
</div>
<div class="col-12 mt-3">
<div com-fm="currency" class="com-wrapper disable">
    <div class="com-container">
        <div class="com-header">
            <div class="row">
                <div class="col-8">
                    <label class="form-label">Currency</label>
                </div>
                <div class="col-4 text-end">
                    <button class="com-close" title="Toggle"><i class="bi bi-dash bi-plus"></i></button>
                </div>
            </div>


        </div>
        <div class="com-sub-header">
            <div class="row">
                <div class="col-12">
                    <div class="float-end form-check mb-0">
                        <input id="com-disable" class="form-check-input com-disable" type="checkbox">
                        <label for="com-disable" class="form-check-label">Disable</label>
                    </div>

                </div>
            </div>
        </div>
        <div class="com-body">
            <div class="row">

                <div class="col-12">
                    <div class="currency-box-wrap">
                        <label for="search-currency" class="form-label">Search</label>
                        <input data-fm="search-currency" id="search-currency" placeholder='Country name...' type="text" class="form-control">
             
                        <div class="search-currency-box d-none" data-fm="search-currency-box">
                        </div>
                    </div>

                </div>
                <div class="col-12 mt-3">
                    <label for="select-currency" class="form-label">OR Select</label>
                    <select data-fm="select-currency" id="select-currency" class="form-select">
                        <option value="">Select Currency</option>
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
                <div class="col-6 mt-3">
                    <div class="form-check">
                        <input data-fm="currency-code" id="currency-code" name="currency-type" type="radio"
                            class="form-check-input">
                        <label for="currency-code" class="form-check-label">Code</label>
                    </div>
                </div>
                <div class="col-6 mt-3">
                    <div class="form-check">
                        <input checked id="currency-symbol" data-fm="currency-symbol" name="currency-type" type="radio"
                            class="form-check-input">
                        <label for="currency-symbol" class="form-check-label">Symbol</label>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>
</div>
<div class="col-md-12 mt-3">
<label for="ds-signature" class="form-label">Signature (optional)</label>
<div class="input-group">
    <input class="form-control" id="ds-signature" placeholder="" type="file" />
    <span class="input-group-append">
        <button type="button" class="btn-close m-2 d-none" aria-label="ds-signature"></button>
    </span>
</div>
</div>
<div class="col-md-12 mt-4">
<div class="form-check">
    <input type="checkbox" id="ds-stamp" class="form-check-input">
    <label for="ds-stamp" class="form-check-label"> Revenue Stamp </label>
</div>
</div>`

}
