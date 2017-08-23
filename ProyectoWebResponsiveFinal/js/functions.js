

function iniciar() { 
    
     var user = getGET();
  cargarDatos(user);

}

function cargarDatos(user){
    
    if (document.getElementsByClassName("username").length){
    document.getElementsByClassName("username")[0].innerHTML = user.user;
    document.getElementById("navUser").innerHTML=  user.user;
    
    }
    }
    

    $(document).ready(function(){    
         $('#page').click(function(){   
      var  user = getGET();
        if(user == null){
            alert("Log in!");
        }else{     
  urlIr("dashboard.html"); 
        }  
             });
     
     
             $('#btnRides').click(function(){  
                var  user = getGET();
                
                    if(user == null){
                        alert("Log in!");
                    }else{
                       
              urlIr("rides.html"); 
            
                    }
                 });
        

                 $('#home').click(function(){  
                    var  user = getGET();
                  urlIr("main.html"); 
                       
                     });
            

        
                 $('#btnCancel').click(function(){  
                    var  user = getGET();
                  urlIr("dashboard.html");   
                        
                     });
            
            
            
                 $('#btnSettings').click(function(){  
                    var  user = getGET();
                    
                  urlIr("settings.html"); 
                
                        
                     });

                function crearUrl(){
                    var user = getGET();
                    if(user== null){
                        alert("Log in!");
                    }else{
                        var myJsonString = JSON.stringify(user); //  pasa formato json
                    console.log(user);
                    return "?var1="+ myJsonString;
                    
                    
                    }
                    
                    
                    }
                    
                    function urlIr(url){
                    var anexo = crearUrl(); 
                      var ir =url +anexo;
                     location.href = ir;
                    }                 
    
         $('#btnDashboard').click(function(){  
    
      var  user = getGET();
  urlIr("dashboard.html"); 

        
    
             });


             $('#logOut').click(function(){  
                
                location.href = "main.html";
                    
                
                         });
            
            
             
            
            });

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