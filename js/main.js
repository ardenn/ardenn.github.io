M.AutoInit();
var contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var request = new XMLHttpRequest();
    request.open("POST", "/", true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;  charset=UTF-8");

    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
            // request end.
            if (request.status == 200) {
                // success START
                M.toast({ html: 'Success! Message Sent', classes: "green" });
                document.getElementById("name").value = null;
                document.getElementById("message").value = null;
                document.getElementById("email").value = null;
                document.getElementById("web").checked = false;
                document.getElementById("mobile").checked = false;
                document.getElementById("software").checked = false;
                document.getElementById("visualization").checked = false;
                document.getElementById("analysis").checked = false;
                document.getElementById("machine").checked = false;
                // success END
            } else {
                // error START
                M.toast({ html: 'An error occurred! Please try again', classes: "red" });
                // error END
            }
        }
    };

    var data = `form-name=contacts&bot-field=${document.getElementById("bot-field").value}&name=${document.getElementById("name").value}&email=${document.getElementById("email").value}&message=${document.getElementById("message").value}&web=${document.getElementById("web").checked}&mobile=${document.getElementById("mobile").checked}&software=${document.getElementById("software").checked}&visualization=${document.getElementById("visualization").checked}&analysis=${document.getElementById("analysis").checked}&machine=${document.getElementById("machine").checked}`;
    request.send(data);
});  