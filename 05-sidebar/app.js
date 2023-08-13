const togglebtn = document.querySelector(".sidebar-toggle");
const closebtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

togglebtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closebtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
