import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

import cross from '../img/bi_x-octagon.svg'
import urlIcon from '../img/bi_check2-circle.svg'

const formEl = document.querySelector('.form')

function createNotification(delay, state) {
    return new Promise((res, rej) => {
       setTimeout(() => {
            if (state === 'fulfilled') {
                res(delay)
            } else {
               rej(delay)
            }
        }, delay)
    })
}


formEl.addEventListener('submit', (event) => {
const delay = event.currentTarget.delay.value
const state = event.currentTarget.state.value
    event.preventDefault()
    createNotification(delay, state)
        .then((delay) => {
            iziToast.error({
                title: '',
                message: `Fulfilled promise in ${delay}ms`,
                class: 'popup-message',
                iconUrl: urlIcon,
                theme: 'dark',
                backgroundColor: '#59A10D',
                messageColor: '#fff',
                position: 'topRight',
                pauseOnHover: true,
                timeout: 3000,
            })
        })
        .catch((delay) => {
        iziToast.error({
                        title: '',
                        message: `Rejected promise in ${delay}ms`,
                        class: 'popup-message',
                        iconUrl: cross,
                        theme: 'dark',
                        backgroundColor: '#ef4040',
                        messageColor: '#fff',
                        position: 'topRight',
                        pauseOnHover: true,
                        timeout: 3000,
        })
    })
    formEl.reset()
}
)