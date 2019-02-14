const $heart = window.document.querySelector(".-heart");
const $classification = document.querySelectorAll(".classification");
console.log($classification);

$classification.forEach(star => {
  console.log(star);
});

$heart.addEventListener("click", handleClick);

$classification.forEach(star => {
  star.addEventListener("click", () => {
    if (star.src == "http://127.0.0.1:5500/img/star-active.png"){
       star.src = "img/star.png";
    } else {
      star.src = "img/star-active.png";
    }
  });
});

function handleClick(){
  $heart.classList.toggle("-active");
}