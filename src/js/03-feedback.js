import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');

formEl.addEventListener('input', onFormInput);
inputEl.addEventListener('input', onInputEnter);
textAreaEl.addEventListener('input', onTextAreaInput);

function onFormInput(event) {
  event.preventDefault();
  console.dir(event.target.value);
  console.dir(event.target);
  //   const formData = {
  //     email,
  //     message,
  //   };
  //   console.log(formData);
  //   localStorage.setItem('feedback-form-state', formData);
  //   formEl.reset();
}
function onInputEnter(event) {
  //   console.log(event.target.value);
}
function onTextAreaInput(event) {
  //   console.log(event.target.value);
}
