// Get modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close");

// Add event listeners to all images with class "enlarge"
document.querySelectorAll(".enlarge").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src; // Set the modal image to the clicked image
  });
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when the user clicks outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
