/*to do list*/

const listaTarefas = document.querySelector('#lista');
const caixaTexto = document.querySelector('#caixatexto');
const btnadicionar = document.querySelector('#botao');

btnadicionar.addEventListener('click', function () {
    const textoTarefa = caixaTexto.value;
    caixaTexto.value = "";
    listaTarefas.appendChild(adicionarTarefa(textoTarefa));
});


function adicionarTarefa(textoTarefa) {

    const elementLi = document.createElement('ul');
    const elementspam = document.createElement('spam');
    elementspam.setAttribute('id', 'tarefa');
    elementspam.textContent = textoTarefa;
    elementLi.className = 'naoRealizada';

    var input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'tarefa';
    input.setAttribute('id', 'chk');

    //Chama a classe quando clica no checkbox
    input.addEventListener('click', function () {
        elementLi.appendChild(input);
        elementLi.appendChild(elementspam);

        if (this.id === 'chk')

            if (this.parentNode.className === 'naoRealizada') {
                this.parentNode.className = 'realizada'
            } else {
                this.parentNode.className = 'naoRealizada'
            };
    });

    //chama a classe quando clica no texto
    if (elementspam.textContent.length > 0) {
        elementLi.appendChild(input);
        elementLi.appendChild(elementspam);

        elementspam.addEventListener('click', function () {
            if (this.id === 'tarefa')

                if (this.parentNode.className === 'naoRealizada') {
                    this.parentNode.className = 'realizada'
                } else {
                    this.parentNode.className = 'naoRealizada'
                }
        });
    } else {
        alert('digite uma tarefa para adicionar!!');
    }
    return elementLi;
}
