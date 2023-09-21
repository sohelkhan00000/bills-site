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
                ₹ <span data-tm='amount'></span>
            </div>
        </div>
        <div class="border-bottom pb-2 pt-2 row">
            <div class="col-6">
                Before <span data-tm='departure-time'></span> on <span data-tm='drop-date'></span>
            </div>
            <div class="col-6">
                ₹ <span data-tm='cancel-charge'></span> will be cut as cancellation charges
            </div>
        </div>
</div>
</div>`,
'travel-details':`                     <div class="col-12">
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
</div> <div class="col-12">
<label class="form-label mt-4 mb-4 fw-bold">Travel Details:</label>
</div>


<div class="col-6 col-md-6 mt-3">
<label for="travel-type" class="form-label">Travel Type</label>
<select id="travel-type" class="form-control">
    <option>Select One</option><option value="Sleeper">Sleeper</option><option value="AC Sleeper">AC Sleeper</option><option value="Semi Sleeper">Semi Sleeper</option><option value="A/C Sleeper (2+1)">A/C Sleeper (2+1)</option><option value="Non Sleeper">Non Sleeper</option><option value="Non Ac">Non Ac</option>
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
<input type="text" id="amount"  class="form-control">
<p class="validation-message" data-error="amount"></p>
</div>
<div class="col-6 col-md-6 mt-3">
<label for="tax" class="form-label">Tax</label>
<input type="text" id="tax"  class="form-control">
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
`,
"modal-view":`                            <button type="button" title="View Full Screen" class="btn btn-outline-secondary btn-expand" data-bs-toggle="modal"
data-bs-target="#lta-bill-modal" id="lta-bill-modal-view">

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
  </svg>

</button>`,
"close-modal":``,
"logo":`<img data-tm="lta-logo" alt="Red Bus" width="100px" title="A Red Bus Logo" class="bus-logo"
src="${server.imagePath}/lta-bill/logo-red-bus.png" />`,
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
</div>`

}
