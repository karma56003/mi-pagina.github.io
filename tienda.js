document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-prenda");
    const listaPendientes = document.getElementById("prendas-pendientes");
    const listaTerminadas = document.getElementById("prendas-listas");
  
    const prendasPendientes = [];
    const prendasTerminadas = [];
  
    // Función para agregar una nueva prenda
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nombrePrenda = document.getElementById("nombre-prenda").value;
      const fecha = document.getElementById("fecha").value;
      const dueno = document.getElementById("dueno").value;
      const telefono = document.getElementById("telefono").value;
  
      prendasPendientes.push({ nombrePrenda, fecha, dueno, telefono });
      actualizarListaPendientes();
  
      form.reset();
    });
  
    // Función para actualizar la lista de pendientes
    function actualizarListaPendientes() {
      listaPendientes.innerHTML = "";
  
      // Ordenar prendas por fecha más próxima
      prendasPendientes.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  
      prendasPendientes.forEach((prenda, index) => {
        const item = document.createElement("li");
        item.innerHTML = `
          <span><strong>Prenda:</strong> ${prenda.nombrePrenda}</span>
          <span><strong>Fecha de Entrega:</strong> ${prenda.fecha}</span>
          <span><strong>Dueño:</strong> ${prenda.dueno}</span>
          <span><strong>Teléfono:</strong> ${prenda.telefono}</span>
          <button class="terminar" onclick="marcarTerminada(${index})">Terminar</button>
        `;
        listaPendientes.appendChild(item);
      });
    }
  
    // Función para mover una prenda a la lista de terminadas
    window.marcarTerminada = (index) => {
      const prenda = prendasPendientes.splice(index, 1)[0];
      prendasTerminadas.push(prenda);
      actualizarListaPendientes();
      actualizarListaTerminadas();
    };
  
    // Función para actualizar la lista de terminadas
    function actualizarListaTerminadas() {
      listaTerminadas.innerHTML = "";
  
      prendasTerminadas.forEach((prenda) => {
        const item = document.createElement("li");
        item.innerHTML = `
          <span><strong>Prenda:</strong> ${prenda.nombrePrenda}</span>
          <span><strong>Fecha de Entrega:</strong> ${prenda.fecha}</span>
          <span><strong>Dueño:</strong> ${prenda.dueno}</span>
          <span><strong>Teléfono:</strong> ${prenda.telefono}</span>
        `;
        listaTerminadas.appendChild(item);
      });
    }
  });