var login = function(username, password) {
            var user = document.forms["access_granted"]["username"].value;
            var pass = document.forms["access_granted"]["username"].value;
            if (user == username) {
                  document.cookie = "user=" + user;
                  window.location.href = "noxnet.github.io/YonnonBOX/";
                  location.reload();
            } else {
               alert("INVALID LOGIN, OR LOGIN NOT REGISTERED");
               window.location.href = "noxnet.github.io/YonnonBOX/";
            }
}
var Validate = function() {
            var user = document.forms["access_granted"]["username"].value;
            var pass = document.forms["access_granted"]["password"].value;
            var button = document.getElementById["submit"].value;
            if (user === "public_non") {
               if (pass === "vbdzxy") {
                   document.cookie = "user=public_non";
                   alert("ACCESSING PUBLIC USER");
                   window.location.href = "noxnet.github.io/YonnonBOX/";
                   window.location.reload();
               }
            }
            if (user === "red_hand") {
                 if (pass === "noxuser") {
                     document.cookie = "user=RED_hand";
                     alert("ACCESSING RED HAND");
                     window.location.href = "noxnet.github.io/YonnonBOX/";
                     window.location.reload();
                 }
            } else {
              document.cookie = "user=NOSIGN";
              alert("LOGIN UNSUCCESSFUL");
              window.location.href = "noxnet.github.io/YonnonBOX/";
              window.location.reload();
            }
        }

