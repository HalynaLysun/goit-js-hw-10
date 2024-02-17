import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";


const inputEl = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('button[data-start]')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(inputEl, options);


class Timer { 
  constructor({onTick}) {
    this.onTick = onTick;
    this.interval = null;
  }

  start() {
    const startTime = new Date(inputEl.value)
    const milliseconds = startTime.getTime()
    if (milliseconds < Date.now()) {
      iziToast.show({
    title: '',
    message: 'Please choose a date in the future'
    });
    } else {
      this.interval = setInterval(() => {
        const currentTime = Date.now()
        const delta = milliseconds - currentTime
        const time = this.convertMs(delta)

        this.onTick(time)
      }, 1000)
    }
  
 

  }

    convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
  }
}

const daysEl = document.querySelector('.days')
const hoursEl = document.querySelector('.hours')
const minutesEl = document.querySelector('.minutes')
const secondsEl = document.querySelector('.seconds')

const timerOn = new Timer ({
  onTick: updateTimer,
})

function updateTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = String(days).padStart(2, '0')
  hoursEl.textContent = String(hours).padStart(2, '0')
  minutesEl.textContent = String(minutes).padStart(2, '0')
  secondsEl.textContent = String(seconds).padStart(2, '0')
}

startBtn.addEventListener('click', timerOn.start.bind(timerOn))
