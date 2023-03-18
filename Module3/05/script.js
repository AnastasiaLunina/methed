document.addEventListener('click', event => {
    if (event.target.matches('button')) {
        event.target.focus()
    }
})