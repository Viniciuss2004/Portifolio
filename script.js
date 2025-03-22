document.addEventListener("DOMContentLoaded", function () {

    // Lógica para navegação dos Experiencias

    let currentIndexExperiencia = 0;
    const experiencias = document.querySelectorAll(".experiencia-item");
    const totalExperiencias = experiencias.length;

    function mostrarExperiencia(index) {
        experiencias.forEach((experiencia, i) => {
            experiencia.style.display = i === index ? "block" : "none";
        });
    }

    document.getElementById("seta-dupla-direita-experiencias").addEventListener("click", function () {
        currentIndexExperiencia = (currentIndexExperiencia + 1) % totalExperiencias;
        mostrarExperiencia(currentIndexExperiencia);
    });

    document.getElementById("seta-dupla-esquerda-experiencias").addEventListener("click", function () {
        currentIndexExperiencia = (currentIndexExperiencia - 1 + totalExperiencias) % totalExperiencias;
        mostrarExperiencia(currentIndexExperiencia);
    });

    mostrarExperiencia(currentIndexExperiencia);

    // Lógica para navegação dos Projetos

    let currentIndexProjeto = 0;
    const projetos = document.querySelectorAll(".projeto-item");
    const totalProjetos = projetos.length;

    function mostrarProjeto(index) {
        projetos.forEach((projeto, i) => {
            projeto.style.display = i === index ? "block" : "none";
        });
    }

    document.querySelector("#seta-dupla-direita-projetos").addEventListener("click", function () {
        currentIndexProjeto = (currentIndexProjeto + 1) % totalProjetos;
        mostrarProjeto(currentIndexProjeto);
    });

    document.querySelector("#seta-dupla-esquerda-projetos").addEventListener("click", function () {
        currentIndexProjeto = (currentIndexProjeto - 1 + totalProjetos) % totalProjetos;
        mostrarProjeto(currentIndexProjeto);
    });

    mostrarProjeto(currentIndexProjeto);

    // Lógica para navegação dos Certificados

    let currentIndexCertificado = 0;
    const certificados = document.querySelectorAll(".certificado-item");
    const totalCertificados = certificados.length;

    function mostrarCertificado(index) {
        certificados.forEach((certificado, i) => {
            certificado.style.display = i === index ? "flex" : "none";
        });
    }

    document.getElementById("seta-dupla-direita-certificados").addEventListener("click", function () {
        currentIndexCertificado = (currentIndexCertificado + 1) % totalCertificados;
        mostrarCertificado(currentIndexCertificado);
    });

    document.getElementById("seta-dupla-esquerda-certificados").addEventListener("click", function () {
        currentIndexCertificado = (currentIndexCertificado - 1 + totalCertificados) % totalCertificados;
        mostrarCertificado(currentIndexCertificado);
    });

    mostrarCertificado(currentIndexCertificado);

});


