var rentReceiptData = {
    "style": `.template-2 .t2-bg{
        /* background-image: url('http://localhost:4200/assets/images/rent-receipt/template-2.webp'); */
        background-image:url('${server.imagePath}/rent-receipt/template-2.webp')
        background-repeat: no-repeat;
        background-position: right;
    }`,
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
                                <p id="receiptDeclar">Received a sum of INR <span data-tm="rent"
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
                            <div class="col-6 col-md-6">
                                <p id="landlord"><span class="landlord-name" data-tm="landlord-name"></span>
                                    (Landlord),

                                    Pan: <span class="landlord-pan" data-tm="landlord-pan"></span>
                                </p>
                            </div>
                            <div class="col-6 col-md-6">
                                <div class="revenue">
                                    <p>Revenue stamp</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</div>`
}