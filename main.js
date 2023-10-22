function action(){
    
   
    var email=document.gitElementByid("email").value;
    var password=document.gitElementByid("phone").value;
    var error=document.gitElementByid("error");
    var text="";

  
    
    if (email.indexOf("@")== -1||email.length<10){
        text="falsemail";
        error.innerHTML=text;
    
        return false;
    }else if (password.length<10){
        text="falsepass";
        error.innerHTML=text;
        return false;
    }else{
      
        alert("Done");
        return true;
    }


}


