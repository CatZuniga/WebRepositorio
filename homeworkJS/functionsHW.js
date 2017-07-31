
$(document).ready(function(){    
    
    $('#btnSave').click(function(){        
		var user = {
                name: $('#name').val(),
                lastname: $('#lastname').val(),
                phone:$('#phone').val()
               
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
    $('#btnDelete').click(function(){                
                                                   
     
     var users = JSON.parse(localStorage.getItem('users'));
       
       users.pop(); 
           localStorage.setItem('users', JSON.stringify(users));


    });   
});
 
 