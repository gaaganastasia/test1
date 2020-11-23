import { FormValidator } from "../components/FormValidator.js";

import {
  formConfig,
  authorizationForm
} from "../utils/constants.js";

const formVal = new FormValidator(formConfig, authorizationForm);

//// валидация и снятие предыдущих error
const validateForm = (formVal) => {
  formVal.inputList.forEach((inputElement) => {
    formVal.hideInputError(inputElement);
  });
  formVal.enableValidation();
};

authorizationForm.reset();
validateForm(formVal);

document.querySelector('.form__submit').addEventListener('click', () => {
  location.href = 'https://gaaganastasia.github.io/test2/'
})