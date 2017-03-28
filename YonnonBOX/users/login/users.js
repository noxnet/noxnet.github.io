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
                  alert("LOGIN SUCCESSFUL");
                  if (user == "public_non") {
                      document.cookie = "user=public_non";           
                  }
                  if (user == "red_hand") {
                      document.cookie = "user=red_hand";           
                  }
                  window.location.href = "noxnet.github.io/YonnonBOX/";
                  window.location.reload();
                  return true;
            } else {
               alert("LOGIN FAILED");
               document.cookie = "status=nosign";
               window.location.href = "noxnet.github.io/YonnonBOX/";
               window.location.reload();
               return false;
            }
}
var Validate = function() {
       login("public_non", "vbdxzy");
       login("red_hand", "gortzonx");
}

