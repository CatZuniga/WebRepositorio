

window.onload = function() {

      var nameP =  localStorage.getItem('nameLoged');
    document.getElementById("name").innerHTML = nameP;  
    
    
var posts = JSON.parse(localStorage.getItem('posts'));
if(!posts){
$('#postContainer').hide();

} 
    var posts = [];
      if (localStorage.getItem('posts')) {
          posts = JSON.parse(localStorage.getItem('posts'));
      }
      //agregar cada usuario al DOM
    posts.forEach(function(post) {
    console.log(post.post, post.namePost);
        
 var containerP = document.getElementById("postContainer");
  var panelD = document.createElement("div");
  panelD.className = "panel panel-default";
         containerP.appendChild(panelD);  
        
     var panelH =  document.createElement("div");        
    panelH.className = "panel-heading";  
         panelD.appendChild(panelH);
        
var h5 =   document.createElement("h5");     
     h5.className = "panel-tittle";   
        h5.innerHTML = post.namePost;
        panelH.appendChild(h5);
        
  var panelB =  document.createElement("div");       
         panelB.className = "panel-body";
        
        panelB.innerHTML = post.post; 
         panelD.appendChild(panelB);
        
       
         
if (post.namePost == nameP){
    console.log(post.name , nameP)
    var button =  document.createElement("button");
     button.className = "btn btn-default";
    button.id= "btnDelete";
    button.innerHTML = "Delete"; 
    panelD.appendChild(button);
    
    
      var button =  document.createElement("button");
     button.className = "btn btn-default";
    button.id= "btnEdit";
    button.innerHTML = "Edit"; 
    panelD.appendChild(button);
    
    panelB.id= "innerPost";
}
        
    
});

                 
    
}


$(document).ready(function(){    
     $('#btnDelete').click(function(){  
         
var post = document.getElementById('innerPost').innerHTML;
    
         
         });
    });

$(document).ready(function(){    
     $('#btnLogOut').click(function(){  
         localStorage.removeItem('nameLoged');
         location.href= "login.html";
         });
    });


