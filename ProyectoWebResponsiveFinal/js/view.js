
var checkboxes = [];


function iniciar() {
  

 cargar();


}

function cargar(){

 var view = getGET();
var ride =[];
  console.log(view.end);

    if(localStorage.getItem("rides")){
    
        var rides = JSON.parse(localStorage.getItem("rides"));
       
        for(i=0; i<rides.length;i++){
          
            console.log(rides[i].end);

            if (view.user ==rides[i].user && view.start == rides[i].start && view.end == rides[i].end ) {
               
ride = rides[i];
      console.log(ride.user);      
}
        }

document.getElementById("ride").innerHTML= ride.ride;
document.getElementById("start").innerHTML= ride.start;
document.getElementById("end").innerHTML= ride.end;
document.getElementById("arraival").innerHTML= ride.arrival;
document.getElementById("departure").innerHTML= ride.departure;
document.getElementById("description").innerHTML= ride.description;

var boxes= ride.days;
var boxesDom = document.querySelectorAll("input[type='checkbox']");


for (var i = 0; i < boxes.length; i++) {
    for (var j = 0; j < boxesDom.length; j++){

if(boxes[i].id== boxesDom[j].id){

document.getElementById( boxesDom[j].id).checked = true;
}else{
document.getElementById( boxesDom[j].id ).disabled = true;

}

    }

}

       }
}

    


// anexo de url
function anexo(){
  var loc = document.location.href;
   var getString = loc.split('?')[1];

if(getString == null){
    console.log("se salio");
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
      console.log("entro");
  }
var user = jQuery.parseJSON(get.var1); // array user
   window.console.log(user.firstname);
   return user;
}




window.addEventListener("load", iniciar, false);