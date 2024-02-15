import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

class Timer { 
  constructor({onTick}) {
    this.onTick = onTick;    
  }
}

const inputEl = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('button[data-start]')
const days = document.querySelector('[data-days]')
const hours = document.querySelector('[data-hours]')
console.log(days)

// inputEl.disabled = true;
// startBtn.disabled = true;
startBtn.addEventListener('click', () => {
  let date = new Date(inputEl.value)
  const milliseconds = date.getTime()
  // console.log(milliseconds)
  if (milliseconds < Date.now()) {
    alert('Error!!! Illegal operation')
  } else { 
    const timer = milliseconds - Date.now()
    convertMs(timer)
    // days.textContent = timer.days
}
})

const timerOn = new Timer ({
  onTick: updateTimer,
})

function updateTimer({ days, hours, minutes, seconds }) {
  days.textContent = days
  hours.text.content = hours
}

function convertMs(ms) {
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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  
// console.log(inputEl )
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

