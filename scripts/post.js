async function potsSeries(nome, temporada, estudio, ano) {
  
  const nomeSeries = nome;
  const numTemporada = temporada;
  const nomeEstudio = estudio;
  const anoLancamento = ano;

  //alert(` nome: ${nomeSeries}, temporada: ${numTemporada}, estudio: ${nomeEstudio}, ano: ${anoLancamento} `);
    

  try {
    const dadosEnviados = {
      nomeSeries: nome,
      numTemporada: temporada,
      nomeEstudio: estudio,
      anoLancamento: ano,
    };

    if (nomeSeries === "") {
      alert("Nome da serie obrigatório!");
    } else if (numTemporada === "") {
      alert("Numero de temporadas obrigatório!");
    } else if (nomeEstudio === "") {
      alert("Nome do estudio obrigatório!");
    } else if (anoLancamento === "") {
      alert("ano de lançamento obrigatório!");
    } else {

      if (true) {
        await fetch(`https://jsonserve-p8wz.onrender.com/series`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dadosEnviados),
        });
      }

      atualizar();
    }
  } catch (error) {
    console.log(error);
  }
}

function adicionar(event) {
  event.preventDefault();

  const nomeSeries = document.getElementById("nomeSerie").value;
  const numTemporada = document.getElementById("numTemporada").value;
  const nomeEstudio = document.getElementById("nomeEstudio").value;
  const anoLancamento = document.getElementById("anoLancamento").value;

  potsSeries(nomeSeries, numTemporada, nomeEstudio, anoLancamento);
}

function atualizar() {
  window.location.reload();
}
