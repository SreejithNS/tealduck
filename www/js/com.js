function logout() {
sessionStorage.setItem("log","out");
alert("You have been logged out successfully.You are being redirected to the home page.");
document.getElementById('pass').value = "";
index();
}

function dp_change(){
var input = document.getElementById("dppath");
var fReader = new FileReader();
fReader.readAsDataURL(input.files[0]);
fReader.onloadend = function(event){
    var img = document.getElementById("dpimg");
    img.src = event.target.result;
	var fake = event.target.result;
	localStorage.setItem("dppath",fake);
}
}

function settings() {
 //var dash_div = document.getElementById('dash');
 //var settings_div = document.getElementById('settings');
 if(sessionStorage.getItem("log") == "out"){first()}else{
 document.getElementById('settings').style.display = 'block';
 document.getElementById('dash').style.display = 'none';
 document.getElementById('index').style.display = 'none';};
}
function dashboard() {
 //var dash_div = document.getElementById('dash');
 //var settings_div = document.getElementById('settings');
 if(sessionStorage.getItem("log") == "out"){first()}else{
 document.getElementById("sts_bar").content= "#008080";
 document.getElementById("navbar").style.display = "block";
 document.getElementById('settings').style.display = 'none';
 document.getElementById('dash').style.display = 'block';
 document.getElementById('index').style.display = 'none';};
}
function index() {
 //var dash_div = document.getElementById('dash');
 //var settings_div = document.getElementById('settings');
 if(sessionStorage.getItem("log") === null){first()};
 if(sessionStorage.getItem("log") == "in"){dashboard()};
 if(sessionStorage.getItem("log") == "out"){first()}else{
 document.getElementById('settings').style.display = 'none';
 document.getElementById('dash').style.display = 'none';
 document.getElementById('index').style.display = 'block';}
 }

 function first() {
 sessionStorage.setItem("log","out");
 document.getElementById("navbar").style.display = "none";
 document.getElementById('settings').style.display = 'none';
 document.getElementById('dash').style.display = 'none';
 document.getElementById('index').style.display = 'block';
 }




function sree(){
dbpass = localStorage.getItem("code");
pass = document.getElementById("pass").value;
usr = localStorage.getItem("name");
 if(localStorage.getItem("code") === null) {
	//document.getElementById('loginerr').style.display='block';
	pass = "";
	document.getElementById('save').style.display='block';
	}else{
	if(pass == dbpass) {
	 sessionStorage.setItem("log","in");
	 sessionStorage.setItem("user",usr);
	 document.getElementById('usernav').innerHTML = sessionStorage.getItem("user");
	 dashboard();
	 document.getElementById('pass').value = "";
	} else {document.getElementById('loginerr').style.display='block';document.getElementById('pass').value = "";}
    //document.getElementById('dberr').style.display='block';
    }
}

function save() {
var savname = document.getElementById('savname').value;
var savpass = document.getElementById('savpass').value;
//var mal = document.getElementById('mal');
//var fem = document.getElementById('fem');
localStorage.setItem("name",savname);
localStorage.setItem("code",savpass);
sessionStorage.setItem("user",savname);
document.getElementById('usernav').innerHTML = sessionStorage.getItem("user");
//if(mal.checked = "true") {
//localStorage.setItem("sex","1");
//} else {
//if(male.checked = "true") {
//localStorage.setItem("sex","2");
//}
//}
}
function save1() {
var savname1 = document.getElementById('savname1').value;
var savpass1 = document.getElementById('savpass1').value;
//var mal1 = document.getElementById('mal1');
//var fem1 = document.getElementById('fem1');
localStorage.setItem("name",savname1);
localStorage.setItem("code",savpass1);
sessionStorage.setItem("log","in");
document.getElementById('usernav').innerHTML = document.getElementById('savname1').value;
document.getElementById('save1').style.display = "none";
//if(mal1.checked = "true") {
//localStorage.setItem("sex","1");
//} else {
//if(fem1.checked = "true") {
//localStorage.setItem("sex","2");
}

function reset() {
localStorage.clear();
sessionStorage.clear();
window.location.href = "index.html";
}

function set_profile(){
document.getElementById("settings_profile").style.display = "block";
document.getElementById("settings_dash").style.display = "none";
document.getElementById("settings_delete").style.display = "none";
}

function set_dash(){
document.getElementById("settings_profile").style.display = "none";
document.getElementById("settings_dash").style.display = "block";
document.getElementById("settings_delete").style.display = "none";
}
function set_delete(){
document.getElementById("settings_profile").style.display = "none";
document.getElementById("settings_dash").style.display = "none";
document.getElementById("settings_delete").style.display = "block";
}

function del_dppath() {
localStorage.removeItem("dppath");
}