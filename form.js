// Reference messages collection
var messagesRef = firebase.database().ref('Messages');

// Listen for form submit
document.getElementById('reused_form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var message = getInputVal('message');
  var name = getInputVal('name');
  var email = getInputVal('email');

  // Save message
  saveMessage(message, name, email);
  var user = firebase.auth().currentUser;
  if (user) {
    alert("Message has been recieved. We will get back to you soon. ");
    window.location.replace("./index.html");
  } 
  else {
    alert("Login First");
    window.location.replace("./index.html");
  }
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(message, name, email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Message: message,
    Name: name,
    Email:email
  });
}