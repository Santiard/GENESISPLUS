// frontend/scripts/descuentos.js

window.onload = function() {
    // Realizamos una solicitud GET al servidor para obtener los descuentos
    fetch('http://localhost:3000/descuentos') // Asegúrate de usar la URL correcta según la ruta de tu servidor
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          // Si no hay descuentos, mostramos el mensaje
          document.getElementById('no-discounts-message').style.display = 'block';
        } else {
          // Si hay descuentos, ocultamos el mensaje
          document.getElementById('no-discounts-message').style.display = 'none';
          // Llenamos la tabla con los descuentos
          const tableBody = document.getElementById('discounts-table').getElementsByTagName('tbody')[0];
          data.forEach(descuento => {
            const row = tableBody.insertRow();
            row.innerHTML = `
              <td>${descuento.tipo_descuento}</td>
              <td>${descuento.semestre}</td>
              <td>${descuento.document}</td>
              <td><span class="status ${descuento.estado.toLowerCase()}">${descuento.estado}</span></td>
            `;
          });
        }
      })
      .catch(error => {
        console.error('Error al obtener los descuentos:', error);
        // Si ocurre un error, mostrar un mensaje
        document.getElementById('no-discounts-message').textContent = 'Hubo un error al cargar los descuentos.';
        document.getElementById('no-discounts-message').style.display = 'block';
      });
  }