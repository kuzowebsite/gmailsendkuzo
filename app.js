function SendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        torol : document.getElementById("torol").value,
        class : document.getElementById("class").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_tto1xyq", "template_6z9nvqr", params).then(function (res) {
        alert("Амжилтай илгээлээ ! " + res.status);
           emailjs.send("service_htashl9", "template_6z9nvqr", params).then(function (res){
            alert("Амжилтай илгээлээ ! " + res.status);
    })
}
