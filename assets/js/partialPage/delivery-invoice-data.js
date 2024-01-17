var deliveryInvoiceData = {
    "logo-image":`  <div com-tm="logo"  class="col-12">
    <img data-tm="logo" alt="Delivery Invoice Logo"
        src="../../../../assets/images/delivery-invoice/zomato.png" />
</div>`,
"table":`    <table com-tm="tax">
<thead>
    <tr>
        <td>Particulars</td>
        <td>Unit Price</td>
        <td>Gross value</td>
        <td class="discount-remove"><span
                data-tm="field-name-discount">Discount</span></td>
        <td>Net value</td>
        <td class="cgst-remove"><span data-tm="field-name-cgst">CGST
                (Rate)</span></td>
        <td class="cgst-remove">
            <span data-tm="field-name-cgstinr">CGST </span>
            <span com-tm="currency" class="d-none">(<span
                    data-tm="currency"></span>)</span>

        </td>
        <td class="sgst-remove">
            <span data-tm="field-name-sgst">SGST
                (Rate)</span>
        </td>
        <td class="sgst-remove">
            <span data-tm="field-name-sgstinr">SGST </span>
            <span com-tm="currency" class="d-none">(<span
                    data-tm="currency"></span>)</span>
        </td>
        <td>Total</td>
    </tr>
</thead>
<tbody com-tm="items">
    <tr class="item item-1">
        <td><span data-tm="item-quantity">2</span> x <span
                data-tm="item-name">Crispy Burger</span>
        </td>
        <td data-tm="item-price">200.00</td>
        <td><span data-tm="item-gross">400.00</span></td>
        <td class="discount-remove"><span
                data-tm="field-value-discount">0</span>%</td>
        <td><span data-tm="item-net">400.00</span></td>
        <td class="cgst-remove"><span
                data-tm="field-value-cgst">5</span>%</td>
        <td class="cgst-remove"><span
                data-tm="field-value-cgstinr">20.00</span></td>
        <td class="sgst-remove"><span
                data-tm="field-value-sgst">5</span>%</td>
        <td class="sgst-remove"><span
                data-tm="field-value-sgstinr">20.00</span></td>
        <td><span data-tm="item-total">440.00</span></td>
    </tr>

</tbody>
<tfoot>
    <tr>
        <td>Item(s) Total </td>
        <td></td>
        <td data-tm="item-total-bd">400.00</td>
        <td class="discount-remove"></td>
        <td data-tm="item-total-ad">400.00</td>
        <td class="cgst-remove"></td>
        <td class="cgst-remove" data-tm="item-tatal-cgst">20.00</td>
        <td class="sgst-remove"></td>
        <td class="sgst-remove" data-tm="item-tatal-sgst">20.00</td>
        <td><span data-tm="sub-total">440.00</span></td>
    </tr>
    <tr>
        <td>Total Value</td>
        <td></td>
        <td></td>
        <td class="discount-remove"></td>
        <td></td>
        <td class="cgst-remove"></td>
        <td class="cgst-remove"></td>
        <td class="sgst-remove"></td>
        <td class="sgst-remove"></td>
        <td><span data-tm="final-total">440.00</span></td>
    </tr>
</tfoot>
</table>`,
"bottom-data":`           <div class="col-12 mt-3">

<p class="mt-3">Amount <span com-tm="currency" class="d-none"><span
            data-tm="currency" class="pe-1"></span></span> <span
        data-tm="final-total">440.00</span> settled through
    digital mode/payment received.
</p>
<p>
    Supply attracts reverse charge : <span>No</span>
</p>
</div>


<div class="col-8 last-section">


<div com-tm="delivery-platform">
    <div class="col-12 ">
        <p data-tm="p-name"> ZOMATO PRIVATE LIMITED</p>
    </div>
    <div class="item item-1">
        <p><span data-tm="field-name">PAN : </span><span
                data-tm="field-value">AADCD4946</span></p>
    </div>
    <div class="item item-2">
        <p><span data-tm="field-name">CIN : </span><span
                data-tm="field-value">L930398141</span></p>
    </div>
    <div class="item item-3">
        <p><span data-tm="field-name">GST : </span><span
                data-tm="field-value">06AAD46L1</span></p>
    </div>
    <div class="item item-4">
        <p><span data-tm="field-name">FSSAI : </span><span
                data-tm="field-value">1001908107</span></p>
    </div>
</div>

</div>
<div class="col-4 sign">
<div com-tm="signature">
    <img data-tm="signature" alt="Authorised Signatory" src="../../../../assets/images/restaurant-bill/signature.png" />
</div>
<p>Authorised Signatory</p>
</div> `,
    "template-2":`         <div data-tm="template-2" class="templates template-2 rest-tm-container">
    <div class="restaurant-slip">
        <div class="row">
            <div class="col-6">
                <div com-tm="logo">
                    <img data-tm="logo" alt="Delivery Invoice Logo"
                        src="../../../../assets/images/delivery-invoice/amazon-2.png" />
                </div>
            </div>


            <div class="col-6" com-tm="header">
                <div class="item item-1">
                    <p data-tm="h-1">Invoice</p>
                </div>
                <div class="item item-2">
                    <p data-tm="h-1" class="fw-normal">Invoice number : 75664</p>
                </div>
                <div class="item item-3">
                    <p data-tm="h-1" class="fw-normal">Date : Jan 9, 2024</p>
                </div>
            </div>
            <div class="border border-2 col-12"></div>
            <div class="col-7 mt-3 section-one">
                <p class="dl-from-from"><span>Delivery From:</span></p>
                <div com-tm="delivery-from">
                    <div class="item item-1">
                        <p><span data-tm="field-name">Legal Entity Name : </span> <span
                                data-tm="field-value">Varasiddhi Silk Exports.</span></p>
                    </div>
                    <div class="item item-2">
                        <p><span data-tm="field-name">Address : </span> <span
                                data-tm="field-value">75, 3rd Cross, Lalbagh Road</span></p>
                    </div>
                    <div class="item item-3">
                        <p><span data-tm="field-name">City & State : </span> <span
                                data-tm="field-value">BENGALURU, KARNATAKA, 560027IN</span>
                        </p>
                    </div>
                </div>


            </div>
            <div class="col-5 mt-3">
                <p class="dl-from-to"><span>Delivery To:</span></p>
                <div com-tm="delivery-to">
                    <div class="item item-1">
                        <p><span data-tm="field-name">Customer Name : </span><span
                                data-tm="field-value">Joseph Arimathea</span></p>
                    </div>
                    <div class="item item-2">
                        <p><span data-tm="field-name">Delivery Address : </span><span
                                data-tm="field-value">3rd Floor, Noida</span></p>
                    </div>


                </div>
            </div>
            <div class="col-12 mt-3">

                <table com-tm="tax">
                    <thead>
                        <tr>
                            <td>Particulars</td>
                            <td>Unit Price</td>
                            <td>Gross value</td>
                            <td class="discount-remove d-none"><span
                                    data-tm="field-name-discount">Discount</span></td>
                            <td>Net value</td>
                            <td class="cgst-remove"><span data-tm="field-name-cgst">CGST
                                    (Rate)</span></td>
                            <td class="cgst-remove">
                                <span data-tm="field-name-cgstinr">CGST </span>
                                <span com-tm="currency" class="d-none">(<span
                                        data-tm="currency"></span>)</span>

                            </td>
                            <td class="sgst-remove">
                                <span data-tm="field-name-sgst">SGST
                                    (Rate)</span>
                            </td>
                            <td class="sgst-remove">
                                <span data-tm="field-name-sgstinr">SGST </span>
                                <span com-tm="currency" class="d-none">(<span
                                        data-tm="currency"></span>)</span>
                            </td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody com-tm="items">
                        <tr class="item item-1">
                            <td><span data-tm="item-quantity">2</span> x <span
                                    data-tm="item-name">Men's Formal Shirt</span>
                            </td>
                            <td data-tm="item-price">200.00</td>
                            <td><span data-tm="item-gross">400.00</span></td>
                            <td class="discount-remove d-none"><span
                                    data-tm="field-value-discount">0</span>%</td>
                            <td><span data-tm="item-net">400.00</span></td>
                            <td class="cgst-remove"><span
                                    data-tm="field-value-cgst">5</span>%</td>
                            <td class="cgst-remove"><span
                                    data-tm="field-value-cgstinr">20.00</span></td>
                            <td class="sgst-remove"><span
                                    data-tm="field-value-sgst">5</span>%</td>
                            <td class="sgst-remove"><span
                                    data-tm="field-value-sgstinr">20.00</span></td>
                            <td><span data-tm="item-total">440.00</span></td>
                        </tr>

                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Item(s) Total </td>
                            <td></td>
                            <td data-tm="item-total-bd">400.00</td>
                            <td class="discount-remove d-none"></td>
                            <td data-tm="item-total-ad">400.00</td>
                            <td class="cgst-remove"></td>
                            <td class="cgst-remove" data-tm="item-tatal-cgst">20.00</td>
                            <td class="sgst-remove"></td>
                            <td class="sgst-remove" data-tm="item-tatal-sgst">20.00</td>
                            <td><span data-tm="sub-total">440.00</span></td>
                        </tr>
                        <tr>
                            <td>Total Value</td>
                            <td></td>
                            <td></td>
                            <td class="discount-remove d-none"></td>
                            <td></td>
                            <td class="cgst-remove"></td>
                            <td class="cgst-remove"></td>
                            <td class="sgst-remove"></td>
                            <td class="sgst-remove"></td>
                            <td><span data-tm="final-total">440.00</span></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="col-12 mt-3">

                <p class="mt-3">Amount <span com-tm="currency" class="d-none"><span
                            data-tm="currency" class="pe-1"></span></span> <span
                        data-tm="final-total" class="fw-bold">440.00</span> settled through
                    digital mode/payment received.
                </p>
                <p>
                    Supply attracts reverse charge : <span>No</span>
                </p>
            </div>


            <div class="col-8 last-section">


                <div com-tm="delivery-platform">
                    <div class="col-12 ">
                        <p data-tm="p-name"> Amazon.com, Inc</p>
                    </div>
                    <div class="item item-1">
                        <p><span data-tm="field-name" class="fw-bold">PAN : </span><span
                                data-tm="field-value">AADCD4946</span></p>
                    </div>
                    <div class="item item-2">
                        <p><span data-tm="field-name" class="fw-bold">CIN : </span><span
                                data-tm="field-value">L930398141</span></p>
                    </div>
                    <div class="item item-3">
                        <p><span data-tm="field-name" class="fw-bold">GST : </span><span
                                data-tm="field-value">06AAD46L1</span></p>
                    </div>

                </div>

            </div>
            <div class="col-4 sign">
            
                <div com-tm="signature">
                    <img data-tm="signature" url="" alt="Authorised Signatory"
                        src="../../../../assets/images/restaurant-bill/signature.png" />
                </div>
                <p>Authorised Signatory</p>
            </div>
        </div>
    </div>
</div>`,

    "form-control":`      <div  id="dynamic-forms-controls" class="row">
    <div class="col-12">
    <div com-fm="logo" class="com-wrapper">
        <div class="com-container">
            <div class="com-header">
                <div class="row">
                    <div class="col-8">
                        <label class="form-label">Logo</label>
                    </div>
                    <div class="col-4 text-end">
                        <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                    </div>
                </div>


            </div>
            <div class="com-sub-header">
                <div class="justify-content-end row">
                    <div class="col-auto"></div>
                    <div class="col-auto"><button class="com-clear"><i class="bi bi-eraser"></i>
                            <span class="ps-1">Clear</span></button></div>
                    <div class="col-auto">
                        <div class="float-end form-check mb-0">
                            <input id="logo-disable" class="form-check-input com-disable"
                                type="checkbox">
                            <label for="logo-disable" class="form-check-label">Disable</label>
                        </div>

                    </div>
                </div>
            </div>
            <div class="com-body">
                <div class="row">
                    <div class="col-12">

                        <label for="logo-upload" class="form-label label-none">Upload</label>
                        <div class="input-group">
                            <input type="file" class="form-control" data-fm="upload"
                                id="logo-upload">
                            <!-- <span title="Clear" data-x="logo-upload"
                                class="input-group-text bi bi-x-lg"></span> -->
                        </div>
                        <label for="logo-url" class="form-label text-center  label-none">h</label>
                        <div class="input-group mt-4">

                            <span class="input-group-text">
                                URL
                            </span>
                            <input type="text" id="logo-url" data-fm="url" class="form-control">
                            <!-- <span title="Clear" class="input-group-text bi bi-x-lg"></span> -->
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>

<div class="col-12 mt-3">
<div com-fm="header" class="com-wrapper">
    <div class="com-container">
        <div class="com-header">
            <div class="row">
                <div class="col-8">
                    <label class="form-label">Heading</label>
                </div>
                <div class="col-4 text-end">
                    <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                </div>
            </div>


        </div>
        <div class="com-sub-header">
            <div class="justify-content-end row">
                <div class="col-auto">
                    <button data-fm='add-item' type="button" class="p-0">
                        <i class="bi bi-plus-square me-1"></i> <span>Add Fields</span></button>
                </div>
                <div class="col-auto">
                    <button class="com-clear"><i class="bi bi-eraser"></i><span class="ps-1">Clear</span></button>
                </div>
                <div class="col-auto">
                    <div class="float-end form-check mb-0">
                        <input id="com-disable-search" class="form-check-input com-disable"
                            type="checkbox">
                        <label for="com-disable-search" class="form-check-label">Disable</label>
                    </div>

                </div>
            </div>
        </div>
        <div class="com-body">

            <div class="items-wrap">
                <div class="item-1">
                    <div class="row">

                        <div class="col-11">
                            <label for="h-1" class="form-label label-none">h</label>
                            <input data-fm="h-1" id="h-1" type="text"
                                class="form-control">
                        </div>

                        <div class="col-1 col-lg-1 ps-0 pt-lg-0 text-end">
                            <button type="button" title="delete"
                                class="btn item-remove p-0 pt-2">
                                <i class="bi bi-trash3-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>
</div>

<div class="col-12 mt-3">
<div com-fm="delivery-from" class="com-wrapper close">
    <div class="com-container">
        <div class="com-header">
            <div class="row">
                <div class="col-8">
                    <label class="form-label">Delivery From</label>
                </div>
                <div class="col-4 text-end">
                    <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                </div>
            </div>


        </div>
        <div class="com-sub-header">
            <div class="justify-content-end row">
                <div class="col-auto">
                    <button data-fm="add-item" type="button" class="p-0"><i
                            class="bi bi-plus-square me-1"></i> <span>Add Fields</span></button>
                </div>
                <div class="col-auto">
                    <button class="com-clear"><i class="bi bi-eraser"></i><span class="ps-1">Clear</span></button>
                </div>
                <div class="col-auto">
                    <div class="float-end form-check mb-0">
                        <input id="delivery-from-disable" class="form-check-input com-disable"
                            type="checkbox">
                        <label for="delivery-from-disable"
                            class="form-check-label">Disable</label>
                    </div>

                </div>
            </div>
        </div>
        <div class="com-body">
            <div class="items-wrap">
                <div class="item-1">
                    <div class="row">
                        <div class="col-12">
                            <label for="field-name" class="form-label label-none">Field Name</label>
                            <input data-fm="field-name" id="field-name" type="text"
                                class="form-control" />
                        </div>
                        <div class="col-12 mt-3">
                            <label for="field-value" class="form-label label-none">Value</label>
                            <input data-fm="field-value" id="field-value" class="form-control"
                                type="text">
                        </div>
                        <div class="col-12">
                            <button type="button" title="delete"
                                class="btn float-end item-remove p-0 pt-3"><i
                                    class="bi bi-trash3-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
</div>
</div>


    <div class="col-12 mt-3">
        <div com-fm="delivery-to" class="com-wrapper close">
            <div class="com-container">
                <div class="com-header">
                    <div class="row">
                        <div class="col-8">
                            <label class="form-label">Delivery To</label>
                        </div>
                        <div class="col-4 text-end">
                            <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                        </div>
                    </div>


                </div>
                <div class="com-sub-header">
                    <div class="justify-content-end row">
                        <div class="col-auto">
                            <button data-fm="add-item" type="button" class="p-0"><i
                                    class="bi bi-plus-square me-1"></i><span>Add Fields</span></button>
                        </div>
                        <div class="col-auto">
                            <button class="com-clear"><i class="bi bi-eraser"></i><span class="ps-1">Clear</span></button>
                        </div>
                        <div class="col-auto">
                            <div class="float-end form-check mb-0">
                                <input id="delivery-to-disable" class="form-check-input com-disable"
                                    type="checkbox">
                                <label for="delivery-to-disable"
                                    class="form-check-label">Disable</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="com-body">
                    <div class="items-wrap">
                        <div class="item-1">
                            <div class="row">
                                <div class="col-12">
                                    <label for="field-name" class="form-label label-none">Field Name</label>
                                    <input data-fm="field-name" id="field-name" type="text"
                                        class="form-control" />
                                </div>
                                <div class="col-12 mt-3">
                                    <label for="field-value" class="form-label label-none">Value</label>
                                    <input data-fm="field-value" id="field-value" class="form-control"
                                        type="text">
                                </div>
                                <div class="col-12">
                                    <button type="button" title="delete"
                                        class="btn item-remove p-0 pt-3 float-end"><i
                                            class="bi bi-trash3-fill"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
 
    <div class="col-12 mt-3">
        <div com-fm="items" class="com-wrapper close">
            <div class="com-container">
                <div class="com-header">
                    <div class="row">
                        <div class="col-8">
                            <label class="form-label">Items</label>
                        </div>
                        <div class="col-4 text-end">
                            <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                        </div>
                    </div>


                </div>
                <div class="com-sub-header">
                    <div class="justify-content-end row">
                        <div class="col-auto">
                            <button data-fm="add-item" type="button" class="p-0"><i
                                    class="bi bi-plus-square me-1"></i><span>Add Fields</span></button>
                        </div>
                        <div class="col-auto">
                            <button class="com-clear">
                                <i class="bi bi-eraser"></i><span class="ps-1"> Clear</span></button>
                        </div>
                        <div class="col-auto">
                            <div class="float-end form-check mb-0">
                                <input id="items-disable" class="form-check-input com-disable"
                                    type="checkbox">
                                <label for="items-disable" class="form-check-label">Disable</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="com-body">
                    <div class="items-wrap">
                        <div class="item-1">
                            <div class="row">
                                <div class="col-12">
                                    <label for="item-name" class="form-label">Item Name</label>
                                    <input data-fm="item-name" id="item-name" type="text"
                                        class="form-control" />
                                </div>
                                <div class="col-12 col-lg-5 mt-3">
                                    <label for="item-price" class="form-label">Item Price</label>
                                    <input data-fm="item-price" id="item-price" class="form-control"
                                        type="text">
                                </div>
                                <div class="col-12 col-lg-5 mt-3">
                                    <label for="item-quantity" class="form-label">Quantity</label>
                                    <input data-fm="item-quantity" id="item-quantity"
                                        class="form-control" type="text">
                                </div>
                                <div class="col-12 col-lg-2 mt-lg-3 text-end">
                                    <button type="button" title="delete"
                                        class="btn item-remove mt-lg-3 p-0 pt-4"><i
                                            class="bi bi-trash3-fill"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>

    <div class="col-12 mt-3">
    <div com-fm="tax" class="com-wrapper close">
        <div class="com-container">
            <div class="com-header">
                <div class="row">
                    <div class="col-8">
                        <label class="form-label">Tax & Discount</label>
                    </div>
                    <div class="col-4 text-end">
                        <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                    </div>
                </div>


            </div>

            <div class="com-body pb-0">
                <div class="border-bottom pb-3 row">

                    <div class="col-12 col-lg-6">
                        <label class="form-label label-none" for="field-name-discount">Field Name</label>
                        <input class="form-control" data-fm="field-name-discount"
                            id="field-name-discount" type="text">
                    </div>
                    <div class="col-12 col-lg-5 mt-3 mt-lg-0">
                        <label class="form-label label-none" for="field-value-discount">value</label>
                        <input class="form-control" data-fm="field-value-discount"
                            id="field-value-discount" type="text">
                    </div>
                    <div class="col-12 col-lg-1 ps-0 pt-3 pt-lg-0">
                        <div class="form-check float-end float-lg-start pt-lg-2">
                            <input type="checkbox" checked="" id="field-discount-check"
                                data-fm="field-discount-check" class="form-check-input">
                            <label class="label-none" for="field-discount-check">h</label>
                        </div>
                    </div>

                </div>
                <div class="border-bottom pb-3 row mt-2">

                    <div class="col-12 col-lg-6">
                        <label class="form-label label-none" for="field-name-cgst">Field Name</label>
                        <input class="form-control" data-fm="field-name-cgst" id="field-name-cgst"
                            type="text">
                    </div>

                    <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                        <label class="form-label label-none" for="field-value-cgst">value</label>
                        <input class="form-control" data-fm="field-value-cgst" id="field-value-cgst"
                            type="text">
                    </div>

                    <div class="col-12 mt-3">
                        <label class="form-label label-none" for="field-name-cgstinr">Field Name</label>
                        <input class="form-control" data-fm="field-name-cgstinr"
                            id="field-name-cgstinr" type="text">
                    </div>
                    <div class="col-12">
                        <div class="float-end pt-3">
                            <input type="checkbox" checked="" id="tax-cgst-check"
                                data-fm="tax-cgst-check" class="form-check-input">
                            <label class="label-none" for="tax-cgst-check">h</label>
                        </div>
                    </div>
            


                </div>
                <div class="border-bottom pb-3 mt-3 row">

                    <div class="col-12 col-lg-6">
                        <label class="form-label label-none" for="field-name-sgst">Field Name</label>
                        <input class="form-control" data-fm="field-name-sgst" id="field-name-sgst"
                            type="text">
                    </div>
                    <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                        <label class="form-label label-none" for="field-value-sgst">Value</label>
                        <input class="form-control" data-fm="field-value-sgst" id="field-value-sgst"
                            type="text">
                    </div>


                    <div class="col-12 mt-3">
                        <label class="form-label label-none" for="field-name-sgstinr">Field Name</label>
                        <input class="form-control" data-fm="field-name-sgstinr"
                            id="field-name-sgstinr" type="text">
                    </div>
                    <div class="col-12">
                        <div class="float-end pt-3">

                            <input type="checkbox" checked="" id="tax-sgst-check"
                                data-fm="tax-sgst-check" class="form-check-input">
                            <label class="label-none" for="tax-sgst-check">h</label>
                        </div>
                    </div>
                

                </div>
            </div>

        </div>
    </div>
</div>

  
   
 
<div class="col-12 mt-4">
<div com-fm="delivery-platform" class="com-wrapper close">
    <div class="com-container">
        <div class="com-header">
            <div class="row">
                <div class="col-8">
                    <label class="form-label">Delivery Platform</label>
                </div>
                <div class="col-4 text-end">
                    <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                </div>
            </div>


        </div>
        <div class="com-sub-header">
            <div class="justify-content-end row">
                <div class="col-auto">
                    <button data-fm="add-item" type="button" class="p-0"><i class="bi bi-plus-square me-1"></i>
                        <span>Add Fields</span>
                    </button>
                </div>
                <div class="col-auto">
                    <button class="com-clear"><i class="bi bi-eraser"></i><span class="ps-1">Clear</span></button>
                </div>
                <div class="col-auto">
                    <div class="float-end form-check mb-0">
                        <input id="delivery-platform-disable"
                            class="form-check-input com-disable" type="checkbox">
                        <label for="delivery-platform-disable"
                            class="form-check-label">Disable</label>
                    </div>

                </div>
            </div>
        </div>
        <div class="com-body">
            <div class="row border-bottom pb-3 mb-2">
                <div class="col-12">
                    <label for="p-name" class="form-label">Platform Name</label>
                    <input id="p-name" type="text" data-fm="p-name" class="form-control" />
                </div>

            </div>
            <div class="items-wrap">
                <div class="item-1">
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <label for="delivery-to-name" class="form-label label-none">Field Name</label>
                            <input id="delivery-to-name" data-fm="field-name" type="text" class="form-control" />
                        </div>
                        <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                            <label for="delivery-to-value" class="form-label label-none">Value</label>
                            <input id="delivery-to-value" data-fm="field-value" class="form-control" type="text">
                        </div>
                        <div class="col-12 text-end col-lg-2">
                            <button type="button" title="delete"
                                class="btn item-remove p-0 pt-2"><i
                                    class="bi bi-trash3-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
</div>
</div>
    <div class="col-12 mt-3">
        <div com-fm="signature" class="com-wrapper close">
            <div class="com-container">
                <div class="com-header">
                    <div class="row">
                        <div class="col-8">
                            <label class="form-label">Signature</label>
                        </div>
                        <div class="col-4 text-end">
                            <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                        </div>
                    </div>


                </div>
                <div class="com-sub-header">
                    <div class="justify-content-end row">
                        
                        <div class="col-auto"><button class="com-clear"><i class="bi bi-eraser"></i>
                                <span class="ps-1">Clear</span></button></div>
                        <div class="col-auto">
                            <div class="float-end form-check mb-0">
                                <input id="signature-disable" class="form-check-input com-disable"
                                    type="checkbox">
                                <label for="signature-disable" class="form-check-label">Disable</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="com-body">
                    <div class="row">
                        <div class="col-12">

                            <label for="signature-upload" class="form-label label-none">Upload</label>
                            <div class="input-group">
                                <input type="file" class="form-control" data-fm="upload"
                                    id="signature-upload">
                            </div>
                            <label for="signature-url"
                                class="form-label text-center  label-none">h</label>
                            <div class="input-group mt-4">
                                <span class="input-group-text">
                                    URL
                                </span>
                                <input type="text" id="signature-url" data-fm="url"
                                    class="form-control">
                                <!-- <span title="Clear" class="input-group-text bi bi-x-lg"></span> -->
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    <div class="col-12 mt-3">
        <div com-fm="currency" class="com-wrapper">
            <div class="com-container">
                <div class="com-header">
                    <div class="row">
                        <div class="col-8">
                            <label class="form-label">Currency</label>
                        </div>
                        <div class="col-4 text-end">
                            <button title="Toggle Tab" class="com-close"><i class="bi bi-dash bi-plus"></i></button>
                        </div>
                    </div>


                </div>
                <div class="com-sub-header">
                    <div class="row">
                        <div class="col-12">
                            <div class="float-end form-check mb-0">
                                <input id="currency-disable" class="form-check-input com-disable"
                                    type="checkbox">
                                <label for="currency-disable" class="form-check-label">Disable</label>
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
                                 
                                      <input data-fm="search-currency" placeholder="Search country" id="search-currency" type="text"
                                      class="form-control">
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
                                <input checked data-fm="currency-code" id="currency-code"
                                    name="currency-type" type="radio" class="form-check-input">
                                <label for="currency-code" class="form-check-label">Code</label>
                            </div>
                        </div>
                        <div class="col-6 mt-3">
                            <div class="form-check">
                                <input id="currency-symbol" data-fm="currency-symbol"
                                    name="currency-type" type="radio" class="form-check-input">
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
</div>`,
"modal": `     <div class="modal fade template-modal modal-template" id="modal-template" tabindex="-1"
aria-labelledby="tester-view">
<div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
        <!-- <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
        </div> -->
        <div class="modal-body">

        </div>
        <div class="modal-footer d-block d-md-none text-end bg-body">
            <button type="button" class="btn btn-success"
                data-bs-dismiss="modal">Close</button>
        </div>
    </div>
</div>
</div>`
}