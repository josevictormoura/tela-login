const inputs = document.querySelectorAll('.input')
const loginButton = document.querySelector('.login-button')

function handleFocus({target}) {
    const span = target.previousElementSibling
    span.classList.add('span-active')
}

function handleFocusOut({target}) {
    if (target.value === '') {
        const span = target.previousElementSibling
        span.classList.remove('span-active')
    }
    
}

function handleChange() {
    const [username, password] = inputs

    if (username.value && password.value.length >= 8) {
        loginButton.removeAttribute('disabled')
    }else{
        loginButton.setAttribute('disabled', '')
    }
}

inputs.forEach(input => input.addEventListener('focus', handleFocus))
inputs.forEach(input => input.addEventListener('focusout', handleFocusOut))
inputs.forEach(input => input.addEventListener('input', handleChange))
