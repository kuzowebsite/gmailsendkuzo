function SendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        dugaar_id : document.getElementById("dugaar_id").value,
        torol : document.getElementById("torol").value,
        class : document.getElementById("class").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_7pihjz4", "template_j8qz4jg", params).then(function (res) {
        alert("Амжилтай илгээлээ ! " + res.status);
    })
}
