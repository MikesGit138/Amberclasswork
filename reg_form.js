function validateForm() {
  let fname = document.forms["myForm"]["firstname"].value;
  let lname= document.forms["myForm"]["lastname"].value;
  let uname= document.forms["myForm"]["username"].value;
  let email= document.forms["myForm"]["email"].value;
  let contact = document.forms["myForm"]["contact"].value;
  let address = document.forms["myForm"]["address"].value;
 if (fname == "") {
    alert("Remember to enter your first name");
    return false;
  }

if (lname == ""){
  alert("Remember to enter your last name");
  return false;
}
if(uname == "" ){
  alert("Remember to enter your username");
  return false;
}
if(email == ""){
  alert("Remember to enter your email address");
  return false;
}
if(contact == ""){
  alert("Remember to add contact number");
  return false;
}
if (address == ""){
  alert("Remeber to add your home address");
  return false;
}
}