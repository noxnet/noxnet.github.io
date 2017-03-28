var checkVar = function(vari) {
            if (vari == false) {
                 return true;           
            } else {
               return false;           
            }
}
usrnames = ["public_non", "red_hand"];
pswords = ["vbdzxy", "gortzonx"];
var login = function(username, password) {
            var user = document.forms["access_granted"]["username"].value;
            var pass = document.forms["access_granted"]["username"].value;
            if (user == username && pass == password) {
                  return true;
            } else {
               return false;
            }
}
var Validate = function() {
            var count = 0;
            var j = 0;
            for (var i = 0; i < usrnames.length; i++) {
                 if (login(usrnames[j], pswords[j]) == true;) {
                      if (usrnames[j] == "public_non") {
                          alert("LOGIN SUCCESSFUL: public_non");
                          document.cookie = "user=" + usrnames[j];
                          window.location.href = "noxnet.github.io/YonnonBOX/";
                          window.location.reload();           
                      } else if (usrnames[j] == "red_hand") {
                         document.cookie = "user=" + usrnames[j];
                         window.location.href = "noxnet.github.io/YonnonBOX/";
                         window.location.reload();            
                      }
                      count++;
                      j++;
                 } else {
                    j++;           
                 }
            }
            if (count != 0) {
                alert("LOGIN FAILED");
                document.cookie = "STATUS=NOSIGN";
                window.location.href = "noxnet.github.io/YonnonBOX/";
                window.location.reload();
            }
            
}

