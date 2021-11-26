function validEmail(email) {
  if (!regex.email.test(email) && email.length > 5) return true;
  else return false
}

function validName(name) {
  if (name.length === 0) return false
  if (!regex.name.test(name)) return true;
}

function validPassword(password) {
  if (!regex.password.test(password) && password.length > 5) return true;
  else return false
}



const regex = {
  name: new RegExp(/^[a-z ,.'-]+$/i),
  email: new RegExp(
    // eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  password: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
  
};

export {
    validName,
    validEmail,
    validPassword
}

