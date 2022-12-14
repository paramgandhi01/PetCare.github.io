

let $ = (selector) => document.querySelector(selector);

window.onload = function () {
  $('#register').onclick = validate;
};

function validate() {
  let cont = document.getElementById("container2");
  let res = document.getElementById("result");
  let re = document.getElementById("re");

  let firstname = $('#fname');
  
  let lastname = $('#lname');
  let email = $('#email');
  let phone = $('#phone');
  let address = $('#subject');
  let namepattern = /^[a-zA-z]{2,30}$/;
  let emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let phonepattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  if (firstname.value == '') {
    firstname.nextElementSibling.innerHTML = 'Please enter firstname';
  }
  else if (!namepattern.test(firstname.value)) {
    firstname.nextElementSibling.innerHTML =
   'Please enter firstname with letter only';
    
  } 
  else {
    firstname.nextElementSibling.innerHTML = '';
    cont.remove();
    res.innerHTML = firstname.value+' '+lastname.value+'!.. Thank You for Booking Trainer Appointment ';
    re.innerHTML = 'Check Your Confirmation Mail for More Information !..';
  } 

  if (lastname.value == '') {
    lastname.nextElementSibling.innerHTML = 'Please enter lastname';
  }
  else if (!namepattern.test(lastname.value)) {
    lastname.nextElementSibling.innerHTML =
      'Please enter lastname with letter only';
  }
  else {
    lastname.nextElementSibling.innerHTML = '';
  }
  
  if (email.value == '') {
    email.nextElementSibling.innerHTML = 'Please enter Email';
  }
  else if (!emailpattern.test(email.value)) {
    email.nextElementSibling.innerHTML =
      'Please enter valid email';
  }
  else {
    email.nextElementSibling.innerHTML = '';
  }
  if (phone.value == '') {
    phone.nextElementSibling.innerHTML = 'Please enter Phone Number';
  } 
  else if (!phonepattern.test(phone.value)) {
    phone.nextElementSibling.innerHTML =
      'Please enter valid phone number';
  } 
  else {
    phone.nextElementSibling.innerHTML = '';
  }
  if (address.value == '') {
    address.nextElementSibling.innerHTML = 'Please enter Address';
  } 
  else {
    address.nextElementSibling.innerHTML = '';
  }

}

var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#selectdate");


checkinElem.setAttribute("min", dateTomorrow);
