


function iniciar() {
 cargar();

}

function cargar(){


 var userLoged = getGET();

    if(localStorage.getItem("settings")){
    
        var settings = JSON.parse(localStorage.getItem("settings"));
        
        for(i=0; i<settings.length;i++){
           
            if (userLoged.user ==settings[i].user) {
               
document.getElementById("fullname").innerHTML=settings[i].fullname;
document.getElementById("phone").innerHTML=settings[i].phone;
document.getElementById("speed").innerHTML=settings[i].speed;
document.getElementById("about").innerHTML=settings[i].about;
            }
        }



}

}


// anexo de url
function anexo(){
  var loc = document.location.href;
   var getString = loc.split('?')[1];

if(getString == null){
    
    return null;
}
   var GET = getString.split('&');
   var get = {};

   for(var i = 0, l = GET.length; i < l; i++){
      var tmp = GET[i].split('=');
      get[tmp[0]] = unescape(decodeURI(tmp[1]));
   }
   return get;
}

//get datos usuario 
function getGET(){
  get = anexo();
  
  if (get ==null){
      return null;
      
  }
var user = jQuery.parseJSON(get.var1); // array user

   return user;
}

window.addEventListener("load", iniciar, false);