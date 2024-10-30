const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
//faq fonctions
function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  answer.classList.toggle("hidden");
}
//demander demo alert
function demanderDemo() {
  alert("Merci pour votre demande de démo ! Nous vous contacterons sous peu.");
}
