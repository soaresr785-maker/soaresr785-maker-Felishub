const lista=document.getElementById("lista");

const modal=document.getElementById("modal");

document
.getElementById("btnNovo")
.onclick=()=>{

modal.style.display="flex";

};

document
.getElementById("fechar")
.onclick=()=>{

modal.style.display="none";

};

async function carregarPacientes(){

const {data,error}=await banco
.from("pacientes")
.select("*")
.order("id",{ascending:false});

if(error){

console.error(error);

return;

}

lista.innerHTML="";

data.forEach(p=>{

lista.innerHTML+=`

<div class="card">

<h2>${p.nome}</h2>

<p><b>Tutor:</b> ${p.tutor??""}</p>

<p><b>Microchip:</b> ${p.microchip??""}</p>

<p><b>Setor:</b> ${p.setor}</p>

</div>

`;

});

}

document
.getElementById("form")
.addEventListener("submit",async(e)=>{

e.preventDefault();

const paciente={

nome:document.getElementById("nome").value,

microchip:document.getElementById("microchip").value,

tutor:document.getElementById("tutor").value,

setor:document.getElementById("setor").value

};

const {error}=await banco

.from("pacientes")

.insert([paciente]);

if(error){

alert(error.message);

return;

}

modal.style.display="none";

e.target.reset();

carregarPacientes();

});

carregarPacientes();
