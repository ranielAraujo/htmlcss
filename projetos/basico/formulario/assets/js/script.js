class Navegation {
    constructor() {
        const btnOne = document.getElementById('pg-your-info');

        this.eventos(btnOne);
    }

    eventos(btnOne) {
        btnOne.addEventListener('click', e => {
            this.handleEvent(e);
        })
    }

    handleEvent(e) {
        e.preventDefault();
        const infoBtn = e.target;
        this.constructionPage(infoBtn);
    }

    constructionPage(infoBtn) {
        const formPersona = document.getElementById("formulario-personal");
        const formPlan = document.getElementById("formulario-plan");
        if (infoBtn.id === 'pg-your-info') {
            formPersona.classList. = 'onView';
        }
        if (infoBtn.id === 'pg-plan') {
            formPlan.classList.toggle = 'onView';
        }
    }
}

const navegatiom = new Navegation();