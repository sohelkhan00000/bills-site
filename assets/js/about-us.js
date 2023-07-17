var aboutUs = () => {
    class formControls {

        constructor() {
            this['au-mail'] = document.querySelector('app-about-page #au-mail');
            this['au-phone'] = document.querySelector('app-about-page #au-phone');
            this['au-address'] = document.querySelector("app-about-page #au-address");
        }
    }

    let objFormControls = {};

    var readyPage = () => {
        objFormControls = new formControls();
        // objFormControls['au-mail'].innerHTML = " "+ server.siteEmail;
        // objFormControls['au-mail'].href = "mailto:" + server.siteEmail
        // objFormControls['au-phone'].innerHTML = " "+ server.sitePhone;
    }
    readyPage()

}