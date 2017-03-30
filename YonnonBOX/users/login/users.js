var Validate = function() {
       var user = document.forms["access_granted"]["username"].value;
       var pass = document.forms["access_granted"]["password"].value;
       if (pass == "vbdxj6578$mN") {
           var usr = "user=" + user;
           document.cookie = usr;
           alert(document.cookie);
       }
       /*alert(user);
       alert(pass);*/
}

