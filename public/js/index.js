function listar() {
  axios.get("/usuarios/listar")
    .then(function (resposta) {
      console.log("Resposta completa:", resposta);
      const usuarios = resposta.data
      listaUsuarios.innerHTML = "";

      for (i = 0; i < usuarios.length; i++) {
        listaUsuarios.innerHTML += `${usuarios[i].nome}<br>`;
      };
      console.log("Dados recebidos: ", usuarios);
    })
    .catch(function (erro) {
      console.error(erro);
    })
    .finally(function () {
      console.log("Requisição encerrada");
    });
}


// function listar() {
//     fetch("/usuarios/listar", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         },
//     }).then(function(resposta) {
//         resposta.json().then(json => {
//             console.log(json);
//             for (i = 0; i < json.length; i++) {
//             listaUsuarios.innerHTML += `${json[i].nomeUsuario}<br>`;
//     }
//         });

//     }).catch(function (erro) {
//         console.log(erro);
//     })
//     return false;

// }
