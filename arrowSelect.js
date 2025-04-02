document.querySelectorAll('.select-chevron-arrow').forEach(select => {
    select.addEventListener('change', function () {
        // Remove o foco do select após selecionar uma opção
        this.blur();
    });
});