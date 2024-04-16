document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const url = "http://localhost:3000/Usuarios";

  async function getUser() {
    try {
      const response = await fetch(url);
      //console.log(response);

      const dados = await response.json();
      //console.log(dados);

      dados.forEach((ele) => {
        const listaUsuarios = document.getElementById("listaUsuarios");

        //console.log(series.id)

        const tr = document.createElement("tr");
        const div = document.createElement("div");

        const editar = document.createElement("button");
        const excluir = document.createElement("button");
        const livros = document.createElement("button");

        div.classList.add("botoes");
        editar.classList.add("bi", "bi-pencil-square");
        excluir.classList.add("bi", "bi-trash3");
        livros.classList.add("bi", "bi-book");

        excluir.addEventListener('click', async () => {
          const id = ele.id
  
          if (window.confirm(`Você deseja realmente apagar esse Usuario: ${ele.NomeUsuario}`)) {
  
              try {
                  const retorno = await fetch(`${url}/${id}`, {
                      method: 'DELETE'
                  })
  
                  if (retorno.ok) {
                      alert('Usuario foi deletada com sucesso!')
                  } else {
                      alert(`Erro ao deletar série ${retorno.status}`)
                  }
                  
              } catch (error) {
                  console.log(error);
              }
  
          }
      })

        livros.addEventListener("click", function () {
          EditarLivros(ele.id, ele);
        });

        editar.addEventListener("click", () => {
          const id = ele.id;
        
          if (window.confirm("Você deseja atualizar o usuario?")) {
            document.getElementById("title-form").textContent = "Atualizar Usuario";
            document.getElementById("btnCadastrar").textContent = "Atualizar";
          
            document.getElementById("nomeUsuario").value = ele.NomeUsuario;
            document.getElementById("idadeUsuario").value = ele.IdadeUsuario;
            document.getElementById("enderecoUsuario").value = ele.EnderecoUsuario;
            document.getElementById("emialUsuario").value = ele.EmailUsuario;
            document.getElementById("telefoneUsuario").value = ele.TelefoneUsuario;
            

            var botao = document.getElementById("btnCadastrar");
            botao.onclick = null;


            // Adiciona o novo evento de clique
            document.getElementById("btnCadastrar").addEventListener("click", function(e) {
              EditarUser(e, ele.id, url);
              
            });
          }
        });

        //realizar a criação das celulas de cada elemento
        const nomeUsuario = document.createElement("td");
        nomeUsuario.textContent = ele.NomeUsuario;

        const idadeUsuario = document.createElement("td");
        idadeUsuario.textContent = ele.IdadeUsuario;

        const enderecoUsuario = document.createElement("td");
        enderecoUsuario.textContent = ele.EnderecoUsuario;

        const emailUsuario = document.createElement("td");
        emailUsuario.textContent = ele.EmailUsuario;

        const telefoneUsuario = document.createElement("td");
        telefoneUsuario.textContent = ele.TelefoneUsuario;

        tr.appendChild(nomeUsuario);
        tr.appendChild(idadeUsuario);
        tr.appendChild(enderecoUsuario);
        tr.appendChild(emailUsuario);
        tr.appendChild(telefoneUsuario);
        tr.appendChild(div);

        div.appendChild(editar);
        div.appendChild(excluir);
        div.appendChild(livros);

        listaUsuarios.appendChild(tr);
      });
      document.getElementById("campoBusca").addEventListener("input", buscarUsuarios);
    } catch (error) {
      console.log("deu erro " + error);
    }
  }

  getUser();

});

async function EditarUser(e, id, url) {
  //alert(`ola: ${id}`)
  e.preventDefault();

  try {
    const dadosEnviadosAtualizados = {
      "NomeUsuario": document.getElementById("nomeUsuario").value,
      "IdadeUsuario": document.getElementById("idadeUsuario").value,
      "EnderecoUsuario": document.getElementById("enderecoUsuario").value,
      "EmailUsuario": document.getElementById("emialUsuario").value,
      "TelefoneUsuario":document.getElementById("telefoneUsuario").value,
    };
//alert(id);
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
    console.log(error);
  }
}

async function buscarUsuarios() {
  const textoBusca = document.getElementById("campoBusca").value.toLowerCase();

  const usuarios = document.querySelectorAll("#listaUsuarios tr");
  
  usuarios.forEach(usuario => {
    const nomeUsuario = usuario.querySelector("td:first-child").textContent.toLowerCase();
    
    if (nomeUsuario.includes(textoBusca)) {
      usuario.style.display = "table-row";
    } else {
      usuario.style.display = "none";
    }
  });
}


function mostrarMenu() {
  let menu = document.getElementById("icone");
  let mostraMenu = document.getElementById("mostraIcons");

  mostraMenu.style.display =
    mostraMenu.style.display === "none" || mostraMenu.style.display === ""
      ? "flex"
      : "none";

  if (mostraMenu.style.display === "flex") {
    //alert('flex')
    menu.classList.add("bi", "bi-x-circle");
    menu.classList.remove("bi", "bi-card-list");
  } else if (mostraMenu.style.display === "none") {
    //alert('none')
    menu.classList.add("bi", "bi-card-list");
    menu.classList.remove("bi", "bi-x-circle");
  }
}
