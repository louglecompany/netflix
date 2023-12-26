const gap = 16;

// Obtenha referências para os carrosséis e conteúdo
const carousel1 = document.getElementById("carousel1");
const carousel2 = document.getElementById("carousel2");
const carousel3 = document.getElementById("carousel3");
const carousel4 = document.getElementById("carousel4");
const carousel5 = document.getElementById("carousel5");

// Obtenha referências para o conteúdo dos carrosséis
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");
const content5 = document.getElementById("content5");

let isDragging = false;
let startX;
let scrollLeft;

function handleMouseDown(e, carousel) {
  isDragging = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
}

function handleMouseLeave() {
  isDragging = false;
}

function handleMouseUp() {
  isDragging = false;
}

function handleMouseMove(e, carousel) {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5; // Ajuste o valor conforme necessário para a sensibilidade
  carousel.scrollLeft = scrollLeft - walk;
}

// Adicione os ouvintes de eventos para cada carrossel
carousel1.addEventListener("mousedown", e => handleMouseDown(e, carousel1));
carousel1.addEventListener("mouseleave", handleMouseLeave);
carousel1.addEventListener("mouseup", handleMouseUp);
carousel1.addEventListener("mousemove", e => handleMouseMove(e, carousel1));

// Adicione os ouvintes de eventos para cada carrossel
carousel2.addEventListener("mousedown", e => handleMouseDown(e, carousel2));
carousel2.addEventListener("mouseleave", handleMouseLeave);
carousel2.addEventListener("mouseup", handleMouseUp);
carousel2.addEventListener("mousemove", e => handleMouseMove(e, carousel2));

// Adicione os ouvintes de eventos para cada carrossel
carousel3.addEventListener("mousedown", e => handleMouseDown(e, carousel3));
carousel3.addEventListener("mouseleave", handleMouseLeave);
carousel3.addEventListener("mouseup", handleMouseUp);
carousel3.addEventListener("mousemove", e => handleMouseMove(e, carousel3));

// Adicione os ouvintes de eventos para cada carrossel
carousel4.addEventListener("mousedown", e => handleMouseDown(e, carousel4));
carousel4.addEventListener("mouseleave", handleMouseLeave);
carousel4.addEventListener("mouseup", handleMouseUp);
carousel4.addEventListener("mousemove", e => handleMouseMove(e, carousel4));

// Adicione os ouvintes de eventos para cada carrossel
carousel5.addEventListener("mousedown", e => handleMouseDown(e, carousel5));
carousel5.addEventListener("mouseleave", handleMouseLeave);
carousel5.addEventListener("mouseup", handleMouseUp);
carousel5.addEventListener("mousemove", e => handleMouseMove(e, carousel5));
// Repita o mesmo processo para os demais carrosséis
// ...

let width1 = carousel1.offsetWidth;
let width2 = carousel2.offsetWidth;
let width3 = carousel3.offsetWidth;
let width4 = carousel4.offsetWidth;
let width5 = carousel5.offsetWidth;

window.addEventListener("resize", () => {
  width1 = carousel1.offsetWidth;
  width2 = carousel2.offsetWidth;
  width3 = carousel3.offsetWidth;
  width4 = carousel4.offsetWidth;
  width5 = carousel5.offsetWidth;
});
