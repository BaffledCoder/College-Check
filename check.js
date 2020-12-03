function check() {
	var cgpa=document.getElementById('marks').value;
	var clg1="";
	var clg2="";
	var clg3="";
	var clg4="";
	var count=0;
	if(cgpa>=6)
	{
		clg1="Thapar University";
		count=count+1;
	}
	if(cgpa>=7)
	{
		clg2="NITJ";
		count=count+1;
	}
	if(cgpa>=8)
	{
		clg3="IIT";
		count=count+1;
	}
	if(cgpa>=8)
	{
		clg4="MIT";
		count=count+1;
	}
	var user = firebase.auth().currentUser;
	  if (user) 
	  {
	  	if(count>0)
		{
			console.log("qwerty2");
			document.getElementById("result").innerHTML = "Success comes to those who deserve it. Congratulations!. From the colleges that have opened enrollment, you can apply for these colleges: " + "|" + clg1 + "|" + "|" + clg2 + "|" + clg3 + "|" + clg4 + "|";
		}
		else
		{
			document.getElementById("result").innerHTML = " Couldn't found college as per your requirements but do remember this may change with opening of other college application.\nWhat is the point of being alive if you don't at least try to do something remarkable? ";
		}
 	 } 
 	 else 
 	 {
 	 	alert("Login First");
	    window.location.replace("./login.html");
	  }
	
}