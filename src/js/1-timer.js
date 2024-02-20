import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";

function stopTimer(selectedDate, interval) {
  if (selectedDate < Date.now() + 400) {
    clearInterval(interval)
    interval = null
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return updateTimer(days, hours, minutes, seconds);
}

function updateTimer(days, hours, minutes, seconds) {
  const daysEl = document.querySelector('.days')
  const hoursEl = document.querySelector('.hours')
  const minutesEl = document.querySelector('.minutes')
  const secondsEl = document.querySelector('.seconds')
  
  daysEl.textContent = String(days).padStart(2, '0')
  hoursEl.textContent = String(hours).padStart(2, '0')
  minutesEl.textContent = String(minutes).padStart(2, '0')
  secondsEl.textContent = String(seconds).padStart(2, '0')
}

function buildErrorMessage() {
  iziToast.error({
        title: '',
        message: 'Please choose a date in the future',
        class: 'popup-message',
        theme: 'dark',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        iconUrl: '../img/bi_x-octagon.svg',
        position: 'topRight',
        pauseOnHover: true,
        timeout: 3000,
      });    
}

function mobileInputAttribute(state) {
  const inputEl = document.querySelector('.flatpickr-input.flatpickr-mobile')
  
  if (!inputEl) {
    return
  }
  state ? inputEl.setAttribute('disabled' , '') : inputEl.removeAttribute('disabled')
}

function timerHandler(selectedDate, inputEl, startBtn) {
  startBtn.removeAttribute('disabled')
  inputEl.removeAttribute('disabled')
  let interval

  startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', '')
    inputEl.setAttribute('disabled', '')
    mobileInputAttribute(true);
    
    interval = setInterval(() => {
      convertMs(selectedDate - Date.now())
      stopTimer(selectedDate, interval)
     }, 200)

  })
}

function startTimer() {
const inputEl = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('button[data-start]')
let userSelectedDate
  
  if (!inputEl || !startBtn) {
    return;
  }

startBtn.setAttribute('disabled', '')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  dateFormat: 'Y-m-d h:m',
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0]
    if (userSelectedDate <= Date.now() || isNaN(userSelectedDate)) {
      startBtn.setAttribute('disabled', '')
      buildErrorMessage()
    } else {
      timerHandler(userSelectedDate, inputEl, startBtn)
    }
  },
};

flatpickr(inputEl, options);
}

startTimer()











