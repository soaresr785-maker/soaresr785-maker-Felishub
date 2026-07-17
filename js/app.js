const pacientes = [];

const lista = document.getElementById("listaPacientes");

const modal = document.getElementById("modalPaciente");

const btnNovo = document.getElementById("novoPaciente");

const fechar = document.querySelector(".fechar");

const form = document.getElementById("formPaciente");

btnNovo.addEventListener("click", () => {
    modal.style.display = "flex";
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

function renderizar(){

    lista.innerHTML = "";

    pacientes.forEach((paciente, indice)=>{

        lista.innerHTML += `
            <div class="card">

                <h2>${paciente.nome}</h2>

                <p>Microchip: ${paciente.microchip}</p>

                <p>Setor: ${paciente.setor}</p>

                <button onclick="abrirPaciente(${indice})">
                    Abrir
                </button>

            </div>
        `;

    });

}

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    pacientes.push({

        nome:document.getElementById("nome").value,

        microchip:document.getElementById("microchip").value,

        setor:document.getElementById("setor").value

    });

    form.reset();

    modal.style.display="none";

    renderizar();

});

function abrirPaciente(indice){

    const paciente = pacientes[indice];

    alert(
`Nome: ${paciente.nome}

Microchip: ${paciente.microchip}

Setor: ${paciente.setor}`
    );

}