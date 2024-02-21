import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

const inputDelay = document.querySelector('.form-input-delay')
const buttonCreate = document.querySelector('.snackbar-button')
const formEl = document.querySelector('.form')

function createNotification() {
    return new Promise((res, rej) => {
       setTimeout(() => {
            if (formEl.state.value === 'fulfilled') {
                res(inputDelay.value)
            } else {
               rej(inputDelay.value)
            }
        }, inputDelay.value)
    })
}


formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    createNotification()
        .then((delay) => {
            iziToast.error({
                title: '',
                message: `Fulfilled promise in ${delay}ms`,
                class: 'popup-message',
                iconUrl: '../img/bi_check2-circle.svg',
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
                        iconUrl: '../img/bi_x-octagon.svg',
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