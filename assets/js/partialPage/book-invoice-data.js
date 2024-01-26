var bookInvoiceData = {
    'template-2': `                            <div data-tm="template-2"
    class="templates template-2 book-invoice-template-container shadow">

    <div class="book-invoice-slip">

        <p class="bi-heading">Book Receipt</p>
        <div class="row sec-one">
            <div class="col-6">

                <p class="sub-heading">Bill To,</p>
                <p class="fw-bold">Customer Name: <span class="fw-normal"
                        data-tm="customer-name"></span></p>
                <p class="fw-bold">Book Name: <span class="fw-normal"
                        data-tm="name-book"></span></p>
                <p class="fw-bold">Book Publisher: <span class="fw-normal"
                        data-tm="publisher"></span></p>
                <p class="fw-bold">Payment Method: <span class="fw-normal"
                        data-tm="payment-method"></span></p>
            </div>
            <div class="col-6 text-end">

                <p class="sub-heading">Sold By,</p>
                <p class="fw-bold">Receipt No: <span class="fw-normal"
                        data-tm="receipt-number"></span></p>
                <p class="fw-bold">Receipt Date: <span class="fw-normal"
                        data-tm="p-date"></span></p>
            </div>
        </div>
        <p class="bg-body-secondary fw-bold mt-5 p-2"> Receipt Summary </p>
        <div class="receipt-sum border-bottom border-top row fw-bold">

            <div class="col-3">
                <p>Item</p>

            </div>
            <div class="col-3">
                <p>Description</p>

            </div>
            <div class="col-1">
                <p>Qty</p>

            </div>
            <div class="col-2">
                <p>Price</p>

            </div>
            <div class="col-3 text-end">
                <p>Total</p>
            </div>
        </div>
        <div class="receipt-sum border-bottom border-top row">

            <div class="col-3">
                <p data-tm="name-book"></p>

            </div>
            <div class="col-3">
                <p data-tm="description"></p>
            </div>
            <div class="col-1">
                <p data-tm="quantity"></p>

            </div>
            <div class="col-2">
                <p data-tm="book-price"></p>

            </div>
            <div class="col-3 text-end">
            <p> <span com-tm="currency" data-tm="currency" class="d-none pe-1"></span><span data-tm="book-total"></span></p>
            </div>
        </div>
        <div class="receipt-sum border-bottom border-top row">
            <div class="col-12 text-end">
            <p> <span com-tm="currency" data-tm="currency" class="d-none pe-1"></span><span data-tm="book-total"></span></p>
            </div>
        </div>
        <p class="text-center fw-bold m-4">Thank you for your purchase!</p>
        <p class="text-center m-4">Books are a uniquely portable magic.</p>
        <p class="text-center m-4">
            Each chapter, a door to new possibilities. each story, a symphony of voices
            echoing through time.
        </p>

    </div>
</div>`,
"form-controls":`                <div class="col-md-12 mt-3" data-wrap="store-address">
<label for="store-address" class="form-label">Store Address</label>
<textarea id="store-address" rows="3" class="form-control"></textarea>
<p data-error="store-address" class="validation-message"></p>
</div>

<div class="col-md-12 mt-3">
<label for="name-book" class="form-label">Name Of Book</label>
<input class="form-control" id="name-book" placeholder="" type="text" />
<p class="validation-message" data-error="name-book"></p>
</div>
<div class="col-md-12 mt-3">
<label for="publisher" class="form-label">Publisher</label>
<input id="publisher" placeholder="" type="text" class="form-control">
<p data-error="publisher" class="validation-message"></p>
</div>
<div class="col-md-12 mt-3">
<label for="description" class="form-label">Description</label>
<textarea id="description" rows="3" class="form-control"></textarea>
<p class="validation-message" data-error="description"></p>
</div>
<div class="col-12 col-lg-6 mt-3">
<label for="quantity" class="form-label">Quantity</label>
<input class="form-control" id="quantity" placeholder="" type="number" />
<p class="validation-message" data-error="quantity"></p>
</div>
<div class="col-12 col-lg-6 mt-3">
<label for="book-price" class="form-label">Book Price</label>
<input class="form-control" id="book-price" type="number" />
<p class="validation-message" data-error="book-price"></p>
</div>

<div class="col-md-12 mt-3">
<label for="customer-name" class="form-label">Customer Name</label>
<input class="form-control" id="customer-name" type="text" />
<p class="validation-message" data-error="customer-name"></p>
</div>


<div class="col-12 col-lg-6 mt-3">
<label for="payment-method" class="form-label">Payment Method</label>
<select id="payment-method" class="form-control">
    <option>Select One</option>
    <option value="Cash">Cash</option>
    <option value="Online">Online</option>
    <option value="Check">Check</option>
</select>
<p class="validation-message" data-error="payment-method"></p>
</div>

<div class="col-12 col-lg-6 mt-3">
<label for="p-date" class="form-label">Purchased Date</label>
<input class="form-control" id="p-date" type="date" />
<p class="validation-message" data-error="p-date"></p>
</div>


<div class="col-12 mt-3">
<div com-fm="currency" class="com-wrapper v2 disable">
    <div class="com-container">
        <div class="com-header d-none">
            <div class="row">
                <div class="col-8">
                    <label class="form-label">Currency</label>
                </div>
               
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
                            <div class="loat-end form-check mb-0">
                                <input id="com-disable" class="form-check-input com-disable" type="checkbox">
                                <label for="com-disable" class="form-check-label">Disable</label>
                            </div>
                        </div>
                        <div class="col-auto col-auto pe-2 ps-0">
                            <button class="com-close" title="Toggle"><i class="bi bi-dash-lg bi-plus-lg"></i></button>
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
                        <input data-fm="search-currency" id="search-currency" placeholder="Search country" type="text" class="form-control">
             
                        <div class="search-currency-box d-none" data-fm="search-currency-box">
                        </div>
                    </div>

                </div>
                <div class="col-12 mt-3">
                    <label for="select-currency" class="form-label label-none">OR Select</label>
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
</div>`
}