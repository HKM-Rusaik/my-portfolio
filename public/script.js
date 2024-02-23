const textContainer = document.getElementById("textContainer");
  const words = Array.from(textContainer.children);

  function revealWords(index) {
    if (index < words.length) {
      words[index].classList.remove("hidden");
      setTimeout(() => revealWords(index + 1), 500); 
    }
  }

  revealWords(0);