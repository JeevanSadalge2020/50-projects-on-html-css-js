const cards = Array.from(document.querySelectorAll(".card"));

cards.forEach(card => {
  card.addEventListener("click", expandCard);
});

function expandCard() {
  cards.forEach(card => {
    if (card !== this) {
      card.className = "card";
    } else card.className = "card active";
  });
}
