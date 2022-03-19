import emailValidator from 'email-validator';

// get all input fields
const firstName = document.querySelector('.first-name')! as HTMLInputElement;
const lastName = document.querySelector('.last-name')! as HTMLInputElement;
const email = document.querySelector('.email')! as HTMLInputElement;
const password = document.querySelector('.password')! as HTMLInputElement;

// get form
const signupForm = document.querySelector('.signup__form')! as HTMLFormElement;

// get all errors
const fieldFirstName = document.querySelector(
  '.field-box--first-name'
)! as HTMLDivElement;

const fieldLastName = document.querySelector(
  '.field-box--last-name'
)! as HTMLDivElement;

const fieldEmail = document.querySelector(
  '.field-box--email'
)! as HTMLDivElement;

const fieldPassword = document.querySelector(
  '.field-box--password'
)! as HTMLDivElement;

interface SignupForm {
  firstName: Record<string, string>;
  lastName: Record<string, string>;
  email: Record<string, string>;
  password: Record<string, string>;
}

const signupFormFields: SignupForm = {
  firstName: {
    value: '',
    error: 'First name cannot be empty',
    type: 'text',
  },
  lastName: {
    value: '',
    error: 'Last name cannot be empty',
    type: 'text',
  },
  email: {
    value: '',
    error: 'Looks like this is not an email',
    type: 'email',
  },
  password: {
    value: '',
    error: 'Password cannot be empty',
    type: 'password',
  },
};

// add event listeners
firstName.addEventListener(
  'change',
  (e) =>
    (signupFormFields['firstName']['value'] = (
      e.target as HTMLInputElement
    ).value)
);

lastName.addEventListener(
  'change',
  (e) =>
    (signupFormFields['lastName']['value'] = (
      e.target as HTMLInputElement
    ).value)
);

email.addEventListener(
  'change',
  (e) =>
    (signupFormFields['email']['value'] = (e.target as HTMLInputElement).value)
);

password.addEventListener(
  'change',
  (e) =>
    (signupFormFields['password']['value'] = (
      e.target as HTMLInputElement
    ).value)
);

// handle signup form
signupForm.addEventListener('submit', (e): void => {
  e.preventDefault();

  handleField(fieldFirstName, signupFormFields, 'firstName');
  handleField(fieldLastName, signupFormFields, 'lastName');
  handleField(fieldPassword, signupFormFields, 'password');
  handleField(fieldEmail, signupFormFields, 'email');
});

const handleField = (
  field: HTMLDivElement,
  obj: SignupForm,
  key: string
): void => {
  if (obj[key].type === 'email') {
    // input type email
    if (!emailValidator.validate(obj[key]['value'])) {
      field.lastElementChild.innerHTML = obj[key]['error'];
      field.firstElementChild.classList.add('error-field');

      const [input, icon] = field.firstElementChild.children;
      icon.classList.add('error-icon');
      input.classList.add('error-input');
    } else {
      field.lastElementChild.innerHTML = '';
      field.firstElementChild.classList.remove('error-field');

      const [input, icon] = field.firstElementChild.children;
      icon.classList.remove('error-icon');
      input.classList.remove('error-input');
    }
  } else {
    // input type text
    if (obj[key]['value'] === '') {
      field.lastElementChild.innerHTML = obj[key]['error'];
      field.firstElementChild.classList.add('error-field');

      const [, icon] = field.firstElementChild.children;
      icon.classList.add('error-icon');
    } else {
      field.lastElementChild.innerHTML = '';
      field.firstElementChild.classList.remove('error-field');

      const [, icon] = field.firstElementChild.children;
      icon.classList.remove('error-icon');
    }
  }
};
