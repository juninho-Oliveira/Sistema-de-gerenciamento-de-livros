const nome = localStorage.getItem("meu nome");
let span = document.getElementById("nomeId");

span.innerText = `${nome} !`;

//alert(nome);

async function editar(nome, temporada, estudio, ano) {
  try {
    const id = localStorage.getItem("meu id");
    //const nome = localStorage.getItem('meu nome');
    //alert(`meu id: ${id}, meu nome: ${nome}`)

    const dadosEnviados = {
      nomeSeries: nome,
      numTemporada: temporada,
      nomeEstudio: estudio,
      anoLancamento: ano,
    };

    if (true) {
      await fetch(`https://jsonserve-p8wz.onrender.com/series/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosEnviados),
      });
      window.location.href = "/index.html";
    }

    //alert(`id: ${id}, nome: ${nomeSeries}, temporada: ${numTemporada}, estudio: ${nomeEstudio}, ano: ${anoLancamento} `)
  } catch (error) {
    console(`ERRO: ${error}`);
  }
}

function voltar(event) {
  event.preventDefault();

  const nomeSeries = document.getElementById("nomeSerie").value;
  const numTemporada = document.getElementById("numTemporada").value;
  const nomeEstudio = document.getElementById("nomeEstudio").value;
  const anoLancamento = document.getElementById("anoLancamento").value;

  //alert(`nome: ${nomeSeries}, temporada: ${numTemporada}, estudio: ${nomeEstudio}, ano: ${anoLancamento} `)
  editar(nomeSeries, numTemporada, nomeEstudio, anoLancamento);
}
