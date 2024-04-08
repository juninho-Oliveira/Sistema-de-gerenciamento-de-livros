async function deleteSeries(id) {
  try {
    if (true) {
      await fetch(`https://jsonserve-sistema-de-livros.onrender.com/Usuario/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    }

    const seriesToDelete = document.getElementById(`series-${id}`);
    if (seriesToDelete) {
      seriesToDelete.remove();
    }
  } catch (error) {
    console.error("Erro ao deletar série: ", error);
  }
}
