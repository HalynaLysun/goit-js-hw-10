// Описів у документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker')
const buttonEl = document.querySelector('button[data-start]')

const option = flatpickr('#datetime-picker', {
    "enableTime": true,
    "plugins": [new confirmDatePlugin({})]
});

