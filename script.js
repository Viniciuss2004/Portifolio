document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 1;
    const experiencias = document.querySelectorAll('.experiencia-item');
    const totalExperiencias = experiencias.length;

    function mostrarExperiencia(index) {
        experiencias.forEach((experiencia, i) => {
            experiencia.classList.remove('ativo');
            if (i === index) {
                experiencia.classList.add('ativo');
            }
        });
    }

    document.getElementById('seta-dupla-direita').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalExperiencias;
        mostrarExperiencia(currentIndex);
    });

    document.getElementById('seta-dupla-esquerda').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalExperiencias) % totalExperiencias;
        mostrarExperiencia(currentIndex);
    });

    mostrarExperiencia(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    const setas = document.querySelectorAll('.seta');
    const bolinhas = document.querySelectorAll('.bolinha');
    let indiceAtivo = 0;

    function atualizarBolinhas() {
        bolinhas.forEach((bolinha, index) => {
            if (index === indiceAtivo) {
                bolinha.classList.add('ativa');
            } else {
                bolinha.classList.remove('ativa');
            }
        });
    }

    document.getElementById('seta-dupla-direita').addEventListener('click', () => {
        if (indiceAtivo < bolinhas.length - 1) {
            indiceAtivo++;
        } else {
            indiceAtivo = 0;
        }
        atualizarBolinhas();
    });

    document.getElementById('seta-dupla-esquerda').addEventListener('click', () => {
        if (indiceAtivo > 0) {
            indiceAtivo--;
        } else {
            indiceAtivo = bolinhas.length - 1;
        }
        atualizarBolinhas();
    });

    atualizarBolinhas();
});

