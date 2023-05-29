const preguntas = [
  {
    tipo: 'amenaza',
    enunciado: 'Epidemia',
    opciones: ['Natural', 'Causada por el hombre']
  },
  {
    tipo: 'amenaza',
    enunciado: 'Terremotos, Sismos',
    opciones: ['Natural']
  },
  {
    tipo: 'amenaza',
    enunciado: 'Alteración de registros',
    opciones: ['Causada por el hombre']
  },
  {
    tipo: 'vulnerabilidad',
    enunciado: 'Desconocimiento de controles implementados',
    opciones: ['Personas']
  },
  {
    tipo: 'amenaza',
    enunciado: 'Incendio',
    opciones: ['Natural', 'Causada por el hombre']
  },
  {
    tipo: 'vulnerabilidad',
    enunciado: 'Falta de monitoreo en los límites de producción y stock',
    opciones: ['Tecnología', 'Personas']
  },
  {
    tipo: 'amenaza',
    enunciado: 'Destrucción de activos de información',
    opciones: ['Causada por el hombre']
  },
  {
    tipo: 'vulnerabilidad',
    enunciado: 'Diseño inadecuado del proceso de reclutamiento de personal',
    opciones: ['Personas', 'Proceso']
  },
  {
    tipo: 'amenaza',
    enunciado: 'Inundación',
    opciones: ['Natural', 'Causada por el hombre']
  },
  {
    tipo: 'vulnerabilidad',
    enunciado: 'Fraude interno',
    opciones: ['Personas', 'Proceso']
  },
  {
    tipo: 'vulnerabilidad',
    enunciado: 'Empleado sin ética',
    opciones: ['Personas']
  },
  {
    tipo: 'amenaza',
    enunciado: 'Deslizamientos',
    opciones: ['Natural']
  },
  {
    tipo: 'vulnerabilidad',
    enunciado: 'Obsolescencia de servidores',
    opciones: ['Tecnología']
  },
  {
    tipo: 'vulnerabilidad',
    enunciado: 'Infraestructura con cañerías de agua y cableado eléctrico sin separación en entretecho',
    opciones: ['Infraestructura']
  },
  {
    tipo: 'amenaza',
    enunciado: 'Lluvias torrenciales y granizos',
    opciones: ['Natural']
  },
  {
    tipo: 'vulnerabilidad',
    enunciado: 'Incumplimiento de políticas de seguridad de información',
    opciones: ['Procesos', 'Personas']
  },
  {
    tipo: 'amenaza',
    enunciado: 'Falsificación de documentos',
    opciones: ['Causada por el hombre']
  }
];

function mostrarPreguntas() {
  const preguntasDiv = document.getElementById('preguntas');
  preguntasDiv.innerHTML = '';

  preguntas.forEach((pregunta, indice) => {
    const preguntaDiv = document.createElement('div');
    preguntaDiv.id = 'pregunta_' + indice;

    const enunciado = document.createElement('p');
    enunciado.textContent = pregunta.enunciado;
    preguntaDiv.appendChild(enunciado);

    const tipoSelect = document.createElement('select');
    tipoSelect.id = 'tipo_' + indice;
    tipoSelect.name = 'tipo';
    tipoSelect.addEventListener('change', () => mostrarOpciones(indice));

    const option1 = document.createElement('option');
    option1.value = 'amenaza';
    option1.text = 'Amenaza';
    tipoSelect.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = 'vulnerabilidad';
    option2.text = 'Vulnerabilidad';
    tipoSelect.appendChild(option2);

    preguntaDiv.appendChild(tipoSelect);

    const opcionesDiv = document.createElement('div');
    opcionesDiv.id = 'opciones_' + indice;
    preguntaDiv.appendChild(opcionesDiv);

    preguntasDiv.appendChild(preguntaDiv);
  });
}

function mostrarOpciones(indice) {
  const tipoSelect = document.getElementById('tipo_' + indice);
  const opcionesDiv = document.getElementById('opciones_' + indice);
  opcionesDiv.innerHTML = '';

  const tipo = tipoSelect.value;

  if (tipo === 'amenaza') {
    const preguntaSelect = document.createElement('select');
    preguntaSelect.name = 'pregunta';
    preguntaSelect.id = 'pregunta_' + indice;

    const option1 = document.createElement('option');
    option1.value = 'Natural';
    option1.text = 'Natural';
    preguntaSelect.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = 'Causada por el hombre';
    option2.text = 'Causada por el hombre';
    preguntaSelect.appendChild(option2);

    opcionesDiv.appendChild(preguntaSelect);
  } else if (tipo === 'vulnerabilidad') {
    const preguntaSelect = document.createElement('select');
    preguntaSelect.name = 'pregunta';
    preguntaSelect.id = 'pregunta_' + indice;

    const option1 = document.createElement('option');
    option1.value = 'Personas';
    option1.text = 'Personas';
    preguntaSelect.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = 'Tecnología';
    option2.text = 'Tecnología';
    preguntaSelect.appendChild(option2);

    const option3 = document.createElement('option');
    option3.value = 'Proceso';
    option3.text = 'Proceso';
    preguntaSelect.appendChild(option3);

    const option4 = document.createElement('option');
    option4.value = 'Infraestructura';
    option4.text = 'Infraestructura';
    preguntaSelect.appendChild(option4);

    opcionesDiv.appendChild(preguntaSelect);
  }
}

