//realizar o consumo da api

//get


document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const url = "https://jsonserve-sistema-de-livros.onrender.com/Usuarios";

  async function getLivros() {
    try {
      const response = await fetch(url);
      //console.log(response);

      const dados = await response.json();
      //console.log(dados);

      dados.forEach((ele) => {

        let livros = ele.Livros;

        livros.forEach((Livro) => {
          console.log(Livro.NomeLivro)

          const listaLivros = document.getElementById("listaLivros");

          //console.log(series.id)

          //console.log(ele.Livros.AutorLivro)

          const tr = document.createElement("tr");
          const div = document.createElement("div");

          const editar = document.createElement('button');
          const excluir = document.createElement('button');

          div.classList.add("botoes");
          editar.classList.add("bi", "bi-pencil-square");
          excluir.classList.add("bi", "bi-trash3");

          excluir.addEventListener('click', function () {
            deleteSeries(ele.id, ele);
          })

          editar.addEventListener('click', function () {
            EditarSeries(ele.id, ele);
          })

          //realizar a criação das celulas de cada elemento
          const nomeLivro = document.createElement("td");
          nomeLivro.textContent = Livro.NomeLivro;

          const autorLivro = document.createElement("td");
          autorLivro.textContent = Livro.AutorLivro;

          const biografiaLivro = document.createElement("td");
          biografiaLivro.textContent = Livro.BiografiaLivro;

          const edicaoLivro = document.createElement("td");
          edicaoLivro.textContent = Livro.EdicaoLivro;

          const editoraLivro = document.createElement("td");
          editoraLivro.textContent = Livro.EditoraLivro;

          tr.appendChild(nomeLivro);
          tr.appendChild(autorLivro);
          tr.appendChild(biografiaLivro);
          tr.appendChild(edicaoLivro);
          tr.appendChild(editoraLivro);
          tr.appendChild(div);


          div.appendChild(editar);
          div.appendChild(excluir);

          listaLivros.appendChild(tr);

        })

      });

    } catch (error) {
      console.log("deu erro " + error);
    }
  }

  getLivros();
});

/*async function render() {
  const response = await fetch(`https://jsonserve-sistema-de-livros.onrender.com/Usuarios`)
  const date = await response.json();

  date.forEach((ele) => {
    let livros = ele.Livros;

    livros.forEach((nome) => {
      console.log(nome.NomeLivro)
    })


  });

  //console.log(date);

}

render()*/