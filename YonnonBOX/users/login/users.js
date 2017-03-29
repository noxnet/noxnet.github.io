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
            if (user == username) {
                  if (pass == password) {
                      var usr = "user="+user;
                      document.cookie = usr;
                      alert("LOGIN SUCCESSFUL");
                      window.location.href = "noxnet.github.io/YonnonBOX/";
                      location.reload();
                  }
            } else {
               alert("LOGIN FAILED");
               document.write("<div style=\"border: 2px solid green; background-color: #33cc33; margin: auto;\"><p style=\"text-align: center\">LOGIN FAILED</p></div><a href=\"../../\">BACK</a>");
            }
}
var Validate = function() {
       login("public_non", "vbdxzy");
       login("red_hand", "gortzonx");
}

