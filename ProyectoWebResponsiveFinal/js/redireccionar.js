
var pag =0;

function iniciar() { 
   
    var user = getAnexo();

 cargarDatos(user);
   
 //my rides
 if (document.getElementById("page") != null){
   var btnPage = document.getElementById("page");
    btnPage.addEventListener("click", setUrl, false);
}
if (document.getElementById("btnSettings") != null){
    var   btnSettings = document.getElementById("btnSettings");
     btnSettings.addEventListener("click", setUrl, false);

     if (document.getElementById("btnRides") != null){
        var   btnRides = document.getElementById("btnRides");
btnRides.addEventListener("click", setUrl, false);
     }
     if (document.getElementById("btnDashboard") != null){
        var   btnDashboard = document.getElementById("btnDashboard");
btnDashboard.addEventListener("click", setUrl, false);
     }
     if (document.getElementById("btnProfile") != null){
        var  btnProfile = document.getElementById("btnProfile");
btnProfile.addEventListener("click", setUrl, false);
     }
     if (document.getElementById("out") != null){
        var  btnLogOut = document.getElementById("out");
btnLogOut.addEventListener("click", urlLogOut, false);

     }
}


}





function cargarDatos(user){

if (document.getElementsByClassName("username").length){
document.getElementsByClassName("username")[0].innerHTML = user.user;
document.getElementById("navUser").innerHTML=  user.user;

}
}



function pagina(){
 var user = getGET();
if(user== null){
    alert("Log in!");
}else{
    var myJsonString = JSON.stringify(user); //  pasa formato json

  location.href = url +"?var1="+ myJsonString;

// }

}
}

function setUrl(){

  var myRides=  document.getElementById("page");
  var settings =  document.getElementById("btnSettings");
  var rides = document.getElementById("btnRides");
  var dashboard = document.getElementById("btnDashboard");

  var user = getAnexo();
  if(user== null){
      alert("Log in!");
  }else{
    var myJsonString = JSON.stringify(user); //  pasa formato json

if(myRides.click ){
    location.href ="dashboard.html?var1="+ myJsonString;
} else if(settings.click){
    location.href = "settings.html?var1=";
} else if(rides.click){
    location.href = "rides.html?var1="+ myJsonString;
} else if(dashboard.click){
    location.href = "dashboard.html?var1="+ myJsonString;
}

}
}

function crearUrl(){
var url;
    if(pag ==2){
url = "dashboard.html"
    }
var user = getAnexo();
if(user== null){
    alert("Log in!");
}else{
    var myJsonString = JSON.stringify(user); //  pasa formato json

    location.href = url +"?var1="+ myJsonString;

}


}


  // anexo de url
  function getAnexo(){
    var loc = document.location.href;
    var getString = loc.split('?')[1];
    var GET = getString.split('&');
    var get = {};
 
    for(var i = 0, l = GET.length; i < l; i++){
       var tmp = GET[i].split('=');
       get[tmp[0]] = unescape(decodeURI(tmp[1]));
    }
    return get;
 }


window.addEventListener("load", iniciar, false);