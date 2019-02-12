const $second = document.querySelector(".-second");
const $carinho = document.querySelector(".header-store .action.-last");

$second.addEventListener("click", handleClick);

function handleClick () {
  $carinho.textContent = "Clicado";
}
