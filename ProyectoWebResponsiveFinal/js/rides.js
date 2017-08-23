var rides = JSON.parse(localStorage.getItem('rides'));

if (!rides) {
    rides = [];
}

var checkboxes = [];


function iniciar() {
  
    btnSave = document.getElementById("btnSave");
    btnSave.addEventListener("click", saveRide, false);

}

function validar(){
    var elementos = document.querySelectorAll("input");
    for (var i in elementos){
        if (!elementos[i].value== ""){
            
            return false;
        }

    }

return true;

}

function saveRide(){

    userLoged = getGET();
var val = validar();

    saveBoxes();

	var ride = {
                user: userLoged.user,
                ride:$('#ride').val(),
                start:$('#start').val(),
                end:$('#end').val(),
                description: $('#description').val(),
                departure: $('#departure').val(),
                arrival: $('#arrival').val(),
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
              $('#arrival').val("");

       checkboxes = [];
    alert("Ride added successfully");
}


function saveBoxes(){
  boxes= [];
var boxes = document.querySelectorAll("input[type='checkbox']");
for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    console.log(box);
    if (box.checked) {
         console.log("esta checked");
         console.log(box.id);
        setupBox(box);

    }

    }

console.log(checkboxes);

}



function setupBox(box) {

     console.log(box);
    var storageId = box.checked;
    console.log( storageId);
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