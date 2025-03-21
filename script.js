document.addEventListener("DOMContentLoaded", function () {
    let currentIndexExperiencia = 0;
    const experiencias = document.querySelectorAll(".experiencia-item");
    const bolinhasExperiencia = document.querySelectorAll(".navegacao-exp .bolinha");
    const totalExperiencias = experiencias.length;

    function mostrarExperiencia(index) {
        experiencias.forEach((experiencia, i) => {
            experiencia.style.display = i === index ? "block" : "none";
        });
        atualizarBolinhas(bolinhasExperiencia, index);
    }

    document.getElementById("seta-dupla-direita").addEventListener("click", function () {
        currentIndexExperiencia = (currentIndexExperiencia + 1) % totalExperiencias;
        mostrarExperiencia(currentIndexExperiencia);
    });

    document.getElementById("seta-dupla-esquerda").addEventListener("click", function () {
        currentIndexExperiencia = (currentIndexExperiencia - 1 + totalExperiencias) % totalExperiencias;
        mostrarExperiencia(currentIndexExperiencia);
    });

    mostrarExperiencia(currentIndexExperiencia);

    // Lógica para navegação dos projetos
    let currentIndexProjeto = 0;
    const projetos = document.querySelectorAll(".projeto-item");
    const bolinhasProjeto = document.querySelectorAll(".navegacao-pro .bolinha");
    const totalProjetos = projetos.length;

    function mostrarProjeto(index) {
        projetos.forEach((projeto, i) => {
            projeto.style.display = i === index ? "block" : "none";
        });
        atualizarBolinhas(bolinhasProjeto, index);
    }

    document.querySelector(".navegacao-pro #seta-dupla-direita").addEventListener("click", function () {
        currentIndexProjeto = (currentIndexProjeto + 1) % totalProjetos;
        mostrarProjeto(currentIndexProjeto);
    });

    document.querySelector(".navegacao-pro #seta-dupla-esquerda").addEventListener("click", function () {
        currentIndexProjeto = (currentIndexProjeto - 1 + totalProjetos) % totalProjetos;
        mostrarProjeto(currentIndexProjeto);
    });

    mostrarProjeto(currentIndexProjeto);

    function atualizarBolinhas(bolinhas, indexAtivo) {
        bolinhas.forEach((bolinha, i) => {
            bolinha.classList.toggle("ativa", i === indexAtivo);
        });
    }
    document.addEventListener("DOMContentLoaded", function () {
        let currentIndexCertificado = 0;
        const certificados = document.querySelectorAll(".certificado-item");
        const totalCertificados = certificados.length;
    
        function mostrarCertificado(index) {
            certificados.forEach((certificado, i) => {
                certificado.style.display = i === index ? "block" : "none";
            });
        }
    
        document.getElementById("seta-dupla-direita").addEventListener("click", function () {
            currentIndexCertificado = (currentIndexCertificado + 1) % totalCertificados;
            mostrarCertificado(currentIndexCertificado);
        });
    
        document.getElementById("seta-dupla-esquerda").addEventListener("click", function () {
            currentIndexCertificado = (currentIndexCertificado - 1 + totalCertificados) % totalCertificados;
            mostrarCertificado(currentIndexCertificado);
        });
    
        mostrarCertificado(currentIndexCertificado);
    });
    
    let currentIndexCertificado = 0;
        const certificados = document.querySelectorAll(".certificado-item");
        const totalCertificados = certificados.length;

        function mostrarCertificado(index) {
            certificados.forEach((certificado, i) => {
                certificado.style.display = i === index ? "flex" : "none";
            });
        }

        document.getElementById("seta-dupla-direita-certificado").addEventListener("click", function () {
            currentIndexCertificado = (currentIndexCertificado + 1) % totalCertificados;
            mostrarCertificado(currentIndexCertificado);
        });

        document.getElementById("seta-dupla-esquerda-certificado").addEventListener("click", function () {
            currentIndexCertificado = (currentIndexCertificado - 1 + totalCertificados) % totalCertificados;
            mostrarCertificado(currentIndexCertificado);
        });

        mostrarCertificado(currentIndexCertificado);

});


