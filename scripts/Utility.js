function copyCode() {
    const textarea = document.createElement('textarea')
    const source = document.querySelector('.source')

    document.body.appendChild(textarea)
    textarea.select()
    source.addEventListener('copy', (e) => {
        const selection = document.getSelection();
        e.clipboardData.setData('text/plain', selection.toString());
        e.preventDefault();
    })
    
    textarea.remove()
    alert('Código copiado al portapapeles');
}