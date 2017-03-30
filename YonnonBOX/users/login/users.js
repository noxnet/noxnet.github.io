var checkVar = function(vari) {
            if (vari == false) {
                 return true;           
            } else {
               return false;           
            }
}
var login = function() {
            var user = document.forms["access_granted"]["username"].value;
            var pass = document.forms["access_granted"]["password"].value;
            if (pass == "vbdxj6578$mN") {
                var usr = "user=" + user;
                document.cookie = usr;
                window.location.href = "noxnet.github.io/YonnonBOX/users/login/right.html";
                
            } else {
               window.location.href = "noxnet.github.io/YonnonBOX/users/login/wrong.html";
            }
}
var Validate = function() {
       login();
}

