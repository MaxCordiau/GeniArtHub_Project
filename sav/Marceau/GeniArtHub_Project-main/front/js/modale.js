function showinfo(message, title = "") {
    const modale = document.createElement('dialog')
    
    modale.appendChild(document.createTextNode(message))
    document.body.appendChild(modale)

    if (title) {
        const titleElement = document.createElement('h1')
        titleElement.textContent = title
        modale.insertBefore(titleElement, modale.firstChild)
    }

    modale.showModal()
    setTimeout(() => {
        modale.close()
        modale.remove()
    }, 3000)
}