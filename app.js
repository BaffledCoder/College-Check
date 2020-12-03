// Reference messages collection
var messagesRef = firebase.database().ref("Details");

// Listen for form submit
document.getElementById('app_form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var email = getInputVal('email');
  var mobile = getInputVal('mobile');
  var address = getInputVal('address');
  var state = getInputVal('state');
  var country = getInputVal('country');
  var ClassX_Percentage = getInputVal('ClassX_Percentage');
  var ClassXII_Percentage = getInputVal('ClassXII_Percentage');
  var Graduation_Percentage = getInputVal('Graduation_Percentage');
  var Masters_Percentage = getInputVal('Masters_Percentage');
  var course = getInputVal('Course');
 

  var user = firebase.auth().currentUser;
  if (user) {
    saveMessage(fname, lname, email, mobile, address, state, country, ClassX_Percentage, ClassXII_Percentage, Graduation_Percentage, Masters_Percentage, course);
  	alert("Application Submitted!!!");
    window.location.replace("./index.html");
  } else {
  	alert("Login First");
    window.location.replace("./login.html");
}
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, email, mobile, address, state, country, ClassX_Percentage, ClassXII_Percentage, Graduation_Percentage, Masters_Percentage, course){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Fname: fname,
    Lname: lname,
    Email:email,
    Contact: mobile,
    Address: address,
    State: state,
    Country: country,
    ClassX_Percentage: ClassX_Percentage,
    ClassXII_Percentage: ClassXII_Percentage,
    Graduation_Percentage: Graduation_Percentage,
    Masters_Percentage: Masters_Percentage,
    Course: course
  });
}
