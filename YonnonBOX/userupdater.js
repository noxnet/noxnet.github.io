function getCookie() {
    var name = "user" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            useCookie(c.substring(name.length, c.length));
        }
    }
    return "";
}
function useCookie(string) {
    var usr = document.createElement("h2");   
    //EDIT HERE
}
