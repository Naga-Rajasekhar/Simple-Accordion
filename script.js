const headingClick = document.querySelectorAll(".accordion h3");
console.log(headingClick);
headingClick.forEach((element, index) => {
  element.addEventListener("click", () => {
    let paragraph = element.nextElementSibling;
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  });
});
