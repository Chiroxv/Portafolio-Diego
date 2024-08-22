document.getElementById("ContactoT").addEventListener("click", function() {
    var Contacto = document.getElementById("Contacto");
    if(Contacto.style.display === "none" || Contacto.style.display === "") {
        Contacto.style.display = "block";
        Contacto.scrollIntoView({ behavior: "smooth" });
    } else{
        Contacto.style.display = "none";
    }
    this.classList.toggle("expanded");
});