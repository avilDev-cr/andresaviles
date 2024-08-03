const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (name === "" || email === "" || message === "") {
    alert("Todos los campos son obligatorios");
  } else {
    alert(`Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);
  }
});
