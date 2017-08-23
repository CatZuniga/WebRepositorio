
function iniciar() {
    
   cargar();
  
  btnAdd = document.getElementById("btnAdd");
  btnAdd.addEventListener("click", add, false);
  
  
  }
  
  function add(){
        var userLoged = getGET();
           var myJsonString = JSON.stringify(userLoged);
   location.href = "rides.html?var1="+ myJsonString;
  }
  
  function cargar(){
    var userLoged = getGET();
  var s = [];
  var indexNum;
      if(localStorage.getItem("rides")){
      
          var rides = JSON.parse(localStorage.getItem("rides"));
         
          for(i=0; i<rides.length;i++){
             
              if (userLoged.user ==rides[i].user) {
                 console.log(rides[i]);
  s.push(rides[i]);
 indexNum = (rides.indexOf(rides[i]))
              }
  
  
          } 
      }
  generarTabla(s,indexNum);
  
  }
  
  function generarTabla(rides,indexNum){
   
    $("#tableBody").remove();

      var columnas =["ride","start","end","action"];
  var rides = rides;
  var table = document.getElementById("tableRides");
  
    var tblBody = document.createElement("tbody");
    tblBody.id="tableBody";

    var head =["Name", "Start", "End","Actions"];
   table.appendChild(tblBody);
    var row = document.createElement("tr");
     tblBody.appendChild(row);
    for (var i = 0; i < head.length; i++) {
        

       th = document.createElement("th");
       th.innerText = head[i];
       row.appendChild(th);
    
    }

    
  
    for (var i = 0; i < rides.length; i++) {
     
   
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < columnas.length; j++) {
  
        var celda = document.createElement("td");
        
   
  if (j == 3){  
  
      console.log("entro");
  
      var button =  document.createElement("button");
       button.className = " btnEdit btnCreated btn-default";
      button.id= "btnEdit";  
   button.innerHTML = "Edit "; 
  
         var icon =  document.createElement("i");
         icon.className="material-icons";
         icon.innerHTML = "mode_edit";
         button.appendChild(icon);
  



     var ride= {ride:rides[i],index:indexNum } ;
     var myJsonString = JSON.stringify(ride);
  
     button.value =myJsonString;
  
  
   celda.appendChild(button);
    hilera.appendChild(celda);
  
  
        var button =  document.createElement("button");
       button.className = "btnDelete  btnCreated btn-default";
      button.id= "btnDelete";
      button.innerHTML = "Delete "; 
      
         var view={ride:rides[i].ride, start:rides[i].start, end:rides[i].end}
     var myJsonString = JSON.stringify(view);
  
     button.value =myJsonString;
  
       var icon =  document.createElement("i");
         icon.className="material-icons";
         icon.innerHTML = "delete_forever";
  
   
         button.appendChild(icon);
       celda.appendChild(button);
    hilera.appendChild(celda);
      
  
  
  }else{
  var ride = rides[i];
  
          for(var p in ride){
                     
       
     if(columnas[j]== p){
        var textoCelda = document.createTextNode(ride[columnas[j]]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
  
      }
      }
      tblBody.appendChild(hilera);
    }
    table.appendChild(tblBody);
  }    
  }
  }
  
  $("#tableRides").on('click','.btnDelete', function() {
  // alert('El valor es: ' + $(this).attr('value')); 
   
    var value = $(this).attr('value');
    // eliminar
  var del = JSON.parse(value); 
  
  rs =[];
  
    var rides = JSON.parse(localStorage.getItem("rides"));
  
          for(i=0; i<rides.length;i++){
            console.log(del.ride);
  
              if (del.ride == rides[i].ride) {
                 console.log(rides.indexOf(rides[i]));
  
      var indexToRemove = rides.indexOf(rides[i]);
  
      //remove item selected, second parameter is the number of items to delete 
      rides.splice(indexToRemove, 1);
  
     // Put the object into storage
     localStorage.setItem('rides', JSON.stringify(rides));
  
   console.log(rides.length);
   alert("Deleted");
  
              }
    
          }

          cargar();

  })
  
  
  
  $("#tableRides").on('click','.btnEdit', function() {

   
   var ride = $(this).attr('value');
   
    location.href ="editar.html" +"?var1="+ ride;
  
  })
  
   
  
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