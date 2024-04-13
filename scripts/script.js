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

        excluir.addEventListener("click", function () {
          deleteSeries(ele.id);
        });

        livros.addEventListener("click", function () {
          EditarLivros(ele.id, ele);
        });

        editar.addEventListener("click", () => {
          const id = ele.id;
          //alert(id);

          document.getElementById("title-form").textContent = "Atualizar Série";
          document.getElementById("btnCadastrar").textContent = "Atualizar";

          document.getElementById("nomeUsuario").value = ele.NomeUsuario;
          document.getElementById("idadeUsuario").value = ele.IdadeUsuario;
          document.getElementById("enderecoUsuario").value = ele.EnderecoUsuario;
          document.getElementById("emialUsuario").value = ele.EmailUsuario;
          document.getElementById("telefoneUsuario").value = ele.TelefoneUsuario;

          if (window.confirm("Você deseja atualizar a série?")) {
            document.getElementById("btnCadastrar").removeEventListener("click");

            document.getElementById("btnCadastrar").addEventListener("click", EditarUser(e));

            async function EditarUser(e) {
              alert(id)
              e.preventDefault()

              alert(id);

              try {
                const dadosEnviadosAtualizados = {
                  "NomeUsuario": document.getElementById("nomeUsuario").value,
                  "IdadeUsuario": document.getElementById("idadeUsuario").value,
                  "EnderecoUsuario": document.getElementById("enderecoUsuario").value,
                  "EmailUsuario": document.getElementById("emialUsuario").value,
                  "TelefoneUsuario":document.getElementById("telefoneUsuario").value,
                };

                const retorno = await fetch(`http://localhost:3000/Usuarios/${id}`,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dadosEnviadosAtualizados),
                  }
                );
                if (retorno.ok) {
                  alert("Série atualizada com sucesso!");
                } else {
                  alert(`A série não pode ser atualizada ${retorno.status}`);
                }
                //window.location.reload();
              } catch (error) {
                console.log(error);
              }
            }
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
    } catch (error) {
      console.log("deu erro " + error);
    }
  }

  getUser();
});

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
