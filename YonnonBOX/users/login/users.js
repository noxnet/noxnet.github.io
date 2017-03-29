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
                      return true;
                  }
            } else {
               return false;
            }
}
var Validate = function() {
        var nums = ["x", "y"];
        var x = login("public_non", "vbdxzy");
        var y = login("red_hand", "gortzonx");
        var count = 0;
        var loginAs;
        if (x == true) {
           count++;
           loginAs = "public_non";
        } else {
           nothing;           
        }
        if (y == true) {
            count++
            loginAs = "red_hand";        
        } else {
            nothing;           
        }
        if (count == 1) {
            alert("LOGIN SUCCESSFUL");
            if (loginAs == "public_non") {
                document.cookie = "user=public_non";
                window.location.href = "noxnet.github.io/YonnonBOX/";
                location.reload();
            }
            if (loginAs == "red_hand") {
                document.cookie = "user=public_non";
                window.location.href = "noxnet.github.io/YonnonBOX/";
                location.reload();
            }
        } else {
           alert("LOGIN FAILED");           
        }
                      
}

