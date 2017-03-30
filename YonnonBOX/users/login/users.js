var login = function() {
            var user = document.forms["access_granted"]["username"].value;
            var pass = document.forms["access_granted"]["password"].value;
            if (pass == "vbdxj6578$mN") {
                var usr = "user=" + user;
                alert(usr);
                document.cookie = usr;
                
            } else {
               alert("LOGIN FAILED");
            }
}
var Validate = function() {
       var user = document.forms["access_granted"]["username"].value;
       var pass = document.forms["access_granted"]["password"].value;
       if (pass == "vbdxj6578$mN") {
           var usr = "user=" + user;
           document.cookie = usr;
           alert("Welcome, " + user;);
       }
       /*alert(user);
       alert(pass);*/
}

