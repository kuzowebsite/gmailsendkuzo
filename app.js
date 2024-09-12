function SendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        dugaar_id : document.getElementById("dugaar_id").value,
        torol : document.getElementById("torol").value,
        class : document.getElementById("class").value,
        time : document.getElementById("time").value,
	dugnelt : document.getElementById("dugnelt").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_7pihjz4", "template_j8qz4jg", params).then(function (res) {
        alert("Амжилтай илгээлээ ! " + res.status);

        const btn = document.querySelector(".button");
        btn.classList.add("button--loading");
        btn.classList.remove("button--loading");
    })
} 

var theToggle = document.getElementById('toggle');


function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}

function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

//aldaa border
function validateInput(input) {
    if (input.value.trim() === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }
  
  const inputs = document.querySelectorAll(".input-field");
  
  inputs.forEach(input => {
    input.addEventListener("blur", function() {
      validateInput(input);
    });
  });
  
  document.getElementById("container").addEventListener("send", function(e) {
    inputs.forEach(input => validateInput(input));
    
    if (document.querySelectorAll(".error").length > 0) {
      e.preventDefault();
      alert("Бүх талбарыг бөглөнө үү.");
    }
  });
