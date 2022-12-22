const form = document.getElementById("form");
let FormValido = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const n1 = document.getElementById("na");
  const n2 = document.getElementById("nb");

  const n3 = parseInt(n1.value);
  const n4 = parseInt(n2.value);

  FormValido = Valido(n3, n4);

  if (FormValido) {
    const containerMensagemSucesso = document.querySelector(".sucess-message");
    containerMensagemSucesso.style.display = "block";
    document.querySelector(".error-message").style.display = "none";
    document.getElementById("na").value = "";
    document.getElementById("nb").value = "";
    n1.style.border = "1px solid green";
    n2.style.border = "1px solid green";
  } else {
    n2.style.border = "1px solid red";
    document.querySelector(".error-message").style.display = "block";
    const containerMensagemSucesso = document.querySelector(".sucess-message");
    containerMensagemSucesso.style.display = "none";
  }
});

function Valido(la, lb) {
  if (la > lb) {
    return false;
  }
  if (la < lb) {
    return true;
  }
}
