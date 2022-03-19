// get all input fields
const firstName = document.querySelector('.first-name')! as HTMLInputElement;
const lastName = document.querySelector('.last-name')! as HTMLInputElement;
const email = document.querySelector('.email')! as HTMLInputElement;
const password = document.querySelector('.password')! as HTMLInputElement;

// get form
const signupForm = document.querySelector('.signup__form')! as HTMLFormElement;

// get all errors

interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const signupFormFields: SignupForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

// add event listeners
firstName.addEventListener(
  'change',
  (e) => (signupFormFields['firstName'] = (e.target as HTMLInputElement).value)
);

lastName.addEventListener(
  'change',
  (e) => (signupFormFields['lastName'] = (e.target as HTMLInputElement).value)
);

email.addEventListener(
  'change',
  (e) => (signupFormFields['email'] = (e.target as HTMLInputElement).value)
);

password.addEventListener(
  'change',
  (e) => (signupFormFields['password'] = (e.target as HTMLInputElement).value)
);

// handle signup form
signupForm.addEventListener('submit', (e): void => {
  e.preventDefault();
  console.log(signupFormFields);
});
