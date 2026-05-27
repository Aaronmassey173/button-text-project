const btn = document.querySelector("#btn");
const text = document.querySelector("#text");

btn.addEventListener("click", () => {
  text.innerText = "You clicked the button!";
});