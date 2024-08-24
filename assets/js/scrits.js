let tareas = [];

        function agregarTarea() {
            const descripcion = document.getElementById("nuevaTarea").value;
            if (descripcion.trim() !== "") {
                tareas.push({ id: tareas.length + 1, descripcion, completada: false });
                document.getElementById("nuevaTarea").value = ""; // Limpiar input
                actualizarListaTareas();
            }
        }

        function eliminarTarea(id) {
            tareas = tareas.filter(tarea => tarea.id !== id);
            actualizarListaTareas();
        }

        function marcarCompletada(id) {
            const index = tareas.findIndex(tarea => tarea.id === id);
            if (index !== -1) {
                tareas[index].completada = !tareas[index].completada;
                actualizarListaTareas();
            }
        }

        function actualizarListaTareas() {
            const listaTareas = document.getElementById("listaTareas");
            listaTareas.innerHTML = ""; // Limpiar la lista

            tareas.forEach(tarea => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${tarea.id}</td>
                    <td class="${tarea.completada ? 'completada' : ''}">
                        ${tarea.descripcion}
                    </td>
                    <td>
                        <input type="checkbox" class="checkbox" 
                        onclick="marcarCompletada(${tarea.id})" ${tarea.completada ? 'checked' : ''}>
                    </td>
                    <td>
                        <button class="delete-btn" onclick="eliminarTarea(${tarea.id})">✖</button>
                    </td>
                `;
                listaTareas.appendChild(fila);
            });

            // Actualizar contadores
            document.getElementById("contadorTareas").innerText = tareas.length;
            document.getElementById("contadorCompletadas").innerText = tareas.filter(tarea => tarea.completada).length;
        }