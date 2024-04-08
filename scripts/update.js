function EditarSeries(id, livros) {

  //alert(`ola estou aqui ${}` );
  const ids = id;
  const nomeUser = livros;
  localStorage.setItem('meu id', ids)
  localStorage.setItem('meu nome', nomeUser.NomeUsuario)

  window.location.href = "../usuario/usuario.html"
}