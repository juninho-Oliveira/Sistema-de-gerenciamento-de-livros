const nome = localStorage.getItem("meu nome");
let span = document.getElementById("nomeId");
let lista = document.getElementById("nomeListaLivros");

const idUser = localStorage.getItem("meu id");
//alert(`ID: ${idUser}`)

span.innerText = `${nome} `;
lista.innerText = `${nome} `;


async function potsLivros(nome, autor, edicao, biografia, editora, idLivro) {
  

  const nomeLivro = nome;
  const autorLivro = autor;
  const edicaoLivro = edicao;
  const biografiaLivro = biografia;
  const editoraLivro = editora;
  const idUnico = idLivro;
  

  try {

    const dadosEnviados = {
      NomeLivro: nome,
      AutorLivro: autor,
      BiografiaLivro: biografia,
      EdicaoLivro: edicao,
      EditoraLivro: editora,
      id: idUnico,
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
        await fetch(`http://localhost:3000/Livros`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dadosEnviados),
        });
      }

      //alert(`ID: ${idUnico}`)

      //atualizar();
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

  const idLivro = idUser;
  //alert(`ID: ${idLivro}, 2: ${idUser}`)

  potsLivros(nomeLivros, autorLivros, edicaoLivros, biografiaLivros, editoraLivros, idLivro);
}

function atualizar() {
  window.location.reload();
}


