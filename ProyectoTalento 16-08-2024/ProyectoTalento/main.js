document.getElementById("cerrar_sesion").addEventListener("click", function () {
  Swal.fire({
    title: "gracias por utilizar nuestra pagina espero verte pronto?",
    text: "Estas seguro de salir?",
    icon: "warning",
    width: 580,
    padding: "3em",
    color: "#716add",
    background: "#fff url(https://i.pinimg.com/originals/55/01/60/5501609ee45d514d1f2c4a63502045e2.gif)", // Asegúrate que esta imagen también exista
    backdrop: `
      rgba(0,0,150,0.1)
      url("https://static.wixstatic.com/media/55d1d0_774dd340d53b43fab4182fd4f484fcb0~mv2.gif")
      left top
      no-repeat
    `,
    showCancelButton: true,
    confirmButtonText: "Si salir!",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "index.html"; // Redirige a la página de inicio solo si se confirma
    }
  });
});