
const fs = require('fs');

var routes = [
    '404.html',
    'rent-receipt.html',
    'fuel-bills.html',
    'about.html',
    'contact.html',
    'services.html',
    'cookie.html',
    'privacy.html',
    'terms.html',
    'disclaimer.html',
    'driver-salary.html'
];

// Copying the file to a the same name
routes.forEach((value, i, arr) => {
    if (value == 'driver-salary.html') {
        fs.copyFile("index.html", 'tools/' + value, (err) => {
            if (err) {
                console.log("Error Found:", err);
            }
            else {
                console.log(value + "File created!")
            }
        });
    }
    else {
        fs.copyFile("index.html", value, (err) => {
            if (err) {
                console.log("Error Found:", err);
            }
            else {
                console.log(value + "File created!")
            }
        });
    }

});


