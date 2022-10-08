import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const dataSave = localStorage.getItem('feedback-form-state');
const dataParse = JSON.parse(dataSave);
let formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextInput, 500));
getStorageForm();

function onTextInput(evt) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function getStorageForm() {
  if (dataSave) {
    email.value = dataParse.email;
    message.value = dataParse.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Please, fill all fields');
    return;
  }
  console.log(dataParse);

  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
