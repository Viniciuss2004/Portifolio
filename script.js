document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 1;
    const experiencias = document.querySelectorAll('.experiencia-item');
    const totalExperiencias = experiencias.length;

    // Função para mostrar a experiência atual
    function mostrarExperiencia(index) {
        experiencias.forEach((experiencia, i) => {
            experiencia.classList.remove('ativo');
            if (i === index) {
                experiencia.classList.add('ativo');
            }
        });
    }

    // Navegar para a próxima experiência
    document.getElementById('seta-direita').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalExperiencias;
        mostrarExperiencia(currentIndex);
    });

    // Navegar para a experiência anterior
    document.getElementById('seta-esquerda').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalExperiencias) % totalExperiencias;
        mostrarExperiencia(currentIndex);
    });

    // Inicializar a primeira experiência
    mostrarExperiencia(currentIndex);
});
