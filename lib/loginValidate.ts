interface Errors {
  email: string;
  password: string;
}

const loginValidate = (values: Errors) => {
  const errors = {};

  if (!values.email) {
    // @ts-ignore
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    // @ts-ignore
    errors.email = 'Invalid email address';
  }

  // validation for password
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

  return errors;
};

export default loginValidate;
