const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

const textarea = form.elements.message;
const input = form.elements.email;

const savedFormData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

if (savedFormData) {
  textarea.value = savedFormData.message;
  input.value = savedFormData.email;
  formData.email = savedFormData.email;
  formData.message = savedFormData.message;
} else {
  textarea.value = '';
  input.value = '';
}

function handleInput(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('input', handleInput);

function handleSubmit(event) {
  event.preventDefault();
  if (textarea.value.trim() !== '' && input.value.trim() !== '') {
    console.log(formData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    formData.email = '';
    formData.message = '';
    form.reset();
  } else {
    alert('Fill please all fields');
  }
}

form.addEventListener('submit', handleSubmit);
