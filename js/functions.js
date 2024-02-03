function isValidEmail(email) {
    // Basic email validation using a regular expression
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateInputs(data) {
  
    if(!data.username.value){
      setError(data.username, 'Please enter your username');
    }else{
      setSuccess(data.username);
    }
  
    if(!data.email.value){
      setError(data.email, 'Please enter your email');
      data.email.focus();
      return false;
    }else if(!isValidEmail(data.email.value)){
      setError(data.email, 'Please enter a valid email');
      data.email.focus();
      return false;
    }else{
      setSuccess(data.email);
    }
  
    if(!data.password.value){
      setError(data.password, 'Please enter your password');
      data.password.focus();
      return false;
    }else if(data.password.value.length < 6){
      setError(data.password, 'Password must be at least 6 characters');
      data.password.focus();
      return false;
    }else{
      setSuccess(data.password);
    }
  
    if(!data.confirmPassword.value){
      setError(data.confirmPassword, 'Please confirm your password');
      data.confirmPassword.focus();
      return false;
    }else if(data.password.value!== data.confirmPassword.value){
      setError(data.confirmPassword, 'Passwords do not match');
      data.password.focus();
      data.confirmPassword.value = '';
      return false;
    }
     return true;
  }

  function setError(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

function setSuccess(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
};

function getData(){
  
  const storedData = localStorage.getItem('users');

  return storedData ? JSON.parse(storedData) : [];
    
}

function validateLogin(data) {
  if(!data.username.value){
      setError(data.username, 'Please enter your username');
      data.username.focus();
      return false;
  }
  if(!data.password.value){
      setError(data.password, 'Please enter your password');
      data.password.focus();
      return false;
  }


  return true;
}

export {validateInputs, validateLogin, getData, setError};