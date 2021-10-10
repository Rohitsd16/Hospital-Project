function validation()
         {
            var user=document.getElementById('user').value;
         


             if(user=="")
             {
                 document.getElementById('nm').innerHTML="Please fill the Name field.."
                 return false;
             }
             if(user.length < 2)
             {
                document.getElementById('nm').innerHTML="Please fill the Full Name.."
                 return false;
             }
            }


	
		  // Mo.No. //  
		function funblur()
		{
		num= document.getElementById("num").value
	
		if(num=='')
		{
			document.getElementById("sp").innerHTML= "Enter numbers only!!!"
			return false
	
		}
		if(num.length!=10)
		{
			document.getElementById("sp").innerHTML= "Enter 10 digits only!!!"
			return false
		}
		if(isNaN(num))  //isNaN- is not a number
		{
			document.getElementById("sp").innerHTML= "Enter digits only!!!"
			return false
		}
		
	
		return true
	}


            // submit //
function display()
        {
           var user=document.getElementById('user').value;
          
        

           if(user=="") 
           {
            alert("Hello!! Please fill the form..")
            return false;
            
           }
        
           else
           {
            alert("Thank you!! Your form submitted Sucessfully.")
           }
          
	return true
}     