document.addEventListener("DOMContentLoaded", function () {

    // Lógica para navegação dos Experiencias

    let currentIndexExperiencia = 0;
    const experiencias = document.querySelectorAll(".experiencia-item");
    const bolinhasExp = document.querySelectorAll(".bolinha-exp");
    const totalExperiencias = experiencias.length;

    function mostrarExperiencia(index) {
        experiencias.forEach((experiencia, i) => {
            experiencia.style.display = i === index ? "block" : "none";
        });

        bolinhasExp.forEach((bolinhasExp, i) => {
            if (i === index) {
                bolinhasExp.classList.add("ativa");
            } else {
                bolinhasExp.classList.remove("ativa");
            }
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
    const bolinhasPro = document.querySelectorAll(".bolinha-pro");
    const totalProjetos = projetos.length;

    function mostrarProjeto(index) {

        projetos.forEach((projetos, i) => {
        projetos.style.display = i === index ? "block" : "none";
    });
        
    bolinhasPro.forEach((bolinhasPro, i) => {
        if (i === index) {
            bolinhasPro.classList.add("ativa");
        } else {
            bolinhasPro.classList.remove("ativa");
        }
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
    const bolinhasCert = document.querySelectorAll(".bolinha-cert");
    const totalCertificados = certificados.length;

    function mostrarCertificado(index) {

        certificados.forEach((certificado, i) => {
            certificado.style.display = i === index ? "flex" : "none";
        });

        bolinhasCert.forEach((bolinhasCert, i) => {
            if (i === index) {
                bolinhasCert.classList.add("ativa");
            } else {
                bolinhasCert.classList.remove("ativa");
            }
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