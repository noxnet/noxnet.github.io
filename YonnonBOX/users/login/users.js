var Validate = function() {
            var user = document.forms["access_granted"]["username"].value;
            var pass = document.forms["access_granted"]["password"].value;
            if (user === "public_non") {
               if (pass === "vbdzxy") {
                   document.cookie = "user=public_non";
                   alert("ACCESSING PUBLIC USER");
               }
            }
            if (user === "red_hand") {
                 if (pass === "noxuser") {
                     document.cookie = "user=RED_hand";
                     alert("ACCESSING RED HAND");
                 }
            } else {
              document.cookie = "user=NOSIGN";
              alert("LOGIN UNSUCCESSFUL");
              window.location.href = "noxnet.github.io/YonnonBOX/";
            }
        }

