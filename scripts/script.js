//realizar o consumo da api

//get

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const url = "https://jsonserve-sistema-de-livros.onrender.com/Usuario";

  async function getSeries() {
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

        const editar = document.createElement('button');
        const excluir = document.createElement('button');

        div.classList.add("botoes");
        editar.classList.add("bi", "bi-pencil-square");
        excluir.classList.add("bi", "bi-trash3");

        excluir.addEventListener('click', function() {
          deleteSeries(ele.id);
        })

        editar.addEventListener('click', function() {
         EditarSeries(ele.id, ele);
        })

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

        listaUsuarios.appendChild(tr);
        
      });
  
    } catch (error) {
      console.log("deu erro " + error);
    }
  }

  getSeries();
});
