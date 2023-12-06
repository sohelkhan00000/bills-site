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
                <p data-tm="book-total"></p>
            </div>
        </div>
        <div class="receipt-sum border-bottom border-top row">
            <div class="col-12 text-end">
                <p data-tm="book-total"></p>
            </div>
        </div>
        <p class="text-center fw-bold m-4">Thank you for your purchase!</p>
        <p class="text-center m-4">Books are a uniquely portable magic.</p>
        <p class="text-center m-4">
            Each chapter, a door to new possibilities. each story, a symphony of voices
            echoing through time.
        </p>

    </div>
</div>`
}