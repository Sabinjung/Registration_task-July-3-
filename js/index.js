let isEmail = false;
let passwordMatched = false;
let checkboxTicked = false;
let username = document.getElementById('username')
let email = document.getElementById('email');
let cpwd = document.getElementById('cpwd');
let pwd = document.getElementById('pwd');
let checkbox = document.getElementById('checkbox');
let register = document.getElementById('register');


email.addEventListener('input', (event) => {
  if (emailValidator(event.target.value)) {
    isEmail = true;
    document.getElementById('e_message').innerHTML = 'Email Valid &#10003';
    document.getElementById('e_message').style.color = '#28a745'
    finalValidator();
  }
  else {
    isEmail = false;
    document.getElementById('e_message').innerHTML = 'Email Not Valid! &#10005';
    document.getElementById('e_message').style.color = '#dc3545'
    finalValidator();
  }
})
const emailValidator = function (email) {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email)) {
    return true;
  }
  else {
    return false;
  }
}

cpwd.addEventListener('input', (event) => {
  if (event.target.value === pwd.value) {
    passwordMatched = true;
    document.getElementById('p_message').innerHTML = 'Password Matched &#10003';
    document.getElementById('p_message').style.color = '#28a745'
    finalValidator();
  }
  else {
    passwordMatched = false;
    document.getElementById('p_message').innerHTML = 'Password Not Matched &#10005';
    document.getElementById('p_message').style.color = '#dc3545'
    finalValidator();
  }
})

checkbox.addEventListener('click', () => {
  if(checkbox.checked === true){
    checkboxTicked = true;
    finalValidator();
  }
  else{
    checkboxTicked = false;
    finalValidator();
  }
});


const finalValidator = function(){
  if(isEmail && passwordMatched && checkboxTicked){
    register.disabled = false;
    document.getElementById('r_message').innerHTML = 'Go For Register &#10003';
    document.getElementById('r_message').style.color = '#28a745'
  }
  else{
    register.disabled = true;
    document.getElementById('r_message').innerHTML = 'Accept Terms! &#10005';
    document.getElementById('r_message').style.color = '#dc3545'
  } 
}

register.addEventListener('click',function(e){
  e.preventDefault();
  let key = "data" + localStorage.length;
  let hash = md5(pwd.value)
  let obj = {
    Username : username.value,
    Email: email.value,
    Password: hash
  }
  localStorage.setItem(key,JSON.stringify(obj));
  window.location = 'login.html';

})