


$(document).ready(function(){    
    
    $('#btnSave').click(function(){        
	
              var  name= $('#name').val();
              var  lastname= $('#lastname').val();
              var  phone= $('#phone').val();
              var  email= $('#email').val();
         

   
        localStorage.setItem("Name", name);
        localStorage.setItem("Lastname", lastname);
        localStorage.setItem("Phone", phone);
        localStorage.setItem("Email", email);
     });
});
 
 