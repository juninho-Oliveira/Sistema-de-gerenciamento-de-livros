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

          editar.addEventListener("click", () => {
            const id = Livro.id;
          
            if (window.confirm("Você deseja atualizar o usuario?")) {
              document.getElementById("title-form").textContent = "Atualizar Livro";
              document.getElementById("btnCadastrar").textContent = "Atualizar";
            
              document.getElementById("nomeLivro").value = Livro.NomeLivro;
              document.getElementById("nomeAutor").value = Livro.AutorLivro;
              document.getElementById("edicaoLivro").value = Livro.EdicaoLivro;
              document.getElementById("biografiaLivro").value = Livro.BiografiaLivro;
              document.getElementById("editoraLivro").value = Livro.EditoraLivro;
              
  
              var botao = document.getElementById("btnCadastrar");
              botao.onclick = null;
  
  
              // Adiciona o novo evento de clique
              document.getElementById("btnCadastrar").addEventListener("click", function(e) {
                EditarLivro(e, Livro.id, url);
                
              });
            }
          });

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


async function EditarLivro(e, id, url) {
  alert(`ola: ${id}`)
  e.preventDefault();

  try {
    const dadosEnviadosAtualizados = {
      "NomeLivro": document.getElementById("nomeLivro").value,
      "AutorLivro": document.getElementById("nomeAutor").value,
      "BiografiaLivro": document.getElementById("biografiaLivro").value,
      "EdicaoLivro": document.getElementById("edicaoLivro").value,
      "EditoraLivro":document.getElementById("editoraLivro").value,
    };
alert(id);
    const retorno = await fetch(`${url}/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosEnviadosAtualizados),
      }
    );

    if (retorno.ok) {
      alert("Usuario atualizada com sucesso!");
    } else {
      alert(`Usuario não pode ser atualizada ${retorno.status}`);
    }
    
    //window.location.reload();
  } catch (error) {
    alert(error);
  }
}




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
