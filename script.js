document.getElementById("serviceFilter").addEventListener("change", function() {
  const selected = this.value;
  const cards = document.querySelectorAll(".service-card");
  cards.forEach(card => {
    if (selected === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(selected) ? "block" : "none";
    }
  });
});