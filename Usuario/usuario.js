/*const nome = localStorage.getItem("meu nome");
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


function adicionarLivro(event) {
  event.preventDefault();
  alert('ola')
}*/





async function potsLivros(nome, autor, edicao, biografia, editora) {
  
  const nomeLivro = nome;
  const autorLivro = autor;
  const edicaoLivro = edicao;
  const biografiaLivro = biografia;
  const editoraLivro = editora;

  try {
    const dadosEnviados = {
      NomeLivro: nome,
      AutorLivro: autor,
      BiografiaLivro: edicao,
      EdicaoLivro: biografia,
      EditoraLivro: editora,
    };

    if (nomeLivro === "") {
      alert("Nome obrigatório!");
    } else if (autorLivro === "") {
      alert("Autor obrigatório!");
    } else if (biografiaLivro === "") {
      alert("Biografia obrigatório!");
    } else if (edicaoLivro === "") {
      alert("Edição obrigatório!");
    } else if (editoraLivro === "") {
      alert("Editora obrigatório!");
    } else {

      if (true) {
        await fetch(`https://jsonserve-sistema-de-livros.onrender.com/Livros`, {
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

  const nomeLivros = document.getElementById("nomeLivro").value;
  const autorLivros = document.getElementById("nomeAutor").value;
  const edicaoLivros = document.getElementById("edicaoLivro").value;
  const biografiaLivros = document.getElementById("biografiaLivro").value;
  const editoraLivros = document.getElementById("editoraLivro").value;
  

  potsLivros(nomeLivros, autorLivros, edicaoLivros, biografiaLivros, editoraLivros);
}

function atualizar() {
  window.location.reload();
}
