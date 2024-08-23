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
            listaTareas.innerHTML = ""; // Limpiar lista

            tareas.forEach(tarea => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <span class="${tarea.completada ? 'completada' : ''}">
                        ${tarea.descripcion}
                    </span>
                    <button onclick="marcarCompletada(${tarea.id})">
                        ${tarea.completada ? 'Desmarcar' : 'Completar'}
                    </button>
                    <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
                `;
                listaTareas.appendChild(li);
            });

            // Actualizar contadores
            document.getElementById("contadorTareas").innerText = tareas.length;
            document.getElementById("contadorCompletadas").innerText = tareas.filter(tarea => tarea.completada).length;
        }