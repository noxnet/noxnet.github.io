var Validate = function() {
            var user = document.form["access_granted"]["username"].value;
            var pass = document.form["access_granted"]["password"].value;
            if (user === "public_non") {
               if (pass === "vbdzxy") {
                   document.cookie = "user=public_non";
               }
            }
            if (user === "red_hand") {
                 if (pass === "noxuser") {
                     document.cookie = "user=RED_hand";
                 }
            } else {
              document.cookie = "user=NOSIGN";
            }
        }

var VALIDATE = function() {
   if (document.cookie === "ZVDX=USERACTIVE") {
       Validate();
   }
}
