var checkVar = function(vari) {
            if (vari == false) {
                 return true;           
            } else {
               return false;           
            }
}
var login = function(username, password) {
            var user = document.forms["access_granted"]["username"].value;
            var pass = document.forms["access_granted"]["username"].value;
            if (user == username && pass == password) {
                  document.cookie = "user=" + user;
                  window.location.href = "noxnet.github.io/YonnonBOX/";
                  window.location.reload();
                  return true;
            } else {
               return false;
            }
}
var Validate = function() {
            var varnums = ["a", "b"];
            var a = login("public_non", "vbdxzy");
            var b = login("red_hand", "gortzonx");
            var count = 0;
            var j = 0;
            for (var i = 0; i < varnums.length; i++) {
                  if (checkVar(varnums[j] == true) {
                       count++
                       j++
                  }
            }
            if (count == varnums.length) {
                alert("INVALID LOGIN, OR LOGIN NOT REGISTERED");
                window.location.href = "noxnet.github.io/YonnonBOX/";
                window.location.reload();                 
            } else if (count != varnums.length) {
                nothing;            
            }
}

