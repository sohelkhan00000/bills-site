var testerDynamicData = {
    "template-2": `<div data-tm="template-2" tabindex="0" class="templates template-2 tester-container d-none shadow"><div class="tester-slip">
                                    
    <div ffo-tmcomp="tester-items">
    <div class="item-1">
        <p>Item Name : <span data-tm="item-name"></span></p>
        <br />
        <p>Price : <span data-tm="item-price"></span></p>
    </div>

</div>
    <p class="fw-bold text-center">Driver Salary Receipt 2</p>
    <p>
        This is to certify that I have paid ₹ <span class="tester-salary-amount"
            data-tm="tester-salary-amount">778</span> to driver, Mr. <span
            class="tester-driver-name fw-bold"
            data-tm="tester-driver-name">sanam</span> for the month of <span
            class="tester-month fw-bold" data-tm="tester-month">February</span>
        (Acknowledged receipt
        enclosed). I also declare that the driver is exclusively utilized for
        official purpose only. Please reimburse the above amount. I further declare
        that what is stated above is correct and true.
    </p>
    <p class="fw-bold">Employee Name: <span class="tester-employee-name fw-normal"
            data-tm="tester-employee-name">mark</span></p>
    <p class="fw-bold">
        Date: <span class="tester-date fw-normal" data-tm="tester-date">23 Jul
            2023</span>
    </p>
    <p class="fw-bold text-center">Receipt Acknowledgement</p>
    <p class="fw-bold">
        Date of Receipt: <span class="tester-date fw-normal"
            data-tm="tester-date"></span>
    </p>
    <p class="fw-bold">
        Time: <span class="tester-time fw-normal"
            data-tm="tester-time"></span>
    </p>
    <p class="fw-bold">
        For the Month of: <span class="tester-month fw-normal"
            data-tm="tester-month">February</span>
    </p>
    <p class="fw-bold">
        Name of Driver: <span class="tester-driver-name fw-normal"
            data-tm="tester-driver-name">sanam</span>
    </p>
    <p class="fw-bold">
        Vehicle No: <span class="tester-vehical-number fw-normal"
            data-tm="tester-vehical-number">UP80 7485</span>
    </p>
    <p class="fw-bold">
        Address: <span class="tester-address fw-normal"
            data-tm="tester-address"></span>
    </p>
    <p>
        Received a sum of ₹ <span class="tester-salary-amount fw-bold"
            data-tm="tester-salary-amount">778</span> only
        for the <span class="tester-month fw-bold"
            data-tm="tester-month ">February</span> month from Mr / Mrs
        <span class="tester-driver-name fw-bold"
            data-tm="tester-driver-name"></span> .
    </p>
    <p>
        Revenue Stamp
    </p>
    <img alt="stamp" style="width: 60px;" data-tm="tester-stamp"
        class="tester-stamp"
        src="${server.imagePath}/driver-salary/revenu.webp" />
        <img alt="signature" style="width: 100px; height: auto;" class="tester-signature d-none" data-tm="tester-signature" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">

</div></div>`,
    "tester-stamp": `<img alt="stamp" style="width: 60px;" data-tm="tester-stamp" class="tester-stamp" src="${server.imagePath}/driver-salary/revenu.webp">`,
    "tester-signature": `<img alt="User Signature" width="100px" height="auto"
class="tester-signature d-none" data-tm="tester-signature"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />`


}
