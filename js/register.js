
const focusInputText = document.querySelectorAll('input[type="text"]');
const focusInputNumber = document.querySelectorAll('input[type="number"]');

// Adiciona e remove a classe 'active' em elementos de texto
focusInputText.forEach(element => {
    element.addEventListener('focus', () => {
        element.classList.add('active');
    });

    element.addEventListener('blur', () => {
        element.classList.remove('active');
    });
});

// Adiciona e remove a classe 'active' em elementos numéricos
focusInputNumber.forEach(element => {
    element.addEventListener('focus', () => {
        element.classList.add('active');
    });

    element.addEventListener('blur', () => {
        element.classList.remove('active');
    });
});
