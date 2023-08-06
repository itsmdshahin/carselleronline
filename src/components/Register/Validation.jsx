function Validation(values) {
  //   alert("")
  let error = {}
  const fullname_pattern = /[A-Za-z .]{3,20}/
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&*_+><])).{6,20}/
  const mobile_pattern = /(\+88)?-?01[3-9]\d{8}/

  if (values.fullname === "") {
    error.fullname = "Name should not be empty";
  }
  else if (!fullname_pattern.test(values.fullname)) {
    error.fullname = "Only characters (3-20)!!...";
  }
  else {
    error.fullname = "";
  }

  if (values.email === "") {
    error.email = "Name should not be empty";
  }
  else if (!email_pattern.test(values.email)) {
    error.email = "Email Did not Match...";
  }
  else {
    error.email = "";
  }


  if (values.password === "") {
    error.password = "Password should not be empty ";
  }
  else if (!password_pattern.test(values.password)) {
    error.password = "Password contains 6-20 characters....";
  }
  else {
    error.password = "";
  }

  if (values.conpassword === "") {
    error.conpassword = "Password should not be empty ";
  }
  else if (values.conpassword !== values.password) {
    error.conpassword = "password are not matching";
  }
  else {
    error.conpassword = "";
  }

  if (values.mobile === "") {
    error.mobile = "Password should not be empty ";
  }
  else if (!mobile_pattern.test(values.mobile)) {
    error.mobile = "Wrong Number.....";
  }
  else {
    error.mobile = "";
  }

  return error;
}

export default Validation;