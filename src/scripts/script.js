/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function handleModal() {
    const button = document.querySelector('#showMessage')
    const modalContainer = document.querySelector('#modalContainer')

    button.addEventListener('click', function () {
        modalContainer.showModal()

        closeModal()
    })
}

function closeModal() {
    const button = document.querySelector('#closeModal')
    const modalContainer = document.querySelector('#modalContainer')

    button.addEventListener('click', function () {
        modalContainer.close()
    })
}

handleModal()