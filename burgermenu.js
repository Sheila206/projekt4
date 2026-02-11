/* Denne kode er lavet med hjælp fra W3Schools.dk*/
/* Åbner og lukker menuen når man klikker på burgeren */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/* Lukker menuen hvis man klikker udenfor */
window.onclick = function(event) {
  if (!event.target.matches('.burger') && !event.target.matches('.burger div')) {
    let dropdowns = document.getElementsByClassName("menu");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}