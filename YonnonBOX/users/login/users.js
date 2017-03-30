var j = 0;
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
var KILL = function(name) {
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

