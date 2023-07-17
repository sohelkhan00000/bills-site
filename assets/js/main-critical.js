var jsLoad = (filePath, deferType, ele, CB) => {

    let isExist = false;
    document.querySelectorAll('script').forEach((e) => {
        if (e.src == filePath) {
            isExist = true;
            return false;
        }
    })

    if (!isExist) {
        const script = document.createElement('script');
        script.src = filePath;
        script.defer = deferType;

        script.onload = () => {
            CB(true, 'Script loaded successfuly');
        };
        script.onerror = () => {
            CB(false, 'Error occurred while loading script');
        };
        document[ele].appendChild(script);
    }
    else {
        CB(true, 'Script file already exist');
    }
}

var cssLoad = (filePath, ele, CB) => {

    let isExist = false;
    document.querySelectorAll('link').forEach((e) => {
        if (e.href == filePath) {
            isExist = true;
            return false;
        }
    })

    if (!isExist) {
        const link = document.createElement('link');
        link.href = filePath;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.as = 'style';

        link.onload = () => {
            CB(true, 'Style loaded successfuly');
        };
        link.onerror = () => {
            CB(false, 'Error occurred while loading style');
        };
        document[ele].appendChild(link);
    }
    else {
        CB(true, 'Style file already exist');
    }
}

var loadGA = () => {
    jsLoad('https://www.googletagmanager.com/gtag/js?id=G-HXL5BF20G0', true, 'head', (suc, msg) => {
        if (suc) {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-HXL5BF20G0');
        }
        //console.log('GA ' + msg);
    });
}

var loadAds = (CB) => {
    if (window.location.host == 'freeforonline.com') {
        // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2437807813389823"
        //  crossorigin="anonymous"></script>
        let filePath = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2437807813389823";
        let ele = 'head'
        let isExist = false;
        document.querySelectorAll('script').forEach((e) => {
            if (e.src == filePath) {
                isExist = true;
                return false;
            }
        })

        if (!isExist) {
            const script = document.createElement('script');
            script.src = filePath;
            // script.defer = deferType;
            script.async = true;
            script.crossOrigin = 'anonymous'

            script.onload = () => {
                CB(true, 'Ads Script loaded successfuly');
            };
            script.onerror = () => {
                CB(false, 'Error occurred while loading script');
            };
            document[ele].appendChild(script);
        }
        else {
            CB(true, 'Script file already exist');
        }
    }
}

loadAds()

var lAll = () => {
    if (window.location.host == 'freeforonline.com') {
        loadGA();
    }


    cssLoad(server.serverPath + '/assets/plugins/bootstrap-5.3.0-alpha1-dist/css/bootstrap.min.css', 'head', (sucA, msgA) => {
        if (sucA) {
            cssLoad(server.serverPath + '/assets/style/main' + server.serverStyle, 'head', (sucF, msgF) => {
                if (sucF) {
                    if (server.serverPage == "/fuel-bills") {
                        cssLoad(server.serverPath + '/assets/style/fuel-receipt' + server.serverStyle, 'head', (sucS, msgS) => {
                            if (sucS) {
                                // REle(server.serverPath + '/assets/style/fuel-receipt-critical' + server.serverStyle, 'link', (sucT, msgT) => {
                                //     //console.log('Critical css ' + msgT);
                                // });
                            }
                        });
                    }
                    else if (server.serverPage == "/" || server.serverPage == "/rent-receipt") {
                        cssLoad(server.serverPath + '/assets/style/generate-receipt' + server.serverStyle, 'head', (sucS, msgS) => {
                            if (sucS) {
                                // REle(server.serverPath + '/assets/style/main-critical' + server.serverStyle, 'link', (sucT, msgT) => {
                                //     //console.log('Critical css ' + msgT);
                                // });
                            }
                        });
                    }
                }
            });
        }
    });

    jsLoad('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js', true, 'body', (suc, msg) => {
        if (suc) {
            jsLoad(server.serverPath + '/assets/js/main-page' + server.serverScript, true, 'body', (sucA, msgA) => {
                if (sucA) {
                    if (server.serverPage == "/fuel-bills") {
                        jsLoad(server.serverPath + '/assets/js/fuel-receipt' + server.serverScript, true, 'body', (sucB, msgB) => {

                        });
                    }
                    else if (server.serverPage == "/" || server.serverPage == "/rent-receipt") {
                        jsLoad(server.serverPath + '/assets/js/generate-receipt' + server.serverScript, true, 'body', (sucB, msgB) => {

                        });
                    }
                    else if (server.serverPage == "/contact") {
                        jsLoad(server.serverPath + '/assets/js/contact-us' + server.serverScript, true, 'body', (sucB, msgB) => {

                        });
                    }
                    else if (server.serverPage == "/about") {
                        jsLoad(server.serverPath + '/assets/js/about-us' + server.serverScript, true, 'body', (sucB, msgB) => {

                        });
                    }
                }
            });
        }
    });

}

var REle = (filePath, eleName, CB) => {

    document.querySelectorAll([eleName]).forEach((e) => {
        if (e.href == filePath) {
            e.remove();
            CB(true, 'file removed')
            return false;
        }
        else {
            CB(false, 'file not found')
        }
    })

}

// var addMeta = (CB) => {
//     server.serverPage = window.location.pathname

//     if (server.serverPage == "/" || server.serverPage == "/rent-receipt") {

//         // document.querySelector('meta[name="keywords"]').setAttribute("content", "free rent receipts, rent receipts, free rent slips, rent slips");
//         // document.querySelector('meta[name="description"]').setAttribute("content", "Download free rent receipts PDF without login and email.");
//         // document.title = "Free rent receipts";

//     }
//     else if (server.serverPage == "/fuel-bills") {
//        // document.querySelector('meta[name="keywords"]').setAttribute("content", "free fuel bills, free petrol bills, free diesel bills, free cng bills");
//        // document.querySelector('meta[name="description"]').setAttribute("content", "Free download fuel bills pdf without login and email.");
//         // document.title = "Free fuel bills";

//     }
//     else if (server.serverPage == "/contact") {
//        // document.title = "Contact Us";

//     }
//     else if (server.serverPage == "/about") {
//         //document.title = "About Us";

//     }
//     else if (server.serverPage == "/services") {
//        // document.title = "Services";

//     }
// }

// set site on load..

var setSite = (CB) => {
    let moblNav = document.getElementById("nav-links");
    let linkbtn = document.getElementById("linkmblmenu");

    linkbtn.addEventListener("click", () => {
        moblNav.classList.toggle("d-block");
    });
}

var activeMenu = () => {

}

['focus', 'scroll', 'mousemove', 'touchstart', 'click'].forEach((e) => {
    document.addEventListener(e, (ev) => {
        //ev.preventDefault();
        server.serverPage = window.location.pathname
        lAll();
    });
});

window.addEventListener("load", (e) => {
    setSite()
}, { once: true });


