

function editarLivros (id, ele) {

    //alert('pegou!')

  //alert(`id: ${id}, ele: ${ele}`)

  try {

    document.getElementById("nomeUsuario").value = ele.NomeUsuario;
    document.getElementById("idadeUsuario").value = ele.IdadeUsuario;
    document.getElementById("enderecoUsuario").value = ele.EnderecoUsuario;
    document.getElementById("emialUsuario").value = ele.EmailUsuario;
    document.getElementById("telefoneUsuario").value = ele.TelefoneUsuario;


  } catch (error) {
    alert('erro ', error)
  }

}