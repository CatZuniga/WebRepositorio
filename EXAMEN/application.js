


$(document).ready(function(){    
     $('#btnLogin').click(function(){  

 var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    var entriesJSON = localStorage.getItem('users');
    if (!entriesJSON) {
        alert("Registrate");
        event.preventDefault();
        return;
    }
    var allEntries = JSON.parse(entriesJSON);
    for (var i = 0; i < allEntries.length; i++) {
        var entry = allEntries[i];
      
        var storedPassWord = entry.pass;
        var storedEmailAddress = entry.email;
        var storedName = entry.name;
      
        if (email == storedEmailAddress && password == storedPassWord) {
            
        

         localStorage.setItem("nameLoged", storedName);
            
           location.href= "openFacebook.html";
            return;


}
     }

      alert("Datos erroneos");

    });
    });


    
    $(document).ready(function(){ 
    
   
    $('#btnRegister').click(function(){    
        
        var rPass = $('#rPass').val();
        
		var user = {
        
                name:$('#name').val(),
                email:$('#email').val(),
                pass: $('#pass').val()
        
             
          };

 
var users = JSON.parse(localStorage.getItem('users'));
if(!users){
users= [];

}
         users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
     
    

});
});

$(document).ready(function(){ 
        
    $('#btnPost').click(function(){    
    
            var post = $('#post').val();
        
     
        
      var nameP =  localStorage.getItem('nameLoged') ;
            
         
        
        
		var post = {
        
                namePost: nameP,
                post:$('#post').val()
               
       
          };
 
var posts = JSON.parse(localStorage.getItem('posts'));
if(!posts){
posts= [];

}
         posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
     
    
        
    });
    
    
});



