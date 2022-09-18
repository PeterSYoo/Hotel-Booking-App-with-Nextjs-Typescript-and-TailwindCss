interface Errors {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cpassword: string;
}

const registerValidate = (values: Errors) => {
  const errors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: '',
  };

  // firstName
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.includes(' ')) {
    errors.firstName = 'Invalid First Name';
  }

  // LastName
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.includes(' ')) {
    errors.lastName = 'Invalid last Name';
  }

  // Email
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater than 8 and less than 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  // Confirm Password
  if (!values.cpassword) {
    errors.cpassword = 'Required';
  } else if (values.password !== values.cpassword) {
    errors.cpassword = 'Password not matching...!';
  } else if (values.cpassword.includes(' ')) {
    errors.cpassword = 'Invalid Confirm Password';
  }

  return errors;
};

export default registerValidate;
