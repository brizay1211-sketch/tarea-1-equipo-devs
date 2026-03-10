// Importar las clases necesarias
import { Cl_persona } from './clases/Cl_persona.js';
import { Cl_oficina } from './clases/Cl_oficina.js';
// Función para agregar texto al HTML
function mostrarEnHTML(mensaje) {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.innerHTML += mensaje + '<br>';
    }
    console.log(mensaje); // Mantenemos la consola por si acaso
}
// Función para actualizar el total de personas (si queremos mostrarlo aparte)
function mostrarTotales(oficina) {
    const personasSpan = document.getElementById('totalPersonas');
    const mayoresSpan = document.getElementById('totalMayores');
    const porcentajeSpan = document.getElementById('porcentaje');
    if (personasSpan) {
        personasSpan.textContent = oficina.getTotalPersonas().toString();
    }
    if (mayoresSpan) {
        mayoresSpan.textContent = oficina.getTotalMayores().toString();
    }
    if (porcentajeSpan) {
        porcentajeSpan.textContent = oficina.getPorcentajeMayores() + '%';
    }
    const menoresSpan = document.getElementById('totalMenores');
    if (menoresSpan) {
        menoresSpan.textContent = oficina.getTotalMenores().toString();
    }
}
// Crear instancias de personas (según el enunciado)
const personas = [
    new Cl_persona("Luis", 15),
    new Cl_persona("Ana", 19),
    new Cl_persona("José", 21),
    new Cl_persona("Carmen", 17),
    new Cl_persona("Rosa", 18),
    new Cl_persona("José", 22),
    new Cl_persona("María", 17),
    new Cl_persona("Luz", 19),
    new Cl_persona("Rafael", 23),
    new Cl_persona("Liz", 15),
    new Cl_persona("Marcos", 20),
    new Cl_persona("Leo", 16)
];
// Crear la oficina
const oficina = new Cl_oficina();
// Limpiar el output antes de empezar
const outputDiv = document.getElementById('output');
if (outputDiv)
    outputDiv.innerHTML = '';
// Procesar cada persona
mostrarEnHTML("📋 Personas procesadas:");
for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    oficina.procesarPersona(persona);
    mostrarEnHTML(`${persona.getNombre()} (${persona.getEdad()} años) - ${persona.getEdad() >= 18 ? 'Mayor' : 'Menor'} de edad`);
}
// Mostrar resultados finales
mostrarEnHTML("\n" + "=".repeat(40));
mostrarEnHTML(`Total personas: ${oficina.getTotalPersonas()}`);
mostrarEnHTML(`Mayores de edad: ${oficina.getTotalMayores()}`);
mostrarEnHTML(`Porcentaje: ${oficina.getPorcentajeMayores()}%`);
mostrarEnHTML("=".repeat(40));
// Actualizar los contadores especiales
mostrarTotales(oficina);
