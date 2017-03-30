var Validate = function() {
       var user = document.forms["access_granted"]["username"].value;
       var pass = document.forms["access_granted"]["password"].value;
       if (pass == "vbdxj6578$mN") {
           document.cookie = "";
           var usr = "user=" + user + ";path=/";
           document.cookie = usr;
           alert("Welcome, " + user);
       }
       /*alert(user);
       alert(pass);*/
}