function calcularScore() {
  const respuestas = Array.from(document.getElementsByName('pregunta'));
  let score = 0;

  respuestas.forEach(respuesta => {
    if (respuesta.checked) {
      const indice = respuesta.parentElement.parentElement.id.split('_')[1];
      const tipoSelect = document.getElementById('tipo_' + indice);
      const tipo = tipoSelect.value;

      const pregunta = preguntas[indice];
      if (tipo === pregunta.tipo && respuesta.value === pregunta.opciones[0]) {
        score++;
      }
    } else if (respuesta.value === 'Natural' || respuesta.value === 'Causada por el hombre') {
      const indice = respuesta.parentElement.parentElement.id.split('_')[1];
      const tipoSelect = document.getElementById('tipo_' + indice);
      const tipo = tipoSelect.value;

      const pregunta = preguntas[indice];
      if (tipo === pregunta.tipo && respuesta.value === pregunta.opciones[0]) {
        score++;
      }
    } else if (respuesta.value === 'Personas' || respuesta.value === 'Tecnología' || respuesta.value === 'Proceso' || respuesta.value === 'Infraestructura') {
      const indice = respuesta.parentElement.parentElement.id.split('_')[1];
      const tipoSelect = document.getElementById('tipo_' + indice);
      const tipo = tipoSelect.value;

      const pregunta = preguntas[indice];
      if (tipo === pregunta.tipo && pregunta.opciones.includes(respuesta.value)) {
        score++;
      }
    }
  });

  preguntas.forEach((pregunta, indice) => {
    const preguntaDiv = document.getElementById('pregunta_' + indice);
    const respuestaUsuario = respuestas[indice].value;

    if (respuestaUsuario === pregunta.opciones[0]) {
      preguntaDiv.style.color = 'green'; // Respuesta correcta en verde
    } else {
      preguntaDiv.style.color = 'red'; // Respuesta incorrecta en rojo

      // Mostrar respuesta correcta
      const respuestaCorrecta = pregunta.opciones[0];
      const respuestaCorrectaP = document.createElement('p');
      respuestaCorrectaP.style.color = 'green';
      respuestaCorrectaP.textContent = 'Respuesta correcta: ' + respuestaCorrecta;
      preguntaDiv.appendChild(respuestaCorrectaP);
    }
  });

  const scoreDiv = document.getElementById('score');
  scoreDiv.textContent = 'Score: ' + score;
}

function nextStep(step) {
  // Ocultar todos los pasos
  var steps = document.getElementsByClassName("form-step");
  for (var i = 0; i < steps.length; i++) {
    steps[i].classList.remove("active");
  }

  // Mostrar el paso siguiente
  document.getElementById("step" + step).classList.add("active");
}

function prevStep(step) {
  // Similar a nextStep, pero para ir hacia atrás
  var steps = document.getElementsByClassName("form-step");
  for (var i = 0; i < steps.length; i++) {
    steps[i].classList.remove("active");
  }

  document.getElementById("step" + step).classList.add("active");
}

function clasificar() {
  // recogiendo los valores de las respuestas a las preguntas
  var impactoEconomico = document.querySelector('input[name="impactoEconomico"]:checked').value;
  var serviciosCriticos = document.querySelector('input[name="serviciosCriticos"]:checked').value;
  var tecnicos = document.querySelector('input[name="tecnicos"]:checked').value;
  var reputacion = document.querySelector('input[name="reputacion"]:checked').value;
  var seguridad = document.querySelector('input[name="seguridad"]:checked').value;
  var leyes = document.querySelector('input[name="leyes"]:checked').value;
  var sanciones = document.querySelector('input[name="sanciones"]:checked').value;

  var perdidas = document.querySelector('input[name="perdidas"]:checked').value;
  var exponerServicios = document.querySelector('input[name="exponerServicios"]:checked').value;
  var personales = document.querySelector('input[name="personales"]:checked').value;
  var estrategias = document.querySelector('input[name="estrategias"]:checked').value;
  var competidores = document.querySelector('input[name="competidores"]:checked').value;
  var valor = document.querySelector('input[name="valor"]:checked').value;
  var empleados = document.querySelector('input[name="empleados"]:checked').value;

  var general = document.querySelector('input[name="general"]:checked').value;
  var imagen = document.querySelector('input[name="imagen"]:checked').value;

  var resultado = "";

  // Lógica de clasificación. Esto es solo un ejemplo simple y debe modificarse para adaptarse a tus necesidades específicas.
  if (impactoEconomico === "si" || serviciosCriticos === "si" || tecnicos === "si" || reputacion === "si" || seguridad === "si" || leyes === "si" || sanciones === "si") {
    resultado = "CONFIDENCIAL O CRÍTICO";
  } else if (perdidas === "si" || exponerServicios === "si" || personales === "si" || estrategias === "si" || competidores === "si" || valor === "si" || empleados === "si") {
    resultado = "USO INTERNO O PRIVADO";
  } else if (general === "si" || imagen === "si") {
    resultado = "USO PÚBLICO O GENERAL";
  } else {
    resultado = "La información no se pudo clasificar.";
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}



mostrarPreguntas();