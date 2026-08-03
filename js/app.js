/* ==========================================
   ESCOLA DE PROFETAS ATALAIA
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const accordions = document.querySelectorAll(".accordion");

    const audios = document.querySelectorAll("audio");

    // ==========================
    // ACORDEÃO
    // ==========================

    accordions.forEach((accordion) => {

        accordion.addEventListener("click", function () {

            const panel = this.nextElementSibling;

            const aberto = this.classList.contains("active");

            // Fecha todos

            accordions.forEach((item) => {

                item.classList.remove("active");

                const p = item.nextElementSibling;

                p.style.display = "none";

            });

            // Se não estava aberto, abre

            if (!aberto) {

                this.classList.add("active");

                panel.style.display = "block";

                panel.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });

    // ==========================
    // APENAS UM ÁUDIO POR VEZ
    // ==========================

    audios.forEach((audio) => {

        audio.addEventListener("play", () => {

            audios.forEach((outro) => {

                if (outro !== audio) {

                    outro.pause();

                }

            });

        });

    });

    // ==========================
    // ABRIR PRIMEIRA AULA
    // ==========================

    if (accordions.length > 0) {

        accordions[0].classList.add("active");

        accordions[0].nextElementSibling.style.display = "block";

    }

    // ==========================
    // DESTACAR PDF AO PASSAR MOUSE
    // ==========================

    document.querySelectorAll(".pdf").forEach((botao) => {

        botao.addEventListener("mouseenter", () => {

            botao.style.transform = "translateY(-3px) scale(1.02)";

        });

        botao.addEventListener("mouseleave", () => {

            botao.style.transform = "translateY(0) scale(1)";

        });

    });

    // ==========================
    // IMAGEM COM ZOOM
    // ==========================

    document.querySelectorAll(".panel img").forEach((img) => {

        img.style.cursor = "pointer";

        img.addEventListener("click", () => {

            if (img.classList.contains("zoom")) {

                img.classList.remove("zoom");

                img.style.transform = "scale(1)";

                img.style.transition = ".3s";

                img.style.zIndex = "";

            } else {

                img.classList.add("zoom");

                img.style.transform = "scale(1.05)";

                img.style.transition = ".3s";

                img.style.zIndex = "5";

            }

        });

    });

    // ==========================
    // BOTÃO VOLTAR AO TOPO
    // ==========================

    const btnTopo = document.createElement("button");

    btnTopo.innerHTML = "↑";

    btnTopo.id = "topo";

    document.body.appendChild(btnTopo);

    Object.assign(btnTopo.style, {

        position: "fixed",

        right: "20px",

        bottom: "20px",

        width: "50px",

        height: "50px",

        borderRadius: "50%",

        border: "none",

        background: "#d4af37",

        color: "#111",

        fontSize: "22px",

        cursor: "pointer",

        display: "none",

        boxShadow: "0 0 15px rgba(0,0,0,.4)",

        zIndex: "9999"

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            btnTopo.style.display = "block";

        } else {

            btnTopo.style.display = "none";

        }

    });

    btnTopo.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});