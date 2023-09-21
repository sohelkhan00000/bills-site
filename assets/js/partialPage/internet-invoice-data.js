var internetInvoiceData = {
"ii-logo":`<img data-tm="ii-logo" alt="A Airtel Logo"
src="${server.imagePath}/internet-invoice/logo-airtel.png" />`,
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
                    <td>CGST Amount ₹</td>
                    <td>SGST Rate%</td>
                    <td>SGST Amount ₹</td>
                    <td>Payments Received ₹</td>
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
                        <td>₹ <span data-tm="total-amount"></span></td>
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
                        <td>₹ <span data-tm="total-amount"></span></td>

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
                    <td>2. In case of cheque bounce, ₹ 100/- penalty will be applicable.
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
            <img data-tm="ii-logo" alt="A Airtel Logo" src="${server.imagePath}/internet-invoice/logo-airtel.png" />
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
            <p>Invoice Total: ₹ <span class="fw-bold" data-tm="total-amount"></span></p>
            <p>Payment Method: <span class="fw-bold" data-tm="payment-method"></span></p>
        </div>
        <div class="col-3">
            <p>Currency: <span class="fw-bold">INR</span></p>
            <p>Bill Account Number: <span class="fw-bold" data-tm="ac-number"></span></p>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12">
            <table class="table-one">
                <tr class="head">
                    <td class="text-end">Taxble Amount</td>
                    <td>CGST Rate%</td>
                    <td>CGST Amount ₹</td>
                    <td>SGST Rate%</td>
                    <td>SGST Amount ₹</td>
                    <td>Payments Received ₹</td>
                </tr>
                <tr>
                    <td>₹ <span data-tm="taxable-amount"></span></td>
                    <td>9%</td>
                    <td>₹ <span data-tm="gst-amount"></span></td>
                    <td>9%</td>
                    <td>₹ <span data-tm="gst-amount"></span></td>
                    <td>₹ <span data-tm="total-amount"></span></td>
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
                    <td>₹ <span data-tm="total-amount"></span></td>
                </tr>
        
            </table>

            <div class="table-terms">
                <p>Terms and Conditions</p>
                <table >
           
                    <tr>
                        <td class="pt-3">1. Cheques to be in favour of "<span data-tm='provider-name'></span>".</td>
                    </tr>
                    <tr>
                        <td>2. In case of cheque bounce, ₹ 100/- penalty will be applicable.
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
          
            <img data-tm="ii-logo" alt="A Airtel Logo"
src="${server.imagePath}/internet-invoice/logo-airtel.png" />
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
        <div class="col-3 text-center">₹ <span data-tm="total-amount"></span></div>
    </div>
    <div class="border-bottom me-0 ms-0 p-2 row">

        <div class="text-end">
            <p>Total: ₹ <span data-tm="total-amount"></span>
            </p>
        </div>
    </div>
    <p class="fw-bold p-4 text-center">ALL PAYMENTS TO BE MADE IN FAVOUR OF <span
            data-tm="provider-name" class="text-uppercase"></span></p>

    <p class="p-4 pt-0 text-center">THIS IS A COMPUTER GENERATED INVOICE AND DOES NOT
        REQUIRE ANY SIGNATURE</p>

</div>
</div>`
}
