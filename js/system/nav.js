const toglebutton = document.querySelector(".nav-hamburger");
  const toglebuttonicon = document.querySelector(".nav-hamburger i");
  const navigasidropdown = document.querySelector(".nav-dropdown");

  toglebutton.onclick = function() {
   navigasidropdown.classList.toggle("open");
   const isOpen = navigasidropdown.classList.contains("open");

   toglebuttonicon.classList = isOpen ?
    "fa-solid fa-xmark" :
    "fa-solid fa-bars";
  };
