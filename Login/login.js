function clicked(){
	var user = document.getElementById('username');
	var pass = document.getElementById('password');
		
	var coruser ={
		username:"test",
		password:"1234",
	}; 
	
	if(user.value==coruser.username && pass.value==coruser.password){
		window.open("file:///F:/csfjasmine/CSF/Home/home.html");
	}else {
		document.write("incorrect user name or Password");
	}
		 }
function forgot(){
		var team = "<a href='https://myteamcare.org/reset_password.aspx'>myTeamCare</a>"
		document.write(team);
	}
