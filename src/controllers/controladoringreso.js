let name1 = sessionStorage.getItem("nombre");
console.log(name1);

let nombreId = document.getElementById('nombremenu');

// modifico el contenido de una etiqueta

nombreId.textContent = "Bienvenid@ "+name1;