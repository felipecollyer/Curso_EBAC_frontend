$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    criarLi();
    riscar();
  });
});

function criarLi() {
  let tarefa = $("#input").val();
  let addTarefa = $("<li></li>");
  $(`<p>${tarefa}<p/>`).appendTo(addTarefa);
  $(addTarefa).appendTo("ul");
  $("#input").val("");
  $("#input").focus();
}

function riscar() {
  $("li").click(function () {
    $(this).addClass("risco");
  });
}
