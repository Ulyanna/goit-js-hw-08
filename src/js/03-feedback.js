import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

populateForm();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;
  const formDataToConsole = {
    email,
    message,
  };
  console.log(formDataToConsole);
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
  const savedDataset = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedDataset) {
    inputEl.value = savedDataset.email;
    textAreaEl.value = savedDataset.message;
  }
  checkFieldsInStorage();
}

function checkFieldsInStorage() {
  const storageObj = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!storageObj) {
    return;
  }
  if (!storageObj.hasOwnProperty('email')) {
    inputEl.value = '';
  }
  if (!storageObj.hasOwnProperty('message')) {
    textAreaEl.value = '';
  }
}
