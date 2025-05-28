export const validateInput = (values) => {
  const errors = {};

  if (!values.name || values.name.trim() === '') {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  // Add more validation rules as needed

  return errors;
};
