interface Errors {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cpassword: string;
}

const registerValidate = (values: Errors) => {
  const errors = {};

  // firstName
  if (!values.firstName) {
    // @ts-ignore
    errors.firstName = 'Required';
  } else if (values.firstName.includes(' ')) {
    // @ts-ignore
    errors.firstName = 'Invalid First Name';
  }

  // LastName
  if (!values.lastName) {
    // @ts-ignore
    errors.lastName = 'Required';
  } else if (values.lastName.includes(' ')) {
    // @ts-ignore
    errors.lastName = 'Invalid last Name';
  }

  // Email
  if (!values.email) {
    // @ts-ignore
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    // @ts-ignore
    errors.email = 'Invalid email address';
  }

  // Password
  if (!values.password) {
    // @ts-ignore
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    // @ts-ignore
    errors.password = 'Must be greater than 8 and less than 20 characters long';
  } else if (values.password.includes(' ')) {
    // @ts-ignore
    errors.password = 'Invalid Password';
  }

  // Confirm Password
  if (!values.cpassword) {
    // @ts-ignore
    errors.cpassword = 'Required';
  } else if (values.password !== values.cpassword) {
    // @ts-ignore
    errors.cpassword = 'Password not matching...!';
  } else if (values.cpassword.includes(' ')) {
    // @ts-ignore
    errors.cpassword = 'Invalid Confirm Password';
  }

  return errors;
};

export default registerValidate;
