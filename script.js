const modal = document.querySelector("#age-modal");
const closeModalButtons = [document.querySelector("#modal-close"), document.querySelector("#modal-enter")];
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");

const hideModal = () => {
  modal.classList.add("is-hidden");
  document.body.style.overflow = "";
  window.localStorage.setItem("otaku-after-dark-welcome", "seen");
};

if (window.localStorage.getItem("otaku-after-dark-welcome") === "seen") {
  modal.classList.add("is-hidden");
} else {
  document.body.style.overflow = "hidden";
}

closeModalButtons.forEach((button) => button.addEventListener("click", hideModal));

modal.addEventListener("click", (event) => {
  if (event.target === modal) hideModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("is-hidden")) hideModal();
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(newsletterForm).get("email");
  formMessage.textContent = `You’re on the list — see you after dark, ${email}.`;
  newsletterForm.reset();
});
