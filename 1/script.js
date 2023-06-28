function changeBackgroundColor() {
  var select = document.getElementById("colorSelect");
  var color = select.value;

  document.body.style.backgroundColor = color;
}