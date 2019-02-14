const $heart = window.document.querySelector(".-heart");
const $classification = document.querySelectorAll(".classification");

$heart.addEventListener("click", handleClick);

$classification.forEach((star, index) => {
  star.addEventListener("click", () => {
    for(let i = 0; i <= index ; i++){
      $classification[i].src = "img/star-active.png";
    }
    for(let i = index +1; i < 5 ; i++){
      $classification[i].src = "img/star.png";
    }
  });
});

function handleClick(){
  $heart.classList.toggle("-active");
}