var Validate = function() {
            var user = document.getElementById["username"].value;
            var pass = document.getElementById["password"].value;
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
