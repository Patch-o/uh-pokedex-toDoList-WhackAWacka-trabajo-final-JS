window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const list = document.querySelector(".task-list");
  const noTask = document.querySelector(".nada");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Tu 'quehacer' es nada que hacer?? que mala la vagancia..");
      return noTask;
    }

    const lista = document.createElement("div");
    lista.classList.add("lista");
    const tarea = document.createElement("div");
    tarea.classList.add("tarea");
    const contenido = document.createElement("input");
    contenido.classList.add("text");
    contenido.type = "text";
    contenido.setAttribute("readonly", "readonly");
    tarea.appendChild(contenido);    
    contenido.value = task;
    lista.appendChild(tarea);
    const acciones = document.createElement("div");
    acciones.classList.add("accion");
    const editar$$ = document.createElement("button");
    editar$$.classList.add("editar");
    editar$$.innerHTML = "EDITAR";
    const borrar$$ = document.createElement("button");
    borrar$$.innerHTML = "BORRAR";
    borrar$$.classList.add("borrar");
    acciones.appendChild(editar$$);
    acciones.appendChild(borrar$$);
    lista.appendChild(acciones);
    input.value = "";

    editar$$.addEventListener("click", () => {
      if (editar$$.innerText.toLowerCase() == "editar") {
        contenido.removeAttribute("readonly");
        contenido.focus();
        editar$$.innerText = "Guardar";
      } else {
        contenido.setAttribute("readonly", "readonly");
        editar$$.innerText = "EDITAR";
      }
    });
    borrar$$.addEventListener("click", () => {
      list.removeChild(lista);
    });

    
    list.appendChild(lista);
   
    if (tarea) {
      const na = (noTask.style.display = "none");
      return na;
    }
  });
});
