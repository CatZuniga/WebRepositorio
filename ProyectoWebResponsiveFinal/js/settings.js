



function iniciar() {
  

 cargar();

 if (document.getElementById("btnSave")!= null){

     btnSave = document.getElementById("btnSave");
    btnSave.addEventListener("click", save, false);
 }
   

}




function cargar(){


 var userLoged = getGET();

    if(localStorage.getItem("settings")){
    
        var settings = JSON.parse(localStorage.getItem("settings"));
       
        for(i=0; i<settings.length;i++){
           
            if (userLoged.user ==settings[i].user) {
               


document.getElementById("fullname").value =settings[i].fullname;
document.getElementById("speed").value =settings[i].speed;
document.getElementById("about").value =settings[i].about;
            }
        }
}

}
function save(){
 
    userLoged = getGET();



	var setting = {
                user : userLoged.user,
                fullname: $('#fullname').val(),
                speed:$('#speed').val(),
                about: $('#about').val(),
               phone : userLoged.phone
          };
   
 
var settings = JSON.parse(localStorage.getItem('settings'));
if(!settings){
settings= [];

}
         settings.push(setting);
        localStorage.setItem('settings', JSON.stringify(settings));
        alert("Settings edited successfully");

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