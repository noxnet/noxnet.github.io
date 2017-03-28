var login = function(username, password) {
            var user = document.forms["access_granted"]["username"].value;
            var pass = document.forms["access_granted"]["username"].value;
            if (user == username) {
                  document.cookie = "user=" + user;
                  window.location.href = "noxnet.github.io/YonnonBOX/";
                  window.location.reload();
            } else {
               alert("INVALID LOGIN, OR LOGIN NOT REGISTERED");
               window.location.href = "noxnet.github.io/YonnonBOX/";
               window.location.reload();
            }
}
var Validate = function() {
            login("public_non", "vbdxzy");
            login("red_hand", "gortzonx");
}

