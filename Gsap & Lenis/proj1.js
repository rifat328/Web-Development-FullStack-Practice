//document.getElementsByTagName("h1")[0].innerHTML = "Bangladesh";
window.addEventListener("scroll", () => {
  const line = document.querySelector(".line");
  const scrollPos = window.scrollY;
  line.style.transform = `translateY(${scrollPos}px)`;
});
