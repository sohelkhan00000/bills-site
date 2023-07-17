var contactUs = () => {
    class formControls {

        constructor() {
            this['cu-name'] = document.querySelector('app-contact-page #cu-name');
            this['cu-mail'] = document.querySelector('app-contact-page #cu-mail');
            this['cu-message'] = document.querySelector("app-contact-page #cu-message");
            this['cu-send'] = document.querySelector("app-contact-page #cu-send");
            this['cu-email'] = document.querySelector("app-contact-page #cu-email");


        }
    }

    // class errorControls {

    //     constructor() {
    //     //    this['name'] = document.querySelector("app-contact-page p[data-error='cu-name']");
    //     //    this['mail'] = document.querySelector("app-contact-page p[data-error='cu-mail']");
    //     //    this['message'] = document.querySelector("app-contact-page p[data-error='cu-message']");
    //     //    this['sent'] = document.querySelector("app-contact-page p[data-error='cu-sent']");


    //     }
    // }

    let objFormControls = {};
    let objErrorControls = {};

    var readyPage = () => {
        objFormControls = new formControls();
       // objFormControls['contact-email'].innerHTML = " "+ server.siteEmail
        for (let i in objFormControls) {
            if (document.querySelector("p[data-error=" + i + "]")) {
                objErrorControls[i] = document.querySelector("p[data-error=" + i + "]")
            }

        }

    }
    readyPage()

    var checkValidation = (value, type, name, callBack) => {
        if (type == "Name") {
            var DisgitFinder = /\d/g;
            var NonWordCorrentorFinder = /\W/g;

            if (value == "") {

                callBack(false, name + " cannot be  empty!");
                return false;
            }
            else if (value.length > 35) {

                callBack(false, name + " cannot be more than 35 characters!");
                return false;

            }
            else if (DisgitFinder.test(value)) {

                callBack(false, name + " cannot contain numbers and space!");
                return false;

            }

            callBack(true, name + " validated successfully!");
            return true;
        }
        else if (type == "Empty") {
            if (value == "") {
                callBack(false, name + " cannot be empty!");
                return false;
            }
            callBack(true, name + " validated successfully!");
            return true;
        }
    }

    var validateControl = (cb) =>{
        let isControlsValid = true;
        checkValidation(objFormControls['cu-name'].value, "Empty", "name", function (nameSuc, nameMsg) {
            if (!nameSuc) {
              
               objErrorControls['cu-name'].innerHTML = nameMsg;
               objErrorControls['cu-name'].style.display = "block"
            }
            else {
                objErrorControls['cu-name'].style.display = "none";
            }
        });

        checkValidation(objFormControls['cu-mail'].value, "Empty", "mail", function (nameSuc, nameMsg) {
            if (!nameSuc) {
              
               objErrorControls['cu-mail'].innerHTML = nameMsg;
               objErrorControls['cu-mail'].style.display = "block"
            }
            else {
                objErrorControls['cu-mail'].style.display = "none";
            }
        });

        checkValidation(objFormControls['cu-message'].value, "Empty", "message", function (nameSuc, nameMsg) {
            if (!nameSuc) {
              
               objErrorControls['cu-message'].innerHTML = nameMsg;
               objErrorControls['cu-message'].style.display = "block"
            }
            else {
                objErrorControls['cu-message'].style.display = "none";
            }
        });
        let checkAllvalidation = document.querySelectorAll("app-contact-page .validation-message");
        Object.keys(checkAllvalidation).some(function (k) {
            if (checkAllvalidation[k].style.display == "block") {
                var headerOffset;
                //checkAllvalidation[k].id == "ErrorAdress" ? headerOffset = 130 : headerOffset = 80;
    
                var elementPosition = checkAllvalidation[k].getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                isControlsValid = false;
                checkAllvalidation[k].previousElementSibling.focus()
                
                return true;
            }
          
        });

        if(isControlsValid)
        {
            cb(true, "Mail sent successfully!");
            sendEmail()
        }
        else
        {
            cb(false, "Validation error");
        }

    }

    function sendMail(name,mail,message, cb) {
        var recipient = 'recipient@example.com';
        var subject = 'Hello';
        var body = 'Just wanted to say hi!';
      
        var mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      
        // Open the user's default email client with the pre-filled information
        window.location.href = mailtoLink;
      }
     
      
      
      
      
      
    objFormControls["cu-send"].addEventListener("click", () => {
        validateControl((suc,msg)=>{
            console.log(msg)
        })
           // alert('hello')
    });

}