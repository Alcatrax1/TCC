window.addEventListener("scroll", () => {
    const topBar = document.getElementById("top-bar");
    const letrasTop = document.querySelector(".letras-top");
  
    if (window.scrollY > 50) {
      topBar.classList.add("scroll-background");
      letrasTop.classList.add("scroll-text");
    } else {
      topBar.classList.remove("scroll-background");
      letrasTop.classList.remove("scroll-text");
    }
  });
  