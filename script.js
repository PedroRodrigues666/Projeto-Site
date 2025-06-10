document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('toggle-folhas');
    const folhas = document.querySelectorAll('.folha-box');
    let visivel = false;

    botao.addEventListener('click', function () {
        visivel = !visivel;

        folhas.forEach(folha => {
            folha.style.display = visivel ? 'block' : 'none';
        });

        botao.textContent = visivel ? 'Ver Menos' : 'Veja Mais';
    });

    folhas.forEach(folha => {
        folha.style.display = 'none';
    });
});












