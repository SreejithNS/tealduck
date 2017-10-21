document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
           StatusBar.overlaysWebView(true);
	StatusBar.backgroundColorByHexString("#009687");

    }

funtion validate(){
var dbpass = localStorage.getItem("pass");
var pass = document.getElementById("pass").value;
 if(localStorage.getItem("pass") === null) {
	document.getElementById('loginerr').style.display='block';
	pass = "";
	var c = prompt("Password");
	localStorage.setItem("pass",c);
	} else {
	if(pass == dbpass) {
	window.url.href = "www.google.com";
	}
 } else {
       document.getElementById('dberr').style.display='block';
    }
}