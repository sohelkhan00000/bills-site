var ltaBillData = {
    "template-2": `<div data-tm="template-2" tabindex="0" class="templates template-2 tester-container d-none shadow">
    <h4>Coming soon...</h4>
</div>`,
"terms-conditon":`                                    <div class="row mt-3 mb-3">
<div style="height: 3px;" class="bg-black border-bottom col-4 mt-3">

</div>
<div class="col-4">
    <p class="text-center fw-bold">Terms & Conditions</p>
</div>
<div style="height: 3px;" class="bg-black border-bottom col-4 mt-3">

</div>
</div>

<div class="row section-three">
<div class="col-6">
    <p>Please note the following regarding the luggage policy for your journey</p>
    <p>Each passenger is allowed to carry one bag of upto 10 kgs and one personal item such as a laptop bag, handbag, or briefcase of upto 5 kgs.</p>
    <p>assengers should not carry any goods like weapons, inflammable, firearms, ammunition, drugs, liquor, smuggled goods etc and any other articles that are prohibited under law</p>
    <p>Travel Operator reserves the right to deny boarding or charge additional amount in case passenger is travelling with extra luggage than what is mentioned above</p>
    <p>Partial Cancellation is NOT allowed for this ticket. Charges for complete ticket cancellation are mentioned</p>
</div>
<div class="col-6">
        <div class="border-bottom pb-2 pt-2 row text-black border-2">
            <div class="col-6 fw-bold">Cancellation time</div>
            <div class="col-6 fw-bold">Cancellation charges</div>

        </div>
        <div class="border-bottom pb-2 pt-2 row">
            <div class="col-6">
                After <span data-tm='departure-time'></span> on <span data-tm='drop-date'></span>
            </div>
            <div class="col-6">
            <span com-tm="currency" class="d-none"><span data-tm="currency" class="pe-1"></span></span><span data-tm='amount'></span>
            </div>
        </div>
        <div class="border-bottom pb-2 pt-2 row">
            <div class="col-6">
                Before <span data-tm='departure-time'></span> on <span data-tm='drop-date'></span>
            </div>
            <div class="col-6">
            <span com-tm="currency" class="d-none"><span data-tm="currency" class="pe-1"></span></span><span data-tm='cancel-charge'></span> will be cut as cancellation charges
            </div>
        </div>
</div>
</div>`,
'travel-details':`                     
`,
"modal-view":`                            <button type="button" title="View Full Screen" class="btn btn-outline-secondary btn-expand" data-bs-toggle="modal"
data-bs-target="#lta-bill-modal" id="lta-bill-modal-view">

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
  </svg>

</button>`,
"close-modal":``,
"logo":` <div com-tm="logo">
<img data-tm="logo" alt="Red Bus" width="100px" title="A Red Bus Logo" class="bus-logo"
src="${server.imagePath}/lta-bill/logo-red-bus.png" />
</div>`,
"click-here":`<span class="d-block">
Write to us <a href="#">here</a>
</span>`,
'lta-modal':`  <div class="modal fade template-modal lta-bill-modal"  id="lta-bill-modal" tabindex="-1" aria-labelledby="lta-bill-modal-view">
<div class="modal-dialog modal-fullscreen">
    <div class="modal-content">

        <div class="modal-body">

        </div>
        <div class="modal-footer d-block text-end bg-body">
        <button type="button" class="btn btn-success"
        data-bs-dismiss="modal">Close</button>
        </div>
    </div>
</div>
</div>`,
"form-control":`          <div class="row">

<div class="col-12">
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
                        <div class="col-12 col-lg-6">
                            <div class="form-check">
                                <input class="form-check-input" checked id="logo-red-bus" name="lta-logo"
                                    type="radio" />
                                <label for="logo-red-bus" class="form-check-label">Red Bus</label>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 mt-2 mt-lg-0">
                            <div class="form-check">
                                <input class="form-check-input" id="logo-make-my-trip" name="lta-logo" type="radio" />
                                <label for="logo-make-my-trip" class="form-check-label">Make My Trip</label>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 mt-2">
                            <div class="form-check">
                                <input class="form-check-input" id="logo-goibibo" name="lta-logo" type="radio" />
                                <label for="logo-goibibo" class="form-check-label">Goibibo</label>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 mt-2">
                            <div class="form-check">
                                <input class="form-check-input" id="logo-yatra" name="lta-logo" type="radio" />
                                <label for="logo-yatra" class="form-check-label">Yatra</label>
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
</div>

<div class="col-12 mt-4">
    <label class="form-label mb-4 fw-bold">Passenger Details:</label>
</div>
<div class="col-md-12">
    <label for="passenger-name" class="form-label">Passenger Name, Age, Gender</label>
    <input class="form-control" id="passenger-name" type="text" placeholder="Akshun,29,Male Ayush,26,Female" />
    <p class="validation-message" data-error="passenger-name"></p>
</div>

<div class="col-md-6 mt-3">
    <label for="no-person" class="form-label">No of Person</label>
    <input class="form-control" id="no-person" type="number" />
    <p class="validation-message" data-error="no-person"></p>
</div>
<div class="col-md-6 mt-3">
    <label for="seat" class="form-label">Seat No</label>
    <input class="form-control" placeholder="15,18,20" id="seat" type="text" />
    <p class="validation-message" data-error="seat"></p>
</div>
<div class="col-12">
    <label class="form-label mt-4 mb-4 fw-bold">Boarding Point Details:</label>
</div>
<div class="col-12 col-md-6 mt-3">
    <label for="reporting-date" class="form-label">Reporting Date</label>
    <input class="form-control" id="reporting-date" placeholder="" type="date" />
    <p class="validation-message" data-error="reporting-date"></p>
</div>
<div class="col-6 col-md-6 mt-3">
    <label for="departure-time" class="form-label">Departure Time</label>
    <input id="departure-time" placeholder="" type="time" class="form-control">
    <p data-error="departure-time" class="validation-message"></p>
</div>
<div class="col-12 col-md-6 mt-3">
    <label for="location" class="form-label">Location</label>
    <textarea id="location" rows="2" class="form-control"></textarea>
    <p data-error="location" class="validation-message"></p>
</div>
<div class="col-12 col-md-6 mt-3">
    <label for="landmark" class="form-label">Landmark</label>
    <textarea id="landmark" rows="2" class="form-control"></textarea>
    <p data-error="landmark" class="validation-message"></p>
</div>
<div class="col-12">
    <label class="form-label mt-4 mb-4 fw-bold">Drop Point Details:</label>
</div>
<div class="col-12 col-md-6 mt-3">
    <label for="drop-date" class="form-label">Dropping Point Date</label>
    <input class="form-control" id="drop-date" placeholder="" type="date" />
    <p class="validation-message" data-error="drop-date"></p>
</div>
<div class="col-6 col-md-6 mt-3">
    <label for="drop-time" class="form-label">Dropping Point Time</label>
    <input id="drop-time" placeholder="" type="time" class="form-control">
    <p data-error="drop-time" class="validation-message"></p>
</div>
<div class="col-md-12 mt-3">
    <label for="drop-address" class="form-label">Dropping Address</label>
    <textarea id="drop-address" rows="2" class="form-control"></textarea>
    <p data-error="drop-address" class="validation-message"></p>
</div>
<div class="col-12">
    <label class="form-label mt-4 mb-4 fw-bold">Travel Details:</label>
</div>


<div class="col-6 col-md-6 mt-3">
    <label for="travel-type" class="form-label">Travel Type</label>
    <select id="travel-type" class="form-select">
        <option>Select One</option>
        <option value="Sleeper">Sleeper</option>
        <option value="AC Sleeper">AC Sleeper</option>
        <option value="Semi Sleeper">Semi Sleeper</option>
        <option value="A/C Sleeper (2+1)">A/C Sleeper (2+1)</option>
        <option value="Non Sleeper">Non Sleeper</option>
        <option value="Non Ac">Non Ac</option>
    </select>
    <p class="validation-message" data-error="travel-type"></p>
</div>
<div class="col-6 col-md-6 mt-3">
    <label for="travel-name" class="form-label">Travel Name</label>
    <input id="travel-name" type="text" class="form-control">
    <p data-error="travel-name" class="validation-message"></p>
</div>

<div class="col-6 col-md-6 mt-3">
    <label for="ticket-no" class="form-label">Ticket No</label>
    <input id="ticket-no" type="text" class="form-control">
    <p data-error="ticket-no" class="validation-message"></p>
</div>
<div class="col-6 col-md-6 mt-3">
    <label for="traveler-address" class="form-label">Traveler Address</label>
    <textarea id="traveler-address" rows="2" class="form-control"></textarea>
    <p data-error="traveler-address" class="validation-message"></p>
</div>
<div class="col-6 col-md-6 mt-3">
    <label for="boarding-point-no" class="form-label">Boarding Point No</label>
    <input id="boarding-point-no" type="text" class="form-control">
    <p data-error="boarding-point-no" class="validation-message"></p>
</div>
<div class="col-6 col-md-6 mt-3">
    <label for="customer-care" class="form-label">Customer Care No</label>
    <input id="customer-care" type="text" class="form-control">
    <p data-error="customer-care" class="validation-message"></p>
</div>
<div class="col-6 col-md-6 mt-3">
    <label for="amount" class="form-label">Amount</label>
    <input type="text" id="amount" class="form-control">
    <p class="validation-message" data-error="amount"></p>
</div>
<div class="col-6 col-md-6 mt-3">
    <label for="tax" class="form-label">Tax</label>
    <input type="text" id="tax" class="form-control">
    <p class="validation-message" data-error="tax"></p>
</div>
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

<div class="col-md-12 mt-3 mb-3 gst-wrapper">
    <input class="form-control d-none" id="vat-number" type="text" value="06AAMPY6980B1Z8" />
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
                            <div class="col-auto pe-2 ps-0"><button title="Toggle Tab" class="com-close"><i class="bi bi-dash-lg bi-plus-lg"></i></button>
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
</div>
</div>`

}
