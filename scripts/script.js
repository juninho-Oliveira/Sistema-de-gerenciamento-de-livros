

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

        const editar = document.createElement('button');
        const excluir = document.createElement('button');
        const livros = document.createElement('button');

        div.classList.add("botoes");
        editar.classList.add("bi", "bi-pencil-square");
        excluir.classList.add("bi", "bi-trash3");
        livros.classList.add("bi", "bi-book");

        excluir.addEventListener('click', function () {
          deleteSeries(ele.id);
        })

        livros.addEventListener('click', function () {
          EditarLivros(ele.id, ele);
        })

        editar.addEventListener('click', function () {
          EditarUser(ele.id, ele);
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
        div.appendChild(livros);

        listaUsuarios.appendChild(tr);

      });



    } catch (error) {
      console.log("deu erro " + error);
    }
  }

  getUser();
});


function chama(ele) {

  document.getElementById("nomeUsuario").value = ele.NomeUsuario;
  document.getElementById("idadeUsuario").value = ele.IdadeUsuario;
  document.getElementById("enderecoUsuario").value = ele.EnderecoUsuario;
  document.getElementById("emialUsuario").value = ele.EmailUsuario;
  document.getElementById("telefoneUsuario").value = ele.TelefoneUsuario;
}

async function EditarUser(id, ele) {

  chama(ele)

  //alert('pegou!')

  //alert(`id: ${id}, ele: ${ele}`)

  try {
    
   /* document.getElementById("nomeUsuario").value = nome;
    document.getElementById("idadeUsuario").value = idade;
    document.getElementById("enderecoUsuario").value = endereco;
    document.getElementById("emialUsuario").value = email;
    document.getElementById("telefoneUsuario").value = telefone;

    const dadosEnviados = {
      NomeUsuario: nome,
      IdadeUsuario: idade,
      EnderecoUsuario: endereco,
      EmailUsuario: email,
      TelefoneUsuario: telefone,
    };

    if (nomeUsuario === "") {
      alert("Nome obrigatório!");
    } else if (idadeUsuario === "") {
      alert("Idade obrigatório!");
    } else if (enderecoUsuario === "") {
      alert("Endereço obrigatório!");
    } else if (emailUsuario === "") {
      alert("E-mail obrigatório!");
    } else if (telefoneUsuario === "") {
      alert("Telefone obrigatório!");
    } else {

      if (true) {
        await fetch(`http://localhost:3000/Usuarios`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dadosEnviados),
        });
      }
    }*/


  } catch (error) {
    alert('erro ', error)
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

