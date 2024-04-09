const nome = localStorage.getItem("meu nome");
let span = document.getElementById("nomeId");
let lista = document.getElementById("nomeListaLivros");

const idUser = localStorage.getItem("meu id");
//alert(`ID: ${idUser}`)

span.innerText = `${nome} !`;
lista.innerText = `${nome} !`;


async function potsLivros(nome, autor, edicao, biografia, editora, idUser) {
  


  const nomeLivro = nome;
  const autorLivro = autor;
  const edicaoLivro = edicao;
  const biografiaLivro = biografia;
  const editoraLivro = editora;

  try {

    const Livros = {
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
        await fetch(`https://jsonserve-sistema-de-livros.onrender.com/Usuarios/${idUser}/Livros`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Livros),
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


