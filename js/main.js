M.AutoInit();
var contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var textFields = ["bot-field", "name", "email", "message"]
    var checkedFields = ["web", "mobile", "software", "visualization", "analysis", "machine", "automation"]
    var request = new XMLHttpRequest();
    request.open("POST", "/", true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;  charset=UTF-8");

    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
            // request end.
            if (request.status == 200) {
                // success START
                M.toast({ html: 'Success! Message Sent', classes: "green" });
                textFields.forEach(field => {
                    document.getElementById(field).value = null;
                })
                checkedFields.forEach(field => {
                    document.getElementById(field).checked = false;
                })
                // success END
            } else {
                // error START
                M.toast({ html: 'An error occurred! Please try again', classes: "red" });
                // error END
            }
        }
    };
    var data = "form-name=contacts";
    checkedFields.forEach(field => {
        data += document.getElementById(field).checked ? `&${field}=Yes` : `&${field}=No`;
    })
    textFields.forEach(field => {
        data += `&${field}=${document.getElementById(field).value}`
    })
    request.send(data);
});  