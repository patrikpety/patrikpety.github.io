window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined 

    var form = document.getElementById("my-form");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Ďakujeme za odoslanie!";
    }

    function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! Nastala chyba.";
    }

    // handle the form submission event
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
            var data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        });
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
        };
    xhr.send(data);
}