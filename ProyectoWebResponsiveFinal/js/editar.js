
var checkboxes = [];


function iniciar() {
  cargar();
 
  var ride = getGET();
  if (document.getElementsByClassName("username").length){
  document.getElementsByClassName("username")[0].innerHTML = ride.ride.user;
  document.getElementById("navUser").innerHTML=  ride.ride.user;
  }

    btnSave = document.getElementById("btnSave");
    btnSave.addEventListener("click", saveRide, false);


    btnCancel = document.getElementById("btnCancelEdit");
    btnCancel.addEventListener("click", cancelEdit, false);


}

function cargar(){

 var ride = getGET();

document.getElementById("ride").value= ride.ride.ride;
document.getElementById("start").value= ride.ride.start;
document.getElementById("end").value= ride.ride.end;
document.getElementById("arraival").value=ride.ride.arrival;
document.getElementById("departure").value= ride.ride.departure;
document.getElementById("description").innerHTML= ride.ride.description;

var boxes= ride.ride.days;
var boxesDom = document.querySelectorAll("input[type='checkbox']");


for (var i = 0; i < boxes.length; i++) {
    for (var j = 0; j < boxesDom.length; j++){

if(boxes[i].id== boxesDom[j].id){

document.getElementById( boxesDom[j].id).checked = true;
}
    }

}

       }




function saveRide(){

    ride = getGET();


  var storedRides = JSON.parse(localStorage.getItem("rides"));


    var indexToRemove = ride.index;

    //remove item selected, second parameter is the number of items to delete 
    storedRides.splice(indexToRemove, 1);

   // Put the object into storage
   localStorage.setItem('rides', JSON.stringify(storedRides));
   alert("Processing");

    saveBoxes();

if (checkboxes == null)
{
    alert("Select days");
}


	var ride = {
                user: ride.ride.user,
                ride:$('#ride').val(),
                start:$('#start').val(),
                end:$('#end').val(),
                description: $('#description').val(),
                departure: $('#departure').val(),
                arrival: $('#arraival').val(),
                days:checkboxes
          };



var rides = JSON.parse(localStorage.getItem('rides'));
if(!rides){
rides= [];

}
         rides.push(ride);
        localStorage.setItem('rides', JSON.stringify(rides));


              $('#ride').val("");
              $('#start').val("");
              $('#end').val("");
              $('#description').val("");
              $('#departure').val("");
              $('#arraival').val("");

       checkboxes = [];
    alert("Ride edited successfully");


}

function saveBoxes(){
  boxes= [];
var boxes = document.querySelectorAll("input[type='checkbox']");
for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    console.log(box);
    if (box.checked) {
   
        setupBox(box);

    }

    }

console.log(checkboxes);

}



function setupBox(box) {

    var storageId = box.checked;

    var oldVal    = localStorage.getItem(storageId);
    box.checked = oldVal === "true" ? true : false;

var b =
{
  id :  box.id
//   id : "<input type="checkbox""+ box.id+ 
//<input type="checkbox" id="box-7">
}
  checkboxes.push(b);
    box.addEventListener("change", function() {
        localStorage.setItem(storageId, this.checked); 
      
    });
 


}

function cancelEdit(){
  ride = getGET();

var userRide = ride.ride.user

var userLoged;

    if(localStorage.getItem("users")){
    
        var users = JSON.parse(localStorage.getItem("users"));
       
        for(i=0; i<users.length;i++){
           
            if (userRide == users[i].user) {
               
             userLoged = users[i];
            }


        }
    }
  
  var myJsonString = JSON.stringify(userLoged); //  pasa formato json

location.href = "dashboard.html?var1="+ myJsonString;

}


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