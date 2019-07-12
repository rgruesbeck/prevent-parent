// prevent parent

const preventParent = (preventedKeysList = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft']) => {
    document.addEventListener('keydown', (e) => {
        if (preventedKeysList.includes(e.code)) {
            e.preventDefault()
        }
    })
}

export default preventParent
