
async function potsUser(nome, idade, endereco, email, telefone) {
  
  const nomeUsuario = nome;
  const idadeUsuario = idade;
  const enderecoUsuario = endereco;
  const emailUsuario = email;
  const telefoneUsuario = telefone;

  //alert(` nome: ${nomeUser}, temporada: ${numTemporada}, estudio: ${nomeEstudio}, ano: ${anoLancamento} `);
    

  try {
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
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dadosEnviados),
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

  const nomeUsuario = document.getElementById("nomeUsuario").value;
  const idadeUsuario = document.getElementById("idadeUsuario").value;
  const enderecoUsuario = document.getElementById("enderecoUsuario").value;
  const emialUsuario = document.getElementById("emialUsuario").value;
  const telefoneUsuario = document.getElementById("telefoneUsuario").value;
  

  potsUser(nomeUsuario, idadeUsuario, enderecoUsuario, emialUsuario, telefoneUsuario);
}

function atualizar() {
  window.location.reload();
}