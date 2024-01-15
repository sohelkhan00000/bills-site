var rentReceiptData = {
    "modal-btn":`     <button type="button" title="View Full Screen" class="btn btn-outline-secondary btn-expand"
    data-bs-toggle="modal" data-bs-target="#rentr-modal" id="rentr-modal-view">

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
        <path fill-rule="evenodd"
            d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" />
    </svg>

</button>`,
    "modal":`  <div class="modal fade template-modal rentr-modal" id="rentr-modal" tabindex="-1"
    aria-labelledby="rentr-modal-view">
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
</div>`,
    "style": `.template-2 .t2-bg{
        /* background-image: url('http://localhost:4200/assets/images/rent-receipt/template-2.webp'); */
        background-image:url('${server.imagePath}/rent-receipt/template-2.webp')
        background-repeat: no-repeat;
        background-position: right;
    }`,
    "form-control":` <div class="col-12">
    <div id="receipt-generator">


        <div class="row ">
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-6">
                        <label for="renter-name" class="form-label">Name</label>
                        <input class="form-control" id="renter-name" type="text" />
                        <p class="validation-message" data-error="renter-name"></p>
                    </div>
                    <div class=" col-lg-6 mt-4 mt-lg-0">
                        <label for="rent" class="form-label">Rent Monthly</label>
                        <input class="form-control" id="rent" type="number" />
                        <p class="validation-message" data-error="rent"></p>
                    </div>
                    <div class="col-lg-6 mt-4">
                        <label for="landlord-name" class="form-label">Landlord's Name</label>
                        <input class="form-control" id="landlord-name" type="text" />
                        <p class="validation-message" data-error="landlord-name"></p>
                    </div>
                    <div class="col-lg-6 mt-4">

                        <label for="landlord-pan" class="form-label label-none">Landlord's PAN
                            (optional)</label>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="pan-switch">
                            <label class="form-check-label" for="pan-switch">PAN Number (optional)</label>
                        </div>
                        <input class="form-control mt-2" disabled id="landlord-pan" type="text" />
                        <p class="validation-message" data-error="landlord-pan"></p>
                    </div>
                </div>

            </div>
            <div class="col-lg-4">
                <div class="row mt-4 mt-lg-0">
                    <div class="col-lg-12">
                        <label for='address' class="form-label">Address</label>
                        <textarea class="form-control" id='address' rows="3"></textarea>
                        <p class="validation-message" data-error="address"></p>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-12 mb-4 mt-4">
                <hr />
            </div>

            <div class="col-12 col-lg-4 ">
                <div class="custom-box">
                    <div class="row">


                        <div class="col-12">
                            <div class="form-check form-switch mt-2">
                                <input type="checkbox" role="switch" id="date" checked
                                    class="form-check-input">
                                <label for="date" class="form-check-label">Date</label>
                            </div>

                        </div>
                        <div class="col-lg-12 mt-3 pt-1">
                            <div class="row">
                                <div class="col-2 mt-1">
                                    <label class="form-label" for="date-from">From</label>
                                </div>
                                <div class="col-10">
                                    <input class="form-control" id="date-from" type="date" />
                                </div>
                            </div>


                        </div>
                        <div class="col-lg-12 mt-3">
                            <div class="row mb-4" style="margin-top: 12px;">
                                <div class="col-2 mt-1">
                                    <label class="form-label" for="date-to">To</label>
                                </div>
                                <div class="col-10">
                                    <input class="form-control" id="date-to" type="date" />
                                </div>
                            </div>


                        </div>
                        <div class="col-6 col-lg-5">
                            <div class="form-check">
                                <input checked="" class="form-check-input" id="monthly" name="receipt-month"
                                    type="radio" />
                                <label class="form-check-label" for="monthly">Monthly</label>
                            </div>
                        </div>
                        <div class="col-6 col-lg-6">
                            <div class="form-check">
                                <input class="form-check-input" id="quarterly" name="receipt-month"
                                    type="radio" />
                                <label class="form-check-label" for="quarterly">
                                    Quarterly
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-12 col-lg-4 mt-4 mt-lg-0">
                <div class="row">
                    <div class="col-12">
                        <div com-fm="currency" class="com-wrapper disable">
                            <div class="com-container">
                                <div class="com-header d-none">
                                    <div class="row">
                                        <div class="col-8">
                                            <label class="form-label">Currency</label>
                                        </div>
                                        <div class="col-4 text-end">
                                            <button title="Toggle Tab" class="com-close"><i
                                                    class="bi bi-dash bi-plus"></i></button>
                                        </div>
                                    </div>


                                </div>
                                <div class="custom-box">
                                    <div class="com-sub-header">
                                        <div class="row">
                                            <div class="col-12 ps-0">
                                                <div class="form-switch form-check mb-0">
                                                    <input id="currency-disable"
                                                        class="form-check-input com-disable" role="switch"
                                                        type="checkbox">
                                                    <label for="currency-disable"
                                                        class="form-check-label">Currency</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="com-body">
                                        <div class="row">

                                            <div class="col-12 mt-3 mb-1">
                                                <div class="currency-box-wrap">
                                                    <label for="search-currency"
                                                        class="form-label label-none">Search</label>
                                                    <div class="input-group mt-2">

                                                        <input data-fm="search-currency"
                                                            placeholder="Search country"
                                                            id="search-currency" type="text"
                                                            class="form-control">
                                                        <span class="input-group-text" id="basic-addon1">
                                                            <i class="bi bi-search"></i>
                                                        </span>
                                                    </div>

                                                    <div class="search-currency-box d-none"
                                                        data-fm="search-currency-box">
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-12 mt-4 mb-2">
                                                <label for="select-currency"
                                                    class="form-label label-none">Select</label>
                                                <select data-fm="select-currency" id="select-currency"
                                                    class="form-select">
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
                                                    <option value="BAM">Bosnia-Herzegovina Convertible Mark
                                                        - KM
                                                    </option>
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
                                                    <option value="CUC">Cuban Convertible Peso - $, CUC
                                                    </option>
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
                                                    <option value="ANG">Netherlands Antillean Guilder - ƒ
                                                    </option>
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
                                                    <option value="SBD">Solomon Islands Dollar - Si$
                                                    </option>
                                                    <option value="SOS">Somali Shilling - Sh.so.</option>
                                                    <option value="ZAR">South African Rand - R</option>
                                                    <option value="KRW">South Korean Won - ₩</option>
                                                    <option value="XDR">Special Drawing Rights - SDR
                                                    </option>
                                                    <option value="LKR">Sri Lankan Rupee - Rs</option>
                                                    <option value="SHP">St. Helena Pound - £</option>
                                                    <option value="SDG">Sudanese Pound - .س.ج</option>
                                                    <option value="SRD">Surinamese Dollar - $</option>
                                                    <option value="SZL">Swazi Lilangeni - E</option>
                                                    <option value="SEK">Swedish Krona - kr</option>
                                                    <option value="CHF">Swiss Franc - CHf</option>
                                                    <option value="SYP">Syrian Pound - LS</option>
                                                    <option value="STD">São Tomé and Príncipe Dobra - Db
                                                    </option>
                                                    <option value="TJS">Tajikistani Somoni - SM</option>
                                                    <option value="TZS">Tanzanian Shilling - TSh</option>
                                                    <option value="THB">Thai Baht - ฿</option>
                                                    <option value="TOP">Tongan pa'anga - $</option>
                                                    <option value="TTD">Trinidad &amp; Tobago Dollar - $
                                                    </option>
                                                    <option value="TND">Tunisian Dinar - ت.د</option>
                                                    <option value="TRY">Turkish Lira - ₺</option>
                                                    <option value="TMT">Turkmenistani Manat - T</option>
                                                    <option value="UGX">Ugandan Shilling - USh</option>
                                                    <option value="UAH">Ukrainian Hryvnia - ₴</option>
                                                    <option value="AED">United Arab Emirates Dirham - إ.د
                                                    </option>
                                                    <option value="UYU">Uruguayan Peso - $</option>
                                                    <option value="USD">US Dollar - $</option>
                                                    <option value="UZS">Uzbekistan Som - лв</option>
                                                    <option value="VUV">Vanuatu Vatu - VT</option>
                                                    <option value="VEF">Venezuelan BolÃ&shy;var - Bs
                                                    </option>
                                                    <option value="VND">Vietnamese Dong - ₫</option>
                                                    <option value="YER">Yemeni Rial - ﷼</option>
                                                    <option value="ZMK">Zambian Kwacha - ZK</option>
                                                </select>
                                            </div>
                                            <div class="col-6 col-md-4 mt-3">
                                                <div class="form-check">
                                                    <input checked data-fm="currency-code"
                                                        id="currency-code" name="currency-type" type="radio"
                                                        class="form-check-input">
                                                    <label for="currency-code"
                                                        class="form-check-label">Code</label>
                                                </div>
                                            </div>
                                            <div class="col-6 mt-3">
                                                <div class="form-check">
                                                    <input id="currency-symbol" data-fm="currency-symbol"
                                                        name="currency-type" type="radio"
                                                        class="form-check-input">
                                                    <label for="currency-symbol"
                                                        class="form-check-label">Symbol</label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-12 col-lg-4 mt-3 mt-lg-0">


                <div class="form-check form-switch mt-2">
                    <input class="form-check-input" type="checkbox" role="switch" id="revnue-stamp">
                    <label class="form-check-label" for="revnue-stamp">Revnue Stamp</label>
                </div>
                <div com-tm="date"></div>
            </div>

            <div class="col-12 mt-3">

                <button id="download-pdf" class="btn btn-success col-12 col-lg-auto" type="button">
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    <span class="download-text">Download</span>
                </button>

            </div>
        </div>

    </div>
</div>`,
    "template-1":`     <div data-tm="template-1" tabindex="0"
    class="templates template-1 rentr-template-container shadow">

    <div class="receipt-wrapper">
        <div class="receipts" id="receipts">
            <div id="invoice1" class="invoice">
                <div class="invoiceWrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-12">
                                <p id="receiptHeading">Provisional</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-6 col-md-6">
                                <div class="row">
                                    <div class="col-12 col-md-12">
                                        <!--  start date of receipt month and year only -->
                                        <p id="receiptSartDate">RENT RECEIPT </p>
                                    </div>
                                    <div class="col-12 col-md-12">
                                        <span class="current-month"></span>
                                    </div>

                                </div>
                            </div>
                            <div class="col-6 col-md-6">
                                <div class="row">
                                    <div class="col-12 col-md-12">
                                        <p id="receiptNumber">Receipt No: <span class="receipt-number"
                                                id="receipt-number"></span></p>

                                    </div>
                                    <div class="col-12 col-md-12">
                                        <!--  Date on which receipt generated-->
                                        <p id="receiptGeneratDate">Date: <span class="generate-date"
                                                id="generate-date"></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-12">
                                <p id="receiptDeclar">Received a sum of <span com-tm="currency" class="d-none"><span data-tm="currency" class="pe-1"></span></span><span data-tm="rent"
                                        class="rent"></span>
                                    from
                                    <span data-tm="renter-name" class="renter-name"> </span>
                                    towards the rent of property located at
                                    <span class="address" data-tm="address"></span>
                                    for the period from
                                    <span class="date-from" data-tm="date-from"></span>
                                    to
                                    <span class="date-to" data-tm="date-to"></span>
                                </p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-8">
                                <p id="landlord"><span class="landlord-name" data-tm="landlord-name"></span>
                                    (Landlord)<span data-tm="pan-switch" class='d-none'>,  PAN: <span class="landlord-pan" data-tm="landlord-pan"></span></span>
                                </p>
                            </div>
                            <div class="col-4">
                                <div data-tm="revnue-stamp" class="revenue d-none">
                                    <p>Revenue stamp</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</div>`,
"template-2":`      <div data-tm="template-2"
class="templates template-2 rentr-template-container shadow">

<div class="rentr-slip">
    <div id="receipts" class="receipts">
        <div id="invoice1" class="invoice t2-bg">
            <div class="row sec-1">
                <div class="col-12 ">
                    <p class="t2-header">
                        RENT RECEIPT <span>( <span class="current-month"></span> )</span>
                    </p>
                    <p>
                        Received a sum of <span com-tm="currency" class="d-none"><span
                                data-tm="currency" class="pe-1"></span></span> <span
                            data-tm="rent" class="rent fw-bold"></span>/- from <span
                            data-tm="renter-name" class="renter-name fw-bold"></span>
                        towards the rent of property
                        situated at <span data-tm="address"
                            class="address fw-bold"></span> for the period <span
                            data-tm="date-from" class="date-from fw-bold"></span> to
                        <span data-tm="date-to" class="date-to fw-bold"></span>
                    </p>

                </div>
            </div>
            <div class="sec-2">
                <div class="row mb-2 sec-section">

                    <div class="col-8">
                        <p class="t2-date">Date : <span data-tm="date-to"
                                class="date-to fw-bold"></span></p>

                        <p data-tm="pan-switch" class='t2-pan d-none'>PAN : <span
                                class="landlord-pan fw-bold"
                                data-tm="landlord-pan"></span></p>


                    </div>
                    <div class="col-4 t2-signa-wrap">
                        <div data-tm="revnue-stamp" class="revenue d-none">
                            <p>Paste <span com-tm="currency" class="d-none"><span
                                        data-tm="currency" class="pe-1"></span></span> 1
                                stamp here</p>
                        </div>
                        <div class="t2-signa-container">
                            <p class="t2-signature">signature (Landlord)</p>
                            <span data-tm="landlord-name"
                                class="landlord-name fw-bold text-center d-block"></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`
}