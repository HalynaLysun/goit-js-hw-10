import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

const inputDelay = document.querySelector('.form-input-delay')
const buttonCreate = document.querySelector('.snackbar-button')
const formEl = document.querySelector('.form')

function createNotification() {
    // event.preventDefault()
    return new Promise((res, rej) => {
        if (formEl.state.value === 'fulfilled') {
            setTimeout(() => {
                res(
                    iziToast.error({
                        title: '',
                        message: `Fulfilled promise in ${inputDelay.value}ms`,
                        class: 'popup-message',
                        iconUrl: '../img/bi_check2-circle.svg',
                        theme: 'dark',
                        backgroundColor: '#59A10D',
                        messageColor: '#fff',
                        position: 'topRight',
                        pauseOnHover: true,
                        timeout: 3000,
                    })
                )
            }, inputDelay.value)
        } else {
            setTimeout(() => {
                rej(
                    iziToast.error({
                        title: '',
                        message: `Rejected promise in ${inputDelay.value}ms`,
                        class: 'popup-message',
                        iconUrl: '../img/bi_x-octagon.svg',
                        theme: 'dark',
                        backgroundColor: '#ef4040',
                        messageColor: '#fff',
                        position: 'topRight',
                        pauseOnHover: true,
                        timeout: 3000,
                    })
                )
            }, inputDelay.value)
        }     
    })
}

createNotification ()
    .then((result) => {
console.log(result)
    })
    .catch((error) => {
console.log(error)
})

formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    createNotification()
    formEl.reset()
}
)