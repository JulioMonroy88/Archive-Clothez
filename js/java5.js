const contactForm = document.getElementById('contactForm')
const successMessage = document.getElementById('successMessage')

contactForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const nombre = document.getElementById('nombre').value
    const email = document.getElementById('email').value
    const telefono = document.getElementById('telefono').value
    const asunto = document.getElementById('asunto').value
    const mensaje = document.getElementById('mensaje').value

    successMessage.classList.add('show')

    contactForm.reset()

    setTimeout(() => {
        successMessage.classList.remove('show')
    }, 5000)

    console.log({
        nombre,
        email,
        telefono,
        asunto,
        mensaje
    })
})