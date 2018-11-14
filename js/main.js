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
                document.getElementById("web").value = null;
                document.getElementById("mobile").value = null;
                document.getElementById("software").value = null;
                document.getElementById("visualization").value = null;
                document.getElementById("analysis").value = null;
                document.getElementById("machine").value = null;
                // success END
            } else {
                // error START
                M.toast({ html: 'An error occurred! Please try again', classes: "red" });
                // error END
            }
        }
    };

    var data = `form-name=leads&bot-field=${document.getElementById("bot-field").value}&name=${document.getElementById("name").value}&email=${document.getElementById("email").value}&message=${document.getElementById("message").value}&web=${document.getElementById("web").value}&mobile=${document.getElementById("mobile").value}&software=${document.getElementById("software").value}&visualization=${document.getElementById("visualization").value}&analysis=${document.getElementById("analysis").value}&machine=${document.getElementById("machine").value}`;
    request.send(data);
});  