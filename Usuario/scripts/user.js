//realizar o consumo da api

//get

//let idUser = localStorage.getItem("meu id");



document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const url = "https://jsonserve-sistema-de-livros.onrender.com/Livros";

  const id = idUser

  async function getLivros() {
    try {
      const response = await fetch(url);
      //console.log(response);

      const dados = await response.json();
      //console.log(dados);
      
      //alert(`ID: ${idUser}`)

      dados.forEach((Livro) => {

        console.log(`livros id: ${Livro.id}, IdUser: ${idUser}`)
          

        const listaLivros = document.getElementById("listaLivros");

        if (Livro.id === id) {

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

        } 

        //let livros = ele.Livros;

        /*livros.forEach((Livro) => {


          //console.log(series.id)

          //console.log(ele.Livros.AutorLivro)


        })*/

      });

    } catch (error) {
      console.log("deu erro " + error);
    }
  }

  getLivros();
});
