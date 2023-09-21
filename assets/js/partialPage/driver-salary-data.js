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
            Amount Paid ₹ <span class="ds-salary-amount fw-bold"
                data-tm="ds-salary-amount"></span><span class="fw-bold">/-</span>
        </p>
        <p>
            Please note that this salary slip is based on the salary disbursement for the
            month of <span data-tm="ds-month" class="ds-month fw-bold"></span>. It reflects
            the total amount of ₹ <span class="ds-salary-amount fw-bold"
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
            Amount Paid ₹ <span class="ds-salary-amount fw-bold"
                data-tm="ds-salary-amount"></span><span class="fw-bold">/-</span>
        </p>


        <p>


            Received a sum of ₹ <span class="ds-salary-amount fw-bold"
                data-tm="ds-salary-amount"></span><span class="fw-bold">/-</span> only
            for the <span class="ds-month fw-bold" data-tm="ds-month"></span> month from Mr
            / Mrs.
            <span class="ds-employee-name fw-bold" data-tm="ds-employee-name"></span> to
            driver <span data-tm="ds-driver-name" class="ds-driver-name fw-bold"></span>
            towards salary.
        </p>
        <p class="fw-bold text-end">Driver Name: <span data-tm="ds-driver-name"
                class="ds-driver-name fw-normal"></span></p>
        <p>
            Revenue Stamp
        </p>
        <div class="row">
            <div class="col-6">
               
                <img alt="stamp" style="width: 60px;" class="ds-stamp "
    src="${server.imagePath}/driver-salary/revenu.webp" />
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
    "ds-stamp": `<img alt="stamp" style="width: 60px;" class="ds-stamp "
    src="${server.imagePath}/driver-salary/revenu.webp" />`,
    "ds-signature": `<img alt="signature" style="width: 100px; height: auto;"
    class="ds-signature float-end" data-tm="ds-signature"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />`,
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
    
</button>`

}
