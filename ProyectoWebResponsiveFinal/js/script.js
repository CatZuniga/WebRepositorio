var usuarios = JSON.parse(localStorage.getItem('users'));

if (!usuarios) {
    usuarios = [];
}

function iniciar() {
  
    btnLog = document.getElementById("btnLogin");
    btnLog.addEventListener("click", login, false);

  
if (document.getElementsByClassName("username").length){
document.getElementsByClassName("username")[0].innerHTML = user.firstname;
}

if (document.getElementById("btnRegister") != null){
    btnReg = document.getElementById("btnRegister");
    btnReg.addEventListener("click", register, false);
}

}


function login(){

 var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    var entriesJSON = localStorage.getItem('users');
    if (!entriesJSON) {
        alert("You must be registered");
        event.preventDefault();
        return;
    }
    var allEntries = JSON.parse(entriesJSON);
    for (var i = 0; i < allEntries.length; i++) {
        var entry = allEntries[i];
        var storedUserName = entry.user;
        var storedPassWord = entry.pass;
     
      
        if (username == storedUserName && password == storedPassWord) {

   var myJsonString = JSON.stringify(entry); //  pasa formato json
    location.href = "main.html?var1="+ myJsonString + "&var2="+0;
            return;

    }

    }
 document.getElementById("msg").innerHTML= ("Please check your username and password and try again.");

}


function register(){
 
	var user = {

                firstname:$('#firstname').val(),
                lastname:$('#lastname').val(),
                phone:$('#phone').val(),
                user: $('#user').val(),
                pass: $('#pass').val(),
              
             
          };

     var rPass= $('#repeatPass').val();      
  
if (user.user==null || user.user==""){  
document.getElementById("reqUser").innerHTML= "Required";

  return false;  
}else if(user.pass.length<6){  
  document.getElementById("reqPass").innerHTML= ("Password must be at least 6 characters long.");
  return false;  

  } else if (user.pass==null || user.pass=="") {
document.getElementById("reqUser").innerHTML= "Required";
return false; 

  }else if (user.pass !== rPass){
document.getElementById("reqRpass").innerHTML= "Please check your password and try again.";
return false; 
}
 
var users = JSON.parse(localStorage.getItem('users'));
if(!users){
users= [];

}
         users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
 
setTimeout("location.href='login.html'", 5000);


}



window.addEventListener("load", iniciar, false);