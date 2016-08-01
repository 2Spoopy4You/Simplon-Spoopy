function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin@demo.fr" && password == "admindemo"){
alert ("It's a demo version");
window.location = "http://google.fr"; 
return false;
}
else{
	confirm("No account register you want to create a new one ?");
	newuser = prompt("Username or Email ?");
	newpass = prompt("Password ?");
	console.log(newuser, newpass);
	if ( username == newuser && password == newpass){
		alert ("It's a demo version");
		window.location = "http://google.fr"; 
		return false;
}
}
}

