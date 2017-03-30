var checkVar = function(vari) {
            if (vari == false) {
                 return true;           
            } else {
               return false;           
            }
}
var login = function() {
            var user = document.forms["access_granted"]["username"].value;
            var pass = document.forms["access_granted"]["username"].value;
            if (pass == "vbdxj6578$mN") {
                var usr = "user=" + user;
                document.cookie = usr;
                window.location.href = "right.html";
                location.reload();
            } else {
               window.location.href = "wrong.html";
               location.reload();
            }
}
var Validate = function() {
       login();
}

