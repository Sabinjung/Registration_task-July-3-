let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let login = document.getElementById('login');
let pmessage = document.getElementById('pmessage');

const emailValidator = function (email) {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email)) {
    return true;
  }
  else {
    return false;
  }
}

email.addEventListener('input', (event) => {
  if (emailValidator(event.target.value)) {
    isEmail = true;
    document.getElementById('e_message').innerHTML = 'Email Valid &#10003';
    document.getElementById('e_message').style.color = '#28a745'
  }
  else {
    isEmail = false;
    document.getElementById('e_message').innerHTML = 'Email Not Valid! &#10005';
    document.getElementById('e_message').style.color = '#dc3545'
  }
})

login.addEventListener('click', function (e) {
  e.preventDefault();
  let i;
  let isMatch = false;
  let data;
  let parsevalue;
  let hash = md5(pwd.value)
  var regex = /data\d/;
  for (i in localStorage) {
    if (regex.test(i)){
      data = localStorage.getItem(i);
      parsevalue = JSON.parse(data);
      if (parsevalue.Email === email.value && parsevalue.Password === hash) {
        isMatch = true;
        break;
      }
    }
  }
  if (isMatch) {
    localStorage.setItem('isMatch', true)
    localStorage.setItem('user', email.value);
    window.location = 'homepage.html';
  }
  else {
    pmessage.innerHTML = "Authentication Failed !"
    document.getElementById('pmessage').style.color = '#dc3545'
    localStorage.setItem('isMatch', false)
  }

})