const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll('input');
const btnSubmit = document.getElementById('submit');
const btnCancelar = document.getElementById('cancelar');


class ValidacaoForm {
    constructor(){
        this.eventos();
    }

    eventos(){
        formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposValidos();
    }

    camposValidos(){
        let valid = true;

        for(let campo of inputs){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }
            if(!campo.id === 'nome'){
                if(!this.validaNome(campo)) valid = false;
            }
        }
    }
    criaErro(campo, msg) {
        const p = document.createElement('p');
        p.innerHTML = msg;
        p.classList.add('error-text');
        campo.insertAdjacentElement('afterend', p);

    }
}

const validaForm = new ValidacaoForm();