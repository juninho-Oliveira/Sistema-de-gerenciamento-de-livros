//realizar o consumo da api

//get

//let idUser = localStorage.getItem("meu id");



document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const url = "http://localhost:3000/Livros";

  const id = idUser

  async function getLivros() {
    try {
      const response = await fetch(url);
      //console.log(response);

      const dados = await response.json();
      //console.log(dados);
      
      //alert(`ID: ${idUser}`)

      dados.forEach((Livro) => {

        //console.log(`livros id: ${Livro.id}, IdUser: ${idUser}`)
          

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
            deleteLivros(Livro.id, Livro);
          })

          editar.addEventListener('click', function () {
            editarLivros(Livro.id, Livro);
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

      });

    } catch (error) {
      console.log("deu erro " + error);
    }
  }

  getLivros();
});


function mostrarMenu() {
  let menu = document.getElementById('icone');
  let mostraMenu = document.getElementById('mostraIcons')

  mostraMenu.style.display = (mostraMenu.style.display === "none" || mostraMenu.style.display === "") ? "flex" : "none";

  

  if (mostraMenu.style.display === "flex") {
    //alert('flex')
    menu.classList.add('bi', 'bi-x-circle')
    menu.classList.remove('bi', 'bi-card-list');
  } else if (mostraMenu.style.display === "none") {
    //alert('none')
    menu.classList.add('bi', 'bi-card-list')
    menu.classList.remove('bi', 'bi-x-circle');
  }

}
