const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const nombre = document.getElementById("nombre").value;
   const apellido = document.getElementById("apellido").value;
   const direccion = document.getElementById("direccion").value;
   const telefono = document.getElementById("telefono").value;
   const email = document.getElementById("email").value;

   // Regexp
   var regName = /^[a-zA-Z ]+$/;
   var regDireccion = /^[a-zA-Z0-9\s,'-]*$/;
   var regTelefono = /^[0-9]+$/;
   var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

   if (
      nombre === "" ||
      apellido === "" ||
      direccion === "" ||
      telefono === "" ||
      email === ""
   ) {
      Swal.fire({
         title: "Cuidado !",
         text: "Tenes que completar todos los campos",
         icon: "warning",
         confirmButtonText: "Reintentar",
      });
   } else if (nombre.length > 10) {
      Swal.fire({
         title: "Cuidado !",
         text: "El nombre no puede tener mas de 10 caracteres",
         icon: "warning",
         confirmButtonText: "Reintentar",
      });
   } else if (apellido.length > 10) {
      Swal.fire({
         title: "Cuidado !",
         text: "El apellido no puede tener mas de 10 caracteres",
         icon: "warning",
         confirmButtonText: "Reintentar",
      });
   } else if (apellido.length < 3 || nombre.length < 3) {
      Swal.fire({
         title: "Cuidado !",
         text: "El nombre y el apellido tienen que tener mas de 3 caracteres",
         icon: "warning",
         confirmButtonText: "Reintentar",
      });
   } else if (!regName.test(nombre) || !regName.test(apellido)) {
      Swal.fire({
         title: "Cuidado !",
         text: "El nombre y el apellido tienen que ser alfabeticos",
         icon: "warning",
         confirmButtonText: "Reintentar",
      });
   } else if (!regTelefono.test(telefono)) {
      Swal.fire({
         title: "Cuidado !",
         text: "El telefono tiene que ser numerico",
         icon: "warning",
         confirmButtonText: "Reintentar",
      });
   } else if (!regDireccion.test(direccion)) {
      Swal.fire({
         title: "Cuidado !",
         text: "La direccion tiene que ser alfanumerica",
         icon: "warning",
         confirmButtonText: "Reintentar",
      });
   } else if (!regEmail.test(email)) {
      Swal.fire({
         title: "Cuidado !",
         text: "El email tiene que ser valido",
         icon: "warning",
         confirmButtonText: "Reintentar",
      });
   } else {
      Swal.fire({
         title: "Datos enviados !",
         icon: "succes",
         confirmButtonText: "Okay",
      });
   }
   nombre = "";
   apellido = "";
   direccion = "";
   telefono = "";
   email = "";
});
