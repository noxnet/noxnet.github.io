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
                  document.cookie = "user=" + user;
                  window.location.href = "noxnet.github.io/YonnonBOX/";
                  window.location.reload();
                  return true;
            } else {
               document.cookie = "STATUS=NOSIGN";
               window.location.href = "noxnet.github.io/YonnonBOX/";
               window.location.reload();
               return false;
            }
}
var Validate = function() {
       login("public_non", "vbdxzy");
       login("red_hand", "gortzonx");
}

