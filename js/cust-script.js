function alertNotice() {
var fnm = document.forms["consultation"]["fname"].value;
var lnm = document.forms["consultation"]["lname"].value;
var phn = document.forms["consultation"]["phone"].value;
var msg = document.forms["consultation"]["description"].value;
  if (fnm == "") {
  document.getElementById("err").style.display = "block";
    document.getElementById("err").innerHTML = "First Name must be filled out";
    return false;
  }else if(lnm == "") {
  document.getElementById("err").style.display = "block";
    document.getElementById("err").innerHTML = "Last Name must be filled out";
    return false;
  } else if(phn == "") {
  document.getElementById("err").style.display = "block";
    document.getElementById("err").innerHTML = "Phone number must be filled out";
    return false;
  } else if(msg == "") {
  document.getElementById("err").style.display = "block";
    document.getElementById("err").innerHTML = "Description is required";
    return false;
  }  else {
document.getElementById("err").style.display = "none";
document.getElementById("notice").style.display = "block";
}
 
}

// alert
function messageStatus(){
	var notice = document.getElementById('sendStatus');
		notice.style.display = "inline-block";
		notice.innerHTML ="Thank you for your message ! Someone will be in touch shortly.";
}
