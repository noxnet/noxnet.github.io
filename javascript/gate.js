var Validate = function() {
   var code = document.form["access_form"]["code"].value;
   if (code == "Yonnonbox") {
       window.location.replace("noxnet.github.io/main");
   } else {
      window.location.replace("noxnet.github.io/wrong.html");
   }
}
