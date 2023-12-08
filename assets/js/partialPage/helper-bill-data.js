var helperBillData = {
    "style": ``,
    "template-2": ` <div data-tm="template-2"
    class="templates template-2 helper-template-container shadow d-none">
    <div class="helper-slip">
        <p class="helper-p-head">Daily Helper Receipt</p>
        <div class="row">
            <div class="col-6">
                <p class="fw-bold"> Working As: <span data-tm="working-as"
                        class="fw-normal"></span></p>
            </div>
            <div class="col-6">
                <p class="fw-bold text-end"> Date: <span data-tm="salary-date"
                        class="fw-normal"></span></p>
            </div>
            <div class="col-12">
                <p class="fw-bold"> Salary of the Month: <span data-tm="salary-month"
                        class="fw-normal"></span></p>
                <p><span class="fw-bold">Amount Paid:</span> ₹ <span
                        data-tm="salary"></span>/-</p>
                <p>Received From Mr./Ms. <span data-tm="employee-name"
                        class="fw-bold"></span> ₹ <span data-tm="salary"></span>/- to
                    his/her Mr./Ms. <span data-tm="helper-name" class="fw-bold"></span>
                    towards salary of the
                    month of <span data-tm="salary-month" class="fw-normal"></span>.</p>
                <p class="fw-bold text-end">Employee Name: <span data-tm="employee-name"
                        class="fw-normal"></span></p>
                <p class="fw-bold text-center m-4">Receipt Acknowledgement</p>
                <p class="fw-bold"> Salary of the Month: <span data-tm="salary-month"
                        class="fw-normal"></span></p>
                <p><span class="fw-bold">Amount Paid:</span> ₹ <span
                        data-tm="salary"></span>/-</p>
                <p class="fw-bold">Date: <span data-tm="salary-date"
                        class="fw-normal"></span>
                </p>
                <p>Received From Mr./Ms. <span data-tm="employee-name"
                        class="fw-bold"></span> ₹ <span data-tm="salary"
                        class="fw-normal"></span>/- to his/her Mr./Ms. <span
                        data-tm="helper-name" class="fw-bold"></span> towards salary of the
                    month of <span data-tm="salary-month" class="fw-normal"></span>.</p>
                <p class="fw-bold text-end">Helper Name: <span data-tm="helper-name"
                        class="fw-normal"></span></p>



            </div>

            <div class="col-9">
            <div data-wrap="revenue-stamp">
            <p class="fw-bold">
                Revenue Stamp
            </p>
            <img alt="Revenue Stamp" width="60px" height="70px"
                data-tm="helper-stamp" class="helper-stamp"
                src="${server.imagePath}/driver-salary/revenu.webp" />
            </div>
            </div>
            <div class="col-3">
                <p class="fw-bold">
                    Signature
                </p>
                <img class="d-none" alt="User Signature" width="100px" height="auto"
                    data-tm="signature" src="" />
            </div>

        </div>
    </div>
</div>`,
    "helper-stamp": `<div data-wrap="revenue-stamp">
    <p class="fw-bold">
        Revenue Stamp
    </p>
    <img alt="Revenue Stamp" width="60px" height="70px"
        data-tm="helper-stamp" class="helper-stamp"
        src="${server.imagePath}/driver-salary/revenu.webp" />
</div>`,
"helper-stamp-t2": `<div data-wrap="revenue-stamp">
<p class="fw-bold">
    Revenue Stamp
</p>
<img alt="Revenue Stamp" width="60px" height="70px"
    data-tm="helper-stamp" class="helper-stamp"
    src="${server.imagePath}/driver-salary/revenu.webp" />
</div>`
}
